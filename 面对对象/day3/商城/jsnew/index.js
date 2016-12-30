//面向对象编程
var hm = new Product();
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

hm.bindDom();
hm.bindImages();