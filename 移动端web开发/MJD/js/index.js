// 页面加载完成后运行
window.onload = function() {
    search();
    scrollPic();
    secondKill();

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
    //1.播放效果
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
        // 小点动画
        setPoint();
        changeTranslateX(-index * bannerWidth);
    }, 3000);
    // 面对对象编程 在common.js写好了transitionEnd方法,第一个为obj,第二个为回调函数
    Howard.transitionEnd(pic, function(e) {
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
    //2.小点动画效果
    var setPoint = function() {
        for (var i = 0; i < pointList.length; i++) {
            pointList[i].className = "";
        }
        // index是0-9;
        var pointIndex = index; //先让索引和图片索引一致
        if (index >= 9) {
            pointIndex = 1;
        } else if (index <= 0) {
            pointIndex = 8;
        }
        // 设置样式
        pointList[pointIndex - 1].className = "now";
    }

    //3.滑动事件
    var starX = 0; //开始的x轴位置
    var endX = 0; //结束时x轴的位置
    var changeX = 0; //X轴改变的距离
    pic.addEventListener("touchstart", function(e) {
        // 点击时 starX的坐标
        starX = e.touches[0].clientX;
        // 清除定时器
        clearInterval(timer);
    }, false);
    pic.addEventListener("touchmove", function(e) {
        // 每一次移动的时候都获取当前位置的坐标
        endX = e.touches[0].clientX;
        // 改变的距离
        changeX = starX - endX;
        // 去除过渡
        removeTransition();

        // 当前图片的定位 加上 改变的距离
        changeTranslateX(-index * bannerWidth - changeX);
    }, false);
    pic.addEventListener("touchend", function(e) {
        // 4.当不满足1/3移动的时候 吸附回去 超过1/3的时候 变成下一张
        //满足超过3分之一 ,而且滑动之后
        if (Math.abs(changeX) >= (1 / 3 * bannerWidth) && endX != 0) {
            if (changeX > 0) {
                index++;
            } else {
                index--;
            }
        }
        // 加过渡
        addTransition();
        changeTranslateX(-index * bannerWidth);
        setPoint();
        // 计时器
        // 防止多次绑定
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            // 加过渡
            addTransition();
            // 小点动画
            setPoint();
            changeTranslateX(-index * bannerWidth);
        }, 3000);
        //将数据清0;不要污染
        starX = 0;
        changeX = 0;
        endX = 0;
    }, false);
}

// 倒计时效果
var secondKill = function() {
    // 获取dom
    var parentTimeBox = document.querySelector(".sk_time");
    var spans = parentTimeBox.getElementsByTagName("span");
    // 倒计时
    var time = 8 * 60 * 60;
    var timer;
    timer = setInterval(function() {
        time--;
        if (time <= 0) {
            time = 8 * 60 * 60;
        }
        var hours = Math.floor(time / 60 / 60);
        var minutes = Math.floor(time % (360) / 60);
        var second = time % 60;
        spans[0].innerHTML = hours > 10 ? Math.floor(hours / 10) : 0;
        spans[1].innerHTML = hours % 10;
        spans[3].innerHTML = minutes > 10 ? Math.floor(minutes / 10) : 0;
        spans[4].innerHTML = minutes % 10;
        spans[6].innerHTML = second > 10 ? Math.floor(second / 10) : 0;
        spans[7].innerHTML = second % 10;
    }, 1000);

}