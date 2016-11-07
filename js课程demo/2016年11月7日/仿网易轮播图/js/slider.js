//获取想要的任何元素
var js_slider =document.getElementById("js_slider");  //获取最大的盒子
var slider_block =js_slider.children[0].children[0]; //获得block盒子
var imgs=slider_block.children;  //获得所有图片
var slider_ctrl=js_slider.children[1];
//第一步动态生成六个小span
for(i=0;i<imgs.length;i++)
{
	//创建新的节点
	var span =document.createElement("span");
	span.className="slider-ctrl-con";
	//从1开始
	span.innerHTML=i+1;
//	a.insertBefore(b,c) 把B放在c的前面
	slider_ctrl.insertBefore(span,slider_ctrl.children[slider_ctrl.children.length-1]);
}
//第二步 ,让第一个span变成蓝色
slider_ctrl.children[1].className="slider-ctrl-con current";

//第三步 第一张图片在舞台中央 坐标00,其他全部在右侧
var sliderWidth =js_slider.offsetWidth;
for(var i=1;i<imgs.length;i++)
{
	imgs[i].style.left=sliderWidth+"px";
}
//第四步  点击三个按钮 编写相应的点击按钮
var spans =slider_ctrl.children;//获取所有按钮
var iNow = 0;
for(var k in spans)
{
	spans[k].onclick=function(){
		if(this.className=="slider-ctrl-prev")
		{
//			alert("点击了左侧");
//			animate(imgs[iNow],{left:sliderWidth});
//			--iNow < 0?iNow=imgs.length-1:iNow;
//			imgs[iNow].style.left=-sliderWidth+"px";
//			animate(imgs[iNow],{left:0});
			animate(imgs[iNow],{left:sliderWidth});
			iNow--;
			if(iNow<0)
			{	
				iNow=imgs.length-1;
				
			}
			imgs[iNow].style.left=-sliderWidth+"px";
				animate(imgs[iNow],{left:0});
				//蓝色小方块
				fangkuai();
			
		}
		else if (this.className=="slider-ctrl-next")
		{
//			alert("点击了右侧");
			animate(imgs[iNow],{left:-sliderWidth});
//			iNow++;
//			//是否最后一张
//			if(iNow>imgs.length-1)
//			{
//				//归零
//				iNow=0;
//			}
//			//最后一张的下一张,快速回到右边
//			imgs[iNow].style.left=sliderWidth+"px";
			++iNow>imgs.length-1? iNow=0:iNow;
			imgs[iNow].style.left=sliderWidth+"px";
			//当前的下一张,快速跑到右边,
			//然后再慢慢进场
			animate(imgs[iNow],{left:0});
			//蓝色小方块
			fangkuai();
		}
		else {
//			alert("点击了小span");
//			获取当前索引号
			var that = this.innerHTML-1;
			for(var i =1;i<spans.length-1;i++)
			{
				spans[i].className="slider-ctrl-con";
			}
			this.className="slider-ctrl-con current";
			if(that>iNow)
			{
				//当前这张跑到左侧
				animate(imgs[iNow],{left:-sliderWidth});
				iNow=that;
				//下一张快速跑到右边
				imgs[iNow].style.left=sliderWidth+"px";
				//然后慢慢的出来
				animate(imgs[iNow],{left:0});
			}
			else if(that<iNow)
			{
				//当前这张跑到右侧
				animate(imgs[iNow],{left:sliderWidth});
				iNow=that;
				//下一张快速到左边
				imgs[iNow].style.left=-sliderWidth+"px";
				//然后慢慢出来
				animate(imgs[iNow],{left:0});
			}
		}
	}
}
//定时器
var timer=null;
timer=setInterval(autoplay,2000);
function autoplay(){
	//			alert("点击了右侧");
			animate(imgs[iNow],{left:-sliderWidth});
//			iNow++;
//			//是否最后一张
//			if(iNow>imgs.length-1)
//			{
//				//归零
//				iNow=0;
//			}
//			//最后一张的下一张,快速回到右边
//			imgs[iNow].style.left=sliderWidth+"px";
			++iNow>imgs.length-1? iNow=0:iNow;
			imgs[iNow].style.left=sliderWidth+"px";
			//当前的下一张,快速跑到右边,
			//然后再慢慢进场
			animate(imgs[iNow],{left:0});
			fangkuai();
}
js_slider.onmouseover=function(){
	clearInterval(timer);
}
js_slider.onmouseout=function(){
	timer=setInterval(autoplay,2000);
}
function fangkuai(){
					for(var i =1;i<spans.length-1;i++)
			{
				spans[i].className="slider-ctrl-con";
			}
			spans[iNow+1].className="slider-ctrl-con current";
}

