//轮播图
var index = 0;
var timer = setInterval(playshow,3000)
function playshow(){
	index++;
	if(index==2){
		index = 0;
	}
	//$("#lunbo .tab_pannel").eq(index).css("opacity",1).siblings().css("opacity",0);
	$("#lunbo .tab_pannel").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	$("#bbb li").eq(index).addClass("eva-switchable-active").siblings().removeClass("eva-switchable-active");
}
$("#bbb li").mouseover(function(){
	//clearInterval( timer );
	index = $(this).index() - 1;
	playshow();
})
$("#bbb li").mouseout(function(){
	//timer = setInterval(playshow,3000);
})
$("#tab_nav").mouseenter(function(){
	$("#aa").css("opacity",1);
	$("#bb").css("opacity",1);
	clearInterval( timer );
}).mouseleave(function(){
	$("#aa").css("opacity",0);
	$("#bb").css("opacity",0);
	timer = setInterval(playshow,3000);
})
$("#aa").click(function(){
	if(index==-1){
		index = 1;
	}
	playshow();
})
$("#bb").click(function(){
	if(index==2){
		index = 0;
	}
	playshow();
})
//楼梯效果
$(window).scroll(function(){
	var sTop = $(document).scrollTop();
	if(sTop>=$(".yt_floor_zg").offset().top){
		$("#floor").show();
	}else{
		$("#floor").hide();
	}
})
$("#floor a:not('.last')").click(function(){
	var index = $(this).index();
	var t = $(".yt_floor_item").eq(index).offset().top - 20;
	$("body").animate({"scrollTop" : t},1500);
})
$("#floor .last").click(function(){
	$("body").animate({"scrollTop" : 0},1500);
})
