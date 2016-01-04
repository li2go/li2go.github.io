

var myweb = {};
//初始化
myweb = {
	"about": {
		"show": null
	},
	"loader": { //一个加载动画UI控制器。
		"tloading": null,
		"tstop": null
	},
	"indexAnm": null,
	"togglelight": null,
	"works": 0,
	"article": {
		"JsonUrl": "/articl/list.json",
		"orderbytime": null
	},
	"timeline": null
};
//angular.js调用


//切换白天和黑夜的视觉效果。
myweb.togglelight = function() {
	myweb.loader.tloading();
	var $ground = $("div.light.ground"),
		isLight = $ground.attr("active");
	if (isLight) {
		$ground.css("backgroundColor", "black");//变成黑夜模式
		isLight = $ground.removeAttr("active");
		//		$('div.side-menu ul li').css ("hover",{"backgroundColor": "white","borderRadius":"2px"});
		//$('div.article').css("color", "#DCDCDC");
		$("body").css("color","#FFF")
	} else {
		$("body").css("color","#000")
		$ground.css("backgroundColor", "white");
		isLight = $ground.attr("active", "true");
	}
	myweb.loader.tstop();
};
$(".lightening").bind("click",myweb.togglelight)
//首页canvas动画
myweb.indexAnm = function() {

	var c = $("#indexCanvas")[0],
		cxt = c.getContext("2d");
	cxt.fillStyle = "#FF0000";
	cxt.fillRect(0, 0, 150, 75);
};
myweb.loader.tloading = function() {
	$(".loader").css("display", "block")
	$(".mask").css("display", "block")
};
myweb.loader.tstop = function() {
	$(".loader").css("display", "none")
	$(".mask").css("display", "none")
};
myweb.about.show = function() {
	myweb.loader.tloading();
	$(".about").css("display", "block");
	myweb.loader.tstop();
	$(".about").fadeIn("slow");

};

//var loadaaa;
//loadaaa=function(){
//	app_article = angular.module('Myapp_article', []);
//app_article.register()
//	app_article.controller('arcCtrl', function($scope, $http, $sce) {
//	myweb.loader.tloading();
//	$http.get(myweb.article.JsonUrl).success(function(response) {
//		$scope.lists = response.list;
//	});
//	myweb.loader.tstop(); //loader停止显示，
//});	
//}
//listmenu事件绑定,平滑滚动

//绑定第一次加载
$("a[name='article']").one("click",d_article.ajaxload);
$("a[name='timeline']").one("click",function(){
jjj=new Timeline(timeline_conf);
jjj.ajaxload();	
});



$(".list-menu").bind("click",
	function(event) {
		myModule.show(event.target.name)
		var scrollto = "#"+event.target.name;
		$(document.body).animate({scrollTop: ($(scrollto).offset().top-40)}, 1000);
	}
)
//绑定隐藏
$("#article").bind("click",function(){$("#article").next().next().slideToggle("normal")});
$("#timeline").bind("click",function(){$("#timeline").next().next().slideToggle("normal")});

// function timeline_bind(){
// var lih2= $(".d_timeline li h2");
// for (var i in lih2)
// {
// 	console.log(lih2)
// $(lih2[i]).bind("click",function(){$(lih2[i]).parent().find("p")[i].slideToggle();})
// }
// }
// timeline_bind();



