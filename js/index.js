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

var myweb={};
myweb={"about":{
	"show":null
	
	
},
"works":0,
"articl":{"getlist":null},
"timeline":0




};

var app = angular.module('Myapp', []);
app.controller('arcCtrl', function($scope, $http) {
    $http.get("/articl/list.json")
    .success(function(response) {$scope.lists = response.list;});
});



myweb.articl.getList=function(){
		var ajaxCallback=function(xhr){
			console.log(xhr.responseTEXT);
			var alist=JSON.parse(xhr.responseText);
			var app;
			$(".articl").attr("ng-app","Myarticle");
			$(".articl").attr("ng-controller","articleCtrl");
			$(".articleS").attr("ng-repeat","x in list");
			app = angular.module("Myarticle", []);
			app.controller('articlCtrl', function($scope) {
  			  	$scope.list = alist.list;
			});
			$(".articleS").text="{{x.title}}"
			$("li a")[1].href="#articls";
			$(".articl").fadeIn();
		};
	$.ajax({
		type:"get",
		cache:true,
		url:"/articl/list.json",
		complete:ajaxCallback,
		async:true,
		dateType:"JSON"
	});
}
myweb.about.show=function(){
	$("#about").fadeIn("slow");	
};
////////////////

//var alist={};
//alist={
//	total:0,
//	lastpost:"2012-12-14",
//	list:[{title:"jbhd",
//			time:"2014-3-4",
//			athor:"li2go",
//			loc:"Beijing.",
//			description:"asjkasjakmkzmxowkomlsaxmzlalskoqslskalkzmx,masoqls,zmkasklakslamxmz,alskalszmx,,,,msasaslslakslaskasas"
//		},
//		{title:"jbhd",
//			time:"2014-3-4",
//			athor:"li2go",
//			loc:"Beijing.",
//			description:"asjkasjakmkzmxowkomlsaxmzlalskoqslskalkzmx,masoqls,zmkasklakslamxmz,alskalszmx,,,,msasaslslakslaskasas"
//		},
//		{title:"jbhd",
//			time:"2014-3-4",
//			athor:"li2go",
//			loc:"Beijing.",
//			description:"asjkasjakmkzmxowkomlsaxmzlalskoqslskalkzmx,masoqls,zmkasklakslamxmz,alskalszmx,,,,msasaslslakslaskasas"
//		},
//		{title:"jbhd",
//			time:"2014-3-4",
//			athor:"li2go",
//			loc:"Beijing.",
//			description:"asjkasjakmkzmxowkomlsaxmzlalskoqslskalkzmx,masoqls,zmkasklakslamxmz,alskalszmx,,,,msasaslslakslaskasas"
//		},
//		{title:"jbhd",
//			time:"2014-3-4",
//			athor:"li2go",
//			loc:"Beijing.",
//			description:"asjkasjakmkzmxowkomlsaxmzlalskoqslskalkzmx,masoqls,zmkasklakslamxmz,alskalszmx,,,,msasaslslakslaskasas"
//		},
//		{title:"jbhd",
//			time:"2014-3-4",
//			athor:"li2go",
//			loc:"Beijing.",
//			description:"asjkasjakmkzmxowkomlsaxmzlalskoqslskalkzmx,masoqls,zmkasklakslamxmz,alskalszmx,,,,msasaslslakslaskasas"
//		},
//		{title:"jbhd",
//			time:"2014-3-4",
//			athor:"li2go",
//			loc:"Beijing.",
//			description:"asjkasjakmkzmxowkomlsaxmzlalskoqslskalkzmx,masoqls,zmkasklakslamxmz,alskalszmx,,,,msasaslslakslaskasas"
//		},
//		{title:"jbhd",
//			time:"2014-3-4",
//			athor:"li2go",
//			loc:"Beijing.",
//			description:"asjkasjakmkzmxowkomlsaxmzlalskoqslskalkzmx,masoqls,zmkasklakslamxmz,alskalszmx,,,,msasaslslakslaskasas"
//		},
//		{title:"jbhd",
//			time:"2014-3-4",
//			athor:"li2go",
//			loc:"Beijing.",
//			description:"asjkasjakmkzmxowkomlsaxmzlalskoqslskalkzmx,masoqls,zmkasklakslamxmz,alskalszmx,,,,msasaslslakslaskasas"
//		},
//		{title:"jbhd",
//			time:"2014-3-4",
//			athor:"li2go",
//			loc:"Beijing.",
//			description:"asjkasjakmkzmxowkomlsaxmzlalskoqslskalkzmx,masoqls,zmkasklakslamxmz,alskalszmx,,,,msasaslslakslaskasas"
//		},
//		{title:"jbhd",
//			time:"2014-3-4",
//			athor:"li2go",
//			loc:"Beijing.",
//			description:"asjkasjakmkzmxowkomlsaxmzlalskoqslskalkzmx,masoqls,zmkasklakslamxmz,alskalszmx,,,,msasaslslakslaskasas"
//		}
//	]
//	
//};
//
//alist.total=alist.list.length;
//
//
//
