---
layout: post
title: removeEventListener的差评
tagline: ""
category: null
tags: []
published: true

---
在react里给window绑定事件处理函数并且在componentWillUnmount里进行卸载，然而并没有什么暖用。
导致报错和内存泄漏问题。
Warning: setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op.
使用this.isMounted来判断执行对组件的操作：
Uncaught TypeError: this.isMounted is not a functionhandler @ WorkFloatConnectButton.js:54(anonymous function) @ makeAssimilatePrototype.js:15

warning.js:45 Warning: isMounted(...) is deprecated in plain JavaScript React classes. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.
在网上找到资料说，
window.addEventListener(type,handler,cap)
对应的取消监听window.removeEventListener(type,handler,cap)
绑定的事件和监听的事件要handler相同才能移除。

然而。。。。


我选择了注释0.0

    componentDidMount() {
        regScroll(this.handler.bind(this));
        //window.addEventListener('scroll', this.handler.bind(this),false)
    }
  
    componentWillUnmount() {
        window.onscroll = '';
        //window.removeEventListener('scroll', this.handler.bind(this),false)
    }
  //添加事件监听
function regScroll(myHandler) {
    if (window.onscroll === null) {
        window.onscroll = myHandler
    } else if (typeof window.onscroll === 'function') {
        var oldHandler = window.onscroll;
        window.onscroll = function () {
            myHandler();
            oldHandler();
        }
    }
}
//删除所有事件监听
function removeScrollHandler(){
window.onscroll=''
}

0.0想来又何必regScroll啊。覆盖了就覆盖了啊。
 
 既然这样又不能清除自己绑定的事件。啪，一下把原来的都弄没了。
 

regScroll何苦，

还不如把原来绑定的onscroll都纷纷添加到一的存起来。

取消监听的时候把自己删除了就是。。

－。－

蛤蛤。
