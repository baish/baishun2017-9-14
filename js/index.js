$("#hd").load("index.html #hd",function(){
	//表单移入移出   全局变量val
	$("#hdmain input").focus(function(){
		val = $(this).val()
		$(this).val("")
	}).blur(function(){
		$(this).val(val);
	})
	//购物袋的数值
	var arr = getCookie("shopcount");
	console.log(arr[0]);
	$(function(){
		$("#J-CartCount").html(arr[0]);
	})
	
	//选项卡
	$("#hdmenu dl").mouseenter(function(){
		$(this).find("dt").next().show();
		$(this).find("dt").addClass("selected")
	}).mouseleave(function(){
		$(this).find("dt").next().hide();
		$(this).find("dt").removeClass("selected")
	})
	//第一行特效
	$(".log-wechat").mouseenter(function(){
		$(this).addClass("yt-wechat");
		$(".yt-seller-wechat").show();
	}).mouseleave(function(){
		$(this).removeClass("yt-wechat")
		$(".yt-seller-wechat").hide();
	})
	$(".log-phone").mouseenter(function(){
		$(this).addClass("yt-phone");
		$(".yt-seller-phone").show();
	}).mouseleave(function(){
		$(this).removeClass("yt-phone");
		$(".yt-seller-phone").hide();
	})
	$(".J_myhome").mouseenter(function(){
		$(this).addClass("yt-myhome");
		$(".yt-seller-myhome").show();
	}).mouseleave(function(){
		$(this).removeClass("yt-myhome");
		$(".yt-seller-myhome").hide();
	})
	//登录注册后表头的变化
	var html = "";
	$(function(){
		var crr = getCookie("aaa");
		console.log(crr);
		if( crr.length != 0 ){
			for(var i = 0 ; i<crr.length; i++){
				html = `<span class="welcome J-welcome">Hi，${crr[0].phone}</span>				
				<a rel="nofollow" title="单击注册" class="reg" href="http://127.0.0.1/2xiangmu/zhuce.html">退出</a>`					
			}
			$(".log-user").html(html);
		}else{
			html = `<span class="welcome J-welcome">Hi，欢迎来到银泰网！</span>
			        <a rel="nofollow" class="login" title="单击登录" href="http://127.0.0.1/2xiangmu/denglu.html">登录</a>
			        <a rel="nofollow" title="单击注册" class="reg" href="http://127.0.0.1/2xiangmu/zhuce.html">注册</a>`
			$(".log-user").html(html);		
		}
	})

})
$("#ft").load("index.html #ft")
