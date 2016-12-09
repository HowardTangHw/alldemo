# 微金所笔记

- 自适应(一般就是移动端的,就是)
- 响应式(不同分辨率做不同的效果,但是一个网站就能用于pc端和移动端)

## 1.1 兼容模式
- 设置IE的兼容模式 让IE使用最新的浏览器引擎渲染 edge不是版本指的是最新版
```html
<!--meta:compat-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
```

## 1.2 视口

> html中插入视口设置，可以通过emmet __meta:vp__ 插入
> 此属性为移动端页面视口设置，当前值表示在移动端页面的宽度为设备的宽度，并且不缩放（缩放级别为1）
> __960px 内容 被套在一个宽度为980px(绝大多数设备的视口默认尺寸)的容器(视口)中，将视口缩放到414px的设备中展示__

```html
<meta name="viewport" 
	content="width=device-width, user-scalable=no, initial-scale=1.0">
```

### 1.3. favicon（站点图标）

```html
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
```

### 1.4 条件注释(当条件满足时 内容会展示出来)

```html 
    <!--[if lte IE 9]>
        <h1>这是IE9以下</h1>
    <![endif]-->
```

### 1.5 一个固定宽度且居中的版心 container类 具备响应式的能力

> 具有4个档位 1170 970 750 100%


### 1.6 媒体查询(用min-width从小到大,代码就要从小放到大,如果max-width则相反)


``` 
  /*媒体查询
          根据屏幕情况决定是否执行某一段css代码
        */
        
        @media(min-width:750px) {
            /*最小值为1170 就是要大于1170才会显示*/
            .container {
                width: 750px;
            }
        }
        
        @media(min-width:970px) {
            /*最小值为1170 就是要大于1170才会显示*/
            .container {
                width: 970px;
            }
        }
        
        @media(min-width:1170px) {
            /*最小值为1170 就是要大于1170才会显示*/
            .container {
                width: 1170px;
            }
        }
```

### 1.7栅格系统
- bootstarp一般分为12栅格
- 利用col-\*-\* 来控制某个元素在某种屏幕情况下展示几列
- col-md-6 在中等屏幕下 占6列 占屏幕的1/2
- col-xs-12 在超屏幕下 占全部
- 使用栅格系统 要在在container类下的row类下

### 1.7.1 row类
- 里面的padding margin 抵消掉版心里面定义的padding margin

### 1.8兄弟选择器 
> 选择到第一个元素后 再加上+号
> 例如#header>.topbar>.container>.row>div+div 就会为了第一个之后的加上样式
> 就是每一个都找到自己下一个为他添加样式(第一个没有上一个)
> .item1 + li  只能找到后面的一个 
> .item1 ~ li  后面的所有的兄弟


### 1.9 字体图标
> 字体实际上就是记录一个字体相对应的图形
> 在CSS中为元素设置字体 以前只能设置客户端具有的字体
> webfont 在线字体
```css
@font-face {
  font-family: 'weijinsuo';
  src: url('../font/MiFie-Web-Font.eot') format('embedded-opentype'), 
  url('../font/MiFie-Web-Font.svg') format('svg'), 
  url('../font/MiFie-Web-Font.ttf') format('truetype'), 
  url('../font/MiFie-Web-Font.woff') format('woff');
}
```

#### 字体文件格式

- eot : embedded-opentype
- svg : svg
- ttf : truetype
- woff : woff

### 1.10 按钮样式生成

- http://blog.koalite.com/bbg/
- 可以通过界面生成一个新的按钮样式


### 1.11由于轮播图片超宽造成的影响

- 一个超宽的图片在容器中居中显示：
- position方式
- background方式 通过背景图的定位方式

- 美工为了在不同屏幕下更好地展示将图片两边做的非常宽，但是我们大多数情况的页面宽度都无法满足这样的图片宽度
- 而且Bootstrap的样式中默认将图片的max-width设置为100%；
- 造成界面图片缩放
- 想在一个较小屏幕下展示一个超宽的图片，并让图片居中显示
  + 两种办法：
    * 换用背景图的方式，background-position: center center;
    * 使img元素绝对定位，left:50%，margin-left: -width/2
    * translate方式

### 1.12.background使用

- 将容器的高度固定（410px）
- 将轮播图改为背景显示
- 由于可能图片的高度不一定是410px
- 所以需要设置css3中的background-size

#### 1.13.background-size
#### 1.13.1由于轮播图片超宽造成的影响

- 一个超宽的图片在容器中居中显示：
- position方式
- background方式 通过背景图的定位方式

- 美工为了在不同屏幕下更好地展示将图片两边做的非常宽，但是我们大多数情况的页面宽度都无法满足这样的图片宽度
- 而且Bootstrap的样式中默认将图片的max-width设置为100%；
- 造成界面图片缩放
- 想在一个较小屏幕下展示一个超宽的图片，并让图片居中显示
  + 两种办法：
    * 换用背景图的方式，background-position: center center;
    * 使img元素绝对定位，left:50%，margin-left: -width/2
    * translate方式

- length
  + 如 background-size: 100px 100px，将背景图固定到多大尺寸
- percentage
  + 如 background-size: 90% 90%，以百分比的形式设置背景大小
- cover
  + 1.背景图片等比例缩放
  + 2.让背景图相对较小边放大到目标容器大小结束
    * 如：一张100\*200的背景图放到一个300\*400的盒子中，最终背景图片的大小是300\*600
    * 因为背景图的较小边为100，将100放大到目标容器300的宽度，放大了3倍，最终结果300\*600
- contain
  + 1.背景图片等比例缩放
  + 2.让背景图相对较大边放大到目标容器大小结束
    * 如：一张100\*200的背景图放到一个300\*400的盒子中，最终背景图片的大小是200\*400
    * 因为背景图的较大边为200，将200放大到目标容器400的高度，放大了2倍，最终结果200\*400

### 1.14 大图小图切换
- 大图
  + 图片超宽
  + 使用background-image方式
  + background-position:center center
  + 然后使用background-size : cover 

- 小图
  + 使用img的方式 
  + 然后还要跟随屏幕变化而自适应

- 在元素中使用data用来记录当前元素强相关的大图和小图地址
```html 
 <div class="item active" data-lg-img='img/slide_01_2000x410.jpg' data-sm-img="img/slide_01_640x340.jpg">
    </div>
```
- 根据屏幕大小来判断采用大图还是小图
```js
 // 1.获取屏幕宽度
    var screenWidth = $(window).width();
 // 2.判断是否小屏幕
    var isMiddleScreen = screenWidth < 992;
 // 3.获取界面上每个轮播项
    var $slideItems = $("#ad_carousel .item");
 // 4.遍历 将轮播项背景图变成相应的大图或小图(小图用img方式 ,大图用background-img方式)
    $slideItems.each(function(key, element) {
        // 将dom转换为jquer对象
        $element = $(element);
          var attr = isMiddleScreen ? $element.data("sm-img") : $element.data("lg-img");
        // 拼接字符串 首先将想要的样式写出来 "url('asdfasdfasd')";
        // 然后分为前后两个字符串 "url('"++"')";
        // 再加上参数"url('"+attr+"')"
        var url = "url('" + attr + "')";
        $element.css("background-image", url);
    });
```

- 如果小图仍然使用背景方式的话,效果不好 则选用img方式来动态添加到div里面
```javascript
 // 5. 小图就是创建img标签 动态append到里面
        if (isMiddleScreen) {
            var $img = $('<img src="' + attr + '" alt="红包雨">');
            $element.append($img);
            // 然后就要去CSS里面配合了
        }
```

### 1.15 属性选择器
- <i class="icon-applen"></i>
- <i class="icon-apple"></i>
- 可以通过[class^="icon-"]找到
- <i class="asdfsa icon-apple"></i>找不到
- 则可以[class*=" icon-"]找到 前面空格重要 否则会出现asdfa-icon-applen也能找到