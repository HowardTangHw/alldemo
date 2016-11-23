var $j = jQuery.noConflict();
var str_host = '';
var getHost = function(url) {
        var host = "null";
        if(typeof url == "undefined"
                        || null == url)
                url = window.location.href;
        var regex = /.*\:\/\/([^\/]*).*/;
        var match = url.match(regex);
        if(typeof match != "undefined"
                        && null != match)
                host = match[1];
        return host;
}
str_host = getHost();
$j(document).ready(function(){
	var getArray = getUrl();
	
	if(typeof(getArray["third_function"])=='string'){
		eval(getArray["third_function"]+'()');
	}
	//add by gyj 2012-10-11 for 张文宇注册登录需求更改 start 
		var strs=str_host.split(".");
		var url = window.location.href;
		var strs_=url.split("=");

		if(strs_[1]!=null){
			$j("#login_refer_url").attr("href","http://home.abang.com/login?refer="+strs_[1]);
		} else {
			$j("#login_refer_url").attr("href","http://home.abang.com/login?refer=pin");
		}
		if(strs[0]!=null){
			$j("#register_refer_url").attr("href","http://home.abang.com/register?refer="+strs[0]);
		} else {
			$j("#register_refer_url").attr("href","http://home.abang.com/register?refer=pin");
		}
		$j("#login_refer_url_click").click( function() {
			headerLogin(''+strs[0]+'');
		});
	//add by gyj 2012-10-11 for 张文宇注册登录需求更改 end
	//关闭信息提示框
	$j("#close_msg").click(function(){
		$j(".small_nav2").css("display","none");
        $j("#msg_bg").css("display","none");
	});

	//当鼠标移到登录模块部分,用户名还有信息等显示信息列表
	$j('.big_nav_c2 li').hover(
		function(){ 
			$j('ul',this).show();			
			$j(".small_nav2").hide();
		},
		function(){ 
			$j('ul',this).hide();		
		}
	);
    //当鼠标移出登陆框，出现提示框
	$j('#headLoginOk').mouseleave(function(){
	  if($j(".small_nav2").length > 0)
	  {
	  	 setTimeout(function(){$j(".small_nav2").show();},3000);
	  }
	});

});

function getUrl(){
    var $_GET = new Array();
    var u = window.location.toString();
    u = u.split('?');
    if(typeof(u[1]) == 'string'){
		u=u[1].split('&');
		for(i=0;i<u.length;i++){
			s=u[i].split("=");
			eval('$_GET["' + s[0] + '"]' + '="' + s[1]+'"');
		}
    }    
    return $_GET;
}
/**
function toTaobaoLogin(callback){
	var str_host = getHost();
	//alert(str_host);
	var inviter_id = getCookieValue("inviter_id");
	var tUrl = "http://"+str_host+"/webapps/product_evaluate/gyj_taobao.php?backJs="+callback+'&host='+str_host+'&backUrl='+window.location.href;
	if(inviter_id){
	tUrl+= "&inviter_id="+inviter_id;
	}
	tUrl+= '&r='+Math.random();
	window.open(tUrl);
}
function toT163Login(callback){
	var str_host = getHost();
	//alert(str_host);
	var inviter_id = getCookieValue("inviter_id");
	var tUrl = "http://"+str_host+"/webapps/product_evaluate/t163.php?backJs="+callback+'&host='+str_host+'&backUrl='+window.location.href;
	if(inviter_id){
	tUrl+= "&inviter_id="+inviter_id;
	}
	tUrl+= '&r='+Math.random();
	window.open(tUrl);
}

function toSinaLogin(callback){
var str_host = getHost();
var inviter_id = getCookieValue("inviter_id");
var tUrl = "http://"+str_host+"/webapps/sina_connect/redirect_login.php?backJs="+callback+'&host='+str_host+'&backUrl='+window.location.href;
if(inviter_id){
	tUrl+= "&inviter_id="+inviter_id;
}
tUrl+= '&r='+Math.random();
                //childWindow = window.open(tUrl,"TencentLogin","width=650,height=420,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1");
                window.open(tUrl);
}
function toQzoneLogin(callback){
var str_host = getHost();
var inviter_id = getCookieValue("inviter_id");
var tUrl = "http://"+str_host+"/webapps/qq_connect/oauth/redirect_to_login.php?backJs="+callback+'&host='+str_host+'&backUrl='+window.location.href;
if(inviter_id){
	tUrl+= "&inviter_id="+inviter_id;
}
tUrl+= '&r='+Math.random();
//childWindow = window.open(tUrl,"TencentLogin","width=650,height=420,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1");
                window.open(tUrl);
}  

function toQzoneConnect(callback){
var str_host = getHost();
var tUrl = "http://"+str_host+"/webapps/qq_connect/oauth/redirect_to_login.php?backJs="+callback+'&host='+str_host+'&connect=1'+'&r='+Math.random(); 
                //childWindow = window.open(tUrl,"TencentLogin","width=650,height=420,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1");
                window.open(tUrl);
} 

function toKaixinLogin(callback){
var str_host = getHost();
var tUrl = "http://"+str_host+"/webapps/user/kaixin_connect/redirect_login.php?backJs="+callback+'&host='+str_host+'&r='+Math.random();
                //childWindow = window.open(tUrl,"TencentLogin","width=650,height=420,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1");
                window.open(tUrl);
} 

function toKaixinConnect(callback){
var str_host = getHost();
var tUrl = "http://"+str_host+"/webapps/user/kaixin_connect/redirect_login.php?backJs="+callback+'&host='+str_host+'&connect=1'+'&r='+Math.random(); 
                //childWindow = window.open(tUrl,"TencentLogin","width=650,height=420,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1");
                window.open(tUrl);
} 
**/
function getCookieValue( cookie_name )
{
	var cookies = document.cookie.split("; ");			//分号+空格？浏览器自动加的吗？
	for (var i=0; i < cookies.length ; i++ )
	{
		var subcookies = cookies[i].split("=");
		if ( subcookies[0] == cookie_name )
		{
			return decodeURI(subcookies[1]);
		}
	}
	return false;
}
jQuery.fn.center = function() {
        this.css("position", "absolute");
		var tTop = 	($j(window).height() - this.height()) / 2 + $j(window).scrollTop();
		if(tTop < 0) {
			tTop = 100;
			
		}
        this.css("top", tTop + "px");
        this.css("left", ($j(window).width() - this.width()) / 2 + $j(window).scrollLeft() + "px");
		if(tTop < 150){
			window.scrollTo(0,0); 
		}
        return this;
}
function clear_input(id){
	$j("#"+id).val('');
	$j("#"+id).css("color","#333333");
}
function thirdLoginBack(){
	if(window.location.href.indexOf('user/register')!=-1
		||window.location.href.indexOf('user/logon')!=-1){
		var bPos = 	window.location.href.indexOf('backurl');
		if(bPos>-1){
		   var tLocation = window.location.href.substring(bPos+8);
		} else {
		   var tLocation = "http://pin.abang.com";
		}
	   window.location = tLocation;
	} else {
	    window.location.reload();
	}
}
function addInformationPin(){
	 closeMessageBox();
     addInformation();
}
function addInformation(){
	   //window.location.reload();
	   var obj_message_layer = document.createElement("div");
		obj_message_layer.innerHTML = show_add_info();
		obj_message_layer.id = "infomationBox";

		document.body.appendChild(obj_message_layer);
		
		obj_message_layer.style.position = "absolute";
		var tTop = 	($j(window).height() - 385) / 2 + $j(window).scrollTop();
		if(tTop < 0) {
			tTop = 100;
			
		}
		obj_message_layer.style.top = tTop + "px";
        
		var tLeft= 	($j(window).width() - 500) / 2 + $j(window).scrollLeft();
		obj_message_layer.style.left = tLeft + "px";
		if(tTop < 150){
			window.scrollTo(0,0); 
		}
		obj_message_layer.style.zIndex = "9999";
		displayMaskLayer();
		$j(document).ready(function(){
			$j("#third_key").bind("focus", function(){
		   if($j("#third_key").val()=='电子邮箱'){
			  clear_input("third_key");
		   }
			$j("#email_tip").show();
			$j("#email_error").hide();
			$j("#email_ok").hide();
		 });
		$j("#user_nick").bind("focus", function(){
		   if($j("#user_nick").val()=='用户昵称'){
			clear_input("user_nick");
			}
			$j("#nick_tip").show();
			$j("#nick_error").hide();
			$j("#nick_ok").hide();
		 });
		$j("#pass01").focus(function(){
			$j("#pass01").hide();
			$j("#pass1").show();
			$j("#pass1").focus();
			$j("#pass1").css("color","#333333");
			$j("#pass_tip").show();
		 });
		$j("#pass02").focus(function(){
			$j("#pass02").hide();
			$j("#pass2").show();
			$j("#pass2").focus();
			$j("#pass2").css("color","#333333");
			$j("#repass_tip").show();
		 });
			 
			  var tNick = getCookieValue('abang_nick');
			  
			  if (tNick){
				   clear_input('user_nick');
				   $j("#user_nick").val(tNick);
				   check_nick();
			  }
		});
		$j("#third_key").blur(function(){
		  if($j('#third_key').val()==''){
		 $j('#third_key').val('电子邮箱');
		 $j("#third_key").css("color","#CCCCCC");
		 $j("#email_tip").hide();
		 }
	 });
	$j("#user_nick").blur(function(){
		  if($j('#user_nick').val()=='<{$nick_name}>'){
		  check_nick();
		  $j("#nick_tip").hide();
		 }
		  if($j('#user_nick').val()==''){
		  $j('#user_nick').val('用户昵称');
		  $j('#user_nick').css("color","#CCCCCC");
		  $j("#nick_tip").hide();
		 }
	 });
	  $j("#pass1").blur(function(){
		 if($j('#pass1').val()==''){
			 $j("#pass01").show();
			 $j("#pass1").hide();
			 $j("#pass_tip").hide();
			 }
		 });

		  $j("#pass2").blur(function(){
		 if($j('#pass2').val()==''){
			 $j("#pass02").show();
			 $j("#pass2").hide();
			 $j("#repass_tip").hide();
			 }
		 });
}

function check_email(){   
   var email_val = $j.trim($j("#third_key").val());
    if(email_val==''||email_val=='电子邮箱'){
	 $j("#email_ok").hide();
     $j("#email_tip").show();
	 $j('#email_error').hide();
       return false;
   }
   var search_str = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
   if(!search_str.test(email_val)){
	 $j("#email_ok").hide();
	 $j("#email_tip").hide();
     $j("#email_error").html('请输入正确的邮箱地址');			  
	 $j('#email_error').show();
	 return false;
   } else {
		var tUrl ="/webapps/sina_connect/?action=checkUser&key="+$j.trim($j("#third_key").val())+'&r='+Math.random();;
		$j.get(tUrl,function(data){
		if(data=='0'){
		  $j("#email_ok").hide();
		  $j("#email_tip").hide();
		  $j("#email_error").html('该邮箱地址已被注册，<a href="http://home.abang.com/login?refer=pin">登录？</a>');
		  $j('#email_error').show();
		  return false;
		}else {
		   $j("#email_tip").hide();
		   $j("#email_error").hide();
		   $j("#email_ok").show();
		   return true;
        }
   });
  }
}
function check_nick(){
   var nick_val = $j.trim($j("#user_nick").val());
   var uid = getCookieValue('abang_user');
   if(nick_val==''){
	   $j("#nick_tip").show();
	   $j("#nick_error").hide();
	   $j("#nick_ok").hide();
       return false;
   }
    var search_str = /^[\w\_\u4e00-\u9fa5][\w\_\u4e00-\u9fa5]*[\w\_\u4e00-\u9fa5]$/;
   if(!search_str.test(nick_val)){
	 $j("#nick_ok").hide();
	 $j("#nick_tip").hide();
     $j("#nick_error").html('仅支持中英文、数字和"_"');				  
	 $j('#nick_error').show();
	 return false;
   } 
   if(getNLength(nick_val)<4){
     $j("#nick_error").html('不能少于4个字符或2个汉字');
	 $j("#nick_error").show();
     $j("#nick_ok").hide();
	 $j("#nick_tip").hide();
	 return false
   } 
   
    if(getNLength(nick_val)>16){
     $j("#nick_error").html('不能超过16个字符或8个汉字');
	 $j("#nick_error").show();
     $j("#nick_ok").hide();
	 $j("#nick_tip").hide();
	 return false
   } 
   else {
    var tUrl ="/webapps/sina_connect/?action=checkNick&key="+encodeURIComponent($j.trim($j("#user_nick").val()))+'&uid='+uid+'&r='+Math.random();
	//alert(tUrl);
    $j.get(tUrl,function(data){
		//alert(data);
    if(data=='0'){
      $j("#nick_error").html('此昵称太受欢迎，已经被注册了');
	  $j("#nick_error").show();
     $j("#nick_ok").hide();
	 $j("#nick_tip").hide();
	 return false
    }else {
       $j("#nick_error").hide();
	   $j("#nick_tip").hide();
       $j("#nick_ok").show();
	   return true;
    }

   });
  }
   
}
function check_pass(){
    var pass_val = $j("#pass1").val();
	if(pass_val==''){
	   $j("#pass_tip").show();
	   $j("#pass_error").hide();
	   $j("#pass_ok").hide();
       return false;
    }
	if(pass_val.length<6){
	   $j("#pass_error").html('密码太短了，不少于6个字符');
	   $j("#pass_error").show();
	   $j("#pass_tip").hide();
	   $j("#pass_ok").hide();
	   return false;
	} else if(pass_val.length>20){
	   $j("#pass_error").html('密码太长了，不超过20个字符');
	   $j("#pass_error").show();
	   $j("#pass_tip").hide();
	   $j("#pass_ok").hide();
	   return false;
	}else {
		$j("#pass_tip").hide();
	   $j("#pass_error").hide();
	   $j("#pass_ok").show();
	   return true;
	}
}
function check_repass(){
    var pass_val = $j("#pass2").val();
	if(pass_val==''){
	   $j("#repass_tip").show();
	   $j("#repass_error").hide();
	   $j("#repass_ok").hide();
       return false;
    }
	if(pass_val!=$j("#pass1").val()){
	   $j("#repass_error").html('和密码不一致，是不是输错了?');
	   $j("#repass_error").show();
	   $j("#repass_ok").hide();
	   $j("#repass_tip").hide();
	   return false;
	} else {
	   $j("#repass_error").hide();
	   $j("#repass_ok").show();
	   $j("#repass_tip").hide();
	   return true;
	}
}
function show_add_info(){
	var tHtml = '';
	tHtml+= '<div class="reg_win">';
	tHtml+= '<table width="380" border="0" cellspacing="0" cellpadding="0" class="tab02">';
	tHtml+= '  <tr>';
	tHtml+= '    <td><span class="td01">';
	tHtml+= '      <input name="input" type="text" id="third_key" class="reg_input03" value="电子邮箱" onblur="check_email();"/>';
	tHtml+= '    </span></td>';
	tHtml+= '    <td><div class="notes04" id="email_error"></div><div class="notes05" id="email_tip" style="display:none">请输入您常用的邮箱</div><div class="notes06" id="email_ok" style="display:none"></div></td>';
	tHtml+= '  </tr>';
	tHtml+= '  <tr>';
	tHtml+= '    <td class="td01"><input id="user_nick" type="text" class="reg_input03" value="用户昵称" onblur="check_nick();"/></td>';
	tHtml+= '    <td><div class="notes05" id="nick_tip" style="display:none">4-16个字符，支持中英文、数字和"_"</div><div class="notes06" id="nick_ok" style="display:none"></div><div class="notes04" id="nick_error"></div></td>';
	tHtml+= '  </tr>';

	tHtml+= '  <tr>';
	tHtml+= '    <td><span class="td01">';
	tHtml+= '      <input name="input2" type="text" class="reg_input03" id="pass01" value="密  码"/>';
	tHtml+= '      <input name="input2" type="password" class="reg_input03" id="pass1" onblur="check_pass()" style="display:none;"/>';
	tHtml+= '    </span></td>';
	tHtml+= '    <td><div class="notes05" id="pass_tip" style="display:none">密码由6-20个字符组成</div><div class="notes04" id="pass_error"></div><div class="notes06" id="pass_ok" style="display:none"></div></td>';
	tHtml+= '  </tr>';
	tHtml+= '  <tr>';
	tHtml+= '    <td><span class="td01">';
	tHtml+= '      <input name="input3" type="text" class="reg_input03" id="pass02" value="确认密码"/>';
	tHtml+= '      <input name="input3" type="password" class="reg_input03" id="pass2" onblur="check_repass()" style="display:none;"/>';
	tHtml+= '    </span></td>';
	tHtml+= '    <td><div class="notes05" id="repass_tip" style="display:none">请再次输入密码</div><div class="notes04" id="repass_error"></div><div class="notes06" id="repass_ok" style="display:none"></div></td>';
	tHtml+= '  </tr>';
	tHtml+= '  <tr>';
	tHtml+= '    <td colspan="2"><input type="checkbox" name="checkbox" id="user_agree" class="reg_input07" onclick="check_agree()" checked/>我已阅读并同意<a href="http://intro.abang.com/privacy.htm" target="_blank">《隐私保护》</a><div class="notes04" id="agree_error"></div></td>';
	tHtml+= '    </tr>';
	tHtml+= '  <tr>';									 
	tHtml+= '    <td colspan="2" class="td04" ><input type="button" onclick="submit_add();" class="reg_input06" /><a href="javascript:void(0)" onclick="closeInfoBox();">下次填写</a></td>';
	tHtml+= '    </tr>';
	tHtml+= '</table>';
	tHtml+= '<div class="reg_close"><a href="javascript:void(0)" onclick="closeInfoBox();"><img src="http://z.abang.com/i/abang_reg/regist_space.gif" width="20" height="20" /></a></div>';
	tHtml+= '</div>'; 
	return tHtml;
}
function closeInfoBox()
{
	document.body.removeChild(document.getElementById('infomationBox'));
	document.body.removeChild(document.getElementById('mask'));
	/*if(window.location.href.indexOf('user/register')!=-1
		||window.location.href.indexOf('user/logon')!=-1){
		var bPos = 	window.location.href.indexOf('backurl');
		if(bPos>-1){
		   var tLocation = window.location.href.substring(bPos+8);
		} else {
		   var tLocation = "http://pin.abang.com";
		}
	   window.location = tLocation;
	}*/
	//document.location.reload();//当前页面
	//window.location.reload();
}
function check_agree(){
	 if(!$j("#user_agree").attr("checked")){
		 $j("#agree_error").html("请阅读并同意《隐私保护》");
		 $j("#agree_error").show();
		 return false;
	} else {
		 $j("#agree_error").hide();
		 return true;
	}

}
function submit_add(){
	var uid = getCookieValue('abang_user');
	if(!uid){
	     alert("请登录后再试!");
		 return false;

	}
    var email_val = $j.trim($j("#third_key").val());
   if(email_val==''||email_val=='电子邮箱'){
	 $j("#email_ok").hide();
     $j("#email_tip").show();
     $j('#third_key').focus();
	 $j('#email_error').hide();
       return false;
   }
   var search_str = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
   if(!search_str.test(email_val)){
	 $j("#email_ok").hide();
	 $j("#email_tip").hide();
     $j("#email_error").html('请输入您常用的有效e-mail地址');
     $j('#third_key').focus();					  
	 $j('#email_error').show();
	 return false;
   } else {
		var tUrl ="/webapps/sina_connect/?action=checkUser&key="+$j.trim($j("#third_key").val())+'&r='+Math.random();;
		$j.get(tUrl,function(data){
			if(data=='0'){
			  $j("#email_ok").hide();
			  $j("#email_tip").hide();
			  $j("#email_error").html('该邮箱已注册过阿邦，请重试');
			   $j('#third_key').focus();
			  $j('#email_error').show();
			  return false;
			}else {
			   $j("#email_tip").hide();
			   $j("#email_error").hide();
			   $j("#email_ok").show();
			   var nick_val = $j.trim($j("#user_nick").val());
			   if(nick_val==''){
				   $j("#nick_tip").show();
				   $j("#nick_ok").hide();
				   $j("#nick_ok").hide();
				   $j('#user_nick').focus();	
				   return false;
			   }
				var search_str = /[\w\_]*[\u4e00-\u9fa5]*/;
			   if(!search_str.test(nick_val)){
				 $j("#nick_ok").hide();
				 $j("#nick_tip").hide();
				 $j("#nick_error").html('仅支持中英文、数字和"_"');
				 $j('#user_nick').focus();					  
				 $j('#nick_error').show();
				 return false;
			   } 
			   if(getNLength(nick_val)<4){
				 $j("#nick_error").html('太短了,不少于4个字符(汉字占两个字符)');
				 $j('#user_nick').focus();
				 $j("#nick_error").show();
				 $j("#nick_ok").hide();
				 $j("#nick_tip").hide();
				 return false
			   } 
			   
				if(getNLength(nick_val)>16){
				 $j("#nick_error").html('太长了,不超过16个字符(汉字占两个字符)');
				 $j('#user_nick').focus();
				 $j("#nick_error").show();
				 $j("#nick_ok").hide();
				 $j("#nick_tip").hide();
				 return false
			   } 
			   else {
				var tUrl ="/webapps/sina_connect/?action=checkNick&key="+$j.trim($j("#user_nick").val())+'&uid='+uid+'&r='+Math.random();
				$j.get(tUrl,function(data){
				if(data=='0'){
				  $j("#nick_error").html('该昵称已存在，请重试');
				  $j('#user_nick').focus();
				  $j("#nick_error").show();
				 $j("#nick_ok").hide();
				 $j("#nick_tip").hide();
				 return false
				}else {
				   $j("#nick_error").hide();
				   $j("#nick_tip").hide();
				   $j("#nick_ok").show();
				   if( ! check_pass() ){
						return false;
					}
					if( ! check_repass() ){
						return false;
					}
					if( ! check_agree() ){
						return false;
					}
					var param = {};
					 param['user_key'] = $j("#third_key").val();
					 param['password'] = $j("#pass1").val();
					 param['nick'] = $j("#user_nick").val();
					 var tUrl ="/webapps/sina_connect/?action=updateUser&uid="+uid;
					
					$j.post(tUrl,param,function(data){
						if(data==1){
							var tUrl = "/PV/user/cooper_activate.php"; 
							 window.location = tUrl;
						}else {
							alert("请稍后再试!");
							return false;
						}
					});
				}
				});

			   }
	
			}
      
    });
   }
}
function getNLength(str){
	   var len = str.length;
	   var tReturn = len;
	   for(var i=0;i<len;i++){
	     var temp_str= str.substr(0,1);
	     if(temp_str.charCodeAt(0) > 127){
	    	 tReturn+= 1;
	     } 
	    
	     str = str.substr(1);
	  }
	   return tReturn;
}

/*新用户中心头部js下拉样式*/
  $j(document).ready(function(){
		$j("#nav-one li").hover(
			function(){ $j("ul", this).fadeIn("fast"); }, 
			function() {$j("ul", this).fadeOut("fast");} 
		);
        if (document.all) {
			$j("#nav-one li").hoverClass ("sfHover");
		}
	  });
	  
		$j.fn.hoverClass = function(c) {
			return this.each(function(){
				$j(this).hover( 
					function() { $j(this).addClass(c);  },
					function() { $j(this).removeClass(c); }
				);
			});
		};
/*新的头部登录*/
function checkHeadLogin(){
	var is_login = false;
	var cookie_user = getCookieValue('abang_user');
	if(cookie_user != false && cookie_user != ''){
		is_login = true;
	}
	return is_login;
}

function autoHeadLogin(){
	uid = getCookieValue('abang_user');
	if (uid){
		topLoginOk();
	}
}

function userMenulist(){
	$j('.big_nav_c2 li').hover(
		function(){ $j('ul',this).fadeIn();$j(".small_nav2").hide();},
		function(){ $j('ul',this).fadeOut();$j(".small_nav2").show();}
	);
}
function headerLogin(refer){
	var uid = getCookieValue('abang_user');
	if (uid){
		//已登录直接刷新
		topLoginOk();
	}
	else{
		displayMaskLayer();
		displayTopLogin(refer);
	}
}
function displayTopLogin(refer)
{
	var width = 390;
	var height = 264;

/*	var window_size = getViewportSize();
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
*/	
    var obj_message_layer = document.createElement("div");
	obj_message_layer.id = "messageBox";
	obj_message_layer.setAttribute("class","new_layer");
	obj_message_layer.setAttribute("className","new_layer");
	obj_message_layer.style.zIndex = "9999";
	obj_message_layer.style.width = width + "px";
	obj_message_layer.style.height = height + "px";

	obj_message_layer.innerHTML = '<div class="close"><a href="javascript:void(0);" id="closePromptUnlogin" onclick="return closeMessageBox(),!1"><img border="0" src="http://z.abang.com/d/user_new/pro_close.gif" alt="关闭"></a></div><div class="new_login"><div class="new_login_tit"><a href="http://home.abang.com/register?refer='+refer+'" target="_blank">注册</a>|<a href="http://www.abang.com/webapps/user/findpw.php" target="_blank">忘记密码</a></div><div class="open_error" style="display:none"><span id="error_login">请填写正确的信息</span></div><div class="name_psd"><div class="username"><input type="text" name="user_key" id="user_key" maxlength="50" class="name" onblur="inputDefault(this)" onfocus="inputDefault2(this)"><label id="user_mail"  for="user_key">请输入你的注册邮箱</label><span class="error" id="name_error">出错了</span></div><div class="userpsd"><input type="password" name="password" id="password" maxlength="20" class="pssd" onblur="inputDefault(this)" onfocus="inputDefault2(this)"  ><label id="user_psd"  for="password">输入密码</label><span class="error" id="psd_error">出错了</span></div></div><div class="captcha"><a onclick="return getCheckImage(),!1" href="javascript:void(0);"><img alt="验证码" src="http://home.abang.com/PV/user/checkcode.php?r='+ Math.random()+ '" id="checkimage"></a> <input type="text"   value="" class="reg_input02" maxlength="4" id="checkcode" name="checkcode" onblur="inputDefault(this)" onfocus="inputDefault2(this)"><label id="user_captcha" for="checkcode">输入验证码</label><span class="error" id="code_error">出错了</span></div><div class="newsubmit_confirm"><input type="submit" class="submit22" value="登录" onclick="return topLogin(),!1"><label><input type="checkbox" checked id="login_status"><span>记住我</span></label></div></div>';
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
function inputDefault2(weizhi){ 
	var lx = weizhi.attributes["id"].nodeValue;
	if (lx=='user_key') {document.getElementById("user_mail").style.visibility="hidden";}
	if (lx=='password') {document.getElementById("user_psd").style.visibility="hidden";}
	if (lx=='checkcode') {document.getElementById("user_captcha").style.visibility="hidden";}
}
function inputDefault(weizhi){ 
 	var lx = weizhi.attributes["id"].nodeValue;
    var zhi  = weizhi.value;
	if (lx=='user_key'&& zhi!=''){
		document.getElementById("user_mail").style.visibility="hidden";
	}
	if (lx=='user_key'&& zhi==''){
		document.getElementById("user_mail").style.visibility="visible";
	}
	if (lx=='password'&& zhi!=''){
		document.getElementById("user_psd").style.visibility="hidden";
	}
	if (lx=='password'&& zhi==''){
		document.getElementById("user_psd").style.visibility="visible";
	}
	if (lx=='checkcode'&& zhi!=''){
		document.getElementById("user_captcha").style.visibility="hidden";
	}
	if (lx=='checkcode'&& zhi==''){
		document.getElementById("user_captcha").style.visibility="visible";
	}
}

//点击登录按钮
function topLogin()
{	
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
			closeMessageBox();
			topLoginOk();
			return false;
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
function hide(u){
	$j(u).hide();
}
function show(u){
	$j(u).show();
}
//获取验证码
function getCheckImage(){
	var url='http://home.abang.com/PV/user/checkcode.php?r=' + Math.random();
	$j("#checkimage").attr("src",url);
}

//登录函数
function topLoginOk(){
	var uid = getCookieValue('abang_user');
	if(uid){
		$j.ajax({
		   type: "POST",
		   dataType:"json",
		   url: "http://"+str_host+"/webapps/user/get_unread_num_2.php?rnd=" + parseInt(Math.random() * 9999999) +"&uid=" + uid,
		   success: function(data){		
		     var user_name = data.username;
		     var user_sys = data.sys;
		     var user_comment = data.comment;
		     var user_message = data.msg;
		     var user_concern = data.concern;
		     var user_msg_all = parseInt(user_sys) + parseInt(user_comment) + parseInt(user_message) + parseInt(user_concern);
			
			if(user_msg_all != 0){
				//显示信息浮动模块,如果系统信息为0就删除,其他一样
				$j('#userMsgNum').text(user_msg_all);
				$j("#userMsgCon").show();
				if(user_sys == 0)
				{
					$j("#head_sys").parent("li").remove();
				}
				if(user_comment == 0)
				{
				    $j("#head_comment").parent("li").remove();
				}
				if(user_message == 0)
				{
				    $j("#head_message").parent("li").remove();
				}
				if(user_concern == 0)
				{
				    $j("#head_guanzhu").parent("li").remove();
				}
				$j(".small_nav2").show();
			}
			else
			{   
				//如果没有信息则删除，浮动的信息提示
				$j(".small_nav2").remove();
			}
			$j("#headUserName").text(user_name);
			$j("#head_sys").text(user_sys);
			$j("#head_comment").text(user_comment);
			$j("#head_message").text(user_message);		
			$j('#headLogin').hide();
			$j('#headLoginOk').show();
		   //userMenulist();

			var check_mail_status = getCookieValue('abang_status') ? getCookieValue('abang_status') : 1;
			if(check_mail_status == 0){
				$j('body').prepend('<div id="checkTopMail"><div class="checkmail_con">阿邦网友情提示：你还没有激活账户，请<a href="http://home.abang.com/webapps/user/reg_post.php?uid='+uid+'" target="_blank" class="checkmail_link">点击激活邮件</a>，激活后可以有更多权限哦！</div></div>');
			}
			var auto = getCookieValue('auto');
			/*
			if (auto == false)
			{						
				var url = 'http://'+str_host+'/webapps/user/ajax_autologin.php';
				var par = 'x=0&r=' + parseInt(Math.random()*(100-1000+1)+1000);						
				//requestAjax(url,par,'get',autoCallback);
				var url = url + '?' + par;
				$j.get(url);
			}*/
		   }
		});
	}
}

function topLoginOut(){
	uid = getCookieValue('abang_user');
	if(uid){
		var tUrl = "http://"+str_host+"/webapps/pin/logout.php?r="+Math.random();
		$j.get(tUrl,{},function(data){
		if(data == 1){
			$j('#headLogin').show();
			$j('#headLoginOk').hide();			
			//window.location.reload();
		} else{
			return false;
		}
	});
	}
	else{
		window.location.reload();
	}
	
}

function closeMessageBox(){
	document.body.removeChild(document.getElementById('messageBox'));
	document.body.removeChild(document.getElementById('mask'));
	return true;
}
