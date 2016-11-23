// JavaScript Document
var $j = jQuery.noConflict(); 
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
/*美容频道轮显*/
$j(function(){
     var len  = $j("#mrFlashCon > li").length;
	 var index = 0;
	 var adTimer;
	 $j("#mrFlashCon li").mouseover(function(){
		index  =   $j("#mrFlashCon li").index(this);
		showImg(index);
	 }).eq(0).mouseover();
	 //滑入 停止动画，滑出开始动画.
	 $j('#mrFlash').hover(function(){
			 clearInterval(adTimer);
		 },function(){
			 adTimer = setInterval(function(){
			    showImg(index)
				index++;
				if(index==len){index=0;}
			  } , 3000);
	 }).trigger("mouseleave");
})
	// 通过控制top ，来显示不同的幻灯片
function showImg(index){
        var mrHeight = $j("#mrFlashTit li").height();
		var mrWidth = $j("#mrFlashCon li").width();
		$j("#mrFlashTit .dot").stop(true,false).animate({left : mrWidth*index+10},100);
		$j("#mrFlashTit ul").stop(true,false).animate({top : -mrHeight*index},0);
		$j("#mrFlashCon li").removeClass("on")
		.eq(index).addClass("on");

}
/*减肥,财经,环保等主频道以外频道轮播*/
function reSwitchPic() {
	refreshSwitchTimer = null;
	switchPic(CurScreen+1);
	refreshSwitchTimer = setTimeout('reSwitchPic();', 3000);
}
function switchPic(screen) {
	if (screen > MaxScreen) {
		screen = 1 ;
	}
	
	for (i=1;i<=MaxScreen;i++) {
		document.getElementById("Switch_"+i).style.display = "none" ;
	}
	document.getElementById("Switch_"+screen).style.display = "block" ;
	showSwitchNav(screen);
	showSwitchTitle(screen);
	//Effect.Appear("Switch_"+screen);			
	//switchLittlePic(screen);
	//showSwitchTitles(screen);
	CurScreen = screen  ;
}
function showSwitchNav(screen) {
	var NavStr = "" ;
	for (i=1;i<=MaxScreen;i++) {
		if (i == screen) {
			NavStr += '<li onmouseover="pauseSwitch();" onmouseout="goonSwitch();"><a href="'+Switcher[screen]['link']+'" target="_blank" class="sel">'+i+'</a></li>' ;
		}
		else {
			NavStr += '<li onmouseover="pauseSwitch();goManSwitch('+i+');" onmouseout="goonSwitch();" onclick="goManSwitch('+i+');"><a href="'+Switcher[screen]['link']+'" target="_blank">'+i+'</a></li>' ;
		}
		
	}
	document.getElementById("SwitchNav").innerHTML = NavStr ;
}
function showSwitchTitle(screen) {
	var titlestr = "" ; 
	titlestr = '<p><h3><a href="'+Switcher[screen]['link']+'" target="_blank">'+Switcher[screen]['stitle']+'</a></h3><div class="focus_add"><h4><a href="'+Switcher[screen]['link']+'" target="_blank">'+Switcher[screen]['stitle']+'</a></h4><span>'+Switcher[screen]['content']+'<a href="'+Switcher[screen]['link']+'" target="_blank">[全文]</a></span></div></p>' ;
	document.getElementById("SwitchTitle").innerHTML = titlestr ;

}
function pauseSwitch() {
	clearTimeout(refreshSwitchTimer);
}
function goonSwitch() {
	clearTimeout(refreshSwitchTimer);
	refreshSwitchTimer = setTimeout('reSwitchPic();', 3000);
}
function goManSwitch(index) {
	clearTimeout(refreshSwitchTimer);
	
	CurScreen = index - 1 ;
	reSwitchPic();
}
var MaxScreen = 4 ;
var CurScreen = 1 ;
 
function SwichTab_edu($,A,_){
  for(i=0;i<_;i++){
    document.getElementById($+"_c0"+i).style.display="none";
    document.getElementById($+"_btn"+i).className="new_btn09";
  }
  document.getElementById($+"_c0"+A).style.display="block";
  document.getElementById($+"_btn"+A).className="new_btn08";
}

/*最新文章*/
function SwichTab_new($,A,_){
  for(i=0;i<_;i++){
    document.getElementById($+"_c0"+i).style.display="none";
    document.getElementById($+"_btn"+i).className="new_hidden";
  }
  document.getElementById($+"_c0"+A).style.display="block";
  document.getElementById($+"_btn"+A).className="new_block";
}
/*旅游TAB菜单-热门推荐*/
function SwichTab_travel($,A,_){
  for(i=0;i<_;i++){
    document.getElementById($+"_c0"+i).style.display="none";
    document.getElementById($+"_btn"+i).className="new_btn09";
  }
  document.getElementById($+"_c0"+A).style.display="block";
  document.getElementById($+"_btn"+A).className="new_btn08";
}
/*home_tab*/
function SwichTab_index($,A,_){
  for(i=0;i<_;i++){
    document.getElementById($+"_c0"+i).style.display="none";
    document.getElementById($+"_btn"+i).className="index_hidden";
  }
  document.getElementById($+"_c0"+A).style.display="block";
  document.getElementById($+"_btn"+A).className="index_block";
}
/*专题*/
function SwichTab_zt($,A,_){
  for(i=0;i<_;i++){
    document.getElementById($+"_c0"+i).style.display="none";
    //document.getElementById($+"_btn"+i).className="index_hidden";
  }
  document.getElementById($+"_c0"+A).style.display="block";
  //document.getElementById($+"_btn"+A).className="index_block";
}