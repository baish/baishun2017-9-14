var arr = getCookie("shopmoney");
console.log(arr[0]);
$(function(){
	$("#money").html(arr[0]);
})
