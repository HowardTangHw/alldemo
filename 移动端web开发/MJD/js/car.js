var btn = document.querySelectorAll(".option_delete_product");
var jd_popwin = document.querySelector(".jd_popwin");
var jd_popwin_box = document.querySelector(".jd_popwin_box");
var deleteList = document.getElementsByClassName('option_delete_product');
var up;
for (var i = 0; i < btn.length; i++) {
    btn[i].index = i;
    btn[i].addEventListener('click', function() {
        jd_popwin.style.display = "block";
        jd_popwin_box.className = "jd_popwin_box move";
        up = this.firstElementChild;
        up.className = "open";
    });
}
var cancel = document.querySelector(".cancel");
cancel.addEventListener("click", function() {
    jd_popwin.style.display = "none";
    jd_popwin_box.className = "jd_popwin_box";
    if (up) {
        up.style.transform = "none";
        up.style.webkitTransform = "none";
    }
});