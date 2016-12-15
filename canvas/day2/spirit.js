var Spirit = function(option){
	this._init(option);
}
Spirit.prototype = {
	_init:function(option){
		//对象添加属性
		//小人在页面上的坐标
		this.x=option.x;
		this.y=option.y;
		//小人在图片上的宽高
		this.width=option.width;
		this.height=option.height;
		//小人在画布上的宽高
		this.inCanW = option.inCanW;
		this.inCanH = option.inCanH;
		// 图片路径
		this.imgSrc = option.imgSrc;
		// speed
		this.speed = option.speed;
		//运动方向
		this.dir = option.dir;
},
	render:function(ctx){
		var img = new Image();
		img.src = this.imgSrc;
		var stateX = 0;
		// 将this保存起来
		var self = this;
		img.onload = function(){
			setInterval(function(){
				ctx.clearRect(0, 0,ctx.canvas.width, ctx.canvas.height);
				ctx.drawImage(img, 
					self.width*stateX,//截取宽的开始点
					 self.height*self.dir,//截取高的开始点
					  self.width,//截取宽的长度 
					  self.height,//截取高的高度
					  self.x,//在页面上的X坐标
					  self.y, //在页面上Y的坐标
					  self.inCanW, //在页面上展示的宽度
					  self.inCanH);//在页面上战士的高度
				stateX++;
				stateX %=4;
			}, 1000/self.speed);
		}
	},
    changeDir: function(dir){
        switch(dir){
            case "left":
                this.dir = 1;
                break;
            case "right":
                this.dir = 2;
                break;
            case "top":
                this.dir = 3;
                break;
            case "down":
                this.dir = 0;
                break;
            default:
                this.dir = 0;
                break;
        }
    }
	}

