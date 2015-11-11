/////////////////////////////
////////////////init//////////
////////////////////////////
var d_article = {};
//配置
d_article.classname = "d_article";
d_article.tagclassname = "list0";
d_article.JsonUrl = "/articl/list-2.json";
d_article.model = d_article.model || "";
d_article.listready = false;
d_article.ajaxload = function() {
	myweb.loader.tloading(); //显示加载动画
	$.getJSON(d_article.JsonUrl + "?" + Math.random(), function(obj) { //自动解析成了对象！

		d_article.model = obj;
		d_article.build()
		d_article.listready = true; //标记文章已经准备
		setTimeout(function() {
				$(document.body).animate({
					scrollTop: ($("#article").offset().top - 40)
				}, 1000)
			}, 100)
			//滚动一次
		myweb.loader.tstop();
		
	})
};
//////////////////////////////
d_article.build = function() {
	var list = d_article.model.list; //引用model
	function creatdom(i) {
		$("<div class='" + d_article.tagclassname + "' id='article" + i + "'></div>").appendTo("." + d_article.classname);
	}

	function creatdomin() { //title,author,date,clip,location,likes,comment,		
		for (var ii in list) { //遍历list，输出dom。
			creatdom(ii);
			var one = list[ii]
			$('<h2><a>' + one.title + '</a></h2>').attr("href", one.detail_url).appendTo("#article" + ii);
			$('<a>' + one.category + '</a>').attr("class", "category").appendTo("#article" + ii);
			$('<a>' + one.author + '</a>').attr('class', "author").appendTo("#article" + ii);
			$('<a>' + one.date + '</a>').attr("class", "date").appendTo("#article" + ii);
			$('<a><h5>' + one.location + '</h5></a>').attr("class", "location").appendTo("#article" + ii);
			$('<a>' + one.likes + '</a>').attr("class", "likes").appendTo("#article" + ii);
			$('<a>' + one.comments + '</a>').attr("class", "comments").appendTo("#article" + ii);
			$('<p>' + decodeURI(one.clip) + '</p>').attr("class", "clip").appendTo("#article" + ii);
		}
	}
	creatdomin();
	//lastpost
	
	
	$(".d_article .list0").bind("click", function() {
			alert("等待更新的功能\n点击此处将出现文章详情页。。\n本应该用一个tips来提示的，在这里做得很简陋\n0.0");
		})
};