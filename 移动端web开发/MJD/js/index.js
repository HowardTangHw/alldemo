// 页面加载完成后运行
window.onload = function() {
    search();
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