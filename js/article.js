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
d_article.ajaxload = function () {
    myweb.loader.tloading(); //显示加载动画
    $.getJSON(d_article.JsonUrl + "?" + Math.random(), function (obj) { //自动解析成了对象！

        d_article.model = obj;
        d_article.build()
        d_article.listready = true; //标记文章已经准备
        setTimeout(function () {
            $(document.body).animate({
                scrollTop: ($("#article").offset().top - 40)
            }, 1000)
        }, 100)
        //滚动一次
        myweb.loader.tstop();

    })
};
//////////////////////////////
d_article.build = function () {
    var list = d_article.model.list; //引用model
    function creatdom(i) {
        $("<div class='" + d_article.tagclassname + "' id='article" + i + "'></div>").appendTo("." + d_article.classname);
    }

    function creatdomin() { //title,author,date,clip,location,likes,comment,
        for (var ii in list) { //遍历list，输出dom。
            creatdom(ii);
            var one = list[ii]
            $('<div title="标题"><a href=' + one.detail_url + '>' + one.title + '</a></div>').attr("class", "title").appendTo("#article" + ii);
            $('<span title="文章归档"><a>' + one.category + '</a></span>').attr("class", "category").appendTo("#article" + ii);
            $('<span title="文章作者">' + one.author + '</span>').attr('class', "author").appendTo("#article" + ii);
            $('<span title="创建时间">' + one.date + '</span>').attr("class", "date").appendTo("#article" + ii);
            $('<span title="创建地点">' + one.location + '</span>').attr("class", "location").appendTo("#article" + ii);
            $('<span title="喜欢数">' + one.likes + '</span>').attr("class", "likes").appendTo("#article" + ii);
            $('<span title="评论数">' + one.comments + '</span>').attr("class", "comments").appendTo("#article" + ii);
            $('<div title="文章概览">' + decodeURI(one.clip) + '</div>').attr("class", "clip").appendTo("#article" + ii);
        }
        $('<div style="text-align: center;">下一页</div>').appendTo("."+d_article.classname);

    }

    creatdomin();
    //lastpost


    //$(".d_article .list0").bind("click", function(e) {
    //	console.log(e)
    //	//location.pathname='/'+
    //		console.log("等待更新的功能\n点击此处将出现文章详情页。。\n本应该用一个tips来提示的，在这里做得很简陋\n0.0");
    //	})
};