function $($)
{
    return document.getElementById($)
}
function trim($)
{
    return $.replace(/(^\s*)|(\s*$)/g, "")
}
function getCookieValue(B)
{
    var _ = document.cookie.split("; ");
    for (var A = 0; A < _.length; A++) {
        var $ = _[A].split("=");
        if ($[0] == B) {
            return decodeURI($[1]);
        }
    }
    return false
}
var ajax = "";
function requestAjax(B, $, A, _)
{
    if (window.ActiveXObject) {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    }
    else {
        return false;
    }
    if (A == "GET" || A == "get")
    {
        B = B + "?" + $;
        ajax.open("GET", B, true);
        ajax.send(null);
        ajax.onreadystatechange = function ()
        {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    _();
                }
            }
        }
    }
    else if (A == "POST" || A == "post")
    {
        ajax.open("POST", B, true);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send($);
        ajax.onreadystatechange = function ()
        {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    _();
                }
            }
        }
    }
}
var bd = window;
attachEventListener(bd, "resize", resizeWin, false);
function resizeWin()
{
    if ($("layer_msg") != null)
    {
        var A = parseInt($("layer_msg").style.width), _ = parseInt($("layer_msg").style.height), C = getViewportSize();
        if (A > C[0]) {
            var B = 0;
        }
        else {
            B = (C[0] - A)  / 2;
        }
        if (_ > C[1]) {
            var D = 0;
        }
        else {
            D = (C[1] - _)  / 2;
        }
        $("layer_msg").style.top = D + "px";
        $("layer_msg").style.left = B + "px"
    }
    if ($("mask") != null)
    {
        $("mask").style.width = document.body.scrollWidth + "px";
        $("mask").style.height = document.body.scrollHeight + "px";
    }
}
/*
function displayMessageLayer(A, F, E, $, G)
{
    var C = "<div class=\"close\"><a href=\"javascript:void(0);\" id=\"closeLayer\" onclick=\"closeLayer();return false;\"><img src=\"http://z.abang.com/d/bg/close.gif\" alt=\"\u5173\u95ed\"></a></div>";
    if (A == "") {
        var _ = "";
    }
    else
    {
        _ = "<img src=\"http://z.abang.com/d/layer/" + A + ".gif\" width=\"40\" height=\"39\" align=\"middle\" />";
    }
    if (F == "") {
        var H = "";
    }
    else {
        H = "<div class=\"layer_float_img\">" + _ + "&nbsp;" + F + "</div>";
    }
    var I = "<h4 class=\"t02\">" + E + "<br /><br /></h4><div id=\"error2\" class=\"landerr2\"></div>", 
    B = getViewportSize();
    if ($ > B[0]) {
        var J = 0;
    }
    else {
        J = (B[0] - $)  / 2;
    }
    if (G > B[1]) {
        var K = 0;
    }
    else {
        K = (B[1] - G)  / 2;
    }
    var D = document.createElement("div");
    D.id = "layer_msg";
    D.setAttribute("class", "layer_box");
    D.setAttribute("className", "layer_box");
    D.style.zIndex = "9999";
    D.style.top = K + "px";
    D.style.left = J + "px";
    D.style.width = $ + "px";
    D.style.height = G + "px";
    D.innerHTML = C + H + I;
    document.body.appendChild(D);
    return true
}
function closeLayer()
{
    document.body.removeChild(document.getElementById("layer_msg"));
    document.body.removeChild(document.getElementById("mask"));
    return false
}*/
function attachEventListener(A, C, B, _)
{
    if (typeof A.addEventListener != "undefined") {
        A.addEventListener(C, B, _);
    }
    else if (typeof A.attachEvent != "undefined") {
        A.attachEvent("on" + C, B);
    }
    else
    {
        C = "on" + C;
        if (typeof A[C] == "function")
        {
            var $ = A[C];
            A[C] = function ()
            {
                lodListener();
                return B();
            }
        }
        else {
            A[C] = B;
        }
    }
}
function getScrollingPosition()
{
    var $ = [0, 0];
    if (typeof window.pageYOffset != "undefined") {
        $ = [window.pageXOffset, window.pageYOffset];
    }
    else if (typeof document.documentElement.scrollTop != "undefined" && document.documentElement.scrollTop > 0) {
        $ = [document.documentElement.scrollLeft, document.documentElement.scrollTop];
    }
    else if (typeof document.body.scrollTop != "undefined") {
        $ = [document.body.scrollLeft, document.body.scrollTop];
    }
    return $
}
function getCursorPosition(_)
{
    if (typeof _ == "undefined") {
        _ = window.event;
    }
    var $ = getScrollingPosition(), A = [0, 0];
    if (typeof _.pageX != "undefined" && typeof _.x != "undefined") {
        A[0] = _.pageX;
        A[1] = _.pageY
    }
    else {
        A[0] = _.clientX + $[0];
        A[1] = _.clientY + $[1]
    }
    return A
}
function getPosition(A)
{
    var $ = 0, _ = 0;
    while (A != null) {
        $ += A.offsetLeft;
        _ += A.offsetTop;
        A = A.offsetParent
    }
    return [$, _]
}
function getEventTarget(_)
{
    var $ = null;
    if (typeof _.target != "undefined") {
        $ = _.target;
    }
    else {
        $ = _.srcElement;
    }
    while ($.nodeType == 3 && $.parentNode != null) {
        $ = $.parentNode;
    }
    return $
}
function getViewportSize()
{
    var $ = [0, 0];
    if (typeof window.innerWidth != "undefined") {
        $ = [window.innerWidth, window.innerHeight];
    }
    else if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth != 0) {
        $ = [document.documentElement.clientWidth, document.documentElement.clientHeight];
    }
    else
    {
        $ = [document.getElementsByTagName("body")[0].clientWidth, document.getElementsByTagName("body")[0].clientHeight];
    }
    return $
}
function displayLoginLayer()
{

    var F = getCookieValue("abang_user"), $ = getCookieValue("abang_eu"), E = getCookieValue("abang_un"), 
    B = 480, _ = 280, D = getViewportSize();
    if (B > D[0]) {
        var C = 0;
    }
    else {
        C = (D[0] - B)  / 2;
    }
    if (_ > D[1]) {
        var H = 0;
    }
    else {
        H = (D[1] - _)  / 2;
    }
    var G = document.createElement("div");
    G.id = "messageBox";
    G.setAttribute("class", "new_layer");
    G.setAttribute("className", "new_layer");
    G.style.zIndex = "9999";
    G.style.top = H + "px";
    G.style.left = C + "px";
    G.style.width = B + "px";
    G.style.height = _ + "px";
    if (F == false || F == "" || $ == false || $ == "" || E == false || E == "")
    {
        G.innerHTML = "<div class=\"close\"><a href=\"javascript:void(0);\" id=\"closePromptUnlogin\"  onclick=\"closeMessageBox();return false;\"><img src=\"http://z.abang.com/d/user_new/pro_close.gif\" border=\"0\" alt=\"\u5173\u95ed\"></a></div><div class=\"l_blk01\" >\u8bf7\u9009\u62e9\u662f\u5426\u767b\u5f55&nbsp;&nbsp;<span>\u767b\u5f55\u53c2\u4e0e\u4e92\u52a8\u8fd8\u53ef\u83b7\u5f97\u79ef\u5206~</span></div><div class=\"select01\"><input name=\"userstatus\" type=\"radio\" id=\"visitorSub\" checked=\"true\" value=\"visitor\" />\u963f\u90a6\u6e38\u5ba2\u8eab\u4efd\u63d0\u4ea4</div><div class=\"select01\"><input name=\"userstatus\" type=\"radio\" value=\"login\" id=\"loginSub\"/>\u767b\u5f55\u63d0\u4ea4</div><div id=\"error_login\" class=\"open_error\" style=\"display:none\">\u8bf7\u586b\u5199\u6b63\u786e\u7684\u4fe1\u606f</div><div class=\"lname2\">\u7528\u6237\u540d\uff1a<input type=\"text\" name=\"user_key\" id=\"user_key\" maxlength=\"50\" class=\"textr\" onfocus=\"clearLoginError();return false;\"/></div><div class=\"lpass2\">\u5bc6\u3000\u7801\uff1a<input type=\"password\" name=\"password\" id=\"password\" maxlength=\"20\" class=\"textr\" onfocus=\"clearLoginError();return false;\"/><a href=\"http://www.abang.com/webapps/user/findpw.php\" target=\"_blank\">\u5fd8\u8bb0\u5bc6\u7801</a></div><div class=\"select02\"><input name=\"anonymous\" type=\"checkbox\" id=\"anonymous\" value=\"anonymous\" />&nbsp;\u533f\u540d</div><div class=\"submit_confirm\"><input type=\"button\" class=\"submit22\" value=\" \" onclick=\"userpost();return false;\"/><a href=\"http://www.abang.com/webapps/user/register.php\" target=\"_blank\">\u6ce8\u518c</a><a href=\"http://www.abang.com/help/user/help.htm\" target=\"_blank\">\u5e2e\u52a9</a></div>";
    }
    else
    {

        var A = getCookieValue("abang_nick");
        
        if (A == false || trim(A) == "") {
            A = $;
        }
        G.innerHTML = "<div class=\"close\"><a href=\"javascript:void(0);\" id=\"closePromptUnlogin\"  onclick=\"closeMessageBox();return false;\"><img src=\"http://z.abang.com/d/user_new/pro_close.gif\" border=\"0\" alt=\"\u5173\u95ed\"></a></div><div class=\"l_blk01\" ><span style=\"font-sizt:14px;font-weight:bold;\">" + A + "</span> \u8bf7\u9009\u62e9\u662f\u5426\u533f\u540d</div><div id=\"error_login\" class=\"open_error\" style=\"display:none\">\u8bf7\u586b\u5199\u6b63\u786e\u7684\u4fe1\u606f</div><div class=\"select01\"><input name=\"userstatus\" type=\"radio\" id=\"visitorSub\" value=\"visitor\" checked=\"true\"/>&nbsp;\u6635\u79f0\uff1a" + A + "</div><div class=\"select01\"><input name=\"userstatus\" type=\"radio\" value=\"login\" id=\"anonymous\"/>&nbsp;\u533f\u540d</div><div class=\"submit_confirm\"><input type=\"button\" class=\"submit22\" value=\" \" onclick=\"loginuserpost();return false;\"/></div>"
    }
    document.body.appendChild(G);
    return true
}
function clearLoginError()
{
    $("error_login").style.display = "none"
}
function getSiteFromUrl()
{
    var B = document.URL, A = B.split("://"), _ = A[1].split("/"), $ = _[0].split(".");
    return $[0]
}
function userpost()
{
    var B = document.getElementsByName("userstatus");
    if (B[0].checked == true) {
        visitorPost();
        closeMessageBox();
        return false
    }
    else if (B[1].checked == true)
    {
        var C = $("user_key").value, D = $("password").value, A = getSiteFromUrl(), E = "http://" + A + ".abang.com/webapps/user/ajax_login.php", 
        _ = "user_key=" + C + "&password=" + D + "&r=" + Math.random();
        requestAjax(E, _, "post", ajaxLoginCallback)
    }
}
function loginuserpost()
{
    var _ = $("anonymous").checked;
    closeMessageBox();
    if (_ == true) {
        anonLoginPost();
    }
    else {
        loginPost();
    }
}
function ajaxLoginCallback()
{
    if (ajax.responseText == "ok")
    {
        var _ = $("anonymous").checked;
        closeMessageBox();
        if (_ == true) {
            anonLoginPost();
        }
        else {
            loginPost();
        }
        return false
    }
    else if (ajax.responseText == "error_activate")
    {
        $("error_login").innerHTML = "\u60a8\u7684\u5e10\u6237\u8fd8\u672a\u6fc0\u6d3b";
        $("error_login").style.display = "block"
    }
    else if (ajax.responseText == "error_password")
    {
        $("error_login").innerHTML = "\u5e10\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef";
        $("error_login").style.display = "block"
    }
    else
    {
        $("error_login").innerHTML = "\u672a\u77e5\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5";
        $("error_login").style.display = "block";
    }
}
