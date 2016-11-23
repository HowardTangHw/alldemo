#fileReader使用方法
1. 首先要去读文件的内容

2. 然后通过FileReader对象获取文本文件内容
	>1. 首先要声明一个对象
	```javascript
		 var reader = new FileReader();
	```
	>2. 然后调用方法
	```javascript
		reader.readAsText(files);
	```
	>3. 因为这个readAsText执行需要过程,要等他load完之后才可以打印出来,因为js读取完文件后,会执行一个onload事件
	```javascript
		 reader.addEventListener("load",function(e){
                	//在回调函数中,最想要的数据往往可以通过e拿到,如果e拿不到就在this里面
                	//e.target=this
                	console.log(this.result);
					//this.reuslt 就是我们想要的文本内容
                });
	```
3. 获取图片内容
	>1. 首先要声明一个对象
	```javascript
		 var reader = new FileReader();
	```
	>2. 调用方法
	```javascript
		//获取描述的数据
		reader.readAsDataURL(files);
	```
	>3.通过绑定load事件获得this.result  
	
	```javascript
		//赋值
		reader.readAsDataURL(files);
                 reader.addEventListener("load",function(e){
                	//创建图像元素
                	var img =document.createElement("img");
                	//将结果赋值给图像的src
                	img.src=this.result;
                	//添加元素
                	result.appendChild(img);
                });
	```

4. this.result的数据可以直接复制到地址栏里使用