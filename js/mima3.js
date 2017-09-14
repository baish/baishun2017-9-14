//检验密码格式
var flag1 = null;
$("#txt1").blur(function(){
	var reg = /^\w{6,16}$/;
	var str = $(this).val();
	if(reg.test(str)){
		$("#s1").html("正确");
		flag1 = true;
	}else{
		$("#s1").html("请输入6-16个字符的密码")
		flag1 = false;
	}
})
//检验两次输入的密码是否相等
var flag2 = null;
$("#txt2").blur(function(){
	var str = $(this).val();
	if( str == $("#txt1").val() ){
		$("#s2").html("正确");
		flag2 = true;
	}else{
		$("#s2").html("两次输入密码不同");
		flag = false;
	}
})
//跳转下一个页面
$("#btn").click(function(){
	var arr = getCookie("mPhone");
	var crr = getCookie("aaa");
	if(flag1 && flag2){
		//存入 新的密码
		for(var i in crr){
			if( arr[0] == crr[i].phone){
				crr.splice(i,1);
				var _json = {
					"phone" : arr[0],
					"pwd" : $("#txt1").val()
				}
				crr.push(_json);
				setCookie("aaa",JSON.stringify(crr));
			}
		}
		//arr.push(_json);
		//setCookie("aaa" , JSON.stringify(arr))
		location.href = "http://127.0.0.1/2xiangmu/mima4.html"		
	}
})
