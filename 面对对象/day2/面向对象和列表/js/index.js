//使用面向对象形式开发列表页面

function Product() {
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
        bingDoms: function(products) {
            var str = '';
            for (var i = 0; i < products.length; i++) {
                str += products[i].bindDom();
            }
            $('#container').html(str);
        },
        init: function(products) {
            this.bingDoms(products);
            this.bindEvents();
        }
    }
    //////////模拟后台数据
    //模拟单个
var conditioner = new Product();
conditioner.name = 'Aussie美国袋鼠丰盈蓬松护发素400ml';
conditioner.SourcePrice = '120.00';
conditioner.discount = '3.5';
conditioner.image = 'img/boutque01_r2_c2.jpg';
conditioner.sum = "2000";
conditioner.price = "42.00";


//模拟多个
var treatment = new Product();
treatment.name = 'Aussie美国袋鼠丰盈蓬松护发素400ml';
treatment.SourcePrice = '120.00';
treatment.discount = '3.5';
treatment.image = 'img/boutque01_r2_c2.jpg';
treatment.sum = "2000";
treatment.price = "42.00";





var list = [conditioner, conditioner, conditioner, conditioner, treatment, treatment, treatment, treatment, treatment, treatment, treatment];


//面向对象编程
conditioner.init(list);