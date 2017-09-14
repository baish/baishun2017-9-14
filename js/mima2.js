var arr = getCookie("mPhone");
//页面刷新时  取出输入的手机号
$("#sphone").html(arr[0]);	
//随机获取验证码
function rand(min,max){
	return Math.floor( Math.random()*(max-min+1) ) + min;
}
function yzm(){
	var brr = [];
	for(var i = 0 ; i < 4 ; i++){
		var code = rand(48,122);
		while( code >= 58 && code <= 64   ||  code >= 91 && code <= 96 ){ //重抽
			code = rand(48,122);
		}
		brr[i] = String.fromCharCode(code);
	}
	$(".yzm").html(brr.join(""))
}
//页面刷新显示验证码
yzm();
//看不清刷新验证码
$(".yzm").click(function(){
	//window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
	yzm();
})
//点击获取验证码倒计时
var timer = null;
$("#btn1").click(function(){
	var count = 10;
	timer = setInterval(function(){
		if( count > 0 ){
			$("#btn1").html( `剩余${count}秒` );
			count--;
		}else{
			clearInterval(timer);
			$("#btn1").html( "重新获取短信验证码" );
		}
	},1000)
})
//跳转到下一个页面
$("#btn2").click(function(){
	if( $("#txt1").val() == $(".yzm").html() ){
		location.href = "https://baish.github.io/baishun2017-9-14/mima3.html"		
	}else{
		alert("输入的验证码不对")
	}
})

