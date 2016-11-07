	function animate(obj,json,fn)
	{
		clearInterval(obj.timer);
		obj.timer =setInterval(function(){
			//判断计时器是否停止标志,一定要在计时器里面,每次调用都会给true,要在json遍历外面
			var flag =true;
			for (var k in json)//循环,讲json的每个属性和值传递给函数,
		{
			//			var attr = k;
//			var target =json[k];
			//leader=leader+(target-leader)/10;
			if(k=="opacity")
			{
				//四舍五入,然后取整,如果没有,则是默认100 *100方便运算
				var leader =Math.round(getStyle(obj,k)*100)||100;
			}
			else{
			var leader =parseInt(getStyle(obj,k))||0;
			//本身有单位,去掉px;   默认为0
			}
			var step = (json[k]-leader)/10;
			step=step>0?Math.ceil(step):Math.floor(step);
			leader = leader +step;
			if(k=="opacity")
			{
				obj.style[k]=leader/100;
				//ie 6 7 8兼容写法
				obj.style.filter= "alpha(opacity = "+leader+")";
			}
			else if (k=="zIndex")
			{
				//设置层级
				obj.style[k]=json[k];  //直接给值
			}
			else{
			obj.style[k]=leader+"px";
			}
//			if(leader==target)
//			{
//				clearInterval(obj,timer);
//			}
			if(leader!=json[k])//不断遍历,当json[k]有一个不等于leader,那么就会将标志改为false
			{
				flag=false;
			}
		}
		 if(flag)//当标志为true,则停止计时器
		 {
		 	clearInterval(obj.timer);
		 	if(fn)
		 	{
		 		fn();
		 	}
		 }
		},30)
	}
	
	
	
	
	//获取当前样式
	function getStyle(obj,attr)
	{
		if(obj.currentStyle)
		{
			return obj.currentStyle[attr];
		}
		else
		{
			return window.getComputedStyle(obj,null)[attr];
		}
	}