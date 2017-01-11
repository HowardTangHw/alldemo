//定义一个产品对象
function Product(cart) {
    //名称
    this.name = "";
    //简介
    this.description = '';
    //原价
    this.price = 0;
    //团购价
    this.GroupPrice = 0;
    //购买人数
    this.sum = 0;
    //将购物车对象传进来,因为我的产品对象,需要使用其他对象,可以通过参数来传递
    this.cart = cart;
    //图片
    this.images = [{ small: '', big: '' }, { small: '', big: '' }, { small: '', big: '' }];

}
Product.prototype = {
    //  使用formateString改造案例
    bindDom: function() {
        var str = "";
        str += '<h1 id="pname">{{name}}</h1>';
        str += ' <ul class="rating">';
        str += ' <li>';
        str += ' <a class="product-rate" href="#"> </a> <span> </span></li>';
        str += '<li><a href="#" id="buyCount">{{sum}}</a>人购买</li>';
        str += ' <div class="clearfix"></div>';
        str += ' </ul>';
        str += '<div class="price_single">';
        str += ' <span class="reducedfrom" id="price">${{price}}</span>';
        str += '<span class="actual" id="groupPric">${{GroupPrice}}</span><a href="#">团购</a>';
        str += ' </div>';
        str += '<h2 class="quick">简述:</h2>';
        str += '<p class="quick_desc" id="description">{{description}}</p>';
        //使用formateString
        var html = $$.bindArtTemplate(str, this);
        $(".pdetail").html(html);
    },
    //  绑定基本信息
    bindDomOld: function() {
        var str = "";
        str += '<h1 id="pname">' + this.name + '</h1>';
        str += ' <ul class="rating">';
        str += ' <li>';
        str += ' <a class="product-rate" href="#"> </a> <span> </span></li>';
        str += '<li><a href="#" id="buyCount">' + this.sum + '</a>人购买</li>';
        str += ' <div class="clearfix"></div>';
        str += ' </ul>';
        str += '<div class="price_single">';
        str += ' <span class="reducedfrom" id="price">$' + this.price + '</span>';
        str += '<span class="actual" id="groupPric">$' + this.GroupPrice + '</span><a href="#">团购</a>';
        str += ' </div>';
        str += '<h2 class="quick">简述:</h2>';
        str += '<p class="quick_desc" id="description"> ' + this.description + '</p>';
        $(".pdetail").html(str);
    },
    //绑定事件
    bindEvents: function() {

    },
    bindOneImage: function(data) {
        var str = '';
        str += ' <li>';
        str += '<img class="etalage_thumb_image" src="{{small}}" class="img-responsive" />';
        str += '<img class="etalage_source_image" src="{{big}}" class="img-responsive" />';
        str += '</li>';
        var html = $$.bindArtTemplate(str, data);
        return html;
    },
    bindImages: function() {
        var str = '';
        for (var i = 0; i < this.images.length; i++) {
            var item = this.images[i];
            str += this.bindOneImage(item)
        }
        $('.etalage').html(str);


        /*jquery插件实现的幻灯片特效*/
        $('#etalage').etalage({
            thumb_image_width: 250,
            thumb_image_height: 300,
        });
    },
    //绑定图片
    bindImagesOld: function() {
        var str = '';
        for (var i = 0; i < this.images.length; i++) {
            var item = this.images[i];
            str += ' <li>';
            str += '<img class="etalage_thumb_image" src="' + item.small + '" class="img-responsive" />';
            str += '<img class="etalage_source_image" src="' + item.big + '" class="img-responsive" />';
            str += '</li>';
        }
        $('.etalage').html(str);


        /*jquery插件实现的幻灯片特效*/
        $('#etalage').etalage({
            thumb_image_width: 250,
            thumb_image_height: 300,
        });
    },
    init: function() {
        this.bindDom();
        this.bindImages();
        this.bindEvents();
    }
}