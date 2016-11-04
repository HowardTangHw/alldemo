	function scroll() { 
		//IE9+以上的高级浏览器
		//scrollTop默认为0,而0不等于null
		if(window.pageYOffset != null) {
			return {
				left: window.pageXOffset,
				top: window.pageYOffset
			}
		}
		//声明了DTD的
		else if(document.compatMode == "CSS1Compat") {
			return {
				left: document.documentElement.scrollLeft,
				top: document.documentElement.scrollTop
			}
		}
		//未声明DTD的
		return {
			left:document.body.scrollLeft,
			top:document.body.scrollTop
		}
	}
	function animate(obj,target){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			//运动公式 leader = leader+(target-leader)/10;
			var step = (target-obj.offsetLeft)/10
			step = step>0? Math.ceil(step):Math.floor(step);
			obj.style.left=obj.offsetLeft+step+"px";
		},30)
		if(obj.offsetLeft==target)
		{
			clearInterval(obj.timer);
		}
	}
	function $(id){if(document.getElementById(id))return document.getElementById(id);}
