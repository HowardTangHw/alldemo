//单个星座
function Xingzuo(data, num) {
    this.data = data;
    this.dom = $('<div></div>').addClass('item num-' + num);
    this.init();
}
Xingzuo.prototype = {
    bindDom: function() {
        var str = '';
        str += '<div class="image"></div>'
        str += '<div class="description">'
        str += '<p class="name">' + this.data.name + '</p>'
        str += '<p class="time">' + this.data.time + '</p>'
        str += '<div class="mark"></div>'
        str += '</div>'
        var container = $("#myXingzuo");
        this.dom.html(str).appendTo(container);

    },
    bindEvents: function() {
        var _this = this;
        this.dom.on('mouseover', function() {
            _this.dom.addClass("is-hover");
        });
        this.dom.on('mouseout', function() {
            _this.dom.removeClass("is-hover");
        });
        this.dom.on('click', function() {
            _this.dom.toggleClass("selected");
        });
    },
    init: function() {
        this.bindDom();
        this.bindEvents();
    }
}