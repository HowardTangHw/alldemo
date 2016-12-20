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
	},
	addToGroupOrLayer:function(addToGroupOrLayer){
		addToGroupOrLayer.add(this.group);
	}
}