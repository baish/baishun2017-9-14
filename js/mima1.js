//判断手机是否被注册
var flag = null;
$("#txt").blur(function(){
	var arr = getCookie("aaa");
	console.log(arr);	
	for(var i in arr){
		if( $(this).val()== arr[i].phone){
			$("#s1").html("手机号已注册，可以找回密码")
			flag = true;
			return;
		}else{
			$("#s1").html("手机号没有被注册")
			flag = false;
		}
	}
})
//跳转下一个界面  并存电话号码
$(".bdbox").on("click","#btn",function(){
	if(flag){
		var phone = $("#txt").val();
		var crr = [];
		crr.push(phone);
		setCookie("mPhone",JSON.stringify(crr))
		location.href = "http://127.0.0.1/2xiangmu/mima2.html"		
	}
})
