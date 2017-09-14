//表单验证 存数据
var flagphone = null;
$("#cellPhone").blur(function(){
	var reg = /^\d{11}$/;
	var str = $(this).val();
	if(reg.test(str)){
		$("#s1").html("正确");
		flagphone = true;
	}else{
		$("#s1").html("手机号格式不对");
		flagphone = false;
	}
})
var flagpass = null;
$("#password").blur(function(){
	var reg = /^[a-z,0-9]{6,12}$/i;
	var str = $(this).val();
	if(reg.test(str)){
		$("#s3").html("正确");
		flagpass = true;
	}else{
		$("#s3").html("密码格式不正确");
		flagpass = false;
	}
})
var flagrepass = null;
$("#repassword").blur(function(){
	var str = $(this).val();
	if( str == $("#password").val() ){
		$("#s4").html("正确");
		flagrepass = true;
	}else{
		$("#s4").html("两次输入密码不同");
		flagrepass = false;
	}
})
//获取验证码倒计时
var timer = null;
$("#getValidateCode").click(function(){
	var count = 10;
	timer = setInterval(function(){
		if( count > 0 ){
			$("#getValidateCode").val( `剩余${count}秒` );
			count--;
		}else{
			clearInterval(timer);
			$("#getValidateCode").val( "重新获取验证码" );
		}
	},1000)
})
//将数据存到cookie中  并跳转页面
var arr=[];
$("#submit").click(function(){
	if( flagphone &&  flagpass && flagrepass ){
			var _json = {
				"phone" : $("#cellPhone").val(),
				"pwd" : $("#password").val()
			}
			var cookie = getCookie("aaa");
			if(cookie.length != 0){
				arr = cookie;
			}
			arr.push(_json);
			setCookie("aaa" , JSON.stringify(arr))
			return true;			
		}else{
			return false;
		}
})