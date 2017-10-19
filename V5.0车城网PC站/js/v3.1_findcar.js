//找车-左侧栏-点击品牌并定位顶部
scrollToLocation();
function scrollToLocation() {
	var treeCon = $('.lxy_findcarL_brand');
	if (treeCon.length != 0) {
		var scrollToTree = treeCon.find('.current_brand');
		if (scrollToTree.length != 0) {
			treeCon.animate({
				scrollTop: scrollToTree.offset().top - treeCon.offset().top + treeCon.scrollTop()
			}, 0);
			y_brands_hide = scrollToTree.find('.lxy_brands_hide');
			y_brands_hide.show();
		}//else console.log('current_brand undefined');
	}
};	
// 找车首页 条件筛选 展开更多
$(".lxy_click_down").click(function(){
	$('.lxy_click_down').hide();
	$(".lxy_click_up").show();
	$(".lxy_this_hide").show();
});
$(".lxy_click_up").click(function(){
	$('.lxy_click_up').hide();
	$(".lxy_click_down").show();
	$(".lxy_this_hide").hide();
});
//tab v3.1_findcar_brand.html
Yeffect.hover_hxkWcf(".lxy_brandA_top a",".lxy_brand_photo_box","current");
//图片页左侧字母导航  点击车系展开车型
$(".lxy_brands_show").click(function(){
	$(this).siblings(".lxy_brands_hide").toggle();
	//新增上下效果	
	var isSelected=$(this).parents('li').find('.lxy_brands_hide');

	if(isSelected.css("display")=="block"){
		$(this).children('i').addClass('w_change_arrow');
		$(this).parents('li').addClass('w_bb_1');
		$(this).addClass('w_mb_20');
	}else{
		$(this).children('i').removeClass('w_change_arrow');
		$(this).parents('li').removeClass('w_bb_1');
		$(this).removeClass('w_mb_20');
	}
});
//左侧字母板块fixed
$(window).bind("scroll",function() {  
    // 当该导航顶部到达窗口顶部  
    if ($(document).scrollTop() > 200) {  
       $(".lxy_findcarL").addClass("lxy_findcarL_fixed"); 
    }else{
    	$(".lxy_findcarL").removeClass("lxy_findcarL_fixed");
    }
});  

//楼层
msgdmd(".lxy_findcarL_letter a",".lxy_findcarL_brand ul p","current",500);
function msgdmd(dhli,bkli,dqys,time){
    var shuzu=[];
		
	$(bkli).each(function(index, element) {
        shuzu.push($(this).offset().top+$(".lxy_findcarL_brand").scrollTop()-210);
    });
	
	function box(top){
		for(var i=0;i<shuzu.length;i++){
			if(shuzu[i]>top){
				return i;
			}
		}
	};
	
	$(".lxy_findcarL_brand").scroll(function(){
		var gdttop=$(".lxy_findcarL_brand").scrollTop();
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
		var scrollHeight = $(bkli).eq(aasdasd).offset().top-$(".lxy_findcarL_brand").offset().top+5+$(".lxy_findcarL_brand").scrollTop();
		$(".lxy_findcarL_brand").stop().animate({scrollTop: scrollHeight},time);
	});	
}
//找车更多颜色
	$(".carcolor-more").hover(function(){
	    $(this).next(".carcolor-pop").fadeIn(100); 
	    $(this).find('em').addClass('jiantouUp');        
	  });
	 $(".small_nav").mouseleave(function(){
	    $(this).find(".carcolor-pop").fadeOut(100);
	    $(this).find('em').removeClass('jiantouUp');    
	  });

	 //找车暂无报价
	// $(".l_baojia i").hover(function(){
	//     $(this).parent().find("p").slideToggle(0);

	// });
	// 找车——展开 5 款符合条件的车型
	$(".l_zhankai a").click(function(){
		$(this).parents(".l_morecars").find(".y_zhankai").show();
		$(this).parents(".l_morecars").find(".l_zhankai").hide();
		$(this).parents(".l_morecars").find(".l_accordcar").show();
	});
	$(".y_zhankai a").click(function(){
		$(this).parents(".l_morecars").find(".y_zhankai").hide();
		$(this).parents(".l_morecars").find(".l_zhankai").show();
		$(this).parents(".l_morecars").find(".l_accordcar").hide();
	});
	// 找车-品牌   点击展开条件筛选
	$(".lxy_open_shaixuan").click(function(){
		$(".lxy_brand_sx").css("display","block");
		$(this).hide();
		$(".lxy_kongbai").hide();
		$(".lxy_close_shaixuan").show();
	})
	$(".lxy_close_shaixuan").click(function(){
		$(".lxy_brand_sx").css("display","none");
		$(this).hide();
		$(".lxy_kongbai").show();
		$(".lxy_open_shaixuan").show();
	})
/*$(".lxy_filter_cen1_hide a").click(function(){
	$(".lxy_filter_cen1_open").addClass("current");
})*/
$(".carjibiecur a").click(function(){
	$(".carjibie").addClass("current");
})

$(".suvjibiecur a").click(function(){
	$(".suvjibie").addClass("current");
})


$(".qitacur a").click(function(){
	$(".qita").addClass("current");
})
autodivheight();
function autodivheight(){ //函数：获取尺寸
    //获取浏览器窗口高度
    var winHeight=0;
    if (window.innerHeight)
        winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;
    //通过深入Document内部对body进行检测，获取浏览器窗口高度
    if (document.documentElement && document.documentElement.clientHeight)
        winHeight = document.documentElement.clientHeight;
    //DIV高度为浏览器窗口的高度
    //document.getElementById("test").style.height= winHeight +"px";
    //DIV高度为浏览器窗口高度的一半
    document.getElementById("lxy_findcarL").style.height= (winHeight -0)+"px";
    document.getElementById("lxy_findcarL_letter").style.height= (winHeight -0)+"px";
    document.getElementById("lxy_findcarL_brand").style.height= (winHeight -0)+"px";
}
window.onresize=autodivheight; //浏览器窗口发生变化时同时变化DIV高度
// V2.9
// 经销商城市隐藏
$('#zhankai-new').click(function(){
  if($(this).find('.jiantou').hasClass('jiantouUp') == false){
    $(this).find('.jiantou').addClass('jiantouUp');
    $('.priceProvince').css('height','auto');
    $('#nrNew').text('收起部分');
  }else{
    $(this).find('.jiantou').removeClass('jiantouUp');
    $('.priceProvince').css('height','45px');
    $('#nrNew').text('展开全部')
  }
});

(function($){
	//created by wml
	//v4.4配置一栏添加选中效果
	$('#w_isChecked_box').on('click','em',function(){
		var that=$(this);
		if(that.hasClass('w_em_checked')){
			$(this).removeClass('w_em_checked').addClass('w_em_checkbox');
		}else{
			$(this).removeClass('w_em_checkbox').addClass('w_em_checked');
		}
	});
	var publicClass={
		autoAddClass:function(){
			$('.lxy_brands_hide').each(function(){
				var isSelected=$(this).parents('li').find('.lxy_brands_show'),isSelectedBox=$(this).parents('li');
				if($(this).css("display")=="block"){
					isSelected.addClass('w_mb_20');
					isSelected.children('i').addClass('w_change_arrow');
					isSelectedBox.addClass('w_bb_1');
				}
			});
		},
		deleteMargin:function(ele){
			$(ele).each(function(index,item){
				$(ele).eq(index).find('ul li:nth-child(5n)').css('margin-right',0);
			});
		}
	};
	//判断左边展开栏目是否 有页面打开 对其进行类名的添加
	publicClass.autoAddClass();
	//判断list 是否为5的倍数去除margin值
	publicClass.deleteMargin('.lxy_new_carA_cen');
	publicClass.deleteMargin('.lxy_brand_photo');	
})(jQuery);

