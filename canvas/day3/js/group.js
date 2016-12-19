var Group = function(option){
	this._init(option);
}

Group.prototype={
	_init:function(option){
		this.x=option.x||0;
		this.y=option.y||0;
		this.innerRadius=option.innerRadius ||0;
		this.outerRadius=option.outerRadius ||0;
		this.innerFill=option.innerFill||"red";
		this.outerFill=option.outerFill||"blue";
		this.outerOpacity = option.outerOpacity||1;
		this.text=option.text||"";
		this.fontSize=option.fontSize ||20;
		this.fontColor=option.fontColor||"white";

	},
	render:function(){
		this.group= new Konva.Group({
			x:this.x,
			y:this.y
		});
		var innerCircle = new Konva.Circle({
			x:0,
			y:0,
			radius:this.innerRadius,
			fill:this.innerFill
		});
		this.group.add(innerCircle);
		var outerCircle = new Konva.Ring({
			x:0,
			y:0,
			innerRadius:this.innerRadius,
			outerRadius:this.outerRadius,
			fill:this.outerFill,
			opacity:this.outerOpacity
		});
		this.group.add(outerCircle);
		//
		var text = new Konva.Text({
			x:-this.innerRadius,
			y:-this.fontSize/3,
			text:this.text,
			width:2*this.innerRadius,
			align:"center",
			fill:this.fontColor
		});
		this.group.add(text);
	},
	addToGroupOrLayer:function(GroupOrLayer){
		GroupOrLayer.add(this.group);
	}
}