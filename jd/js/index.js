window.onload = function () {
				//input栏的placeholder chrome兼容.
				var d = document.getElementsByClassName("search-input")[0].getElementsByTagName("input")[0];
				d.onfocus = function () {
		d.placeholder = "";
				}
				d.onblur = function () {
		if (d.value == "") {
			d.placeholder = "洗衣机";
		}
				}
				//drowdown栏的特效
				var item = document.getElementsByClassName("dropdown-item");
				for (var i = 0; i < item.length; i++) {
		item[i].index = i;     
		item[i].onmouseover = function () {
			var itema = document.getElementsByClassName("dropdown-item")[this.index].getElementsByTagName("h3")[0].getElementsByTagName("a")[0];
			this.style.background = "#fff";
			itema.style.color = "#c81623";
		}
		item[i].onmouseout = function () {
			var itema = document.getElementsByClassName("dropdown-item")[this.index].getElementsByTagName("h3")[0].getElementsByTagName("a")[0];
			this.style.background = "#c81623";
			itema.style.color = "#fff";
		}

				}
				//banner栏两个箭头的特效
				var arrow = document.getElementsByClassName("main-arrow")[0];
				var banner = document.getElementsByClassName("main-banner")[0];
				var oDiv = document.getElementsByClassName("main-arrow")[0];
				banner.onmouseover = function () {
		arrow.style.display = "block";
				}
				banner.onmouseout = function () {
					arrow.style.display = "none";

				}


				// today两个箭头特效
	//banner栏两个箭头的特效
				var arrow1 = document.getElementsByClassName("today-arrow")[0];
				var banner1 = document.getElementsByClassName("today-r")[0];
				banner1.onmouseover = function () {
		arrow1.style.display = "block";
				}
				banner1.onmouseout = function () {
		arrow1.style.display = "none";
				}
				var topbanner = document.getElementsByClassName("topbanner")[0];
				var topbannerbtn = document.getElementsByClassName("topbanner-1111")[0];
				topbanner.onclick= function(){
					topbanner.style.display="none";
				}
				
				
}


