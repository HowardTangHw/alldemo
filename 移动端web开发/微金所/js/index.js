$(function() {
    $(window).on("resize", changeImage);
    $(window).on("resize", ulChangeStyle).trigger("resize");
    //轮播图响应式动画
    function changeImage() {
        //当屏幕小于一定值(中小屏幕 992PX)的时候,轮播图使用回img模式(使用小图)
        // 1.获取屏幕宽度
        var screenWidth = $(window).width();
        // 2.判断是否小屏幕
        var isMiddleScreen = screenWidth < 768;
        // console.log(isMiddleScreen);
        // 3.获取界面上每个轮播项
        var $slideItems = $("#ad_carousel .item");
        // 4.遍历 将轮播项背景图变成相应的大图或小图(小图用img方式 ,大图用background-img方式)
        $slideItems.each(function(key, element) {
            // 将dom转换为jquer对象
            $element = $(element);
            // 大图小图的地址记录在当前元素的自定义属性上面了
            // if (isMiddleScreen) {
            //     $element.css("backgroundImage", $element.data("smImg"));
            // } else {
            //     $element.css("backgroundImage", $element.data("lgImg"));
            // }
            //
            var attr = isMiddleScreen ? $element.data("sm-img") : $element.data("lg-img");
            // 拼接字符串 首先将想要的样式写出来 "url('asdfasdfasd')";
            // 然后分为前后两个字符串 "url('"++"')";
            // 再加上参数"url('"+attr+"')"
            var url = "url('" + attr + "')";
            $element.css("background-image", url);
            // 5. 小图就是创建img标签 动态append到里面
            if (isMiddleScreen) {
                var $img = $('<img src="' + attr + '" alt="红包雨">');
                $element.empty().append($img);
                // 然后就要去CSS里面配合了
            } else {
                $element.empty();
            }
        });
    }
    //ul滚动条 动态计算宽度并且添加样式
    function ulChangeStyle() {
        // 只能在较小屏幕
        var $ulElements = $('#products .nav-tabs')
            // $(selector,context) 在$ulElements中 找li[role="presentation"]
        var $liElements = $('li[role="presentation"]', $ulElements);
        var width = 20;
        $liElements.each(function(key, element) {
            // 遍历li 获取总宽度
            width += $(element).width();
        });
        // 判断ul内容有没有溢出
        // 获取整体宽度
        var ulElementsWidth = $ulElements.width();
        if (width > ulElementsWidth) {
            	$ulElements.width(width);
            	
            } else {
            $ulElements.css("width", "auto");
        }

    }
    $("[data-toggle='tooltip']").tooltip();
});