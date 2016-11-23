#fileReader使用方法
1. 首先要去读文件的内容

2. 然后通过FileReader对象获取内容
	1. 首先要声明一个对象
	```javascript
		 var reader = new FileReader();
	```
	2. 然后调用方法
	```javascript
		reader.readAsText(files);
	```
	3. 因为这个readAsText执行需要过程,要等他load完之后才可以打印出来,因为js读取完文件后,会执行一个onload事件
	```javascript
		 reader.addEventListener("load",function(e){
                	//在回调函数中,最想要的数据往往可以通过e拿到,如果e拿不到就在this里面
                	//e.target=this
                	console.log(this.result);
                });
	```