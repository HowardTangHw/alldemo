# category页面

## 布局

1. 首先 要给html和body一个100%的宽高
    ```css
    html,body{
        width:100%;
        height:100%;
    }
    ```
2. 顶部通栏给100%的宽和 45px的高
3. 下面部分给100%宽高 然后给45px的padding-top,那么就是剩下的内容大小了
4. 左侧给父盒子一个固定的宽度,高度100%,然后加上一个overflow:hidden
5. 给左边加个 float: left; 右边加了overflow:hidden 我们就会认为右边是一个绝缘的盒子 就不会和外界元素有接触
6. 这样就能占满右边的空间了
    ```css
    .jd_category_left {
    width: 90px;
    height: 100%;
    overflow: hidden;
    float: left;
    }
    .jd_category_right {
    overflow: hidden;
    height: 100%;
    padding: 10px 12px;
    }
    ```
## 动画效果

1. 左侧滑动效果
    - 首先加一个普通的滑动效果,需要记录点击时的Y坐标,移动时的Y左边,然后算出改变的y坐标,然后进行移动效果
    - 还要一个参数,记录当前移动的位置,那么下一次移动,就是当前移动的位置-移动的距离
    ```javascript
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
        //2.滑动区间  只允许在[minY-cushion,maxY+cushion]当中滑动
        if (move < maxY + cushion && move > minY - cushion) {
            //清除过渡效果
            removeTransition();
            changeTranslateY(move);
        }
    }, false);
    ```
2. 吸附效果,当移动距离比最小的还小时,比最大的还要大的时候,要赋值,并且加过渡动画,然后弹回去,
    ```javascript
     ulDom.addEventListener("touchend", function(e) {
        //限制now的值
        if (move < minY ) {
            move = minY;
        }
        if (move > maxY ) {
            move = 0;
        }
        addTransition();
        changeTranslateY(move);
        console.log(move);
        // 松手的时候 记录当前位置的距离
        now = move;
        starY = 0;
        endY = 0;
        changeY = 0;
    }, false);
    ```
3. 当touchend的时候,要记录下ul移动到的位置
    ```javascript
     now = move;
    ```

##模拟点击事件 tap
1. tap事件就是模拟的click事件,可是比click要先执行
2. 首先要记录下点击的时间,然后判断是否移动,然后判断点击的时间长久,
```javascript
        var clickTime = 0,
            isMove = false;
        document.querySelector("div").addEventListener("touchstart", function() {
            clickTime = Date.now();
        }, false);
        document.querySelector("div").addEventListener("touchmove", function() {
            isMove = true;
        }, false);
        document.querySelector("div").addEventListener("touchend", function() {
            if (Date.now() - clickTime < 200 && !isMove) {
                console.log("tap");
            }
        }, false);
```

3. 获取lis.而且通过tap返回的事件源的target.找到相应的li.为他添加样式,并且赋予每个li相应的索引值
    - 当移动的距离(-li.index * 50)比最后整版距离(minY)要小(大,因为是负数)的时候,则可以进行动画
    - 否则就给一个最后整版的大小(minY),并记录下来
```javascript
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
        var moveY = -li.index * 50
        if (li.index <= 15) {
            addTransition();
            changeTranslateY(moveY);
            // 要记录当前定位!!!!重点!
            now = moveY;
        } else {
            addTransition();
            changeTranslateY(minY);
            now = minY;
        }

    });
``` 
# 重点!!!移动的都是一定要记录当前ul移动的距离! now = -li.index * 50; 否则就会卡壳不动了

### 商品部分动画同左边导航栏一样,复制就可以了,或者提取公共部分 调用