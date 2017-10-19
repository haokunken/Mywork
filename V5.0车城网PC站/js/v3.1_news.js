$(document).ready(function(){
	//自媒体首页焦点图
    Yeffect.fade_banner(".lxy_media_banner ul li",".lxy_banner_p span",".y_news_cutBL",".y_news_cutBR","current",5000,false); 
	//车系图片页-全部在售滑入出现列表
	$(".lxy_state_zs").hover(function(){
		$(".lxy_zaishou_hide").toggle(0);
	});
	$(".lxy_state_ts").hover(function(){
		$(".lxy_tingshou_hide").toggle(0);
	});
	       //  var z=1;
        // $(".lxy_state_ts").hover(function(){
        //     if(z==0){
        //          $(".lxy_tingshou_hide").hide();
        //          z=1;
        //     }else  {
        //          $(".lxy_tingshou_hide").show();
        //          z=0;
        //     }

        // });
        // $(".lxy_state_zs").hover(function(){
        //     if(z==0){
        //          $(".lxy_zaishou_hide").hide();
        //          z=1;
        //     }else  {
        //          $(".lxy_zaishou_hide").show();
        //          z=0;
        //     }

        // });

	$('.y_backtop a').click(function(){
		$('body,html').animate({'scrollTop':'0px'},500)
	})
	$(document).scroll(function(){
	var t = $(window).scrollTop();

	if(t>600){
		$('.y_backtop a').show();
	}else{
		$('.y_backtop a').hide();
	}
	
	})

	//列表最后一个margin-right设为0px
	/*var length = $(".lxy_audicar_listcontent ul li").length;
	if (length>=2) {
        for (var i=1; i<=length;i++) {
            if ((i-1)%2 == 0) {
                $(".lxy_audicar_listcontent ul li").eq(i).css("margin-right","0px");
            }
        }
	}*/

	$(".lxy_audicar_listcontent").each(function (i,elm) {
		var length = $(elm).find('ul li').size();
		if(length>=2){
			for (var i=1; i<=length;i++) {
				if ((i-1)%2 == 0) {
					console.log($(elm).find('ul li').eq(i));
					$(elm).find('ul li').eq(i).css("margin-right","0px");
				}
			}
		}
	});

	$('.lxy_jxs_content ul li:last-child').css('border-bottom','none');
	$('.j_share ul li:last-child').css('margin-bottom','0');
	$('.w_news_dic_info ul li:nth-child(2n)').css('margin-right','0');
	// backtop
	
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
			if(document.documentElement.scrollTop >= 1 || window.pageYOffset >= 1 || document.body.scrollTop >= 1){
				$(".l_gotopTo").css("display","block")
			}else{
				$(".l_gotopTo").css("display","none")
			}
		});
		$('.l_gotopTo').click(function(){
			$('body,html').animate({'scrollTop':'0px'},200)
		});
});
