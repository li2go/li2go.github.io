/////////////////////////////
////////////////init//////////
////////////////////////////
//时间轴构造函数：
var timeline_conf={
"JsonUrl":"/timeline/data.json",
//用于设置DOM宿主
"hostdiv":"#d_timeline",
"indivclass":"d_time",
"titleid":"#timeline",
"debugdata":""
};


var Timeline=function(conf){
//引用所传递的参数。
this.JsonUrl=conf.JsonUrl||"未定义！";
this.hostdiv=conf.hostdiv;
this.titleid=conf.titleid;
this.indivclass=conf.indivclass;
this.model=conf.debugdata||"测试！";
this.build=function(){
     var tdata=this.model;
     console.log("tdate"+tdata)
     var classname=this.indivclass;
     var hostdiv=this.hostdiv;
     function creatdom(i) {
		$("<li class='" + classname+ "' id='time" + i + "'></li>").appendTo(hostdiv);
		}
	for (var iii in tdata){
		console.log("下一步构件dom")
		creatdom(iii);
			var one=tdata[iii];
			$('<a>' + one.date + '</a>').appendTo("#time" + iii);
			$('<a><h1>' + one.title + '</h1></a>').attr("id","timetile"+iii).appendTo("#time" + iii);
			$('<p>' + one.detail + '</p>').css({"display":"none","position":"relative"}).appendTo("#time" + iii);
	}
	console.log(this.titleid);
	console.log("build ok!");
};
this.ajaxload=function(){
	var proxythis=this;
	console.table(proxythis)
	console.log(this.titleid);
	console.log(this.JsonUrl);
	myweb.loader.tloading(); //显示加载动画
	$.getJSON(this.JsonUrl + "?" + Math.random(), function(obj) { //自动解析成了对象！
		proxythis.model=obj;//传入数据
		proxythis.build();
		setTimeout(function() {
				$(document.body).animate({
					scrollTop: ($(proxythis.titleid).offset().top - 40)
				}, 1000)
			}, 100)//滚动一次
		myweb.loader.tstop();
		$(".d_time a").bind("click",function(ent){console.log(ent.target);$(ent.target).parent().next().slideToggle(1000)});
	})
};

}

