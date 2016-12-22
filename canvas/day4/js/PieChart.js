var PieChart = function(option){
	this._init(option);
}
PieChart.prototype={
	_init:function(option){
		this.data = option.data;
		this.innerR = option.innerR;
		this.outerR = option.outerR;
		this.outerColor = option.outerColor;
		this.x = option.x;
		this.y = option.y;
		this.outerStroke = option.outerStroke;
		this.group=new Konva.Group({
			x:this.x,
			y:this.y
		});
		_this = this;
		//画外圆
		var circle = new Konva.Circle({
			x:0,
			y:0,
			radius:_this.outerR,
			stroke:this.outerColor,
			strokeWidht:_this.outerStroke
		});
		this.group.add(circle);
		var textAngle=0;
		var endAngle=-90;
		this.data.forEach(function(item,index){
			var arc = new Konva.Arc({
				x:0,
				y:0,
				outerRadius:_this.innerR,
				angle:item.value*360,
				fill:item.color,
				rotation:endAngle,
				name:"arc"
			});
			textAngle=endAngle+item.value*1/2*360;
			endAngle +=item.value*360;
			_this.group.add(arc);
			//绘制文字
				var text = new Konva.Text({
				x:_this.outerR*Math.cos(textAngle*Math.PI/180),
				y:_this.outerR*Math.sin(textAngle*Math.PI/180),
				text:item.value*100+"%",
				fontSize:15,
				fill:item.color,
				align:"left"
			});
				if(endAngle>90 && endAngle<=270)
				{
					text.x(text.x()-text.width());
				}
			_this.group.add(text);
			
		});
	},
	addToGroupOrLayer:function(GroupOrLayer){
		GroupOrLayer.add(this.group);
	},
	moveTo:function(){
		this.group.find(".arc").forEach(function(item,index){
				var oldA = item.angle();
				item.angle(0);
				item.to({
					angle:oldA,
					duration:1
				});
			});
	}
}