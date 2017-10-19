$(document).ready(function(){
	// 询价 展开经销商
	$(".y_inquiry_jxs_down").click(function(){
		$(this).hide();
		$(this).siblings(".y_inquiry_jxs_up").show();
		$(this).siblings(".y_inquiry_jxsA_cen").find("li.lxy_hideli").show();
	})
	$(".y_inquiry_jxs_up").click(function(){
		$(this).hide();
		$(this).siblings(".y_inquiry_jxs_down").show();
		$(this).siblings(".y_inquiry_jxsA_cen").find("li.lxy_hideli").hide();
	})
	// tab
	//Yeffect.click_hxkWcf(".y_inquiry_top a",".y_inquiry_cen","current"); 
	// 城市联动
	$(".y_city_current").click(function(event){
		event.stopPropagation();
	    $(".y_city_hideA,.y_city_hideB").css("display","block");
	    
	});
	// 导航点击空白区域关闭（.click(function(event){event.stopPropagation()）
	// $(document).click(function(event){
	//   var con = $(".changeKind");
	//     if(!con.is(event.target) && con.has(event.target).length === 0){ 
	//     $(".y_city_hideA,.y_city_hideB").hide();
	//   }
	// });


	// V2.9
	$(".y_inquire_cen_yxcxR_current").click(function(event){
	  event.stopPropagation();
	  $(".y_inquire_cen_yxcxR_hide").toggle(1);
	});
	// 点击其他区域关闭
	$(document).click(function(event){
	  var con = $(".y_inquire_cen_yxcxR_hide");
	    if(!con.is(event.target) && con.has(event.target).length === 0){ 
	    $(".y_inquire_cen_yxcxR_hide").hide();
	    $(".y_inquire_cityLB").hide();
	    $(".y_inquire_cityRB").hide();
	  }
	});

	// 性别选择
	$(".y_inquire_nameR em").click(function(event){
		$(this).addClass("y_inquire_current").parents("span").siblings().children("em").removeClass("y_inquire_current");
	});
	// 城市选择
	$(".y_inquire_cityLA").click(function(event){
	  event.stopPropagation();
	  $(".y_inquire_cityLB").toggle(1);
	  $(".y_inquire_cityRB").hide(1);
	});
	$(".y_inquire_cityRA").click(function(event){
	  event.stopPropagation();
	  $(".y_inquire_cityRB").toggle(1);
	  $(".y_inquire_cityLB").hide(1);
	});


	// 个人信息
	$(".y_xinxi em").click(function(event){
	  $(this).toggleClass("current");
	});

	//选中切换checkbox
	// $(".l_checkbox").click(function(){
	// 		if($(this)[0]['classList'].contains("l_Changecheckbox")){
	// 				$(this).removeClass("l_Changecheckbox");
	// 		}else{
	// 				$(this).addClass("l_Changecheckbox");
	// 		}
			
	// })
		// 点击 展开经销商
	$(".l_zhankai").click(function(){
		$(this).hide();
		$(".y_zhankai").show();
		$(".l_jxsLists ul li").show();
	})
	//	点击收起经销商
	$(".y_zhankai").click(function(){
		$(this).hide();
		$(".l_zhankai").show();
		$(this).siblings(".l_display").hide();
	})



});