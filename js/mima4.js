var i = 5;
var timer = null;
$("#s1").html(i)
timer = setInterval(function(){
	if(i <= 0 ){
		clearInterval(timer);
		location.href = "http://127.0.0.1/2xiangmu/zhuye.html";
	}else{
		i--;
		$("#s1").html(i);
	}
},1000)