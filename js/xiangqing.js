var str = location.href;
//console.log(str)  xiangqing.js:3 http://127.0.0.1/2xiangmu/xiangqing.html?pid=shop01
var pid = str.split("=")[1];
//console.log(pid)
$.ajax({
	type:"get",
	url:"http://127.0.0.1/2xiangmu/data.json",
	success : function(res){
		var html = "";
		var html1 = "";
		var html2 = "";
		for(var i in res){
			if(pid==res[i].id){
				var str = res[i];
				html =  `<img id="smallimg" src="${str.src}"  />
						<div id="mask" ></div> ` 
				html1 = `<img src="${str.src}" width="540" height="720" />`
				html2 = `<p>${str.name}</p>
						<img src="images/xq111.png" />
						<div class="pri"><span>银泰价：</span><span id="pricenew">${str.pricenew}</span></div>
						<div class="pri"><span>参考价：</span><del id="priceold">${str.priceold}</del></div>
						<img src="images/xq333.png" />
						<div>
						<span class="updateCount" data-number="1">+</span>
						<span class="shop-count">1</span>
						<span class="updateCount" data-number="-1">-</span>
						</div>
						<input type="button" id="shop" value="立即购买" />
						<span data-id=${str.id} data-name=${str.name} data-src=${str.src} data-price=${str.pricenew} style="display:none;"></span>
						<input type="button" id="shopcar" value="加入购物车" />
						<img src="images/xq444.png" />`
			}
		}
		$("#small").html(html);
		$("#big").html(html1);
		$(".mainer").html(html2);
		$("#small").mouseenter(function(){
			$("#mask").show();
			$("#big").show();
		}).mouseleave(function(){
			$("#mask").hide();
			$("#big").hide();
		})
		$("#small").mousemove(function(e){
			var e = e || event;
			var x = e.pageX - $("#small").offset().left - $("#mask").width()/2;
			var y = e.pageY- $("#small").offset().top - $("#mask").height()/2;
			var maxLeft = $("#small").width() - $("#mask").width();
			var maxTop = $("#small").height() - $("#mask").height();
			x=x<0? 0 : (x>maxLeft? maxLeft : x);
			y=y<0? 0 : (y>maxTop? maxTop : y);
			$("#mask").css({"left":x,"top":y});
			var x1 = 2*x;
			var y1 = 2*y;
			$("#big img").css({"left":-x1,"top":-y1})		
		})
		$(".updateCount").click(function(){
			var num = $(".shop-count").html();
			var sign = $(this).html();
			if( num==1 && sign=="-"){
				return
			}else{
				sign=="+" ? num++ : num--;
				$(".shop-count").html(num)
			}
		})
	}
})
$(".mainer").on("click","#shopcar",function(){
	var arr = [];
	var flag = true;
	var _json = {
		id : $(this).prev().data("id"),
		name : $(this).prev().data("name"),
		src : $(this).prev().data("src"),
		price : $(this).prev().data("price"),
		count : $(".shop-count").html()	
	}
	var cookieInfo = getCookie("shoplist");
	if(cookieInfo.length!=0){
		arr = cookieInfo;
		for(var i in arr){
			if(_json.id == arr[i].id){
				arr[i].count = parseInt( _json.count ) + parseInt( arr[i].count );
				flag = false;
				break;
			}
		}
		
	}
	//console.log(_json);
	if(flag){
		arr.push(_json)
	}
	setCookie("shoplist",JSON.stringify(arr));
	var f = confirm("是否继续购买")
	if(!f){
		location.href = "http://127.0.0.1/2xiangmu/gouwuche.html"  //连接购物车网址
	}
	console.log(document.cookie)
})
