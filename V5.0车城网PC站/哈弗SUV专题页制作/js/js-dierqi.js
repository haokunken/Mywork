// JavaScript Document
$(document).ready(function(e) {
	
	// 宝骏专题页底部选项卡效果
	Yeffect.click_hxk(".y_bjcarB a",".y_box1","y_bjcarBmr");

	//右侧浮动
	$('.y_close').click(function(){	
		$('.y_floatA').hide();
	})

	//哈佛专题底部滚动
	Yeffect.animat_banner(".y_topicB ul",".y_topicB ul li","",".y_jtL",".y_jtR","",5000,0,"linear");


	//返回顶部
	$(".y_backtop").click(function(){
    	$("html,body").animate({scrollTop:0},500);
	})

	//楼层
	msgdmd(".y_HFfdA ul li",".y_hfh1","current",500);
	function msgdmd(dhli,bkli,dqys,time){
	    var shuzu=[];
			
		$(bkli).each(function(index, element) {
	        shuzu.push($(this).offset().top-190);
	    });
		
		function box(top){
			for(var i=0;i<shuzu.length;i++){
				if(shuzu[i]>top){
					return i;
				}
			}
		};
		
		$(window).scroll(function(){
			var gdttop=$(window).scrollTop();
			var num=box(gdttop);
			if(!num&&gdttop>1200){
				num=shuzu.length;
			};
			if(!num&&gdttop<300){
				num=0;	
			};
			
			$(dhli).removeClass(dqys).eq(Math.max(num-1,0)).addClass(dqys);	
		});
		
		$(dhli).click(function(){		
			var aasdasd=$(dhli).index(this);
			$("html,body").animate({scrollTop:$(bkli).eq(aasdasd).offset().top-20},time,"easeInOutCubic");
		});	
	}

	// 显示和隐藏
	











	
});

