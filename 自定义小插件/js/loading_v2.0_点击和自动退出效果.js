//loading v2.0 添加了cilck和计时关闭loading
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
				//如果插件存在,就先删除
				$(".zt_loading").remove();
				//创建一个插件的模板
				var $loading = $('<div class="zt_loading ' + loading_animateIn() + ' "><img src="img/tz_loading_icon.gif" alt="正在加载" width="16" height="16" />' + opts.content + '</div>');
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
				//浏览器窗口改变的时候,居中定位,并传递opts,传递时间给下面
				reposition($loading, opts);

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
			function reposition($loading, opts) {
				$(window).resize(function() {
					loading_center($loading);
				});
				//鼠标点击loading插件,插件关闭
				$loading.click("click", function() {
					$(this).toggleClass(loading_animateOut()).addClass("zt_loading").slideUp(1000, function() {
						$(this).remove();
					});
				});
				var timer =null;
				// 定时关闭loading组件
				if(opts.timeout) {
					timer = setTimeout(function() {
						//模拟click事件
						$loading.trigger("click");
					}, opts.timeout * 1000);
				}
			}

			//loading的随机效果.index代表我要取每个元素的值,如果不传递就随机
			function loading_animateIn(index) {
				var animateIn = [];
				animateIn.push("animated bounce"); //0
				animateIn.push("animated tada"); //1
				animateIn.push("animated swing"); //2
				animateIn.push("animated wobble"); //3
				animateIn.push("animated flip"); //4
				animateIn.push("animated flipInX"); //5
				animateIn.push("animated flipInY"); //6
				animateIn.push("animated fadeIn"); //7
				animateIn.push("animated fadeInUp"); //8
				animateIn.push("animated fadeInDown"); //9
				animateIn.push("animated fadeInLeft"); //10
				animateIn.push("animated fadeInRight"); //11
				animateIn.push("animated fadeInUpBig"); //12
				animateIn.push("animated fadeInDownBig"); //13
				animateIn.push("animated fadeInLeftBig"); //14
				animateIn.push("animated fadeInRightBig"); //15
				animateIn.push("animated bounceIn"); //16
				animateIn.push("animated bounceInUp"); //17
				animateIn.push("animated bounceInDown"); //18
				animateIn.push("animated bounceInLeft"); //19
				animateIn.push("animated bounceInRight"); //20
				animateIn.push("animated rotateIn"); //21
				animateIn.push("animated rotateInUpLeft"); //22
				animateIn.push("animated rotateInDownLeft"); //23
				animateIn.push("animated rotateInUpRight"); //24
				animateIn.push("animated rotateInDownRight"); //25
				animateIn.push("animated rollIn"); //26

				if(!index) {
					var len = animateIn.length;
					//math.floor取整,math.random 是0-1的小数,然后乘长度
					var r = Math.floor(Math.random() * (len));
					return animateIn[r];
				} else {
					return animateIn[index];
				}
			}

			//loading消失效果.
			function loading_animateOut(index) {
				var loading_animateOut = [];
				var animateOut = [];
				animateOut.push("animated fadeOut"); //2
				animateOut.push("animated fadeOutUp"); //3
				animateOut.push("animated fadeOutDown"); //4
				animateOut.push("animated fadeOutLeft"); //5
				animateOut.push("animated fadeOutRight"); //6
				animateOut.push("animated fadeOutUpBig"); //7
				animateOut.push("animated fadeOutDownBig"); //8
				animateOut.push("animated fadeOutLeftBig"); //9
				animateOut.push("animated fadeOutRightBig"); //10
				animateOut.push("animated bounceOut"); //11
				animateOut.push("animated bounceOutUp"); //12
				animateOut.push("animated bounceOutDown"); //13
				animateOut.push("animated bounceOutLeft"); //14
				animateOut.push("animated bounceOutRight"); //15
				animateOut.push("animated rotateOut"); //16
				animateOut.push("animated rotateOutUpLeft"); //17
				animateOut.push("animated rotateOutDownLeft"); //18
				animateOut.push("animated rotateOutDownRight"); //19
				animateOut.push("animated rollOut"); //21

				if(!index) {
					var len = animateOut.length;
					var r = Math.floor(Math.random() * (len));
					return animateOut[r];
				} else {
					return animateOut[r];
				}

			}