	//+号特效
	$("#plus").click(function(e){
		$(".plustool").show();
		e.stopPropagation();
	});
	$(document).click(function(e){
		var etid=e.target.id;
		if(etid!="plustool")
		{
			$(".plustool").hide();
		}
	});
	//信息按下去特效
	$(".message").on("mousedown",function(){
		this.style.backgroundColor="#e6e6e6"
	});
		$(".message").on("mouseup",function(){
		this.style.backgroundColor="#fff"
	});