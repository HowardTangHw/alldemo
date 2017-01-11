//单个星座
function Xingzuo(data, num) {
    this.data = data;
    this.dom = $('<div></div>').addClass('item num-' + num);
}
Xingzuo.prototype = {
    bindDom: {},
    bindEvents: {},
    init: function() {
        this.bindDom();
        this.bindEvents();
    }
}