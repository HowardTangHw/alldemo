//面向对象编程
//模拟购物车

var hm = new Product(cart);
hm.name = "hhhhhhhhhhhhhhhhhhhhhhh";
hm.description = "233333333333";
hm.price = 168;
hm.GroupPrice = 168888;
hm.sum = 100;
hm.images = [
    { small: 'images/s11.jpg', big: 'images/s11.jpg' },
    { small: 'images/s12.jpg', big: 'images/s12.jpg' },
    { small: 'images/s13.jpg', big: 'images/s13.jpg' }
];
hm.init();
var cart = new Cart();
cart.products.push(hm);
cart.products.push(hm);
cart.products.push(hm);


cart.init();
$('#btnaddcart').click(function() {
    //将当前产品添加到购物车里面
    cart.products.push(hm);
    //重新绑定
    cart.init();
    //回到顶部
    $(window).scrollTop(0);
});