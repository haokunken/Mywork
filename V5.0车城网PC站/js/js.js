// JavaScript Document
$(document).ready(function() {

	//找车-左侧栏-点击品牌并定位顶部
	scrollToLocation();
	function scrollToLocation() {
		var treeCon = $('.y_findcarL_brand');
		if (treeCon.length != 0) {
			var scrollToTree = treeCon.find('.current_brand');
			if (scrollToTree.length != 0) {
				treeCon.animate({
					scrollTop: scrollToTree.offset().top - treeCon.offset().top + treeCon.scrollTop()
				}, 0);
				y_brands_hide = scrollToTree.find('.y_brands_hide');
				y_brands_hide.show();
			}//else console.log('current_brand undefined');
		}
	};
	
	//专题滚动
	Yeffect.animat_banner(".y_topicB ul",".y_topicB ul li","",".y_jtL",".y_jtR","",9999999,0,"linear");

	// 车系口碑-展开更多车型
	$(".j_morecarA_open").click(function(){
		$('.j_mouthLB_close').show();
		$('.j_morecarA_open').hide();
		$('.j_morecarA_close').show();
	})
	$(".j_morecarA_close").click(function(){
		$('.j_mouthLB_close').hide();
		$('.j_morecarA_open').show();
		$('.j_morecarA_close').hide();
	})
	// 车系口碑-排量选项卡
	Yeffect.click_hxk(".j_mouthLB_CL ul li",".j_mouthLB_CR","j_mouthLB_CLmr");

	// 车系口碑-同级别口碑榜 口碑总榜
	Yeffect.click_hxk(".j_mouthRB_top a",".j_mouthRB_cen","j_mouthRB_topmr");
	$(".j_mouthRB_cen ul li").mouseenter(function () {
		$(this).parents('ul').find('li').each(function(){
			$(this).find('.j_mouthRB_cenB').hide();
			$(this).find('.j_mouthRB_cenA').find('em').show();
			$(this).find('.j_mouthRB_cenA').find('i').show();
		})
		$(this).find('.j_mouthRB_cenB').show();
		$(this).find('.j_mouthRB_cenA').find('em').hide();
		$(this).find('.j_mouthRB_cenA').find('i').hide();
   });
	$(".j_mouthRB_cen ul li").mouseleave(function () {
		$(this).parents('ul').find('li').each(function(){
			$(this).find('.j_mouthRB_cenB').hide();
			$(this).find('.j_mouthRB_cenA').find('em').show();
			$(this).find('.j_mouthRB_cenA').find('i').show()
		})
      	$(this).find('.j_mouthRB_cenB').show();
		$(this).find('.j_mouthRB_cenA').find('em').hide();
		$(this).find('.j_mouthRB_cenA').find('i').hide();
   });
	
	//全部    最满意    最不满意    空间    动力    操控    油耗    舒适性    外观    内饰    性价比
	Yeffect.hover_hxkWcf(".j_mouthLER_top a",".j_mouthLER_cen","j_mouthLER_topmr");
	
	$(".j_mouthLFR_cenA").each(function(index, element) {
		Yeffect.animat_banner_lh($(this).find("ul"),$(this).find("ul li"),"",$(this).find(".j_mouthLFR_btmL"),$(this).find(".j_mouthLFR_btmR"),"",9999999,0,300,false,"linear");
    });
	
	//点击展开收起
	$(".j_mouthLFR_txt_btmA").click(function(){
		$(this).parents(".j_mouthLFR_txt_btm").parents(".j_mouthLF").find(".j_mouthLFR_txtA").show();	
		$(this).parents(".j_mouthLFR_txt_btm").find(".j_mouthLFR_txt_btmB").show();	
		$(this).parents(".j_mouthLFR_txt_btm").find(".j_mouthLFR_txt_btmA").hide();	                                                                                                  
	})
	$(".j_mouthLFR_txt_btmB").click(function(){
		$(this).parents(".j_mouthLFR_txt_btm").parents(".j_mouthLF").find(".j_mouthLFR_txtA").hide();
		$(this).parents(".j_mouthLFR_txt_btm").find(".j_mouthLFR_txt_btmB").hide();	
		$(this).parents(".j_mouthLFR_txt_btm").find(".j_mouthLFR_txt_btmA").show();	
	})

	// 新增板块
	$(".j_mouthRB_cen2 ul li").mouseenter(function () {
		$(this).parents('ul').find('li').each(function(){
			$(this).find('.j_mouthRB_cenB').hide();
			$(this).find('.j_mouthRB_cenA').find('em').show();
			$(this).find('.j_mouthRB_cenA').find('i').show();
		})
		$(this).find('.j_mouthRB_cenB').show();
		$(this).find('.j_mouthRB_cenA').find('em').hide();
		$(this).find('.j_mouthRB_cenA').find('i').hide();
   });
	$(".j_mouthRB_cen2 ul li").mouseleave(function () {
		$(this).parents('ul').find('li').each(function(){
			$(this).find('.j_mouthRB_cenB').hide();
			$(this).find('.j_mouthRB_cenA').find('em').show();
			$(this).find('.j_mouthRB_cenA').find('i').show()
		})
      	$(this).find('.j_mouthRB_cenB').show();
		$(this).find('.j_mouthRB_cenA').find('em').hide();
		$(this).find('.j_mouthRB_cenA').find('i').hide();
   });

	//点击图片放大
	Yeffect.gundongTransverse(".j_bp_imgB ul",".j_bp_imgB ul li",".j_bp_imgBL",".j_bp_imgBR",2,2,".j_bp_imgA","j_bp_imgBmr"); 

	$(".j_mouthLFR_cenA ul li img").click(function(){

		var the_src = $(this).attr("src");
		var dom = "<ul>";
		var the_index = 0;
		$(this).closest("ul").find("img").each(function(index) {
			var src = $(this).attr("src");
			if (the_src == src) {
				dom += '<li class="j_bp_imgBmr">';
				the_index = index;
			} else {
				dom += '<li>';
			}
			dom += '<img src="' + src + '" /><em></em></li>';
		});
		dom += "</ul>";
		$(".j_bp_imgB ul").replaceWith(dom);
		$(".j_bp_imgA img").attr('src', the_src);
		// 重新计算
		Yeffect.gundongTransverse(".j_bp_imgB ul",".j_bp_imgB ul li",".j_bp_imgBL",".j_bp_imgBR",2,2,".j_bp_imgA","j_bp_imgBmr");

		$(".j_bp_imgB ul li").eq(the_index).find("img").click();

		$('.j_bigphotoA').show();
		$(".j_hideA").show();
	});

	$(".j_bigphotoA_img").click(function(){
		$('.j_bigphotoA').hide();
		$(".j_hideA").hide();
	});



	// 口碑页 不足5条车型 屏蔽展开更多
	$(".j_mouthLB_CL ul li").click(function(){
		if($(".j_mouthLB_CR:visible ul li").length<5){
			$(".j_morecarA").hide();
			//alert($(".j_mouthLB_CR:visible ul li").length);
		}else{
			$(".j_morecarA").show();
		}
	})
	if($(".j_mouthLB_CR:visible ul li").length<5){
		$(".j_morecarA").hide();
	}else{
		$(".j_morecarA").show();
	}

	// 找车首页左侧字母导航
	// $(".y_brands_show i").click(function(){
	// 	$(this).parents(".y_brands_show").siblings(".y_brands_hide").toggle();
	// });
	$(".y_brands_show").click(function(){
		$(this).siblings(".y_brands_hide").toggle();
	});
	//左侧字母板块fixed
	if ($(window).height()>900) {
		$(window).bind("scroll",function() {  
	    	// 判断窗口的滚动条是否接近页面底部，这里的240可以自定义  
		    // if ($(document).scrollTop() + $(window).height() > $(document).height() - 155) {    
		    //    $(".y_findcarL_letter").css("height","698px"); 
		    //    $(".y_findcarL_brand").css("height","698px");
		    //    $(".y_findcarL").css("height","700px"); 
		    // }
		    // if ($(document).scrollTop() + $(window).height() < $(document).height() - 240) {    
		    //    $(".y_findcarL_letter").css("height","858px"); 
		    //    $(".y_findcarL_brand").css("height","858px");
		    //    $(".y_findcarL").css("height","860px"); 
		    // }
		    // 当该导航顶部到达窗口顶部  
		    if ($(document).scrollTop() > 180) {  
		       $(".y_findcarL").addClass("y_findcarL_fixed"); 
		    }else{
		    	$(".y_findcarL").removeClass("y_findcarL_fixed");
		    }
		})  
	}else{
		$(window).bind("scroll",function() {  
	    	//判断窗口的滚动条是否接近页面底部，这里的240可以自定义  
		    // if ($(document).scrollTop() + $(window).height() > $(document).height() - 155) {  
		    //    //没有写ajax的调用，直接触发了链接的click事件。  
		    //    $(".y_findcarL_letter").css("height","398px"); 
		    //    $(".y_findcarL_brand").css("height","398px");
		    //    $(".y_findcarL").css("height","400px"); 
		    // }
		    // if ($(document).scrollTop() + $(window).height() < $(document).height() - 240){
		    // 	$(".y_findcarL").removeClass("y_findcarL_fixed");
		    // 	$(".y_findcarL_letter").css("height","558px"); 
			   //  $(".y_findcarL_brand").css("height","558px");
			   //  $(".y_findcarL").css("height","560px");
		    // }
			// 当该导航顶部到达窗口顶部  
			if ($(document).scrollTop() > 180) {  
			   $(".y_findcarL").addClass("y_findcarL_fixed"); 
			}else{
				$(".y_findcarL").removeClass("y_findcarL_fixed");
			} 
		})  
	}
	

	//楼层
	msgdmd(".y_findcarL_letter a",".y_findcarL_brand ul p","current",500);
	function msgdmd(dhli,bkli,dqys,time){
	    var shuzu=[];
			
		$(bkli).each(function(index, element) {
	        shuzu.push($(this).offset().top-180);
	    });
		
		function box(top){
			for(var i=0;i<shuzu.length;i++){
				if(shuzu[i]>top){
					return i;
				}
			}
		};
		
		$(".y_findcarL_brand").scroll(function(){
			var gdttop=$(".y_findcarL_brand").scrollTop();
			var num=box(gdttop);
			if(!num&&gdttop>500){
				num=shuzu.length;
			};
			if(!num&&gdttop<300){
				num=0;	
			};
			
			$(dhli).removeClass(dqys).eq(Math.max(num-1,0)).addClass(dqys);	
		});
		
		$(dhli).click(function(){		
			var aasdasd=$(dhli).index(this);
			var scrollHeight = $(bkli).eq(aasdasd).offset().top-$(".y_findcarL_brand").offset().top+$(".y_findcarL_brand").scrollTop();
			$(".y_findcarL_brand").stop().animate({scrollTop: scrollHeight},time,"easeInOutExpo");
		});	
	}
	// 点击品牌跳页面并定位
	// var scrollHeight = $(".y_brands_hideBa").offset().top-$(".y_findcarL_brand").offset().top+$(".y_findcarL_brand").scrollTop();
	// $(".y_findcarL_brand").stop().animate({scrollTop: scrollHeight},500,"easeInOutExpo");

	// 找车首页 条件筛选 展开更多
	$(".y_click_down").click(function(){
		$('.y_click_down').hide();
		$(".y_click_up").show();
		$(".y_this_hide").show();
	});
	$(".y_click_up").click(function(){
		$('.y_click_up').hide();
		$(".y_click_down").show();
		$(".y_this_hide").hide();
	});
	

	// 口碑首页
	Yeffect.hover_hxkWcf(".y_zsyA_nav a",".y_zsyA_cen","current");

	// 找车详情
	$(".y_findcar_chexiBR_cen3 ul").find("li").eq(4).css("margin-right","0px");


	//找车更多颜色
	$(".carcolor-more").hover(function(){
	    $(this).next(".carcolor-pop").fadeIn(100); 
	    $(this).find('em').removeClass('jiantouUp');    
	  });
	 $(".small_nav").mouseleave(function(){
	    $(this).find(".carcolor-pop").fadeOut(100);
	    $(this).find('em').addClass('jiantouUp');        
	  });

	 //找车暂无报价
	$(".l_baojia i").hover(function(){
	    $(this).parent().find("p").slideToggle(0);

	});

	// 找车——展开 5 款符合条件的车型
	$(".l_zhankai").click(function(){
		$(this).parent(".l_morecars").find(".y_zhankai").show();
		$(this).parent(".l_morecars").find(".l_zhankai").hide();
		$(this).parent(".l_morecars").find(".l_accordcar").show();
	});
	$(".y_zhankai").click(function(){
		$(this).parent(".l_morecars").find(".y_zhankai").hide();
		$(this).parent(".l_morecars").find(".l_zhankai").show();
		$(this).parent(".l_morecars").find(".l_accordcar").hide();
	});

});

