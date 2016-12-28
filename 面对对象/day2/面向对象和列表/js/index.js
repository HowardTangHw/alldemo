//使用面向对象形式开发列表页面

function Product(data) {
    //名称
    this.name = "";
    //原价
    this.SourcePrice = '';
    //现价
    this.price = '';
    //图片
    this.image = '';
    //销量
    this.sum = 0;
    //折扣
    this.discount = 0;
    // 接收后台给我的json数据
    this.data = data;
}
Product.prototype = {
    //绑定单个产品
    bindDom: function() {
        var str = "";
        str += "<dl>";
        str += "<dt><a><img src='" + this.image + "' width='384' height='225' /></a></dt>";
        str += "<dd>";
        str += "<span><a><em>" + this.discount + "折/</em>" + this.name + "</a></span>";
        str += "</dd>";
        str += "<dd class='price'>";
        str += "<em>$" + this.price + "</em>";
        str += "<del>$" + this.SourcePrice + "</del>";
        str += "<i>销量：" + this.sum + "</i>";
        str += "</dd>";
        str += "</dl>";

        //一定要记住return  不然就会undefined
        return str;
    },
    bindEvents: function() {},
    //绑定多个产品
    bingDoms: function() {
        var str = '';
        for (var i = 0; i < this.data.length; i++) {
            str += this.data[i].bindDom();
        }
        $('#container').html(str);
    },
    init: function() {
        this.bingDoms();
        this.bindEvents();
    }
}


///后台给的Json
var json = [{
    name: "Aussie美国袋鼠丰盈蓬松护发素400ml",
    SourcePrice: "120.00",
    discount: "3.5",
    image: "img/boutque01_r2_c2.jpg",
    sum: "2000",
    price: "42.00"
}, {
    name: "Aussie美国袋鼠丰盈蓬松护发素400ml",
    SourcePrice: "120.00",
    discount: "3.5",
    image: "img/boutque01_r2_c2.jpg",
    sum: "2000",
    price: "42.00"
}, {
    name: "Aussie美国袋鼠丰盈蓬松护发素400ml",
    SourcePrice: "120.00",
    discount: "3.5",
    image: "img/boutque01_r2_c2.jpg",
    sum: "2000",
    price: "42.00"
}, {
    name: "Aussie美国袋鼠丰盈蓬松护发素400ml",
    SourcePrice: "120.00",
    discount: "3.5",
    image: "img/boutque01_r2_c2.jpg",
    sum: "2000",
    price: "42.00"
}, {
    name: "Aussie美国袋鼠丰盈蓬松护发素400ml",
    SourcePrice: "120.00",
    discount: "3.5",
    image: "img/boutque01_r2_c2.jpg",
    sum: "2000",
    price: "42.00"
}];


//面向对象编程
//将json字符串转换为json对象
function transform(json) {
    var list = [];
    for (var i = 0; i < json.length; i++) {
        var p = new Product();
        p.name = json[i].name;
        p.SourcePrice = json[i].SourcePrice;
        p.discount = json[i].discount;
        p.image = json[i].image;
        p.sum = json[i].sum;
        p.price = json[i].price;
        list.push(p);
    }
    return list;
}
var p = new Product(transform(json));
p.init();