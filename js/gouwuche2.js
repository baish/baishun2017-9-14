var flag1 = null;
$(".J-Name").blur(function(){
	var reg = /^[\u4e00-\u9fa5]{2,6}$/;
	var str = $(this).val();
	if(reg.test(str)){
		$(".s1").html("正确")
		flag1 = true;
	}else{
		$(".s1").html("请输入正确格式的名字")
		flag1 = false;
	}
})
var flag2 = null;
$(".ppp").blur(function(){
	var reg = /^\d{11}$/;
	var str = $(this).val();
	if(reg.test(str)){
		$(".s2").html("正确")
		flag2 = true;
	}else{
		$(".s2").html("请输入正确格式的手机")
		flag2 = false;
	}
})
var flag3 = null;
$(".PreAddress").blur(function(){
	var reg = /^[\u4e00-\u9fa5]{2,18}$/;
	var str = $(this).val();
	if(reg.test(str)){
		$(".s3").html("正确")
		flag3 = true;
	}else{
		$(".s3").html("请您选择送货地址所在区域")
		flag3 = false;
	}
})
var flag4 = null;
$(".PostalCode").blur(function(){
	var reg = /^\d{6}$/;
	var str = $(this).val();
	if(reg.test(str)){
		$(".s4").html("正确")
		flag4 = true;
	}else{
		$(".s4").html("请您填写邮编")
		flag4 = false;
	}
})
$("#btn").click(function(){
	if(flag1 && flag2 && flag3 && flag4){		
		location.href = "https://baish.github.io/baishun2017-9-14/gouwuche3.html";
	}
})

