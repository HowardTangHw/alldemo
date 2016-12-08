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