/*
 *@des:
 *   这是阅读数和评论数，点赞的脚本  
 */

 $j(document).ready(function(){
       //当点赞单击时,并记录点赞数
       var zan_num = '';
       //点赞的次数
       var praise_num = 0;
       //点赞的标记字符串
       var praise_str = tool_short+site+cid;
       //加载完毕后，调用阅读数和评论数       
       $j.get("http://"+site+".abang.com/webapps/article_praise/article_praise.php",{site:site,tool:tool_short,article_id:cid,read:'read',art_author_uid:art_author_uid,random:new Date().getTime()},function(data){
            var obj_json = eval('('+data+')');
            var praise_flag = art_getCookie(praise_str);
          	$j("#art_read_num").empty().html(obj_json.read_total_num);
          	$j("#art_comm_num").empty().html(obj_json.comment_num);
          	$j("#art_praise").empty().html(obj_json.praise_total_num);
            zan_num = obj_json.praise_total_num;
            praise_num = obj_json.praise_num;
            if(obj_json.praise_num > 10 || ''!= praise_flag)
            {
               $j("#art_praise").attr("title","您已经赞过了哦");
            }
       });

       $j("#art_praise").click(function(){
          var praise_flag = art_getCookie(praise_str);
          if('' == praise_flag)
          {
            $j.get("http://"+site+".abang.com/webapps/article_praise/article_praise.php",{site:site,tool:tool_short,article_id:cid,praise:'praise',art_author_uid:art_author_uid,random:new Date().getTime()},function(data){
  	          var obj_json = eval('('+data+')');
  	          //因为每天的点赞数限定为10次
  	          if(obj_json.praise_num <= 10)
  	          {
  	          	zan_num = obj_json.praise_total_num;
                praise_num = obj_json.praise_num;
                $j("#art_praise").before('<i id="move_flag">+1</i>');
                $j("#move_flag").animate({top:'-50px',opacity:'0'},'slow',function(){
                  $j(this).remove();
                });
  	          	$j("#art_praise").attr("title","您已经赞过了哦").css("background-position","0px 0px").empty().html(zan_num);
  	          }
  	          else
  	          {
  	          	$j("#art_praise").attr("title","您已经赞过了哦");
  	          }
            });
          }
       });   
      //当鼠标滑过点赞按钮时,清空点赞数，并记录点赞数
      $j("#art_praise").hover(function(){
          zan_num = $j("#art_praise").html();
          var praise_flag = art_getCookie(praise_str);
          if(''== praise_flag && praise_num < 11)
          {
             $j("#art_praise").empty().css("background-position","0px -60px");
          }          
        },  
        function(){
      	  $j("#art_praise").empty().css("background-position","0px 0px").html(zan_num);
      });
 });

//去除左右空白符
function art_trim(str)
{   var con;
  con=str.replace(/^\s{1,}/,"");
  return con.replace(/\s{1,}$/,"");
}
//取得cookie值的函数，请输入要取得cookie变量名
function art_getCookie(var_cookie)
{
   var coo = document.cookie;//取得该网页的cookie
   var arr = coo.split(";");
   var con;//拆分后的变量串
   for(var term=0;term<arr.length;term++)
     {
        con=arr[term].split("=");
        if(art_trim(con[0])==var_cookie)
          {
            return con[1];              
          }    
     }
   return "";   
}