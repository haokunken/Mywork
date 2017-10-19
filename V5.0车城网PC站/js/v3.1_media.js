// JavaScript Document
$(document).ready(function() {
		
	//自媒体首页焦点图
    Yeffect.fade_banner(".y_media_banner ul li",".y_banner_p span",".y_media_cutBL",".y_media_cutBR","current",5000,false); 
      
	//自媒体作者页字母导航定位  
	msgdmd(".lxy_zimu a",".lxy_byzimu","now",500);
	function msgdmd(dhli,bkli,dqys,time){
	    var shuzu=[];
	  $(bkli).each(function(index, element) {
	        shuzu.push($(this).offset().top-60);
	    });
	  function box(top){
	    for(var i=0;i<shuzu.length;i++){
	      if(shuzu[i]>top){
	        return i;
	      }
	    }
	  };
	  $(window).scroll(function(){
	    if ($(document).scrollTop() > 144) {
	      $(".lxy_zimu").addClass("fixed");
	      $(".lxy_zimu").css("top","0px");
	      $(".y_blank").css('display','block');
	    }else{
	      $(".lxy_zimu").removeClass("fixed");
	      $(".lxy_zimu").css("top","110px");
	      $(".y_blank").css('display','none');
	    } 
	    var gdttop=$(window).scrollTop();
	    var num=box(gdttop);
	    $(dhli).removeClass(dqys).eq(Math.max(num-1,0)).addClass(dqys); 
	  });
	  $(dhli).click(function(){   
	    var aasdasd=$(this).index();
	    $("html,body").stop().animate({scrollTop: $(bkli).eq(aasdasd).offset().top-60},time);
	  }); 
	}
	//自媒体首页-最热自媒体列表最后一个margin-right设为0px
	var length = $(".lxy_medias ul li").length;
    if (length>=3) {
        for (var i=2; i<=length;i++) {
            if ((i-2)%3 == 0) {
                $(".lxy_medias ul li").eq(i).css("margin-right","0px");
            }
        }
	}
	// 自媒体首页-申请入驻弹出层
	$(".lxy_shenqing").click(function(){
		$(".lxy_tanceng").toggle();
	})
	// 自媒体首页-点击申请入驻弹出层
	$(".lxy_tips em").click(function(){
		$(".lxy_tanceng").toggle();
	})

});

