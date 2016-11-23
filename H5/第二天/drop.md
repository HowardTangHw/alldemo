# drop使用方法

- 目标区域先删除系统默认的拖拽事件
    ```javascript
    target.addEventListener("dragover",function(e){
		e.preventDefault();
		e.stopPropagation();
	});
    ```
- 目标区域添加drop事件
    ```javascript
    target.addEventListener("drop", function(e) {
		console.log(e);
	});
    ```
-  第一种方法
    >定义一个全局变量,每次拖拽的时候,获取拖拽元素,然后删除

    ```javascript
    //全局变量
        var dropcurrent ="";
    //拖拽开始时获取
        p.addEventListener("dragstart", function(e) {
		dropcurrent=this;
	});
    //在目标区域drop的时候,删除节点       
    	target.addEventListener("drop", function(e) {
		    dropcurrent.parentNode.removeChild(dropcurrent);
			target.classList.remove("over");
	});

    ```
- 第二种方法
    >给每个元素添加一个data属性

    ```html
    <p draggable="true" data-source-id = "1">拖拽元素</p>
    ```

    >写一个函数,用来获取data属性值

    ```javascript
        	function getData(e)
	{
		var id = this.dataset["sourceId"];
		e.dataTransfer.setData("id",id);
	}
    ```

    >调用函数

    ```javascript
        p.addEventListener("dragstart",getData);
    ```

    >在drop事件中 删除具有这个id的元素
    
    ```javascript
       	//drop事件 
		target.addEventListener("drop", function(e) {
			//获取id
			var delid=e.dataTransfer.getData("id");
			//要删除的元素
            //因为querySelector只接受字符串
            //所以要先将delid变成字符串"+delid+",然后再进行拼接
            //首先用''分成两个字符串然后再加上中间的字符串"+delid+"
            //ES6拼接 `[data-source-id]=${delid}]`
			var delcurrent="[data-source-id='"+delid+"']";
			var del = document.querySelector(delcurrent);
			del.parentNode.removeChild(del);
	});
    ```
