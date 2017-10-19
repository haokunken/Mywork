$(document).ready(function(){

	// 首页-价格车型切换
	Yeffect.hover_hxkWcf(".y_car_priceL_top_tab ul li",".y_car_priceL_top_cen","y_current");
	// 首页-车型切换
	Yeffect.animat_banner(".y_car_priceR_top ul",".y_car_priceR_top ul li",".banner p span",".y_cutAL",".y_cutAR","current",5000,0,500,true); 
	// 栏目 图片卡片最后一个margin-right:0
	$(".y_columnL_top ul li:last").css("margin-right","0px");
	// 栏目 导购·评测 游记
	$(".y_newsAL_cenR_cen ul li:last").css("margin-bottom","0px");
	// 标签卡片最后一个margin-right:0
	$(".y_columnL_cen a:last").css("margin-right","0px");
	// 首页 热门标签
	Yeffect.hover_hxkWcf(".y_newsAR_tool_cenA ul li",".y_newsAR_tool_cenB","y_current");
	// 首页-上市新车-划入划出效果
	$(".y_new_carL_top ul li").mouseenter(function(){
		$(this).find("em").addClass("y_new_carL_em").animate("slow");
		$(this).find("span").addClass("y_new_carL_span");
	});
	$(".y_new_carL_top ul li").mouseleave(function(){
		$(this).find("em").removeClass("y_new_carL_em");
		$(this).find("span").removeClass("y_new_carL_span");
	});
	// 首页-即将上市-划入划出效果
	$(".y_upcoming_carL_top ul li").mouseenter(function(){
		$(this).find("em").addClass("y_upcoming_carL_em").animate("slow");
		$(this).find("span").addClass("y_upcoming_carL_span");
	});
	$(".y_upcoming_carL_top ul li").mouseleave(function(){
		$(this).find("em").removeClass("y_upcoming_carL_em");
		$(this).find("span").removeClass("y_upcoming_carL_span");
	});
	// 首页 网友热搜
	Yeffect.hover_hxkWcf(".y_hot_seachL ul li",".y_hot_seachR","y_current");

	// 首页-本地车市
	$(".y_localLAL ul li").hover(function(){
	    $(".y_localLAL ul li").eq($(this).index()).addClass("y_current").siblings().removeClass('y_current');
		$(".y_localLAR").hide().eq($(this).index()).show();
	   //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on');
    });
	// 首页- 经销商 - 促销
	Yeffect.animat_banner(".y_dealer_sale ul",".y_dealer_sale ul li",".banner p span",".y_cutAL",".y_dealer_sale_a a","current",9999999,0,500,true);
	// 首页-车型切换
	Yeffect.animat_banner(".y_hot_photo_cen ul",".y_hot_photo_cen ul li",".y_origin span",".y_cutBL",".y_cutBR","y_current",5000,0,500,true); 
	// 回到顶部
	$('.y_backtop a').click(function(){
		$('body,html').animate({'scrollTop':'0px'},500)
	})
	$(document).scroll(function(){
	var t = $(window).scrollTop();

	if(t>600){
		$('.y_backtop a').hide();
	}else{
		$('.y_backtop a').hide();
	}
	
	})
	var length = $(".y_medias ul li").length;
    if (length>=3) {
        for (var i=2; i<=length;i++) {
            if ((i-2)%3 == 0) {
                $(".y_medias ul li").eq(i).css("margin-right","0px");
            }
        }
	}

	//底部广告展开
	$(".x_adsB").click(function(){        
        $(".x_adsB").animate({marginLeft:"0px",left:"-110px"},200,function(){
        	$(".x_adsS").animate({marginRight:"100%",width:"100%"},500).show();
        });
    });
    $(".x_close").click(function(){
        $(".x_adsS").animate({marginLeft:"",width:"0%"},500,function(){
        	$(".x_adsB").animate({marginLeft:"0px",left:"0px"},200);
        });        
    })















});