var clickContentCount = 0,
site_name = getSiteFromHost(),
quote_num = 0,
reply_error_type = 0,
submitType = 0;
var isIE6 = checkIsIE6();
if (isIE6) {
	window.onscroll = function() {
		scrollLayer("messageBox");
		return false;
	};
}
window.onresize = function() {
	resizeLayer("messageBox");
	return false;
};
findUserComment();
window.onbeforeunload = function() {
    if ($("content").value != "" && $("content").value != "\u53c2\u4e0e\u8ba8\u8bba\u3001\u4e0e\u66f4\u591a\u4eba\u5206\u4eab\u7cbe\u5f69\u751f\u6d3b") checkleave = true;
    else checkleave = false;
    if (checkleave) return ("\u70b9\u51fb'\u786e\u5b9a'\u60a8\u7684\u4fe1\u606f\u5c06\u4e22\u5931???")
};
/* 检测浏览器是否是IE6 */
function checkIsIE6() {
	if (document.all) {
		if ( navigator.userAgent.indexOf("MSIE 6.0") != -1) {
			return true;
		}
	}
	return false;
}
/* 滚动提示层 */
function scrollLayer(id) {
	
	if (typeof document.getElementById(id) != "undefined" && document.getElementById(id)!=null) {
		var messageLayer = document.getElementById(id);
		if (messageLayer.style.display!="none") {
			var width = messageLayer.offsetWidth;
			var height = messageLayer.offsetHeight;
			var scrollPosition = getScrollingPosition();
			var viewPostSize = getViewportSize();
			messageLayer.style.left = scrollPosition[0] + (viewPostSize[0] - width)/2 + "px";
			messageLayer.style.top = scrollPosition[1] + (viewPostSize[1] - width)/2 + "px";
		} else {
			return false;
		}
	} else {
		return false;
	}
}
/* 放大缩小提示层 */
function resizeLayer(id) {
	if (typeof document.getElementById(id) != "undefined" && document.getElementById(id)!=null) {
		var messageLayer = document.getElementById(id);
		if (messageLayer.style.display!="none") {
			var width = messageLayer.offsetWidth;
			var height = messageLayer.offsetHeight;
			var scrollPosition = getScrollingPosition();
			var viewPostSize = getViewportSize();
			messageLayer.style.left = scrollPosition[0] + (viewPostSize[0] - width)/2 + "px";
			messageLayer.style.top = (viewPostSize[1] - width)/2 + "px";
		} else {
			return false;
		}
	} else {
		return false;
	}
}
/* 获得滚动位置 */
function getScrollingPosition() {
	var position = [0, 0];
	if (typeof window.pageYOffset!= "undefined") {
		position = [
			window.pageXOffset,
			window.pageYOffset
		];
	} else if (typeof document.documentElement.scrollTop!="undefined" && document.documentElement.scrollTop > 0) {
		position = [
			document.documentElement.scrollLeft,
			document.documentElement.scrollTop
		];
	} else if (typeof document.body.scrollTop!="undefined") {
		position = [
			document.body.scrollLeft,
			document.body.scrollTop
		];
	}
	return position;
}
/* 获得可见区域大小 */
function getViewportSize() {
	var size = [0, 0];
	if (typeof window.innerWidth!="undefined") {
		size = [
			window.innerWidth,
			window.innerHeight
		];
	} else if (typeof document.documentElement!="undefined" && typeof document.documentElement.clientWidth!="undefined" && document.documentElement.clientWidth!=0) {
		size = [
			document.documentElement.clientWidth,
			document.documentElement.clientHeight
		];
	} else {
		size = [
			document.getElementsByTagName('body')[0].clientWidth,
			document.getElementsByTagName('body')[0].clientHeight
		];
	}
	return size;
}
/* 获得全屏大小 */
function getFullScreenSize() {
	var size = getViewportSize();
	if (typeof document.body.scrollWidth!="undefined" && document.body.scrollWidth>0) {
		if (document.body.scrollWidth > size[0]) {
			size[0] = document.body.scrollWidth;
		}
		if (document.body.scrollHeight > size[1]) {
			size[1] = document.body.scrollHeight;
		}
	}
	return size;
}
//提交评论未登录弹窗
function displayPromptUnlogin(C) {
    if (C == "comment") {
		var _ = "publishUnlogin";
	} else if (C == "comment_reply") {
		_ = "publishUnlogin_reply";
	}
	var width = 390;
	var height = 264;
    var obj_message_layer = document.createElement("div");
	obj_message_layer.id = "messageBox";
	obj_message_layer.setAttribute("class","new_layer");
	obj_message_layer.setAttribute("className","new_layer");
	obj_message_layer.style.zIndex = "9999";
	obj_message_layer.style.width = width + "px";
	obj_message_layer.style.height = height + "px";

	obj_message_layer.innerHTML = '<div class="close"><a href="javascript:void(0);" id="closePromptUnlogin" onclick="return closeMessageBox(),!1"><img border="0" src="http://z.abang.com/d/user_new/pro_close.gif" alt="关闭"></a></div><div class="new_login"><div class="new_login_tit"><a href="http://home.abang.com/register?refer='+refer+'" target="_blank">注册</a>|<a href="http://www.abang.com/webapps/user/findpw.php" target="_blank">忘记密码</a></div><div class="open_error" style="display:none"><span id="error_login">请填写正确的信息</span></div><div class="name_psd"><div class="username"><input type="text" name="user_key" id="user_key" maxlength="50" class="name" onblur="inputDefault(this)" onfocus="inputDefault2(this)"><label id="user_mail"  for="user_key">请输入你的注册邮箱</label><span class="error" id="name_error">出错了</span></div><div class="userpsd"><input type="password" name="password" id="password" maxlength="20" class="pssd" onblur="inputDefault(this)" onfocus="inputDefault2(this)"  ><label id="user_psd"  for="password">输入密码</label><span class="error" id="psd_error">出错了</span></div></div><div class="captcha"><a onclick="return getCheckImage(),!1" href="javascript:void(0);"><img alt="验证码" src="http://home.abang.com/PV/user/checkcode.php?r='+ Math.random()+ '" id="checkimage"></a> <input type="text"   value="" class="reg_input02" maxlength="4" id="checkcode" name="checkcode" onblur="inputDefault(this)" onfocus="inputDefault2(this)"><label id="user_captcha" for="checkcode">输入验证码</label><span class="error" id="code_error">出错了</span></div><div class="newsubmit_confirm"><input type="submit" class="submit22" value="登录" onclick="return '+_+'(),!1"><label><input type="checkbox" checked id="login_status"><span>记住我</span></label></div></div>';
	//onblur="blurCheckCode()"
	document.body.appendChild(obj_message_layer);
	var clientH = document.documentElement.clientHeight;
	var clientW = document.documentElement.clientWidth;
	var offsetHeight = document.getElementById('messageBox').offsetHeight;
	var offsetWidth = document.getElementById('messageBox').offsetWidth;

	obj_message_layer.style.left = (clientW - offsetWidth)/2 + "px"; // 屏幕水平居中
	obj_message_layer.style.top =  (clientH - offsetHeight)/2 + "px"; // 屏幕垂直居中


	var $j = jQuery.noConflict();
	//按回车提交
	//$j('#user_key').focus();
	$j('#checkcode').keydown(function(event){
	  e = event ? event :(window.event ? window.event : null);
	  if($j("#messageBox").css("display")=="block"){
		  if(e.keyCode==13){
		   topLogin();
		   return false;
		  }
	  }
	});
    return false
}


function displayPromptLogin(C) {
    if (C == "comment") {
		var _ = "publishLogin";
		displayMaskLayer();
	} else if (C == "comment_reply") {
		_ = "publishLogin_reply";
	}
    var $ = getNickname(),
    A = parseInt(document.body.clientWidth),
    B = parseInt(document.body.scrollTop),
    D = document.createElement("div");
    D.id = "messageBox";
    D.setAttribute("class", "new_layer");
    D.setAttribute("className", "new_layer");
    D.style.bottom = "220px";
    D.style.zIndex = "9999";
    D.style.left = (parseInt(document.body.scrollWidth) - 449) / 2 + "px";
    D.innerHTML = "<div class=\"close\"><a href=\"javascript:void(0);\" id=\"closePromptLogin\" onclick=\"closeMessageBox();return false;\"><img src=\"http://z.abang.com.cn/d/user_new/pro_close.gif\" border=\"0\" alt=\"\u5173\u95ed\"></a></div><div class=\"l_blk01\" ><span style=\"font-sizt:14px;font-weight:bold;\">" + $ + "</span>\u8bf7\u9009\u62e9\u662f\u5426\u533f\u540d </div><div id=\"error_login_comment\" class=\"open_error\" style=\"display:none\">\u8bf7\u586b\u5199\u6b63\u786e\u7684\u4fe1\u606f</div><div class=\"select01\"><input type=\"radio\" name=\"publish_type\" id=\"publish_type1\" value=\"1\" checked />&nbsp;\u6635\u79f0\uff1a" + $ + "</div><div class=\"select01\"><input type=\"radio\"  name=\"publish_type\" id=\"publish_type1\" value=\"2\" />&nbsp;\u533f\u540d</div><div id=\"user_confirm\" class=\"submit_confirm\"><input type=\"button\" class=\"submit22\" onmouseover=\"this.className='submit2_h'\" onmouseout=\"this.className='submit22'\" value=\" \" onclick=\"" + _ + "();return false;\" /></div>";
    document.body.appendChild(D);
    return false
}

function displayPromptUnactivate(B) {
    if (B == "comment") var $ = "publishUnactivate";
    else if (B == "comment_reply") $ = "publishUnactivate_reply";
    var _ = parseInt(document.body.clientWidth),
    A = parseInt(document.body.scrollTop),
    C = document.createElement("div");
    C.id = "messageBox";
    C.setAttribute("class", "new_layer");
    C.setAttribute("className", "new_layer");
    C.style.bottom = "220px";
    C.style.zIndex = "9999";
    C.style.left = (parseInt(document.body.scrollWidth) - 449) / 2 + "px";
    C.innerHTML = "<div class=\"close\"><a href=\"javascript:void(0);\" id=\"closePromptUnactivate\" onclick=\"closeMessageBox();return false;\"><img src=\"http://z.abang.com/d/bg/close.gif\" alt=\"\u5173\u95ed\"></a></div><div class=\"w_blk01\" >\u60a8\u597d\uff0c\u4f60\u7684\u5e10\u6237\u672a\u80fd\u6fc0\u6d3b\uff0c\u60a8\u7684\u4fe1\u606f\u5c06\u4ee5\u6e38\u5ba2\u8eab\u4efd\u53d1\u5e03\u3002  </div><div class=\"submit52\"><input type=\"button\" class=\"submit22\" onmouseover=\"this.className='submit2_h'\" onmouseout=\"this.className='submit22'\" value=\" \"  onclick=\"" + $ + "();return false;\" /></div>";
    document.body.appendChild(C);
    return false
}
function checkLogin() {
    var _ = false,
    $ = getCookieValue("abang_user");
    if ($ != false) _ = true;
    return _
}
function getNickname() {
    var A = getCookieValue("abang_nick"),
    _ = getCookieValue("abang_eu"),
    $ = "";
    if (A != false) $ = A;
    else $ = _;
    return decodeURI($)
}
function checkContent() {
    var _ = $("content").value,
    C = /(\w)+(\.)?(\w)+@(\w+\.)+[a-z]{2,3}/gi,
    B = /(Q|q|QQ|qq|Qq|qQ){1}(:|是)?[1-9](\d){4,9}/gi,
    A = /(13|15)[1-9](\d){8}/g;
    if (clickContentCount == 0 || _ == "") {
        displayMaskLayer();
        displayMessageLayer("warning", "您好像......", "没有写任何内容哦？");
        return false
    } else if (_.length > 800) {
        displayMaskLayer();
        displayMessageLayer("error", "出错了^_^", "您输入的评论字数必须小于800");
        return false
    } else if (_.match(C) != null || _.match(B) != null || _.match(A) != null || _.indexOf("http") != -1 || _.indexOf(".com") != -1 || _.indexOf(".cn") != -1) {
        displayMaskLayer();
        displayMessageLayer("error", "出错了^_^", "评论内容不能包括邮件地址、</p><p>URL、qq号码或电话等信息");
        return false
    }
    return true
}
function checkRule() {
    if ($("checkrule").checked == false) {
        displayMaskLayer();
        displayMessageLayer("error", "出错了^_^", "您必须接受《用户须知》才能留言");
        return false
    }
    return true
}
function openRule() {
    subWin = window.open("http://comment.abang.com/note.htm", "newwindow", "height=443,width=500,top=200,left=200,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no, status=no");
    return false
}
function clearCommentContent($) {
    clickContentCount++;
    if (clickContentCount == 1 && ($.value == "\u53c2\u4e0e\u8ba8\u8bba\u3001\u4e0e\u66f4\u591a\u4eba\u5206\u4eab\u7cbe\u5f69\u751f\u6d3b" || $.value == "\u5728\u6b64\u7559\u4e0b\u4f60\u5bf9\u670b\u53cb\u3001\u5bb6\u4eba\u548c\u81ea\u5df1\u7684\u65b0\u5e74\u795d\u798f\u5427\uff01")) $.value = "";
    $.style.color = "#000000"
}
function getFace() {
    return 0
}
function submitData() {
    if (!checkContent() || !checkRule()) return false;
    else {
        var $ = checkLogin(),
        _ = getCookieValue("abang_user");
        if (_ !== false) {
            publishLogin();
            return false
        } else {
        	displayMaskLayer();
           	// displayPromptUnlogin("comment");
		  	displayTopLogin();
            return false
        }
    }
}
function publishUnlogin() {
    if ($("publish_type1").checked == true) {
        submitType = 1;
        document.getElementById('user_confirm').innerHTML = '<img align="absmiddle" src="http://z.abang.com/i/chhead/head_loading.gif"> 请等待';
        postData();
        return true
    } else {
		document.getElementById('user_confirm').innerHTML = '<img align="absmiddle" src="http://z.abang.com/i/chhead/head_loading.gif"> 请等待';
        login();
        return true
    }
}
function publishLogin() {
    submitType = 2;
    postData();
    return true
}
//判断控件在页面上是否存在
function exist_kj(name){
    var s=document.getElementById(name);
	if(s){ return 1;}
	else {return 0;}
}
function postData() {
    var _ = getFace();
	var bio_flag = exist_kj('bio_flag');
	var art_author_uid = exist_kj('art_author_uid');
    var A = "";
    A = A + "content=" + $("content").value;
    A = A + "&articleURL=" + $("articleURL").value;
    A = A + "&articleHead=" + $("articleHead").value;
    A = A + "&articleUser=" + $("articleUser").value;
    A = A + "&articleID=" + $("articleID").value;
    A = A + "&siteName=" + $("siteName").value;
    A = A + "&channelName=" + $("channelName").value;
    A = A + "&userip=" + $("userip").value;
    A = A + "&face=" + _;
    A = A + "&on_js=1";
	if(bio_flag==1){
		A = A + "&bio_flag=1";
	}
	if(art_author_uid == 1){
        A = A + "&art_author_uid=" + $("art_author_uid").value;
	}
    A = A + "&submitType=" + submitType;
    A = A + "&rand=" + Math.random();
    if (location.href.indexOf("comment.abang.com") != -1) var B = "http://comment.abang.com/webapps/comment/comment_post.php";
    else B = "http://" + site_name + ".abang.com/webapps/comment/comment_post.php";
    requestAjax(B, A, "post", commentCallback);
    return true
}
function commentCallback() {
	if (ajax.responseText != null)
	{
		var obj_msg = eval("(" + ajax.responseText + ")");
		if ( typeof(obj_msg.is_ok) != 'undefined' ) {
			if (obj_msg.is_ok=='P') {	//先发后审
				var sname = obj_msg.sname;
				var aid = obj_msg.aid;
				var A="sname=" + sname + "&aid=" + aid + "&r=" + Math.random();
				if (location.href.indexOf("comment.abang.com") != -1) var B = "http://comment.abang.com/webapps/comment/ajax_current.php";
				else B = "http://" + site_name + ".abang.com/webapps/comment/ajax_current.php";
				requestAjax(B, A, "get", currentCallback);
		
				removeAllTraces();
				if ($('mask')!=null) { document.body.removeChild($('mask'));}
			} else if(obj_msg.is_ok=='T') {
				removeAllTraces();
		        displayMaskLayer();
		        displayMessageLayer("success", "提交成功~", "请稍等编辑审批哦~");
		        if ($('mask')!=null) { document.body.removeChild($('mask'));}
		  //    setTimeout("if ($('mask')!=null) {document.body.removeChild($('messageBox'));document.body.removeChild($('mask'));}", 5000);
			} else if (obj_msg.is_ok=='F') {
				if (obj_msg.err_code==101) {
					displayMaskLayer();
					displayMessageLayer("error", "出错了^_^", "服务器忙碌，请稍候重试");
					if ($('mask')!=null) { document.body.removeChild($('mask'));}
					return false;
				} else if (obj_msg.err_code==102) {
					displayMaskLayer();
					displayMessageLayer("hint", "提交成功~", "请稍等编辑审批哦~");
					if ($('mask')!=null) { document.body.removeChild($('mask'));}
					return false;
				}
			}
		} else {
			displayMaskLayer();
			displayMessageLayer("error", "出错了^_^", "服务器忙碌，请稍候重试");
			if ($('mask')!=null) { document.body.removeChild($('mask'));}
			return false;
		}
	}
}
function currentCallback()
{
	if (ajax.responseText != null)
	{
		if (ajax.responseText == 'noFile')
		{
			return false;
		}
		else
		{
			var old_num = parseInt($('sp_comment_num').innerHTML);
			$('sp_comment_num').innerHTML = old_num + 1;
			$('comment_list').innerHTML = ajax.responseText;
			return true;
		}
	}
}
function login() {
    var _ = "user_key=" + $("user_key_comment").value + "&password=" + $("password_comment").value;
    if (location.href.indexOf("comment.abang.com") != -1) var A = "http://comment.abang.com/webapps/user/comment_login.php";
    else A = "http://" + site_name + ".abang.com/webapps/user/comment_login.php";
    requestAjax(A, _, "post", loginCallback);
    return true
}
function loginCallback() {
    if (ajax.responseText == "ok") {
        if ($("ifr_head") != null) {
            var _ = $("ifr_head").src;
            $("ifr_head").src = _
        }
        submitType = 2;
        if ($("remember").checked == true) submitType = 1;
        document.getElementById('user_confirm').innerHTML = '<img align="absmiddle" src="http://z.abang.com/i/chhead/head_loading.gif"> 请等待';
        postData();
        return false
    } else if (ajax.responseText == "error_password") {
        $("error_login_comment").innerHTML = "用户名，密码错误";
        $("error_login_comment").style.display = "block";
		document.getElementById('user_confirm').innerHTML = "<input type=\"button\" class=\"submit22\" onmouseover=\"this.className='submit2_h'\" onmouseout=\"this.className='submit22'\" value=\" \" onclick=\"publishUnlogin();return false;\" /><a href=\"http://www.abang.com/webapps/user/register.php\" target=\"_blank\">注册</a><a href=\"http://www.abang.com/help/user_v2/index.htm\" target=\"_blank\">帮助</a>";
        return false;
    } else if (ajax.responseText == "error_activate") {
        document.body.removeChild($("messageBox"));
        displayPromptUnactivate("comment");
        return false
    }
}
function clearLoginError() {
    $("error_login_comment").style.display = "none";
    if ($("publish_type2").checked == false) $("publish_type2").checked = true
}
function publishUnactivate() {
    submitType = 1;
    postData();
    return true
}
function removeAllTraces() {
    $("content").value = "";
    clickContentCount = 0
}
function OnClickQuote(_) {
    quote_num = _;
    $("replyBox").style.zIndex = "9999";
    $("replyBox").style.display = "block"
}
//评论的textarea的光标去除默认提示
function OnClickTextArea()
{
	var label_cover = document.getElementById('label_cover');
	if (label_cover == null)
		return;
	document.getElementById('reply_content').focus();
	label_cover.innerHTML = "";
	$j("#reply_content").blur(function(){
		if(document.getElementById('reply_content').value == "")
			label_cover.innerHTML = "请输入评论内容";
	});
}
//评论回复报错
function replyError($) {
    displayMaskLayer();
    displayMessageLayer("error", "对不起......", $);
    return false
}
//评论内容的验证
function checkContent_reply() {
    var _ = $("reply_content").value,
    C = /(\w)+(\.)?(\w)+@(\w+\.)+[a-z]{2,3}/gi,
    B = /(Q|q|QQ|qq|Qq|qQ){1}(:|是)?[1-9](\d){4,9}/gi,
    A = /(13|15)[1-9](\d){8}/g;
    if (_ == "") {
        replyError("您没有写任何内容哦？");
        return false
    } else if (_.length > 800) {
        replyError("文章评论字数需小于800");
        return false
    } else if (_.match(C) != null || _.match(B) != null || _.match(A) != null || _.indexOf("http") != -1 || _.indexOf(".com") != -1 || _.indexOf(".cn") != -1) {
        replyError("评论内容不能包括邮件地址、</p><p>URL、qq号码或电话等信息");
        return false
    }
    return true
}
//评论时候未勾选协议
function checkRule_reply() {
    if ($("checkrule_reply").checked == false) {
        replyError("您必须接受《用户须知》才能留言");
        return false
    }
    return true
}
//回复评论提交
function replySubmit() {
    if (!checkContent_reply() || !checkRule_reply()) return false;
    else {
        var $ = checkLogin(),
        _ = getCookieValue("abang_user");
        if (_ !== false) {
            publishLogin_reply();
            //displayPromptLogin("comment_reply");
            return false
        } else {
        	//displayPromptUnlogin("comment_reply");
        	displayMaskLayer();
			displayTopLogin(); 
			return false
        }
    }
}
function publishLogin_reply() {
    submitType = 2;
    postData_reply();
    return true
}
//提交评论回复
function publishUnlogin_reply() {
	 login_reply();
     return true
}
function login_reply() {
    var user_key = $j('#user_key').val();
	var password = $j('#password').val();
	var checkcode= $j('#checkcode').val();
	if($j("#login_status").attr("checked") == true){
		var login_status = 1;
	}else{
		var login_status = 0;	
	}
	var str_host = getHost();
	var url = "http://"+str_host+"/webapps/user/ajax_login3.php";
	$j.post(url,{user_key:user_key,password:password,checkcode:checkcode,login_status:login_status,r:Math.random()},function(json){
    	if (json.ok == 'ok'){
    		submitType = 2;
			closeMessageBox();
			topLoginOk();
			postData_reply();
        	return false
		}else{
			if (json.ccode == 'error_checkcode') { 
				setTimeout("hide('#code_error')",1);
				setTimeout("show('#code_error')",50)
				//$j('#name_error').hide(); 
				//$j('#psd_error').hide();
				$j('.newsubmit_confirm .submit').hide(); 
				$j('#headLoading').remove();
			}else{
				$j('#code_error').hide();
			}
			if(json.key == 'error_user_key'){
				setTimeout("hide('#name_error')",1);
				setTimeout("show('#name_error')",50);
				$j('.newsubmit_confirm .submit').show(); 
				$j('#headLoading').remove();
			}else if(json.key == 'correct_user_key'){ 
				$j('#name_error').hide();
			}
			if(json.pword == 'error_password'){
				setTimeout("hide('#psd_error')",1);
				setTimeout("show('#psd_error')",50);
				$j('.newsubmit_confirm .submit').show(); 
				$j('#headLoading').remove();
			}else{ 
				$j('#psd_error').hide();
			}
			if(json.ok == ''&&json.ccode == ''&&json.key == ''&&json.pword == ''){
				$j('#error_login').text('未知错误，请稍后重试');
				$j('#error_login').css("display",'block');
				$j('.newsubmit_confirm .submit').show();
				$j('#headLoading').remove();
			}		
		}
	},'json');
	/*var par = 'user_key=' + user_key + '&password=' + password +'&checkcode=' + checkcode +'&login_status=' + login_status +' &r=' + Math.random();
	requestAjax(url,par,'post',topLoginCallback);*/
	$j('.newsubmit_confirm .submit').hide();
	$j('.newsubmit_confirm').prepend('<img id="headLoading" src="http://z.abang.com/i/chhead/head_loading.gif" style="width:20px; height:20px; vertical-align:middle;margin-right:10px;"/>');

}
function postData_reply() {
    var _ = getReplyFace();
    var art_author_uid = exist_kj('art_author_uid');
    var A = "";
    A = A + "content=" + $("reply_content").value;
    A = A + "&articleURL=" + $("articleURL").value;
    A = A + "&articleHead=" + $("articleHead").value;
    A = A + "&articleUser=" + $("articleUser").value;
    A = A + "&articleID=" + $("articleID").value;
    A = A + "&siteName=" + site_name;
    A = A + "&channelName=" + $("channelName").value;
    A = A + "&userip=" + $("userip").value;
    A = A + "&face=" + _;
    if(art_author_uid == 1){
        A = A + "&art_author_uid=" + $("art_author_uid").value;
	}
    A = A + "&on_js=1";
    A = A + "&submitType=" + submitType;
    A = A + "&quote_num=" + quote_num;
    A = A + "&rand=" + Math.random();
    if (location.href.indexOf("comment.abang.com") != -1) var B = "http://comment.abang.com/webapps/comment/comment_post.php";
    else B = "http://" + site_name + ".abang.com/webapps/comment/comment_post.php";
    requestAjax(B, A, "post", replyCallback);
    return true
}
//评论回复内容验证
function replyCallback() {
    submitType = 0;
    if (ajax.responseText != null)
	{
		var obj_msg = eval("(" + ajax.responseText + ")");
		if ( typeof(obj_msg.is_ok) != 'undefined' ) {
			if (obj_msg.is_ok=='P') {
				var sname = obj_msg.sname;
				var aid = obj_msg.aid;
				var A="sname=" + sname + "&aid=" + aid + "&r=" + Math.random();
				if (location.href.indexOf("comment.abang.com") != -1) var B = "http://comment.abang.com/webapps/comment/ajax_current.php";
				else B = "http://" + site_name + ".abang.com/webapps/comment/ajax_current.php";
				requestAjax(B, A, "get", currentCallback);
		
				removeAllTraces();
				if (typeof(document.getElementById("mask"))!="undefined") {
					document.body.removeChild(document.getElementById("mask"));
				}
				if (typeof(document.getElementById("mask"))!="undefined") {
					document.body.removeChild(document.getElementById("mask"));
				}
		        $('replyBox').style.display = "none";
		        $('reply_content').value = '';
			} else if(obj_msg.is_ok=='T') {
				removeAllTraces();
				$('replyBox').style.display = "none";
		        $('reply_content').value = '';
				
				displayMaskLayer();
		        displayMessageLayer("success", "提交成功～", "请稍等编辑审批哦~");
		       if ($('mask')!=null) { document.body.removeChild($('mask'));}
		     //   setTimeout("if ($('mask')!=null) {document.body.removeChild($('messageBox'));document.body.removeChild($('mask'));}", 5000);
			} else if (obj_msg.is_ok=='F') {
				$('replyBox').style.display = "none";
		        $('reply_content').value = '';
				if (obj_msg.err_code==101) {
					displayMaskLayer();
	       			displayMessageLayer("error", "出错了^_^", "服务器忙碌，请稍候重试");
	       			if ($('mask')!=null) { document.body.removeChild($('mask'));}
	        		return false;
				} else if (obj_msg.err_code==102) {
					displayMaskLayer();
					displayMessageLayer("success", "提交成功～", "请稍等编辑审批哦~");
					if ($('mask')!=null) { document.body.removeChild($('mask'));}
					return false;
				}
			}
		}  else {
			displayMaskLayer();
   			displayMessageLayer("error", "出错了^_^", "服务器忙碌，请稍候重试");
   			if ($('mask')!=null) { document.body.removeChild($('mask'));}
    		return false;
		}
	}
}

function replyLoginCallback() {
    if (ajax.responseText == "ok") {
        if ($("ifr_head") != null) {
            var _ = $("ifr_head").src;
            $("ifr_head").src = _
        }
        submitType = 2;
        if ($("remember").checked == true) submitType = 1;
        postData_reply();
        return false
    } else if (ajax.responseText == "error_activate") {
        document.body.removeChild($("messageBox"));
        displayPromptUnactivate("comment_reply");
        return false
    } else if (ajax.responseText == "error_password") {
        $("error_login_comment").innerHTML = "用户名，密码错误";
        $("error_login_comment").style.display = "block";
        return false
    }
}
function publishUnactivate_reply() {
    submitType = 1;
    postData_reply();
    return true
}
function removeReplyTraces() {
    $("reply_content").value = "";
    $("checkrule_reply").checked = true;
    return false
}
function getReplyFace() {
    return 0
}
function closeReplyBox() {
    $("replyBox").style.display = "none";
    if (typeof(document.getElementById("mask"))!="undefined") {
    	document.body.removeChild(document.getElementById("mask"));
    }
}
function findUserComment() {
    if (location.href.indexOf("comment.abang.com") != -1) {
        var B = getCookieValue("abang_nick"),
        _ = getCookieValue("abang_eu"),
        $ = document.getElementsByTagName("b");
        for (var A = 0; A < $.length; A++) if ($[A].innerHTML == B || $[A].innerHTML == _) {
            $[A].setAttribute("class", "ubd");
            $[A].setAttribute("className", "ubd")
        }
    } else return false
}
/*  @20120723 change pin page to paginate */
function checkPinOrComment() {
	 if (location.href.indexOf("comment.abang.com") != -1) {
	 	return 'comment';
	 } else {
	 	return 'pin';
	 }
}
/*分页跳转
function goPage(p) {
	if ( checkPinOrComment() == 'comment' ) {
		return true;
	} else {
		var url = "http://" + site_name + ".abang.com/webapps/comment/ajax_pin_page.php";
		var param = 'aid=' + $("articleID").value;
		param += '&sname=' + site_name;
		param += "&page=" + p;
		param += "&r=" + Math.random();
		requestAjax(url, param, "get", goPageCallback);
		return false;
	}
}
function goPageCallback() {
	if (ajax.responseText != null) {
		if (ajax.responseText == 'noFile') {
			return false;
		} else {
			$('comment_list').innerHTML = ajax.responseText;
			balanceHeight();
			location.hash = "anchor_commentlist";
			 //$j(".itop_big_ban").css("clear","both");
			return false;
		}
	}
}
function goToPage() {
	if ( checkPinOrComment() == 'comment' ) {
	    var A = Number($("go_page").value),
	    _ = Number($("total_page").value);
	    if (A > 0 && A <= _) {
	        var B = location.href;
	        B = B.substr(0, B.indexOf("htm") + 3) + "?p=" + A;
	        location.href = B
	    } else {
	        displayMaskLayer();
	        displayMessageLayer("error", "对不起......", "您输入的页数不存在");
	        return false
	    }
	} else {
		var p =  Number($("go_page").value);
		goPage(p);
		return false;
	}
}
*/
function balanceHeight(){
	var iLeftH = $j('#left').height();
	var iRightH = $j('#right').height();
	var iAddLeftH = $j('#commBottom').height();
	var iAddRightH = $j('#alsoLike').height();
	var iDiffH = 0;
	if(iLeftH > iRightH){
		iDiffH = iLeftH - iRightH;
		$j('#alsoLike').css('height',iAddRightH + iDiffH +'px');
	}
	else{
		iDiffH = iRightH - iLeftH;
		$j('#alsoLike').css('height',iAddRightH - iDiffH +'px');
	}
}
/*点击回复弹出窗*/
function OnClickQuote2(_)
{
	quote_num=_;
	if ( ISIE6() ) {
		$("replyBox").style.position="absolute";
		$("replyBox").style.top = "";
		$("replyBox").style.bottom = "220px";
    	$("replyBox").style.left = (parseInt(document.body.scrollWidth) - 611) / 2 + "px";
	}
	$("replyBox").style.zIndex="9999";	
	if($j('#'+_+'_name a').length >0){
		$j('#replyBox .newtxt strong').html($j('#'+_+'_name a').html()+"：");
	}
	else{
		$j('#replyBox .newtxt strong').html($j('#'+_+'_name').html()+"：");
	}
	var cont = '';
	if($j('#'+_+'_cont').text() == ''){
		cont = $j('#'+_+'_cont').text().substr(0,84);
	}else{
		cont = $j('#'+_+'_cont').text().substr(0,84);
	}
	$j('#replyBox .quotetxt').text(cont+"……");
	displayMaskLayer();
	//定义弹出层的位置
	var left_pos = parseInt($j(window).width() - $j("#replyBox").width())/2;
	var top_pos = parseInt($j(window).height() - $j("#replyBox").height())/2;
	$j("#replyBox").css("left",left_pos).css("top",top_pos).css("display","block");
}
function ISIE6() {
	var isIE = (document.all) ? true : false;
	var isIE6 = isIE && ([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6);
	return isIE6;
}