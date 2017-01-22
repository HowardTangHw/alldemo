// 父类,--放置公共的属性和方法       基类产品--产品爸爸
function Base(){
	this.name='123';
	this.price='';
}
Base.prototype={}


//电子书,放自己的属性和方法

function eBook(){
	//继承的写法
	Base.call(this, arguments);
	Base.call(this,arguments);
	this.author='';
	this.publisher='';
}
// eBook.prototype={}
//原型也要
eBook.prototype=new Base();

//yifulei

function Clothes(){
	this.size=[];
	this.colors=[];

}

Clothes.prototype={}


//继承概念,1拥有(访问)自身的属性和方法
//同时可以访问父亲的属性和方法
var book =new eBook()
console.log(book.name);