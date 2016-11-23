/*
*@des:
*	文章内链浮动层
*/

var articleBox = document.getElementById("artical_c");
	var preArray = articleBox.getElementsByTagName("pre");
	var preWidth = preArray[0].offsetWidth;
	var floatLink="";
	var str = "";
	var linkOffsetY = 3;	//偏移量y
	var linkOffsetX = 10;	//偏移量x
	var timer=null;

	for(var j=0;j<preArray.length;j++)
	{
		var obj = preArray[j].getElementsByTagName("a");
		
		for(var i=0;i<obj.length;i++)
		{
		    var timer=null;
			obj[i].onmouseover = function(ev)
			{
			    if(timer)
				{
				   clearTimeout(timer);
				}
				var isImage = this.getElementsByTagName("img");
				var isEnlarge = false;
				if(this.innerHTML == "点击放大"){isEnlarge = true;}
				if(this.innerHTML == "查看大图"){isEnlarge = true;}
				if(isImage.length > 0 || isEnlarge == true){}
				else{
					var aJson = "{'offsetTop':" + this.offsetTop + ",'offsetLeft':" + this.offsetLeft + ",'offsetWidth':" + this.offsetWidth + ",'offsetHeight':" + this.offsetHeight + ",'preWidth':" + preWidth + "}";
					document.getElementById('hdnOffset').value = aJson;

					var strURL = "http://" + getSubDomain() + ".abang.com/webapps/search/s.php?q=" + encodeURI(this.innerHTML.replace(/<.+?>/gim,'')) + "&p=1";
					AjaxCallback = CallbackSearchTag;
					AjaxRequest('get', strURL, null);
				}
			};
			
			//滑出内链
			obj[i].onmouseout = function(){	
				timer = setTimeout(function(){
					var floatLink = document.getElementById("float_linkbox");
					if(floatLink == null){}
					else{
						//浮动层滑入、滑出
						 floatLink.onmouseover = function(){
							clearTimeout(timer);
							floatLink.style.display = "block";
						};
						 floatLink.onmouseout = function(){
							timer = setTimeout(function(){
								 floatLink.style.display = "none";
							},500);
						};
						 floatLink.style.display = "none";
					}
				},500);
			};
		};
	};

function getSubDomain()
{
	//window.location.host is subdomain.domain.com
	var parts = window.location.host.split('.');
	return parts[0];
}

function GetFloatContent(doc)
{
	var str = "";

	var dataObj = eval("("+doc+")");
	if (dataObj['n'] == 0)
		return false;

	str = "<div class=\"inside_link\">";
	str+= "<h4>关于“";
	str+= dataObj['q'];
	str+= "”的更多内容：</h4>";
	str+= "<ul>";
	for (var i = 0; i < dataObj['results'].length && i < 5; i++)
	{
		var strHL = "<li><a href='" + dataObj['results'][i]['url'] + "#floatlink' target=_blank>" + dataObj['results'][i]['title'] + "</a></li>";
		str += strHL;
	}
	str+= "</ul>";
	str+= "<h4>相关标签：</h4>";
	str+= "<p class=\"float_tag\">";
	for (var i = 0; i < dataObj['tags'].length && i < 5; i++)
	{
		var strHref = "http://search.abang.com/s.htm?q=" + encodeURI(dataObj['tags'][i]);
		var strHL = "<a target=_blank href='" + strHref + "'>" + dataObj['tags'][i] + "</a>";
		str += strHL;
	}
	str+= "</p>";
	str+= "</div>";

	return str;
}

function CallbackSearchTag()
{
	var doc = ajaxRequest.responseText;
	if (doc == null)
		return false;

	var articleBox = document.getElementById("artical_c");
	var preArray = articleBox.getElementsByTagName("pre");
	var preWidth = preArray[0].offsetWidth;
	var linkOffsetY = 3;	//偏移量y
	var linkOffsetX = 10;	//偏移量x
	var timer=null;

	var temp = document.getElementById('hdnOffset').value;
	var dataOffset = eval("("+temp+")");

	var floatLink = document.getElementById("float_linkbox");
	if (floatLink == null)
	{
		floatLink = document.createElement("div");
		floatLink.id = "float_linkbox";
		floatLink.setAttribute("className","float_link");
		floatLink.setAttribute("class","float_link");
		floatLink.style.display = "none";
		floatLink.innerHTML = GetFloatContent(doc);
		
		articleBox.appendChild(floatLink);
	}
	else	
		floatLink.innerHTML = GetFloatContent(doc);
	

	//垂直定位
	floatLink.style.top = dataOffset['offsetTop'] + dataOffset['offsetHeight'] +"px";

	//显示浮动层
	floatLink.style.display = "block";
	
	//水平定位
	var rightWidth = dataOffset['preWidth'] - dataOffset['offsetLeft'] - dataOffset['offsetWidth'];
	if( rightWidth > floatLink.offsetWidth || (floatLink.offsetWidth - rightWidth ) < dataOffset['offsetWidth']){
		floatLink.style.left = dataOffset['offsetLeft'] - linkOffsetX + "px";
		floatLink.style.right = "";
	}else{
		floatLink.style.left = "";
		floatLink.style.right = "10px";
	}

}

/*
*@des:
*	右侧广告悬停
*/
if(document.getElementById("float_rt") !=null){
	//右侧的广告悬停效果
	$j("#float_rt").css({"width":"300px","z-index":"1000","margin-top":"0"});	//设置悬停层浮动基本样式
	var floatOffsetTop = document.getElementById("float_rt").offsetTop;			//悬停层距离文档顶部的高度
	var floatHeight = document.getElementById("float_rt").offsetHeight;			//悬停层自身的高度
	var visibleHeight = document.documentElement.clientHeight;					//可视区域的高度
	var footOffsetTop = document.getElementById("pagefooter").offsetTop;		//footer距离文档顶部的高度

	var check_is_ie6  = (navigator.appVersion.indexOf("MSIE 6.0") != -1) ? true : false;
	/*获取滚动条高度*/
	function getScrollTop(){
	    var scrollTop=0;
	    if(document.documentElement && document.documentElement.scrollTop)
	    {
		scrollTop=document.documentElement.scrollTop + document.body.scrollTop;
	    }
	    else if(document.body)
	    {
		scrollTop=document.body.scrollTop;
	    }
	    return scrollTop;	
	};

	$j(window).scroll(function(){
		var newscroll = getScrollTop();
		var bottom = footOffsetTop -  newscroll;
		if(floatHeight > visibleHeight){}
		else{
			if(newscroll >= floatOffsetTop){
				if (check_is_ie6) {										//如果是IE6
					  var position = "absolute";
					  $j("#float_rt").css({"position":position,"top":newscroll + "px"});
				}else {											//非IE6
					  var position = "fixed";
					  $j("#float_rt").css({"position":position,"top":"0px"});
				}
				if(floatHeight > visibleHeight/2){
					if(bottom < visibleHeight){
						$j("#float_rt").css({"position":"absolute","top": (footOffsetTop - visibleHeight) + "px"});
					}
				}else{
					if(bottom < (visibleHeight - 100)){
						$j("#float_rt").css({"position":"absolute","top": (footOffsetTop - visibleHeight) + "px"});
					}
				}
			}else{
					 $j("#float_rt").css({"position":"","top":""});
			     }
		    }
	});
}
/*文章页浮动层：头像滑过浮出介绍
    var allowAutoHidDiv = true;
    var divShowing = false;
    var timerTemp = null;
    var showingTimeLength = 100;
    function showBangDiv(obj,id) {
        if (timerTemp != null) {
            clearTimeout(timerTemp);
            timerTemp = null;
                }
        if (!divShowing) {
            allowAutoHidDiv = true;
            divShowing = true;
            var offsetX = -19; //偏移量，自己根据需要调整
            var offsetY = 51;
			var offset = $j(obj).position();
            var right = offset.left + offsetX + "px";
            var down = offset.top + offsetY + "px";
            $j('#'+id).css("position", "absolute");
            $j('#'+id).css("top", down);
            $j('#'+id).css("left", right);
            $j('#'+id).fadeIn();
			$j('#guide_info').css("background-color", "#faf8ee");
        }

    }
    function hideBangDiv(id) {
        timerTemp = setTimeout("hidDiv('"+id+"')", showingTimeLength);
        
    }
    function hidDiv(id) {
        if (allowAutoHidDiv) {
			$j('#guide_info').css("background-color","#fff");
            $j('#'+id).fadeOut();
            divShowing = false;
        }
        else {
            timerTemp = setTimeout("hidDiv('"+id+"')", showingTimeLength); 
        }
    }

 function guide_mouse_over(obj){$j(obj).find('.guide_info_box').fadeIn();}
function guide_mouse_out(obj){$j(obj).find('.guide_info_box').fadeOut();}
*/

/*2013内容页新头部悬停
$j(window).scroll(function(){
	if($j("div").hasClass("article_head_top")){
		var articleHead = $j("div.article_head_top .article_search");
		var abangHead = $j("div.abang_headtop").height();
		var headScroll = getScrollTop();
		if(headScroll > abangHead){
			$j(articleHead).addClass("head_float");
			if (check_is_ie6) {										//如果是IE6
					$j(articleHead).css({"position":"absolute","top":headScroll+"px"});
				}else{
					$j(articleHead).css({"position":"fixed","top":0+"px"});
				}
		}
		else{
			$j(articleHead).removeClass("head_float");
			$j(articleHead).css({"position":"","top":""});
		}
	}
});
*/
/*2013内容页头部更多快捷登录
var moreLoginTimer = null;
function hideMorelink(){
	var moreLoginList = $j(".more_login").find("ul");
	$j(moreLoginList).css("display","none");
};
function showMoreLogin(obj){
	var moreLoginList = $j(".more_login").find("ul");
	clearTimeout(moreLoginTimer);
	$j(moreLoginList).css("display","block");
};
function hideMoreLogin(obj){
	moreLoginTimer = setTimeout(function(){hideMorelink()},300);
};*/