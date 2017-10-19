$(document).ready(function(){
	// 口碑页-最后一个margin-right为0px
	function lastmargin(obj){
		var length = $(obj).length;
	    if (length>=4) {
	        for (var i=3; i<=length;i++) {
	            if ((i-3)%4 == 0) {
	                $(obj).eq(i).css("margin-right","0px");
	            }
	        }
		}
	}
	lastmargin(".y_mouthLA_cen ul li");
	// 口碑首页左侧
	Yeffect.hover_hxkWcf(".lxy_hotA_top a",".y_mouthLA_cen","current");
	// 口碑首页左侧
	Yeffect.hover_hxkWcf(".y_mouthLB_cen ul li",".y_mouthLB_btm","y_current");
	// 口碑首页右侧-右侧最后一个margin-right为0px
	var length = $(".y_audicar_listcontent ul li").length;
	if (length>=2) {
        for (var i=1; i<=length;i++) {
            if ((i-1)%2 == 0) {
                $(".y_audicar_listcontent ul li").eq(i).css("margin-right","0px");
            }
        }
	}
	//取消一些边框线
	function hide(id){		
		$("#"+id).children().children().eq(0).css({"padding-left":"0px"});
		$("#"+id).children().children().eq(4).children().css({"border":"none"});
		$("#"+id).children().children().eq(9).children().css({"border":"none"});
		$("#"+id).children().children().eq(5).css({"padding-left":"0px"});
		$("#"+id).children().children().eq(10).css({"padding-left":"0px","border":"none"});
		$("#"+id).children().children().eq(11).css({"border":"none"});
		$("#"+id).children().children().eq(12).css({"border":"none"});
		$("#"+id).children().children().eq(13).css({"border":"none"});
		$("#"+id).children().children().eq(14).css({"border":"none"});
	}
	hide('l_hottest');
	//热门车型口碑tab 切换
	 $(".l_click1 li").hover(function(){
	 	$(".l_click1 li").removeClass("l_addClass");
	 	$(this).addClass("l_addClass");
	 	var my_id = $(this).attr("data-id");
	 	$(".l_chexingLists").css("display","none");
	 	$("#"+my_id).css("display","block");
	 	hide(my_id);
	 })
	// 单项满意度排行 tab切换
	// $(".l_click2 li").hover(function(){
	// 	$(".l_click2 li").removeClass("l_addClass");
	// 	$(this).addClass("l_addClass");
	// 	var my_class= $(this).attr("data-class");
	// 	$(".l_satisfiedChexingLists").css("display","none");
	// 	$("."+my_class).css("display","block");
	// })	
	
	
	
	//精华口碑推荐 	
	for(var i in $(".l_essenceContent ul li")){	
		// 最后一行去掉边框线
		if(i >= 3){
			$(".l_essenceContent ul li")[i]['style']['border'] = "none";
		}
	}
	//第一个第四个不要左边框和左padding
	$(".l_essenceContent ul li").eq(0).children().css({"border":"none","padding-left":"0px"})
	$(".l_essenceContent ul li").eq(3).children().css({"border":"none","padding-left":"0px"})
	//右侧悬浮
	$(".l_gotop ul .l_gotopApp").hover(function(){
		$(this).children("i").css("display","none");
		$(".l_hoverAPP").css("display","block");
		$(this).children("span").css("display","block");
	},function(){	
		$(".l_hoverAPP").css("display","none");
		$(this).children("i").css("display","block");
		$(this).children("span").css("display","none");
	});
	$(".l_gotop ul .l_gotopAdivice").hover(function(){
		$(this).css({"background":"#528cf5","border":"none"});
		$(this).children("i").css("display","none");
		$(this).children("span").css("display","block");
	},function(){
		$(this).css({"background":"#fff","border":"1px solid #e9eef4"});
		$(this).children("i").css("display","block");
		$(this).children("span").css("display","none");
	})
	$(".l_gotop ul .l_gotopTo").hover(function(){
		$(this).css({"background":"#528cf5","border":"none"});
		$(this).children("i").css("display","none");
		$(this).children("span").css("display","block");
	},function(){	
		$(this).css({"background":"#fff","border":"1px solid #e9eef4","border-top":"none"});
		$(this).css("background","#fff");
		$(this).children("i").css("display","block");
		$(this).children("span").css("display","none");
	})
	//如果是第一屏  置顶的图标去掉
	$(window).scroll(function(){
//		console.log( document.documentElement.scrollTop)
		if(document.documentElement.scrollTop >= 1 || window.pageYOffset >= 1 || document.body.scrollTop >= 1){
			$(".l_gotopTo").css("display","block")
		}else{
			$(".l_gotopTo").css("display","none")
		}
	})
	//点击搜过框  弹层出现
	$(".l_searchBox input").click(function(){
		$(".l_searchKeyup").hide();
		$(".l_searchLists").css("display","block");
	})
	//搜索下拉框探层
	$(".l_searchListsScrollContent ul li").click(function(){
		var bid = $(this).attr('rel');
		$.ajax({
			'type':'post',
			'url':url_pre+'/ajax/getFactorySeries',
			'data':{'_token':'123','bid':bid},
			'dataType':'jsonp',
			'jsonp': "callback",
			success:function(data){
				$(".l_searchListsRightContent").html(data);
			},
			error:function(){

			}
		});
		$(".l_searchListsRight").css("display","block");
		$(".l_searchListsLeft").css("display","none")
	})
	//点击关闭按钮  隐藏弹层
	$(".l_searchLists p i").click(function(){
		$(".l_searchLists").css("display","none");
	})
	//关闭按钮划上样式
	$(".l_searchLists p i").hover(function(){
		$(this).removeClass("l_normal")
		$(this).addClass("l_hover")
	},function(){
		$(this).removeClass('l_hover');
		$(this).addClass("l_normal")
	})
	//选择车系的时候 点击品牌返回请选择品牌
	$(".l_searchListsRight p .l_pinpai").click(function(){
		$(".l_searchListsRight").css("display","none");
		$(".l_searchListsLeft").css("display","block")
	})
	//点击其他区域弹层关闭
	$(document).click(function(){
		$(".l_searchLists").css("display","none");		
		$(".l_searchKeyup").css("display","none");		
	})
//	阻止事件冒泡
	$(".l_searchLists").click(function(){
		return false;
	})
	$(".l_searchKeyup").click(function(){
		return false;
	})
	$(".l_searchBox input").click(function(){
		return false;
	})
//	$(document).click(function(event){
//		var con = $(".l_searchListsRight");
//		if(!con.is(event.target)&&con.has(event.target).length === 0){
//			$(".l_searchListsRight").hide();
//		}
//	})
	//搜索弹层
	msgdmd(".l_searchListsScrollNav ul li",".l_searchListsScrollContent ul","current",0);
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
		
		$(".l_searchListsScrollContent").scroll(function(){
			var gdttop=$(".l_searchListsScrollContent").scrollTop();
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
			var scrollHeight = $(bkli).eq(aasdasd).offset().top-$(".l_searchListsScrollContent").offset().top+$(".l_searchListsScrollContent").scrollTop();
			$(".l_searchListsScrollContent").stop().animate({scrollTop: scrollHeight},time,"easeInOutExpo");
		});	
	}
	//置顶
//	$(".l_gotopTo").click(function(){
//		$('body,html').animate({
//		    'scrollTop': '0px'
//		  }, 500)
//		document.body.scrollTop = window.pageYOffset = document.documentElement.scrollTop = 0;
//	})
	$('.l_gotopTo').click(function(){
		$('body,html').animate({'scrollTop':'0px'},200)
	})
 // created by wml
 //新版口碑 判断列表列数去除最后一个margin值
  $.fn.deleteMargin=function(){
  	return {
  		add:function(){
//			console.log(1111)
  		}
  	}
  	// var $container=$('.w_list_container');
  	// var $list=$container.children('li');
  	// return $list.each(function(index,item){
  	// 	var $index=$(this).index()+1;
  	// 	if($index%5==0){
  	// 		 $(this).css('margin-right',0);
  	// 	}
  	// })
  	// 
  	// return  $container;
  }
//   $.deleteMargin=function(){
// 	  var $container=$('.w_list_container');
// 	  var $list=$container.children('li');
// //	  console.log($list)
// 	  return $list.each(function(index,item){
// 	  	var $index=index+1;
// 	  	 if($index%5==0){
// 	  	 	$(this).css('margin-right',0);
// 	  	 }
// 	  })
//   }
//   $.deleteMargin()
});