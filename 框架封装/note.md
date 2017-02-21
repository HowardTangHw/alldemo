## 框架封装笔记


### 1.事件框架

#### 1.1事件的发展历程

- 早期:一般将html和js放在一起

- 中期:html和js脱离

- 发展趋势:html和js分离
	+ 好处:分工合作 

- dom0时代,

##### dom2时代-事件流:冒泡和捕获

- 冒泡 : 一层一层往上冒,每一次层事件都会触发,就要取消冒泡(cancelBubble)

- 捕获:从最外层往里面触发,和冒泡相反

- 事件流:先捕获再冒泡

- addEventListener (这个就是dom2)

- /IE某些版本/ attachEvent 

- 判断浏览器是否支持某个功能,就是判断某个对象是否存在,如果对象存在就判断是否有某个方法

- 使用对象字面量形式封装框架(JSON)--zhuantou2.js

- 使用extend函数来封装框架 -- zhuantou3.js

- 当一个控件,同时写了dom0和dom2代码
	+  dom0优先执行

- dom2的优点:dom0会自动覆盖前面绑定的事件,一个元素只能绑定一个事件,dom2可以绑定多个事件(例子 可以一次click触发多个click事件)
	+ 解除绑定removeEventListener