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
- 定义一个全局变量,每次拖拽的时候,获取拖拽元素,然后删除
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
