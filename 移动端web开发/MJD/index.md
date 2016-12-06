# index页面笔记
> 模仿京东手机端写的页面


******

## 1.整体设计(流式布局)

1. 首先给meata加上了viewport并使其可以自动获取设备的宽度
```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```
2. 最顶部的搜索栏

    - 搜索框分左中右,左边是一个logo,中间是导航栏(导航栏最左边有一个LOGO),右边是一个登陆的a标签
    - 搜索框使用fix定位 ,一开始颜色为透明,当向下滑动时,透明度不断增加,超过banner的时候 就固定不变了
    - 透明度计算公式 opt = top / bannerHeight * 0.85;
    ```javascript
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
    ```

    3. 轮播图部分

    - 图片部分
        + 首先ul给1000%的宽,然后在前面加最后一张图片,在最后加第一张的图片
        + img里面加上display:block;(消除3cm的间隔)
        + 左浮动float:left;
        + 隐藏掉超过的 overflow:hidden;
    - 图片动画部分
        + 获取需要的dom对象
        + 动画效果方法
        ```javascript
        //ul动画效果
        var changeTranslateX = function(x) {
        // 动画效果 改变ul的位置
            pic.style.transform = "translateX(" + x + "px" + ")";
            pic.style.webkitTransition = "translateX(" + x + "px" + ")";
        };
        ````
        + 写上加过渡动画和消除过渡动画的方法
        ```javascript
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
        ```
        +  轮播图播放
        ```javascript
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
        ```

        + 写一个对象方法,在common.js里面,用来为对象绑定transitionEnd事件,调用回调函数(注意要加入事件event)
        ```javascript
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
        ```
        + 在index.js中,调用该方法,并传入回调函数,使轮播图可以无缝滚动(注意要加入事件event)
        ```javascript
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
        ```
        + 下面的小点动画,通过全局变量index来控制,首先要消除所有的class="";然后再为当前的加上now
        ```javascript
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
        ```

        +  滑动事件,记录touchstart的时候的位置,然后在touchmove的时候记录位置,将两个数相减,然后做动画效果
        ```javascript
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
        
        ```
        
        + 滑动事件 在touchend 的时候 判断移动是否超过1/3 如果是,则下一张或者上一张,不是则本来这张
        ```javascript
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
        ```

    4. 导航栏部分
        - 给个float:left;然后每一个li给25%的宽度就会挤下去了
    
    5. 商品区块
        - 掌上秒杀 分上下 下面分左中右 每个给33.33%的宽
        - 倒计时的动画
        ```javascript
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
        ```
        - 下面的写好公共的类 各给50%的宽 不给高,让他们挤就行了
        ```css
                /*商品公用样式*/
        
        .b_left {
            border-left: 1px solid #e0e0e0;
        }
        
        .b_right {
            border-right: 1px solid #e0e0e0;
        }
        
        .b_bottom {
            border-bottom: 1px solid #e0e0e0;
        }
        
        .w_50 {
            width: 50%;
        }
        
        .w_50 img {
            display: block;
            width: 100%;
        }
        ```
        ```html
            <div class="jd_product_con">
                <div class="jd_product_con clearfix">
                    <a href="" class="f_left w_50 b_right"><img src="images/cp1.jpg" alt=""></a>
                    <a href="" class="f_right w_50 b_bottom"><img src="images/cp2.jpg" alt=""></a>
                    <a href="" class="f_right w_50 "><img src="images/cp3.jpg" alt=""></a>
                </div>
        </div>
        ```

## 重点!一定要记得使用了float的 要清除浮动!
