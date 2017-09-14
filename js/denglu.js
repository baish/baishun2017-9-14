$("#loginTabList li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	var index = $(this).index();
	$(".login-tab-con").eq(index).show().siblings().hide();
	
})
$("#passportLogin").click(function(){
	var flag = true;
	var arr = getCookie("aaa");
	if(arr.length==0){
		alert("手机号没有注册")
	}	
	for(var i=0;i<arr.length;i++){
		if( $("#passportname").val() == arr[i].phone ){
			flag = false;
			if( $("#passportword").val() == arr[i].pwd ){
				alert("登录成功")
				location.href = "https://baish.github.io/baishun2017-9-14/zhuye.html";
			}
			else{
				alert("密码错误")
			}
		}
	}
	if(flag){
		alert("手机号没有注册")
	}
})
