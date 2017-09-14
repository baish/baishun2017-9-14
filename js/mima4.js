var i = 5;
var timer = null;
$("#s1").html(i)
timer = setInterval(function(){
	if(i <= 0 ){
		clearInterval(timer);
		location.href = "https://baish.github.io/baishun2017-9-14/zhuye.html";
	}else{
		i--;
		$("#s1").html(i);
	}
},1000)