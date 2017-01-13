# 面向对象认识整个js世界

1. 内置对象
1.1 总结js中的内置对象
> 其实除了Math及全局对象，其余的为构造函数
> 全局对象 Number Boolean String Array Object Function Date Math Regex 

2. Bom对象----window document location screen navigator

##### Location---地址栏
> URL网址 http://www.baidu.com
> 协议 http/ftp
> 端口号 默认80
> 查询字符串 ?name='111'
> ###### location.href和search
> location.href返回整个URL
> search是从当前URL?号开始的字符串

##### 如何获取传递的值

> window.location.search;

```javascript
function query(){
	var params = window.location.search;
	var arr =params.substring(1).split(',');
	return arr;
}
```

> 第二种方式 (常用)
>> 传参方式

```javascript
var querystring = function(){
	var str = window.location.search.substring(1);//将传参提取出来 去掉?号
	var arr = str.split("&");//将多个参数分开放入arr中
	var json={};//定义一个空的对象
	//遍历
	for (var i =0;i<arr.length;i++){
	var c = arr[i].indexOf('=');//找到=号的位置
	if (c==-1) continue;//如果没有发现则调到下一次循环
	var d = arr[i].substring(0,c);//截取等号前面的内容
	var e = arr[i].substring(c+1);//截取等号后面的内容
	json[d]=e;//以键值的形式存储在对象当中
	}
	return json;//返回对象
}
```

3. 自定义对象

> 例子 产品对象 星座对象