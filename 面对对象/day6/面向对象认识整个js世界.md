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



* * *

### 函数对象详解
1. prototype
> var product = function(){} 
> 这是一个自定义对象:函数实现的,函数又是Function的一个实例
> 所以这个自定义对象含有Function对象的一切属性和方法
> 所以这个product含有prototype这个属性
> 原型也是对象,对象都是函数实现的,所以也包含Function对象的一切属性方法

2. arguments 重要性:9分 使用频率:8分 考试点:10分
> arguments只有在代码运行的时候才起作用
> 保存的是函数传入实参
> 例如 add(123);add(123,123);
> arguments是一个数组,保存函数的参数===准确的来说是伪数组

3. call
```javascript
//对象1
var myclass={
	getAllStudentsNumbers:function(){
	return 130;
	}
	}
//对象2
var student{
	getDetail:function(){
	return{name:'123',aihao:"321";}
	}
}
//借用--供爷法则
console.log(myclass.getAllStudentsNumbers.call(student));
```
> student借用myclass.getAllStudentsNumbers;就要像爷一样,把借用的对象放在前面
> 方法:myclass.getAllStudentsNumbers.call(student)
> #####传参
```javascript
function add(a,b){
	alert(a+b);
}
function sub(a,b){
	alert(a-b);
}
add.call(sub,3,1);
```
> 弹出一个弹出框, 结果为4
> ###### call之后,爷里面的this,就会指向调用者就是孙子
> #### 伪数组
```javascript
var divs = document.getElementsByTagName('div');
console.log(divs.length);
divs.pop().style.background='green';//不起作用,因为divs根本不是一个数组,是伪数组
//伪数组转换为真数组
var domNodes = Array.prototype.slice.call(divs);
```
> 其实伪数组 就是一个json对象
> var json= {1:'abc',2:'321',3:'123',length:'3'}
> 真数组
> var json=['abc','321','123'];
> 转换为真数组
> var domNodes = Array.prototype.slice.call(divs);
> 转换后,就可以应用数组下面的所有方法了
4. Apply
> apply的功能和call一模一样,只是传参的形式不一样
> call的参数是平铺 add.call(sub,3,1);
> apply的话,只能传递一个参数,所以要放在中括号里面add.apply(sub,[3,1]);
> 返回数组中最大值的方法
```javascript
function getMax(arr){
	return Math.max.apply(null,arr);
}
```

