// 页面加载完成后运行
window.onload = function() {
    search();
    scrollPic();
};
// 搜索框特效
var search = function() {
    /*
    没超过banner时 逐渐加深
    超过banner后 透明度就不变了
    */
    // 取出banner的高度;
    var bannerDom = document.querySelector(".jd_banner");
    var bannerHeight = bannerDom.offsetHeight;

    //检控检测滚动的距离;
    window.onscroll = function() {
        // 获取离顶部的高度
        var top = document.body.scrollTop;
        var opt = 0;
        if (top <= bannerHeight) {
            opt = top / bannerHeight * 0.85;

        } else {
            opt = 0.85;
        }
        document.querySelector(".jd_header_box").style.background = "rgba(201, 21, 35," + opt + ")";
    };

};

// 轮播图特效
var scrollPic = function() {
    // 获取需要的dom
    //父元素
    var banner = document.getElementsByClassName("jd_banner")[0];
    // 父元素的宽度
    var bannerWidth = banner.offsetWidth;
    // pic盒子
    var pic = banner.getElementsByTagName("ul")[0];
    // 按钮盒子
    var btn = banner.getElementsByTagName("ul")[1];
    // 点
    var pointList = btn.getElementsByTagName("li");
    // 加过渡  即系动画效果
    var addTransition = function() {
        pic.style.transition = "all .2s ease";
        pic.style.webkitTransition = "all .2s ease"; //兼容老版本
    };
    //清除过渡
    var removeTransition = function() {
        pic.style.transition = "none";
        pic.style.webkitTransition = "none";
    };
    //播放效果
    //ul动画效果
    var changeTranslateX = function(x) {
        // 动画效果 改变ul的位置
        pic.style.transform = "translateX(" + x + "px" + ")";
        pic.style.webkitTransition = "translateX(" + x + "px" + ")";
    };
    // 全局索引
    var index = 1;
    var timer = null;
    timer = setInterval(function() {
        index++;
        // 加过渡
        addTransition();
        changeTranslateX(-index * bannerWidth);
    }, 1000);
    pic.addEventListener("transitionend", function() {
        if (index >= 9) {
            // 瞬间定位到第一张
            index = 1;
            // 要瞬间过去,所以要取消过渡动画效果
            removeTransition();
            changeTranslateX(-index * bannerWidth);

        } else if (index <= 0) {
            index = 8;
            // 要瞬间过去,所以要取消过渡动画效果
            // 小于0的时候 现在这张变成index=9 左划就变成index=8
            removeTransition();
            changeTranslateX(-index * bannerWidth);
        }
    });
}