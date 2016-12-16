var Rect =function(option){
	this._init(option);
}
Rect.prototype={
	_init:function(option){
		this.width=option.width;
		this.height=option.height;
		this.x=option.x;
		this.y=option.y;
		this.scaleX = option.scaleX;
		this.scaleY = option.scaleY;
		this.angle=Math.PI *option.angle/180;
		this.opacity = option.opacity;
		this.lineWidth= option.lineWidth;
		this.stroke= option.stroke;
		this.fill = option.fill;
		this.point=0;
	},
	render:function(ctx){
		ctx.save();
		ctx.scale(this.scaleX, this.scaleY);
		ctx.translate(this.x+this.width/2, this.y+this.height/2);
		ctx.rotate(this.angle);
		ctx.rect(-this.width/2,-this.height/2,this.width,this.height);
		ctx.lineWidth=this.lineWidth;
		ctx.fillStyle=this.fill;
		ctx.strokeStyle=this.stroke;
		ctx.globalAlpha=this.opacity;
		ctx.stroke();
		ctx.fill();
		ctx.restore();
	},
	run:function(ctx){
		var self=this;
		setInterval(function(){
			ctx.save();
			ctx.canvas.width=ctx.canvas.width;//重置宽高 等于将画布重置,清除
			self.x++;
			ctx.translate(self.x, this.y+this.height/2);
			self.render(ctx);
			ctx.restore();
			}, 100);
	}
}