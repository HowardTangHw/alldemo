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