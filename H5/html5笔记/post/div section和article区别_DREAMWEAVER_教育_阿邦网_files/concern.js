var mydiv_name = 'me_con';
var att_num = 'att_num';
function doConcern()
{
	uid = getCookieValue('abang_user');
	if ( uid )
	{	
		//直接ajax关注
			doAjaxConcern();
	}
	else
	{
		//弹出登陆层
		displayMaskLayer();
	//	displayLoginConcern();
		displayTopLogin();
	}
}
function doAjaxConcern()
{
	var url = '';
	var cur_url = window.location.href;
	if(typeof(cpt_site) != 'undefined')
	{
		url = 'http://' + cpt_site + '.abang.com/webapps/user/ajax_concern.php';
	}
	else
	{
		url = 'http://' + site + '.abang.com/webapps/user/ajax_concern.php';
	}
	var par = 'action=1&site=' + site + '&r=' + Math.random() + '--' + cur_url;
	requestAjax(url,par,'post',concernCallback);
}

function concernCallback()
{
	if (ajax.responseText == 'do')
	{
		$j('#join').html("<span class='joined'></span>");
     
	 var tUrl = 'http://'+str_host+'/webapps/qq_connect/add_guide_share_qq.php';
	  
	  tUrl+= '?site='+site+'&r='+Math.random();

	  $j.get(tUrl, function(data){});

		var att_num = parseInt($j('#att_num').html());
		if ( isNaN(att_num) )
		{
			$j('#att_num').html("1");
		}
		else
		{
			$j('#att_num').html(att_num+1);
		}
		displayMaskLayer();
		displayMessageConcern("success","关注成功","您可以随时在<a href='http://home.abang.com/PV/user/index.php'>用户中心</a>查看相关动态");
		setTimeout('location.reload()',4000);
		
	}
	else if (ajax.responseText == 'havedone')
	{
		$j('#join').html("<span class='joined'></span>");
	    displayMaskLayer();
		displayMessageConcern("warning","您已经关注过了～","您可以随时在<a href='http://home.abang.com/PV/user/index.php'>用户中心</a>查看相关动态或者取消关注");
	}
	else
	{
		displayMaskLayer();
		displayMessageConcern('error','出错了！','未知错误，请稍后重试。');
	}
}
  /************************************ 
 ** 函数名:displayMessageConcern 
 ** 功能描述:显示留言留言成功或错误的层
 ** 作 者:王振国 
 ** 日 期:2009-3-17 
 ***********************************/
 function displayMessageConcern(mark,title,content)
 {
	var clientheight = parseInt(document.body.clientWidth);
    var scrollheight = parseInt(document.body.scrollTop);
    var obj_message_layer = document.createElement("div");
	obj_message_layer.id = "messageBox";
	obj_message_layer.setAttribute("class","adm2");
	obj_message_layer.setAttribute("className","adm2");
	obj_message_layer.style.zIndex = "9999";
	obj_message_layer.innerHTML = '<div class="pro_tit"><a href="javascript:void(0);" id="closeMessageBox" onclick="closeMessageBox();return false;"><img src="http://z.abang.com/d/user_new/pro_close.gif" alt="关闭"></a></div><div class="pro_lr"><div class="pro_img"><img src="http://z.abang.com/f/icon/' + mark + '.gif"  align="absmiddle" /></div><div class="pro_r"><div class="pro_infor1">' + title + '</div><p class="pro_infor2">' + content + '</p><div class="pro_button"><input type="button" value="确定" name="submit" class="pro_sub" onclick="closeMessageBox();return false;"/></div></div></div><div id="error2" class="landerr2"></div>';
	document.body.appendChild(obj_message_layer);	
	obj_message_layer.style.left = (parseInt(document.body.scrollWidth) - 300) / 2 + "px"; // 屏幕居中
	obj_message_layer.style.bottom = "220px";
	return false;	
}
/*
function closeMessageBox()
{
	document.body.removeChild(document.getElementById('messageBox'));
	document.body.removeChild(document.getElementById('mask'));
	return true;
}

function displayLoginConcern()
{
	var width = 480;
	var height = 330;
	var window_size = getViewportSize();
	if (width > window_size[0])
	{
		var left = 0;
	}
	else
	{
		var left = (window_size[0] - width)/2;
	}
	if (height > window_size[1])
	{
		var top = 0;
	}
	else
	{
		var top = (window_size[1] - height)/2;
	}
	
    var obj_message_layer = document.createElement("div");
	obj_message_layer.id = "messageBox";
	obj_message_layer.setAttribute("class","new_layer");
	obj_message_layer.setAttribute("className","new_layer");
	obj_message_layer.style.zIndex = "9999";
	obj_message_layer.style.top = top + "px";
	obj_message_layer.style.left = left + "px";
	obj_message_layer.style.width = width + "px";
	obj_message_layer.style.height = height + "px";
	obj_message_layer.innerHTML = '<div class="close"><a href="javascript:void(0);" id="closePromptUnlogin" onclick="closeMessageBox();return false;"><img border="0" src="http://z.abang.com.cn/d/user_new/pro_close.gif" alt="关闭"></a></div><div class="new_login"><div class="new_login_tit">您需要登录才能关注帮手</div><div id="error_login" class="open_error" style="display:none">请填写正确的信息</div><div class="newlname2">用户名 <input type="text" name="user_key" id="user_key" maxlength="50" class="textr" onfocus="clearLoginError();return false;"></div><div class="newlpass2">密　码 <input type="password" name="password" id="password" maxlength="20" class="textr" onfocus="clearLoginError();return false;"></div><div class="newremenber"><input type="checkbox" checked="true" id="login_status"><span> 记住我的登录状态</span></div><div class="newsubmit_confirm"><input type="button" class="submit22" value="登录" onclick="concernLogin();return false;"><a href="http://www.abang.com/webapps/user/findpw.php" target="_blank">忘记密码</a></div><div class="newlnote">还没有帐号？<a href="http://www.abang.com/webapps/user/register.php" target="_blank">立即注册</a></div><div class="new_coope_tit">通过合作网站登录阿邦</div><div class="new_coope_btn" ><a class="ucont_r_btn3" href="javascript:void(0);" style="cursor:pointer">微博登录</a></div><div class="new_coope_btn"><a class="ucont_r_btn4"  href="javascript:void(0);" >QQ登录</a></div><div class="new_coope_btn"><a class="ucont_r_btn5" href="javascript:void(0);">淘宝登录</a></div><div class="new_coope_btn"><a class="ucont_r_btn6" href="javascript:void(0);">网易登录</a></div></div></div>';
	document.body.appendChild(obj_message_layer);
	var $j = jQuery.noConflict();
	$j(document).ready(function(){
		 $j(".ucont_r_btn3").click(function(){
			toSinaLogin("addInformation");
		 });
		$j(".ucont_r_btn4").click(function(){
			toQzoneLogin("addInformation");
		 });
		$j(".ucont_r_btn5").click(function(){
			toTaobaoLogin("addInformation");
		 });
		$j(".ucont_r_btn6").click(function(){
			toT163Login("addInformation");
		 });
	});
	return true;
}

function concernLogin()
{
	var user_key = $('#user_key').value;
	var password = $('#password').value;
	if($("#login_status").attr("checked") == true){
		var login_status = 1;
	}else{
		var login_status = 0;	
	}
	var str_host = getHost();

	
	var url = "http://"+str_host+"/webapps/user/ajax_login.php";
	//var par = 'user_key=' + user_key + '&password=' + password + '&r=' + Math.random();
	var par = 'user_key=' + user_key + '&password=' + password + '&login_status=' + login_status +' &r=' + Math.random();
	requestAjax(url,par,'post',concernLoginCallback);
}
function concernLoginCallback()
{
	if (ajax.responseText == 'ok'){
		closeMessageBox();
		doAjaxConcern();
		window.location.reload();
		return false;
	} else if(ajax.responseText == 'error_password'){
		$('error_login').innerHTML = '帐户名或密码错误';
		$('error_login').style.display = 'block';
	} else if(ajax.responseText == ''){
		$('error_login').innerHTML = '未知错误，请稍后重试';
		$('error_login').style.display = 'block';
	} else{
		var returnjson = eval("("+ajax.responseText+")");
		//alert(arr[1]);return;
		window.location.href="http://home.abang.com/webapps/user/reg_post.php?user_key="+returnjson[1];
	}

}
function clearLoginError()
{
	$('error_login').style.display = 'none';
}
function thirdConcernLoginBack(){
      	
		closeMessageBox();
		doAjaxConcern();
		document.getElementById("ifr_head").src = "http://z.abang.com/z/ifr/login.htm";
		var $j = jQuery.noConflict();
        $j(".head_cooper").css("display","none");
		return false;
}*/
/*head新登录
function displayTopLogin()
{
	var width = 480;
	var height = 330;
	var window_size = getViewportSize();
	if (width > window_size[0])
	{
		var left = 0;
	}
	else
	{
		var left = (window_size[0] - width)/2;
	}
	if (height > window_size[1])
	{
		var top = 0;
	}
	else
	{
		var top = (window_size[1] - height)/2;
	}
	
    var obj_message_layer = document.createElement("div");
	obj_message_layer.id = "messageBox";
	obj_message_layer.setAttribute("class","new_layer");
	obj_message_layer.setAttribute("className","new_layer");
	obj_message_layer.style.zIndex = "9999";
	obj_message_layer.style.top = top + "px";
	obj_message_layer.style.left = left + "px";
	obj_message_layer.style.width = width + "px";
	obj_message_layer.style.height = height + "px";
	obj_message_layer.innerHTML = '<div class="close"><a href="javascript:void(0);" id="closePromptUnlogin" onclick="closeMessageBox();return false;"><img border="0" src="http://z.abang.com.cn/d/user_new/pro_close.gif" alt="关闭"></a></div><div class="new_login"><div class="new_login_tit">您需要登录才能关注帮手</div><div id="error_login" class="open_error" style="display:none">请填写正确的信息</div><div class="newlname2">用户名 <input type="text" name="user_key" id="user_key" maxlength="50" class="textr" onfocus="clearLoginError();return false;"></div><div class="newlpass2">密　码 <input type="password" name="password" id="password" maxlength="20" class="textr" onfocus="clearLoginError();return false;"></div><div class="newremenber"><input type="checkbox" checked="true" id="login_status"><span> 记住我的登录状态</span></div><div class="newsubmit_confirm"><input type="button" class="submit22" value="登录" onclick="topLogin();return false;"><a href="http://www.abang.com/webapps/user/findpw.php" target="_blank">忘记密码</a></div><div class="newlnote">还没有帐号？<a href="http://www.abang.com/webapps/user/register.php" target="_blank">立即注册</a></div><div class="new_coope_tit">通过合作网站登录阿邦</div><div class="new_coope_btn" ><a class="ucont_r_btn3" href="javascript:void(0);" style="cursor:pointer">微博登录</a></div><div class="new_coope_btn"><a class="ucont_r_btn4"  href="javascript:void(0);" >QQ登录</a></div><div class="new_coope_btn"><a class="ucont_r_btn5" href="javascript:void(0);">淘宝登录</a></div><div class="new_coope_btn"><a class="ucont_r_btn6" href="javascript:void(0);">网易登录</a></div></div></div>';
	document.body.appendChild(obj_message_layer);
	var $j = jQuery.noConflict();
	$j(document).ready(function(){
		 $j(".ucont_r_btn3").click(function(){
			toSinaLogin("addInformation");
		 });

		$j(".ucont_r_btn4").click(function(){
			toQzoneLogin("addInformation");
		 });
		$j(".ucont_r_btn5").click(function(){
			toTaobaoLogin("addInformation");
		 });
		 $j(".ucont_r_btn6").click(function(){
			toT163Login("addInformation");
		 });
	});
	return true;
}*/