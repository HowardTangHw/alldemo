// 对象字面量(JSON)封装框架
var $$ = {
    $id: function(id) {
        return document.getElementById(id);
    },
    $tag: function(tag) {
        return document.getElementsByTagName(tag);
    },
    //去除左边的空格
    ltrim: function(str) {
        return str.replace(/(^\s*)/g, '');
    },
    //去掉右边空格
    rtrim: function(str) {
        return str.replace(/(\s*$)/g, '');
    },
    // 去掉两边空格
    trim: function(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    formateString: function(str, data) {
        return str.replace(/@\((\w+)\)/g, function(match, key) {
            return typeof data[key] === 'undefined' ? '' : data[key]
        });
    },
    bindArtTemplate: function(str, data) {
        var render = template.compile(str)
        var html = render(data);
        return html;
    },
    //数据类型检测
    isNumber: function(val) {
        return typeof val === 'number' && isFinite(val);
    },
    isBoolean: function(val) {
        return typeof val === 'boolean';
    },
    isString: function(val) {
        return typeof val === 'string';
    },
    isUndefined: function(val) {
        return typeof val === 'undefined';
    },
    isObj: function(str) {
        if (str === null || str === 'undefined') {
            return false;
        }
        return typeof str === 'object';
    },
    isNull: function(val) {
        return typeof val === null;
    },
    isArray: function(arr) {
        if (arr === null || typeof arr === 'undefined') {
            return false;
        }
        return arr.constructor === Array;
    },
    // 将属性方法复制给另一个对象
    extend: function(target, source) {
        for (var i in source) {
            target[i] = source[i];
        }
        return target;
    },
    query: function() {
        var params = window.location.search;
        var arr = params.substring(1).split(',');
        return arr;
    },
    //查询字符串,页面之间传参
    querystring: function() {
        var str = window.location.search.substring(1);
        var arr = str.split("&");
        var json = {};
        //遍历
        for (var i = 0; i < arr.length; i++) {
            var c = arr[i].indexOf('=');
            if (c == -1) continue;
            var d = arr[i].substring(0, c);
            var e = arr[i].substring(c + 1);
            json[d] = e;
        }
        return json;
    },
    on: function(id, type, fn) {
        var dom = this.$id(id);
        //判断是否支持addEventListener
        if (document.addEventListener) {
            dom.addEventListener(type, fn, false);
        } else {
            if (document.attachEvent) {
                dom.attachEvent('on' + type, fn);
            }
        }
    },
}