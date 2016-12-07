window.onload = function() {
    leftCategory();
    RightCategory();
};


//左侧滑动
var leftCategory = function() {
    //获取dom对象
    // 最大盒子 父盒子
    var parentDom = document.querySelector(".jd_category_left");
    //ul盒子
    var ulDom = document.querySelector(".jd_category_left_con");

    var parentHeight = parentDom.offsetHeight;
    var ulHeight = ulDom.offsetHeight;

    //左侧盒子定位区间
    var maxY = 0;
    var minY = -(ulHeight - parentHeight);
    // 滑动缓冲距离
    var cushion = 150;


    //1.滑动
    var starY = 0;
    var endY = 0;
    var changeY = 0;
    // 记录当前滑动的位置
    var now = 0;
    // 计算出滑动的距离
    var move;
    ulDom.addEventListener("touchstart", function(e) {
        starY = e.touches[0].clientY;

    }, false);
    ulDom.addEventListener("touchmove", function(e) {
        endY = e.touches[0].clientY;
        changeY = starY - endY;
        // 计算滑动的距离
        move = now - changeY;
        // 判断是否在缓冲区间内
        //2.滑动区间
        if (move < maxY + cushion && move > minY - cushion) {
            removeTransition(ulDom);
            changeTranslateY(this, move);
        }
        // console.log(move);


    }, false);
    ulDom.addEventListener("touchend", function(e) {
        //限制now的值
        // 当移动比最小的还小的时候,就讲最小的赋值给他 (向上拉)
        if (move < minY) {
            move = minY;
        }
        // 移动比最大的还要大的时候,就将最大值赋值给他  (向下拉)
        if (move > maxY) {
            move = 0;
        }
        addTransition(ulDom);
        changeTranslateY(this, move);
        // console.log(move);
        // 松手的时候 记录当前位置的距离
        now = move;
        starY = 0;
        endY = 0;
        changeY = 0;
    }, false);
    //点击效果
    var lis = ulDom.getElementsByTagName("li");
    Howard.tap(ulDom, function(e) {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
            // 给每个li索引值
            lis[i].index = i;
        }
        // 点击的元素,通过e.target获取点击的
        var li = e.target.parentNode;
        li.className = "now";
        // console.log(li.index);
        var moveY = -li.index * 50;
        // 如果移动的距离一直大于 最底的贴边距离,那么可以一直动画
        if (moveY > minY) {
            addTransition(ulDom);
            changeTranslateY(ulDom, moveY);
            // 要记录当前定位
            now = -li.index * 50;
        }
        //否则就给一个固定值 
        else {
            addTransition(ulDom);
            changeTranslateY(ulDom, minY);
            now = minY;
        }

    });
}
var RightCategory = function() {
    var parentDom = document.querySelector(".jd_category_right");
    var childDom = document.querySelector(".jd_category_right_con");
    var maxY = 0,
        minY = -(childDom.offsetHeight - parentDom.offsetHeight),
        cushion = 50;
    //1.滑动
    var starY = 0,
        endY = 0,
        changeY = 0,
        now = 0,
        move = 0;
    childDom.addEventListener('touchstart', function(e) {

        starY = e.touches[0].clientY;
    });
    childDom.addEventListener('touchmove', function(e) {
        // console.log(changeY);
        // console.log(minY);
        endY = e.touches[0].clientY;
        changeY = starY - endY;
        move = now - changeY;
        if (move < maxY + cushion && move > minY - cushion - 10) {
            removeTransition(childDom);
            changeTranslateY(childDom, move);

        }
    });
    childDom.addEventListener('touchend', function(e) {
        if (move > maxY) {
            move = maxY;
        } else if (move < minY - 10) {
            move = minY - 10;
        }
        addTransition(this);
        changeTranslateY(this, move);
        now = move;
        starY = 0;
        endY = 0;
        changeY = 0;
    });
};

//动画函数
var changeTranslateY = function(obj, y) {
    // 动画效果 改变ul的位置
    obj.style.transform = "translateY(" + y + "px" + ")";
    obj.style.webkitTransform = "translateY(" + y + "px" + ")";
};
// 加过渡  即系动画效果
var addTransition = function(obj) {
    obj.style.transition = "all .2s ease";
    obj.style.webkitTransition = "all .2s ease"; //兼容老版本
};
//清除过渡
var removeTransition = function(obj) {
    obj.style.transition = "none";
    obj.style.webkitTransition = "none";
};