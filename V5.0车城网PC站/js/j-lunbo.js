$(function(){



$(".tNt_Lf a").hover(function(){
  $(this).addClass("j_topzhi").siblings().removeClass("j_topzhi")
})
$(".j_A1").hover(function(){
    $(".for_sale").show();
    $(".for_sale_soon").hide();
    $(".stop_selling").hide();
})
$(".j_A2").hover(function(){
    $(".stop_selling").show();
    $(".for_sale").hide();
    $(".for_sale_soon").hide();
})
$(".j_A3").hover(function(){
    $(".for_sale_soon").show();
    $(".for_sale").hide();
    $(".stop_selling").hide();
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
   $(this).find('.j_zsts_con').css('background','#f8fbfe')
   
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
    $('#goToTop').show(100)
    
  }else if($(document).scrollTop()<400){
    $('#goToTop').hide(100)
  }
}
$('#goToTop').click(function() {
    $('html,body').animate({scrollTop:'0px'},1000)
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

 $(".j_gaicol").each(function(index){
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
// //老司机
// $(document).click(function(){
//     $('.j_pindao').hide();
// })


// $(function(){

})