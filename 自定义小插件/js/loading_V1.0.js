//loading_v1.0
/*
 * 自定义插件格式;
 *   (function(){})(jquery);
 * 定义插件三要素:
 * 定位:left top 
 * 定义一个插件的名称
 *   $.Ztloading
 */

//主函数
$.Ztloading = function(opts) {
	//创建一个插件的模板
	var $loading = $('<div class="zt_loading"><img src="img/tz_loading_icon.gif" alt="正在加载" width="16" height="16" />' + opts.content + '</div>');
	// 追加模板
	$("body").append($loading);
	// 动态设置宽度和高度
	if(opts.width) {
		$loading.width(opts.width);
	}
	if(opts.height) {
		$loading.height(opts.height);
	}
	// 居中定位算法
	loading_center($loading);
	//浏览器窗口改变的时候,居中定位
	reposition($loading);
}

//设置居中定位算法
function loading_center($loading) {
	var width = $loading.width(); //计算loading的宽度
	var height = $loading.height(); //计算loading的高度
	var ww = $(window).width(); //浏览器的可见宽度
	var hh = $(window).height(); //浏览器的可见高度
	//居中宽度
	var left = (ww - width) / 2;
	//居中高度
	var top = (hh - height) / 2;
	$loading.css({
		top: top,
		left: left
	}); //添加坐标定位样式
}

//浏览器窗口发生改变时,居中定位,就是一发生改变,就调用定位的方法函数
function reposition($loading) {
	$(window).resize(function() {
		loading_center($loading);
	});
}

