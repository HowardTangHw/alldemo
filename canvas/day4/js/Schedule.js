var Schedule = function(option){
	this._init(option);
}
Schedule.prototype={
	_init:function(option){
		//外部的边框坐标,宽高,边框颜色,圆角
		//内部的宽,填充色,圆角
		this.stage=option.stage;
		this.x=option.x||0;
		this.y=option.y||0;
		this.innerW = option.innerW||0;
		this.h = option.h||0;
		this.stroke=option.stroke||"red";
		this.innerCornerRadius=option.innerCornerRadius||0;
		this.outerW=option.outerW||0;
		this.fill=option.fill||"green";
		this.outerCornerRadius=option.outerCornerRadius||0;
		this.text=option.text;
		this.fontSize = option.fontSize;
		this.group = new Konva.Group({
			x:this.x,
			y:this.y
		});
		this.outerRect = new Konva.Rect({
			x:0,
			y:0,
			width:this.outerW,
			height:this.h,
			stroke:this.stroke,
			cornerRadius:this.outerCornerRadius
		});
		this.group.add(this.outerRect);
		//
		this.innerRect = new Konva.Rect({
			x:0,
			y:0,
			width:this.innerW,
			height:this.h,
			fill:this.fill,
			cornerRadius:this.innerCornerRadius
		});
		this.group.add(this.innerRect);
		this.text= new Konva.Text({
			x:0,
			y:-this.fontSize-4,
			fontSize:this.fontSize,
			text:this.text,
			fill:"#555",
			width:this.outerW,
			align:"center"
		});
		this.group.add(this.text);
	},
	addToGroupOrLayer:function(LayerOrGroup){
		LayerOrGroup.add(this.group);
	},
	changeVal:function(val){
		if(val>1){
			val/=100;
		}
		_this=this;
		this.innerRect.to({
			width:val*_this.outerW,
			
		});
		_this.text.text("努力加载中:"+val*100+"%");

	}
}
