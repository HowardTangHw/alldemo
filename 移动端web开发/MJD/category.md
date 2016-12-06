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