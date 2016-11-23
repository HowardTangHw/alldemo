/************************************ 
 ** 函数名:displayMaskLayer
 ** 功能描述:显示浮动层下面的遮罩层
 ** 作 者:王振国 
 ** 日 期:2009-2-26 
 ***********************************/
 
 function displayMaskLayer()
 {
	var newMask = document.createElement("div");
	newMask.id = 'mask';
	newMask.style.position = "absolute";
	newMask.style.zIndex = "9000";
	if(document.documentElement.clientHeight<document.body.scrollHeight)
	{
		newMask.style.height = document.body.scrollHeight + "px";
	}
		
	else
	{
		newMask.style.height = document.documentElement.clientHeight+"px";
	}
	if(document.documentElement.clientWidth<document.body.scrollWidth)
		newMask.style.width = document.body.scrollWidth + "px";
	else 
	{
		newMask.style.width = document.documentElement.clientWidth+"px";
	}
	newMask.style.top = "0px";
	newMask.style.left = "0px";
	newMask.style.background = "#000000";
	newMask.style.filter = "alpha(opacity=40)";
	newMask.style.opacity = "0.40";
	document.body.appendChild(newMask);
 }
 /************************************ 
 ** 函数名:displayMessageLayer 
 ** 功能描述:显示留言留言成功或错误的层
 ** 作 者:王振国 
 ** 日 期:2009-3-17 
 ***********************************/
 function displayMessageLayer(mark,title,content)
 {
	//displayMaskLayer();
	var clientheight = parseInt(document.body.clientWidth);
    var scrollheight = parseInt(document.body.scrollTop);
    var obj_message_layer = document.createElement("div");
	obj_message_layer.id = "messageBox";
	obj_message_layer.setAttribute("class","adm2");
	obj_message_layer.setAttribute("className","adm2");

	obj_message_layer.style.zIndex = "9999";
	obj_message_layer.innerHTML = '<div class="pro_tit"><a href="javascript:void(0);" id="closeMessageBox" onclick="closeMessageBox();return false;"><img src="http://z.abang.com/d/user_new/pro_close.gif" alt="关闭"></a></div><div class="pro_lr"><div class="pro_img"><img src="http://z.abang.com/f/icon/' + mark + '.gif"  align="absmiddle" /></div><div class="pro_r"><div class="pro_infor1">' + title + '</div><p class="pro_infor2">' + content + '</p><div class="pro_button"><input type="button" value="确定" name="submit" class="pro_sub" onclick="closeMessageBox();return false;"/></div></div></div>';
	document.body.appendChild(obj_message_layer);
	obj_message_layer.style.top = parseInt(window.innerHeight- obj_message_layer.offsetHeight)/2 + 'px';
	obj_message_layer.style.left= parseInt(window.innerWidth - obj_message_layer.offsetWidth)/ 2 + 'px'; // 屏幕居中

	return false;	
}
/************************************ 
 ** 函数名:closeMessageBox 
 ** 功能描述:关闭留言留言成功或错误的层
 ** 作 者:王振国 
 ** 日 期:2009-3-27 
 ***********************************/
function closeMessageBox()
{
	document.body.removeChild($('messageBox'));
	document.body.removeChild($('mask'));
	return false;
}