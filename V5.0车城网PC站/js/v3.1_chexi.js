$(function(){


// 页面tab切换
$(".tNt_Lf a").click(function(){
  $(this).addClass("j_topzhi").siblings().removeClass("j_topzhi");
})

$(".w_article_normal a").click(function(){
  $(this).addClass("w_b13_").siblings().removeClass("w_b13_");
})
// $(".j_bord").hover(function(){
//   $(this).addClass("j_tabxz").siblings().removeClass("j_tabxz");
//   // $(".j_tabxz").css("background","#f8fbfe")
// })

 
/*hover时候外边框变蓝色*/
$('.j_bord').hover(function(){

   // $(this).css('border','1px solid #0c61ac').siblings().css({
   // 	'border-top':'1px solid white',
   // 	'border-bottom':'1px solid #f2f2f2',
   // 	'border-left':'1px solid white',
   // 	'border-right':'1px solid white'
   // })
   $(this).find('.j_zsts_con').css('background','#fff8f4')
   
},function(){
  $(this).find('.j_zsts_con').css('background','white')
})

$('.contrast a').click(function(e){
 e.stopPropagation()
  var aaaaaa = $('.pk02').css('display')
  $('.pk02').css('display',aaaaaa == 'block' ? 'none' : 'block')
  $('.allBack a').eq(0).css('background',aaaaaa == 'block' ? '#c2c2c2' : '#0a518f')
})




 $("#j_ezxk li").each(function(index){
     $(this).hover(function(){
         $(this).addClass("j_topzhi").siblings().removeClass("j_topzhi");
        if($(this).index() == 0){
            $(".j_aa1").show();
            $(".j_aa2").hide();
            $(".j_aa3").hide();
            $(".j_aa4").hide();
           
         }else if($(this).index() == 1){
            $(".j_aa1").hide();
            $(".j_aa2").show();
            $(".j_aa3").hide();
            $(".j_aa4").hide();
         }else if($(this).index() == 2){
            $(".j_aa1").hide();
            $(".j_aa2").hide();
            $(".j_aa3").show();
            $(".j_aa4").hide();
         }else if($(this).index() == 3){
            $(".j_aa1").hide();
            $(".j_aa2").hide();
            $(".j_aa3").hide();
            $(".j_aa4").show();
         }
     })       
 })



//组织冒泡
$('.pk02 ').click(function(e){
  e.stopPropagation()
})




/*先显示制定按钮然后缓慢置顶*/
window.onmousemove = function(){
  if ($(document).scrollTop()>400) {
    $('#goToTop').show(1)
    
  }else if($(document).scrollTop()<400){
    $('#goToTop').hide(1)
  }
}
$('#goToTop').click(function() {
    $('html,body').animate({scrollTop:'0px'},500)
    console.log('jhhkj')
});
/*车系首页的选项卡*/

$(".j_CwlB_tab ul li").each(function(index){
    if($('j_neirouL').css('display' == 'block')){
      $('j_neirouR').hide();
    }else{
      $('j_neirouR').show();
    }
    
     $(this).mouseenter(function(){
        $(this).addClass("j_topzhi").siblings().removeClass("j_topzhi");
        $(".j_qiecont").eq($(this).index()).addClass('j_now').siblings().removeClass('j_now'); 
     })       
 })
// $(document).ready(function(){
//   if($('.j_CwlB_wz').css("display") == "block"){
//     $('.j_zwsj').hide();
//   }else{
//      $('.j_zwsj').hide();
//   }
// })
// $(".j_CwlB_tab ul li").each(function(index){
//      $(this).mouseenter(function(){
//         $(this).addClass("j_topzhi").siblings().removeClass("j_topzhi");
//         var index = $(this).index();
//         $(".j_zwsj").eq(index).show().siblings().hide();
//      })       
//  })

/*选项卡下面内容的切换*/
$('.j_neirouR').click(function(){
  $(this).parents().find('.j_now .j_suces').animate({left:"-840px"},1000)
  $(this).hide();
  $(this).parents('.j_now').find('.j_neirouL').show()
})
$('.j_neirouL').click(function(){
 $(this).parents().find('.j_now .j_suces').animate({left:"0px"},1000)
  $(this).hide();
  $(this).parents('.j_now').find('.j_neirouR ').show()
})
/*参数隐藏显示*/
$('.j_canpeimore a').click(function() {
	if($('.j_cancang').css('display') == "block"){
		$('.j_cancang').hide();
    $(this).text('更多参数设置');
    $(this).append('<i></i>')
	}else{
		$('.j_cancang').show();
    $(this).text('收起参数设置');
    $(this).append('<i class="j_jians"></i>')
	}
	
});



// 点击空白区域关闭对比栏目
$(document).click(function(){
  $('.pk02 ').hide();
  $('.contrast a').css("background","#c2c2c2")
  $('.contrast a').mouseenter(function(){
    $(this).css("background","#9c9c9c")
  })
  
  
})
/*更新小选择区域*/

 $(".j_gaicol").each(function(index,item){
     $(this).mouseenter(function(){
         $('.j_xiahid').eq($(this).index()).show().siblings().hide();
     })
 })
 $('.j_baoA').mouseleave(function(){
    $('.j_xia1').show().siblings().hide();
    $('.j_CwlAl_p p').show();
 })
 //改变轮播
$('.tg-btnR').click(function(){
  // $(this).stop(true).animate();
  var imgLen = ($(this).parent().find('ul li').length-1) * 125 - parseInt($('.j_bulunb').css('width'))+100;
  console.log(imgLen)
  // console.log($('.j_bulLong').eq(0).find('ul li').length)
  // console.log(parseInt($('.j_bulLong').css('left')))
   if(parseInt($(this).siblings('.j_bulLong').css('left'))>=-imgLen){

  var j_liWid = $('.j_bulLong li').css("Width")
    // console.log($(this).siblings('.j_bulLong').css('left'))
    $(this).siblings('.j_bulLong').finish().animate({left:'-=125'},200)
      }
 })
 $('.tg-btnL').click(function(){
    var imgLeft = parseInt($(this).siblings('.j_bulLong').css('left'));
    console.log(imgLeft)
    if(imgLeft<-10){
      $(this).siblings('.j_bulLong').finish().animate({left:'+=125'},200)
    }
 })
 
// $('.j_pjAr').mouseenter(function(){
//   $(this).css('overflow-y','auto');
// })

// $('.j_pjAr').mouseleave(function(){
//   $(this).css('overflow','hidden');
// })
 
// 新搜索页面
$('.j_jacx ').click(function(){
  // console.log($(this).siblings('.j_seapics').find('.j_none'))
  if($('.j_seapics ul').css('height') == "396px"){
      $('.j_seapics ul').css('height','auto');
       $(this).find('i').addClass('j_shang');
      $(this).find('a').text('收起更多车系');
    }else{
      $('.j_seapics ul').css('height','396px');
      $(this).find('i').removeClass('j_shang');
      $(this).find('a').text('加载更多车系');
    }
})
$('.j_bagno').click(function(){
  console.log()
  if($(this).siblings('.j_none').css('display') == "block"){
    $(this).siblings('.j_none').hide(); 
    $(this).find('i').removeClass('j_shang');
    $(this).find('a').text('加载更多车系');
  }else{
    $(this).siblings('.j_none').show(); 
    $(this).find('i').addClass('j_shang');
    $(this).find('a').text('收起更多车系');
  }
})
})
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
})
// 搜索的hover事件

// $(".j_state_zs").hover(function(){
//   $(".j_zaishou_hide").toggle();
// });
// $(".j_state_ts").hover(function(){
//   $(".j_tingshou_hide").toggle();
// });
// 全部新闻tab切换
$('.j_kbtab a').click(function(){
  $(this).addClass('j_kbclk').siblings().removeClass('j_kbclk')
})
// 左侧参数添加对比
$('.j_hduib').click(function(e){
    e.stopPropagation();
    $('.j_jiaopt').show();
    if($('.j_carList li').length >4){
        alert("最多能添加5条")
    }else{
        var tsss = $(this).parents('.j_zsts_con').find('.j_zstsC1').text();
        var carid = $(this).parents('.j_zsts_con').find('.j_zstsC1').attr('data-num');
        if($(this).hasClass('j_non') == true){
        }else{
            $('.j_carList').append('<li data-num ="'+carid+'"><a class="j_span" target="_blank" >'+tsss+'</a><a class="j_em" id="j_em" href="javascript:;"> </a></li>');
              
             $(this).addClass('j_non');
        }
       
        
    }   
})
// 事件委托
$('.j_carList').delegate('#j_em','click',function(e){
    e.stopPropagation();
    $(this).parents('li').remove();
    var bb = $(this).parents('li').attr('data-num');
    for(var i = 0; i < $(".j_bord").length; i++) {
        if($(".j_bord").eq(i).find('.j_zstsC1').attr('data-num') == bb) {
            $(".j_bord").eq(i).find('.j_hduib ').removeClass('j_non');
        }
    }
})

$('.selectCar').delegate('.j_shr','click',function(e){
  e.stopPropagation();
 $('.j_carList li').remove();
 $('.j_bord').find('.j_hduib').removeClass('j_non');
})
// 车系详解右侧吸顶

$(window).scroll(function(){
  if ($(document).scrollTop() >=260) {
        $(".j_w880_w120").css('position','fixed');
        $(".j_w880_w120").css("top","0px");
    }else{
        $(".j_w880_w120").css('position','static');    
    }
})
// 车型滑动点击的状态
$('.priceProvince li').click(function(){
  $(this).addClass('current').siblings().removeClass('current')
})
// j_selectcityCity
$('.selectcityCity ul li').click(function(){
  $(this).addClass('current').siblings().removeClass('current')
})
$('.j_CwlB_tab_more a').click(function(){
  if($('.j_qiecont').hasClass('j_now') == true){
    if($('.j_now').find('.j_suces').eq(1).find('ul').has('li').length > 0){
      $('.j_now').find('.j_nowe').removeClass('j_nowe').siblings().addClass('j_nowe');
    }
  }
})

// V2.9车系口碑
$(".l_zhankai a").click(function(){
  $(this).parents(".l_zhankai").siblings(".y_none").show();
  $(this).parents(".l_zhankai").siblings(".con-mask").hide();
  $(this).parents(".l_zhankai").hide();
  $(this).parents(".j_pjAr").css({"height":"auto",});
  $(this).parents(".l_zhankai").siblings(".y_zhankai").show();
});
$(".y_zhankai a").click(function(){
  $(this).parents(".y_zhankai").siblings(".y_none").hide();
  $(this).parents(".y_zhankai").siblings(".con-mask").show();
  $(this).parents(".y_zhankai").hide();
  $(this).parents(".j_pjAr").css({"height":"428px",});
  $(this).parents(".y_zhankai").siblings(".l_zhankai").show();
});
//判断是不是4的倍数
$('.j_pic').each(function(){
  var index=$(this).index()+1;
  if(index%5==0){
    $(this).css('margin-right',0);
  }
})
// 判断是不是2的倍数
$('.w_header_reduce_price li').each(function(){
   var index=$(this).index()+1;
  if(index%2==0){
    $(this).css('margin-right',0);
  }
});
$('.w_tab_button li').hover(function(){
    var $this=$(this);
    var index=$this.index();
    $this.addClass('current').siblings('li').removeClass('current');
     $('.w_tab_list ul').eq(index).find('li:first').addClass('w_tab_img').siblings('li').removeClass('w_tab_img');
    $('.w_tab_list ul').eq(index).addClass('w_current_block').removeClass('w_current_none')
    .siblings('ul').addClass('w_current_none').removeClass('w_current_block');

  });
var a;
$('.w_tab_list ul').hover(function(){
      $('.w_tab_list ul li').hover(function(){
        var $this=$(this);
        var index=$this.index();
        $this.addClass('w_tab_img').siblings('li').removeClass('w_tab_img');
    },function(){
        $(this).removeClass('w_tab_img');
        //监听
         a=$(this).index();
    });
},function(){
  $('.w_current_block li').eq(a).addClass('w_tab_img');
});
//calculator
$('.j_zstsC3 i').each(function(index,item){
    var $this=$(this).parents('li.j_zstsC3');
    var calculator=$('.w_current_calculator');
    $(this).hover(function(){        
         $this.find(calculator).show();
    })
});

$('.j_bord').hover(function(){
},function(){
  // console.log('我移开了')
  $(this).find('.w_current_calculator').hide();
})
//回到顶部
$('.l_gotopTo').click(function(){
    $('body,html').animate({'scrollTop':'0px'},200)
  })
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
  // 定位到车型
  $('.w_in_total').click(function(){
      $('body,html').animate({'scrollTop':'1230px'},200)
  });