//公用js文件
window.Howard = {};
window.Howard.transitionEnd = function(obj, callback) {
    //判断传进来的是对象 才绑定事件
    if (typeof obj == "object") {
        obj.addEventListener("transitionend", function(e) {
            callback && callback(e);
        }, false);
        obj.addEventListener("webkitTransitionEnd", function(e) {
            callback && callback(e);
        }, false);
    }
};