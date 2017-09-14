console.log(document.cookie);
var arr = getCookie("shoplist");
var html = "";
for(var i in arr){
	var list = arr[i];
html += '<div class="newshoplist">'+
			'<div class="category th-chk">'+
				'<input type="checkbox" class="xuan" />'+
			'</div>'+
			'<div class="category th-item">'+
				'<img src="'+list.src+'" />'+
				'<p>'+list.name+'</p>'+
			'</div>'+
			'<div class="category th-price">'+
				'<span>￥'+list.price+'</span>'+
			'</div>'+
			'<div class="category th-amount" data-id='+ list.id+'>'+
				'<span class="updateCount" data-number="1">+</span>'+
				'<span class="shop-count">'+list.count+'</span>'+
				'<span class="updateCount" data-number="-1">-</span>'+
			'</div>'+
			'<div class="category th-sum">'+
				(list.count*list.price )+
			'</div>'+
			'<div class="category th-op">'+
				'<div class="pro-remove">删除商品</div>'+
			'</div>'+
		'</div>'
}
$(".CommodityList").html(html);
//结算函数
function jiesuan(){
	var money = 0;
	var count = 0;
	$(".xuan:checked").each(function(){
		count += parseInt( $(this).parent().parent().find(".shop-count").html() );
		money += parseInt( $(this).parent().parent().find(".th-sum").html() );
	})
	$(".count2").html( count );
	$(".money2").html( money );
}
$(".xuan").click(function(){
	jiesuan();
})
$("#qx").click(function(){
	$(".xuan").prop("checked",$(this).prop("checked"));
	jiesuan();
})
//删除
$(".pro-remove").click(function(){
	var id = $(this).parent().parent().find(".th-amount").data("id");
	for(var i in arr){
		if(arr[i].id==id){
			arr.splice(i,1);
			setCookie("shoplist",JSON.stringify(arr));
			$(this).parent().parent().remove();
		}
	}
})


//加减
$(".updateCount").click(function(){
	var sign = $(this).html();
	var id = $(this).parent().data("id");
	var num = $(this).parent().find(".shop-count").html();
	if(num==1 && sign=="-"){
		return;
	}else{
		for(var i in arr){
			if(arr[i].id==id){
				sign=="+" ? arr[i].count++ : arr[i].count--;
				setCookie("shoplist",JSON.stringify(arr));
				$(this).parent().find(".shop-count").html(arr[i].count);
				$(this).parent().parent().find(".th-sum").html( (arr[i].count * arr[i].price) )
			}
		}
		jiesuan();
	}

})
//存储总价钱 
$("#jiesuan").on("click",".jiesuan1",function(){
	var sum = $(".money2").html();
	var brr = [];
	brr.push(sum);
	setCookie("shopmoney",JSON.stringify(brr))
	var countsum = $(".count2").html();
	var crr = [];
	crr.push(countsum);
	setCookie("shopcount",JSON.stringify(crr))
	location.href = "https://baish.github.io/baishun2017-9-14/gouwuche2.html"
})