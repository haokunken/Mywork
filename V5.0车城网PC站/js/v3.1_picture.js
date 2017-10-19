$(document).ready(function(){

	//找车/图片-左侧栏-点击品牌并定位顶部
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

	// 图片页-最后一个margin-right为0px
	function lastmargin(obj){
		var length = $(obj).length;
		console.log(length)
	    if (length>=4) {
	        for (var i=3; i<=length;i++) {
	            if ((i-3)%4 == 0) {
	                $(obj).eq(i).css("margin-right","0px");
	            }
	        }
		}
	}

	// lastmargin(".lxy_hot_photo_box.eq(.lxy_hot_photo) ul li");
	// lastmargin(".lxy_brand_photo_box.eq(lxy_brand_photo) ul li");
	// lastmargin(".lxy_new_carA_cen ul li");
	
	// lastmargin(".lxy_hot_photo ul li");
	// lastmargin(".lxy_brand_photo ul li");
	// lastmargin(".lxy_new_carA_cen ul li");
	// 车系图片页-右侧最后一个margin-right为0px
	var length = $(".lxy_audicar_listcontent ul li").length;
    if (length>=2) {
        for (var i=1; i<=length;i++) {
            if ((i-1)%2 == 0) {
                $(".lxy_audicar_listcontent ul li").eq(i).css("margin-right","0px");
            }
        }
	}

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
	// 车系图片页-全部在售滑入出现列表
	$(".lxy_state_zs").hover(function(){
		$(".lxy_zaishou_hide").toggle(0);
	});
	$(".lxy_state_ts").hover(function(){
		$(".lxy_tingshou_hide").toggle(0);
	});
	//autodivheight();
	// function autodivheight(){ //函数：获取尺寸
	//     //获取浏览器窗口高度
	//     var winHeight=0;
	//     if (window.innerHeight)
	//         winHeight = window.innerHeight;
	//     else if ((document.body) && (document.body.clientHeight))
	//         winHeight = document.body.clientHeight;
	//     //通过深入Document内部对body进行检测，获取浏览器窗口高度
	//     if (document.documentElement && document.documentElement.clientHeight)
	//         winHeight = document.documentElement.clientHeight;
	//     //DIV高度为浏览器窗口的高度
	//     //document.getElementById("test").style.height= winHeight +"px";
	//     //DIV高度为浏览器窗口高度的一半
	//     document.getElementById("lxy_findcarL").style.height= (winHeight -0)+"px";
	//     document.getElementById("lxy_findcarL_letter").style.height= (winHeight -0)+"px";
	//     document.getElementById("lxy_findcarL_brand").style.height= (winHeight -0)+"px";
	// }
	//window.onresize=autodivheight; //浏览器窗口发生变化时同时变化DIV高度
	//created by wml
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
	publicClass.deleteMargin('.lxy_hot_photo_box');
	publicClass.deleteMargin('.lxy_brand_photo');
});
