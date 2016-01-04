/**
 * Created by lanhao on 16/1/4.
 */
var myModule = {};
myModule.ref = [
    {name: 'works', query: '.works'},
    {name: 'article', query: '.article'},
    {name: 'about', query: '.about'},
    {name: 'timeline', query: '.timeline'},
    {name: 'resume', query: '.resume'},
    {name: 'index', query: '.index'},
];
myModule.hash = {};
myModule.domList = myModule.ref.map(
    function (ref, index) {
        myModule.hash[ref.name] = document.querySelector(ref.query);
        return {name: ref.name, el: myModule.hash[ref.name]};
    }
);
myModule.show = function (name) {
    myModule.domList.map(
        function (dom, index) {
            if (name != dom.name) {
                dom.el.hidden = true;
            }else{
                dom.el.hidden=false;
            }
        })
};
myModule.default=function(name){
    myModule.show(name)
};
myModule.default('index');