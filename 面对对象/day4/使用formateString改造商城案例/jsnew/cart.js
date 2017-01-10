//定义一个购物车对象
function Cart() {
    this.sum = 0;
    this.price = 0;
    this.products = [];


}
Cart.prototype = {
    // 绑定基本信息
    bindBasic: function() {
        //绑定产品个数
        $('.cartsum').html(this.getProductSum());
        //绑定产品总价格
        $('.allPrice').html(this.getProductPrice());
    },
    bindProductsList: function() {
        var str = '';
        var html = '';
        for (var i = 0; i < this.products.length; i++) {
            var item = this.products[i];
            var img = item.images[0];
            str += '<div class="cart_box">';
            str += ' <div class="message">';
            str += ' <div class="alert-close"> </div>';
            str += ' <div class="list_img"><img src="' + img.small + '" class="img-responsive" alt="" /></div>';
            str += '<div class="list_desc">';
            str += '  <h4><a href="#">@(name)</a></h4>1 x<span class="actual">@(price)</span></div>';
            str += ' <div class="clearfix"></div>';
            str += '</div>';
            str += '</div>';
            html += $$.formateString(str, this.products[i]);
        }

        $('.shopping_cart').html(html);
    },
    //绑定产品列表
    bindProductsListOld: function() {
        var str = ' ';
        for (var i = 0; i < this.products.length; i++) {
            var item = this.products[i];
            var img = item.images[0];
            str += '<div class="cart_box">';
            str += ' <div class="message">';
            str += ' <div class="alert-close"> </div>';
            str += ' <div class="list_img"><img src="' + img.small + '" class="img-responsive" alt="" /></div>';
            str += '<div class="list_desc">';
            str += '  <h4><a href="#">' + item.name + '</a></h4>1 x<span class="actual"> ' + item.price + '</span></div>';
            str += ' <div class="clearfix"></div>';
            str += '</div>';
            str += '</div>';
        }
        $('.shopping_cart').html(str);
    },
    //
    init: function() {
        this.bindBasic();
        this.bindProductsList();
    },
    //计算产品个数
    getProductSum: function() {
        var sum = 0;
        if (this.products.length > 0 && this.products) {
            sum = this.products.length;
        } else {
            sum = 0;
        }
        this.sum = sum;
        return sum;
    },
    //计算产品总价格
    getProductPrice: function() {
        var sum = 0;
        for (var i = 0, len = this.products.length; i < len; i++) {
            var item = this.products[i];
            sum += item.price;
        }
        this.price = sum;
        return sum;
    }
}