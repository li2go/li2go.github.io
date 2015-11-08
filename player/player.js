var myplayer = {};
myplayer.pl = null;
myplayer.loopstyle = "random";
myplayer.container = null;
myplayer.playnow = null;
myplayer.playingid = 0;
myplayer.list = null; //many object in arrary
myplayer.listplay = function(event) {
	var urlstr;
	//判断是bind事件调用的，还是传url方式
	(typeof(event) === "object") ? urlstr = $(event.currentTarget).attr("url"): urlstr = event;
	//
	var audioplayer = $(".audioplayer"); //用以查询是否存在audio tag.
	//定义函数 添加新的播放器
	//目前通过该方式 来改变播放的曲目
	//因为发现修改src的方式并不能起作用，这算是曲线救国。
	var $nowtag = $(".list.ol").find('li[url=' + "'" + urlstr + "'" + ']'); //当前播放在list的标签。
	function addnewaudioplayer(newurl) {
			var div = $(".myplayer"),
				el_audio = document.createElement("audio"),
				$audio = $(el_audio);
			$audio.attr("class", "audioplayer");
			//$audio.attr("controls", true);
			$audio.attr("src", newurl);
			$audio.attr("autoplay", "");
			$audio.attr("preload", true);
			div.append($audio);
			localStorage.playing = encodeURI(newurl);
		}
		//判断是否已经存在了标签为audio 属性为audioplayer的dom元素，
		//如果存在则将它移除！
	if (!!audioplayer) {
		$('.list.li').css("backgroundColor", ""); //移除【当前播放】标记的样式
		audioplayer.remove(); //移除dom
	}
	//为文档添加一个新的audio元素 用来改变播放的曲目。
	addnewaudioplayer(urlstr);
	//更新myplayer对象的正在播放的序号。
	myplayer.playingid = $nowtag.index()

	//标记正在播放的音乐在list中。
	$nowtag.css("backgroundColor", "#BFE3BD");

	console.log("播放音乐" + urlstr);
}

myplayer.init = function(strcon, getedjson) {
	///////////////////////////////////////////////////////	
	myplayer.container = strcon;
	$.ajax({
		type: "get",
		url: getedjson,
		async: true,
		success: function(respone) {
			var div = document.createElement("div");
			$(div).attr("class", "myplayer");
			$(myplayer.container).append(div);
			////////////////////////////
			myplayer.list = JSON.parse(respone);
			var ol = document.createElement("ul"); //ul无序列表 ol有序列表
			$(ol).attr("class", "list ol");
			var $list = $(".list");
			for (var list in myplayer.list) {
				var li = document.createElement("li");
				$(li).attr("class", "list li");
				for (var x in myplayer.list[list]) {
					$(li).attr(x, myplayer.list[list][x]);

				}
				li.innerHTML = myplayer.list[list].name + "--" + myplayer.list[list].singer;
				ol.appendChild(li);
			}
			$list.append(ol);

			//bind action!
			$(".list .li").bind("click", myplayer.listplay);
		}
	});
	//为播放按钮绑定一个事件，
	$(".player-btn-play").bind("click", function() {
		var player = $(".audioplayer")[0];
		if (!!player) {
			if (player.paused == false) {
				player.pause();
				console.log("暂停");
			} else {
				player.play();
				console.log("播放");
			}
		} else {

			if (!!localStorage.playing) {
				var existurl = decodeURI(localStorage.playing); //继续上次播放
				myplayer.listplay(existurl); //通过传string的方式调用播放事件。	
			} else {
				console.log("????????")
			}
		}
		console.log(this);
	})
};

//为下载按钮绑定个事件
$(".player-btn-download").bind("click", function() {
	var el_audio = $("audio")[0]; //下载正在播放的音乐，若未播放则不下载，

	if (!!el_audio) {
		window.open(el_audio.src, "xiazia")
	} else {
		console.log("weibofang!"); //未播放歌曲不能够下载，

	}
	//$(".player-btn-download")



});
//为下一曲绑定事件
$(".player-btn-next").bind("click", function() {
	var nowplay = myplayer.playingid;
	var newurl;
	//顺序播放下一曲，
	if (nowplay < myplayer.list.length - 1) {
		newurl = myplayer.list[nowplay + 1].url;

	}
	//顺序播放下一曲，循环到首
	else {
		console.log("整个列表播放完了1")
		newurl = myplayer.list[0].url;
	}
	myplayer.listplay(newurl);
});



//监听播放事件,播放结束后循环还是下一曲
$("audio").bind("ended", function() {
	//$(".debug").bind("click",function(){	//调试用
	var loopstyle = myplayer.loopstyle;
	//可优化：将loopstyle用数值型变量表示，提高程序的处理速度。
	//在这里为了方便和语义化将它写成字符形式。
	switch (loopstyle) {
		case "1loop":
			{
				$("audio")[0].play(); //循环播放。
				break;
			}
		case "justnext":
			{
				var nowplay = myplayer.playingid;
				//顺序播放下一曲，而不循环
				if (nowplay < myplayer.list.length) {
					var newurl = myplayer.list[nowplay + 1].url; //因为是单向绑定所以没有使用监听audio的play事件去达成双向绑定，来改变tag playing in list的标记
					myplayer.listplay(newurl);
				}
				//顺序播放下一曲，而不循环
				else {
					console.log("整个列表播放完了1");
					//donothing
				}

				break;
			}
		case "listloop":
			{
				if (myplayer.playingid === myplayer.list.length - 1) {
					var newurl = myplayer.list[0].url; //播放第一首音乐
					myplayer.listplay(newurl);
					console.log("实现了列表循环");
				}
				//列表循环
				break;
			}
		case "random":
			{
				var max = myplayer.list.length;
				var random = function() {
					return Math.round(Math.random() * (max - 1));
				};
				var newurl = myplayer.list[random()].url;
				myplayer.listplay(newurl);
				console.log("实现了随机播放"); //随机播放;
				console.log(myplayer.playingid);
				break;
			}
			//其他
		default:
			{
				console.error("XXX!!!!!");
				break;
			}
	}

});
//初始化

myplayer.init("div.playerContainer","list.json");


