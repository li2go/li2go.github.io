//var myweb={};
//myweb.SCROLLtool=function(divheader,divtop){
//	var topToolbar = $(divtop);
//  var headerH = $(divheader).outerHeight();
//  var scrollTop = $(document).scrollTop();
//  //IE6 Expression方法和jquery animate方法同事使用会有问题，所以加个判断，简化下IE6下的显示方式.
//  if (navigator.userAgent.indexOf("MSIE") && !$.support.style) {
//    if( scrollTop >= headerH ){
//      topToolbar.show();
//    }else if( scrollTop < headerH ){
//      topToolbar.hide();
//    }
//  }else{
//    if( scrollTop >= headerH ){
//      topToolbar.animate({ 'top':0 });
//    }else if( scrollTop < headerH ){
//      topToolbar.animate({ 'top':-40 });
//    }
//  }
//};
//$(window).scroll(myweb.SCROLLtool(".header",".side-menu"));



















//myweb.T=function(str){
//	var $el;
//	if (typeof(str)==="string"){
//		var mark=String(str)[0];
//	switch(mark){
//		case ".":
//		str=str.slice(1);
//		$el=document.getElementsByClassName(str);
//		break;
//		case "#":
//		str=str.slice(1);
//		$el=document.getElementsById(str);
//		break;
//		default:
//		$el=document.getElementsByTagName(str)
//		break;
//	}
//		return $el;
//	}else{
//		return;
//	}
//}
//声明一个变量空间
($(window).ready(function(){
	$('.article').fadeOut();
	$('.about').fadeOut();
	$('.works').fadeOut();
	
}))

var myweb={};
//初始化
myweb={"about":{
	"show":null	
},
"loader":{
	"tloading":null,
	"tstop":null
},
"indexAnm":null,
"togglelight":null,
"works":0,
"articl":{"getlist":null,"orderbytime":null},
"timeline":null
};
//angular.js调用
var app;
myweb.articl.show=function(el){
var $el=$(el);
$(document.body).animate({scrollTop:$(".article").offset().top}, 2000 ); 
$('.article').fadeIn("slow");};
 //$el.removeAttr("onclick");
myweb.togglelight=function(){
	myweb.loader.tloading();
	var $ground=$("div.light.ground"),
	lighttrue=$ground.attr("active");
	if(lighttrue){
		$ground.css("backgroundColor","black");
		lighttrue=$ground.removeAttr("active");
//		$('div.side-menu ul li').css ("hover",{"backgroundColor": "white","borderRadius":"2px"});
		$('div.article').css("color","#DCDCDC");
	}else{
		$ground.css("backgroundColor","white");
		lighttrue=$ground.attr("active","true");
	}
	myweb.loader.tstop();
};
myweb.indexAnm=function(){
	
	var c=$("#indexCanvas")[0],
	cxt=c.getContext("2d");
	cxt.fillStyle="#FF0000";
	cxt.fillRect(0,0,150,75);
};
myweb.loader.tloading=function(){
	$(".loader").css("display","block")
	$(".mask").css("display","block")

};
myweb.loader.tstop=function(){
	$(".loader").css("display","none")
	$(".mask").css("display","none")
};
myweb.about.show=function(){
	myweb.loader.tloading();
	$(".about").css("display","block");
	myweb.loader.tstop();
	$(".about").fadeIn("slow");	

};
 app= angular.module('Myapp', []);
	app.controller('arcCtrl', function($scope, $http, $sce) {
	myweb.loader.tloading();
    $http.get("/articl/list.json").success(function(response) {$scope.lists = response.list;});
    myweb.loader.tstop();
});
//myweb.articl.orderbytime=function(){
//	//<div class="articleS" ng-repeat="x in lists">
//$(".articleS").attr("ng-repeat")="x in lists | orderBy : '-time'";
//	};
//	document.creat"<div>{{ childrenArray | orderBy : 'age' }}</div>"
	
//myweb.articl.getList=function(){
//		var ajaxCallback=function(xhr){
//			console.log(xhr.responseTEXT);
//			var alist=JSON.parse(xhr.responseText);
//			var app;
//			$(".articl").attr("ng-app","Myarticle");
//			$(".articl").attr("ng-controller","articleCtrl");
//			$(".articleS").attr("ng-repeat","x in list");
//			app = angular.module("Myarticle", []);
//			app.controller('articlCtrl', function($scope) {
//			  	$scope.list = alist.list;
//			});
//			$(".articleS").text="{{x.title}}"
//			$("li a")[1].href="#articls";
//			$(".articl").fadeIn();
//		};
//	$.ajax({
//		type:"get",
//		cache:true,
//		url:"/articl/list.json",
//		complete:ajaxCallback,
//		async:true,
//		dateType:"JSON"
//	});
////}

////////////////

