var Histogram = function (option){
	this._init(option)
}
Histogram.prototype={
	_init:function(option){
		this.x=option.x;
		this.y=option.y;
		this.data=option.data;
		this.width=option.width;
		this.height=option.height;
		//添加一个新的group
		this.group = new Konva.Group({
			x:this.x,
			y:this.y
		});
		//添加一条直线
		var line = new Konva.Line({
			points:[0,0,this.width,0],
			stroke:"red",
			strokeWidth:2
		});
		this.group.add(line);
		//画举行
		//计算举行宽度
		var _this = this;
		var dataWidth = this.width / this.data.length;
		this.data.forEach(function(item,index){
			var rect = new Konva.Rect({
				x:(1/4+index)*dataWidth,
				y:-item.value*_this.height,
				width:dataWidth/2,
				height:item.value*_this.height,
				fill:item.color,
				shadowColor:"teal",
				shadowBlur:10,
				name:"rect",
				cornerRadius:10,
			});
			_this.group.add(rect);
			var Toptext =new Konva.Text({
				x:index*dataWidth,
				y:-item.value*_this.height-20,
				width:dataWidth,
				fill:item.color,
				text:item.value*100+"%",
				align:"center",
				name:"topText"
		});
			_this.group.add(Toptext);
			var Bottomtext =new Konva.Text({
				x:(1/2+index)*dataWidth,
				y:10,
				fill:item.color,
				text:item.name,
				align:"center",
				fontSize:30,
				rotation:30
		});
			_this.group.add(Bottomtext);
		});
	},
	addToGroupOrLayer:function(addToGroupOrLayer){
		addToGroupOrLayer.add(this.group);
	},
	moveTo:function(){
		var rectArr = this.group.find(".rect");
			//得到柱状图原始高度
			rectArr.forEach(function(item,index){
				var oldH=item.height();
				item.height(0);
				var oldY=item.y();
				item.y(0);
				item.to({
					y:oldY,
					height:oldH,
					duration:1
				});
			});
			var textArr = this.group.find(".topText");
			textArr.forEach(function(item,index){
				var oldY=item.y();
				item.y(-item.fontSize());
				item.to({
					y:oldY,
					duration:1
				});
			});
	}
}