// JavaScript Document
$(document).ready(function() {

	//楼层
	msgdmd(".y_select_brand_hideL ul li a",".y_select_brand_hideR_other","current",0);
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
		
		$(".y_select_brand_hideR").scroll(function(){
			var gdttop=$(".y_select_brand_hideR").scrollTop();
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
			var scrollHeight = $(bkli).eq(aasdasd).offset().top-$(".y_select_brand_hideR").offset().top+$(".y_select_brand_hideR").scrollTop();
			$(".y_select_brand_hideR").stop().animate({scrollTop: scrollHeight},time,"easeInOutExpo");
		});	
	}

	// 请选择品牌
	$('.y_select_brand').click(function (event) {  
	  event.stopPropagation();  
	  $(".y_select_brand_hide").toggle();
	  $(".y_select_chexi_hide").hide();
	  $(".y_select_chexin_hide").hide();
	  return false;
	});  
	// 请选择车系
	$('.y_select_chexi').click(function (event) {
	  event.stopPropagation();
		if($('.y_select_brand').find('p').html() == '请选择品牌'){
			return false;
		}
	  $(".y_select_chexi_hide").toggle();
	  $(".y_select_brand_hide").hide();
	   $(".y_select_chexin_hide").hide();
	  return false;
	});  
	// 请选择车型
	$('.y_select_chexin').click(function (event) {  
	  event.stopPropagation();
		if($('.y_select_brand').find('p').html == '请选择品牌' ||　$('.y_select_chexi').find('p').html() == '请选择车系'){
			return false;
		}
	  $(".y_select_brand_hide").hide();
	  $(".y_select_chexi_hide").hide();
	  $(".y_select_chexin_hide").toggle();
	  return false;
	});  
	// 点击其他区域关闭
	$(document).click(function(event){
	  var con = $(".y_select_brand_hide");
	    if(!con.is(event.target) && con.has(event.target).length === 0){ 
	    $(".y_select_brand_hide").hide();
	  }
	});
	$(document).click(function(event){
	  var con = $(".y_select_chexi_hide");
	    if(!con.is(event.target) && con.has(event.target).length === 0){ 
	    $(".y_select_chexi_hide").hide();
	  }
	});
	$(document).click(function(event){
	  var con = $(".y_select_chexin_hide");
	    if(!con.is(event.target) && con.has(event.target).length === 0){ 
	    $(".y_select_chexin_hide").hide();
	  }
	});
	var calculatorClass={
		fixed:function(obj){
			if($(obj).length>0){
				var elm=$(obj);
				var kong=$(obj+'_kong');
				var height=elm.innerHeight();
				var offsetTop=elm.offset().top;
				var pageY=offsetTop;
				console.log(height)
				$(window).scroll(function(){
					// console.log('wml')
					// console.log($(window).scrollTop())	
					if($(window).scrollTop()>=pageY){
						kong.show();
						elm.css({
							'position':'fixed',
							'top':'0'
						})
					}else{
						kong.hide();
						elm.css({
							'position':'static',
							'top':offsetTop
						})
					}
				});
				}else{
					return false;
				}			
		}
	};

	calculatorClass.fixed('.j_NewzdjB');
	 calculatorClass.fixed('.w_fixed_content');
});

