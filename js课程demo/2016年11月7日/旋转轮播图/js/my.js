//最关键就是将json当数组看,进行push,pop,unshift,shift操作
window.onload = function() {
    var arrow = document.getElementById("arrow");  // 三角
    var wrap = document.getElementById("wrap");   // 大盒子
    var slide = document.getElementById("slide");
    var lis = slide.children[0].children;   // 获得所有的li
     var json = [//五张图里面所有的样式
        {   //  1
            width:400,
            top:20,
            left:50,
            opacity:20,
            z:2
        },
        {  // 2
            width:600,
            top:70,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4
            width:600,
            top:70,
            left:600,
            opacity:80,
            z:3
        },
        {   //5
            width:400,
            top:20,
            left:750,
            opacity:20,
            z:2
        }
    ];
    move();
	wrap.onmouseover=function(){
		animate(arrow,{"opacity":100});
	}
	wrap.onmouseout=function(){
		animate(arrow,{"opacity":0});
	}
	//两个按钮
	var as =arrow.children;
	for(var k in as)
	{
		as[k].onclick=function(){
			//点击时,交换json
			if(this.className=="prev")
			{//左侧
				move(true);
			}
			else
			{//右侧
				move(false);
			}
		}
	}
	
	function move(x){
	if(x!=undefined)//判断x有没有值
	{
			if(x)//如果为真,则为左侧按钮,反向json
		{
			//点击了右侧按钮的时候,将数组里面的最后一个删除,并添加到最前面.删除最后一个 pop,添加到最前面unshift
			json.unshift(json.pop());
		}else{//为假,则为右侧按钮 正向交换
			//点击了右侧按钮的时候,将数组里面的第一个删除,并添加到最后面.删除第一个 shift,添加到最后push
			json.push(json.shift());

		}
	}
		//交换完毕之后,就要循环一次
			//将json的样式遍历  每个图片都有样式
	for(var i =0;i<json.length;i++)
	{
		animate(lis[i],{
			width:json[i].width,
			height:json[i].height,
			left:json[i].left,
			opacity:json[i].opacity,
			zIndex:json[i].z
		});
	}
	
	}
	
	
	
	
	
	
	
//	//将json的样式遍历  每个图片都有样式
//	for(var i =0;i<json.length;i++)
//	{
//		animate(lis[i],{
//			width:json[i].width,
//			height:json[i].height,
//			left:json[i].left,
//			opacity:json[i].opacity,
//			zIndex:json[i].z
//		});
//	}
//	

}