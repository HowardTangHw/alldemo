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
window.Howard.tap = function(obj, callback) {
    if (typeof obj == "object") {
        var clickTime = 0,
            isMove = false;
        obj.addEventListener("touchstart", function() {
            clickTime = Date.now();
        }, false);
        obj.addEventListener("touchmove", function() {
            isMove = true;
        }, false);
        window.addEventListener("touchend", function(e) {
            if (Date.now() - clickTime < 200 && !isMove) {
                callback && callback(e);
            }
            clickTime = 0;
            isMove = false;
        }, false);
    }
};