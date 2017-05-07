

$(function(){
	$(".listBottom .show").click(function(){
		$(".hide").slideDown(function(){
			 $(".show").hide();
		});
	});
});

$(function(){
	$(".button").click(function(){
		$(this).parent().siblings(".none ").slideToggle();
		var btnValue = $(this);
		if(btnValue.val() == '更多'){
			btnValue.val("收起");
		}else{
			btnValue.val("更多");
		}
	})
})

var b_bj=new Array();
b_bj[0]=new Array("珠宝","--所有品牌--|中国黄金|老凤祥|周大福|菜百|六福珠宝|周大生")
b_bj[1]=new Array("化妆","--所有品牌--|欧珀莱|SASA|克里斯汀.迪奥(CD)|雅诗兰黛|兰蔻|丝芙兰")
b_bj[2]=new Array("精品","--所有品牌--|COACH|卡地亚|万宝龙|施华洛世奇|登喜路|新秀丽")

$(function(){
	$(".pinlei_select1").click(function(){
		$(this).toggleClass(".pinlei_select11");
		$("#b_qu").show();
		return false;
	});
	$("#b_qu li,#b_address li").mouseover(function(){
		$(this).addClass("b_liColor").siblings().removeClass("b_liColor");

	});
	
	$("#b_qu li").click(function(){
		$(".bai_qu").html($(this).html());
		var b_qu=$(this).text();
		var i,j,b_wz=new Array();
		for(i=0;i<b_bj.length;i++){
			if(b_qu==b_bj[i][0].toString()){
				b_wz=b_bj[i][1].split("|");
				$("#b_address").html("");
				for(j=0;j<b_wz.length;j++){
					$("#b_address").append("<li>"+b_wz[j]+"</li>");
					$('#b_address li').hover(function(){
						$(this).addClass('b_liColor').siblings().removeClass("b_liColor");
					})
					$("#b_address li").click(function(){
						//alert('123')
						$(".bai_address").text($(this).text());
						$("#b_address").hide();
						return false;

					});
				}
			}
		}
		$(".bai_address").text($("#b_address").children(":first").text());
	});


	$(".pinlei_select2").click(function(){
		$(this).toggleClass(".pinlei_select22");
		$("#b_address").show();
		$("#b_qu").hide();
		return false;

	});
	// $("#b_address li").mouseover(function(){
	// 	$(this).addClass("b_liColor").siblings().removeClass("b_liColor");
	// });
	$("#b_address li").click(function(){
	})
	$("#b_qu li").click(function(){
		//alert('123')
		// $("#b_qu").hide();
		$(this).closest('ul').hide();
		return false;

	})
	$('body').click(function(){
		$('#b_address,#b_qu').hide();
	})
});

