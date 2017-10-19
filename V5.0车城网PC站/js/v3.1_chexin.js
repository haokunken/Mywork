
  $(".tNt_Lf a").mouseenter(function(){
    $(this).addClass("j_topzhi").siblings().removeClass("j_topzhi");
    var index = $(this).index();
    if(index==0){
      $('.j_zsts ').hide();
      $('.j_Bzsts').show();
    }else{
      $('.j_zsts ').show();
      $('.j_Bzsts').hide();
    }
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
// 经销商城市隐藏
$('#zhankai-new').click(function(){
  if($(this).find('.jiantou').hasClass('jiantouUp') == false){
    $(this).find('.jiantou').addClass('jiantouUp');
    $('.priceProvince').css('height','auto');
    // $('.selectcityCity').css('height','auto');
    $('#nrNew').text('收起部分');
  }else{
    $(this).find('.jiantou').removeClass('jiantouUp');
    $('.priceProvince').css('height','45px');
    // $('.selectcityCity').css('height','60px');
    $('#nrNew').text('展开全部')
  }
})

$(".j_state_zs").hover(function(){
  $(".j_zaishou_hide").toggle();
});
$(".j_state_ts").hover(function(){
  $(".j_tingshou_hide").toggle();
});
// 车型滑动点击的状态
$('.priceProvince li').click(function(){
  $(this).addClass('current').siblings().removeClass('current')
})
// j_selectcityCity
$('.selectcityCity ul li').click(function(){
  $(this).addClass('current').siblings().removeClass('current')
})
// 空白区域
$(document).click(function(){
  $('.pk02 ').hide();
})
// 左侧参数添加对比
$('.contrast a').click(function(e){
  e.stopPropagation();
  if($('.pk02').css('display') == "block"){
    $('.pk02').hide();
  }else{
    $('.pk02').show();
  }
})
$('.j_state a').click(function(e){
    e.stopPropagation();
    $('.j_jiaopt').show();
      var tsss = $(this).parents('.j_headerL ').find('span').text();
      if($(this).hasClass('j_non') == true){
          alert('已添加');
      }else{
          $('.j_carList').append('<li><a class="j_span" target="_blank" >'+tsss+'</a><a class="j_em" id="j_em" href="javascript:;"> </a></li>');
          $(this).addClass('j_non');
      }     
})
// 事件委托
$('.j_carList').delegate('#j_em','click',function(e){
    e.stopPropagation();
    $(this).parents('li').remove();
    $(".j_state a").removeClass('j_non');
})
$('.j_jiaopt').delegate('.j_shr ','click',function(e){
    e.stopPropagation();
    $(this).parents('.j_jiaopt').find('.j_carList li').remove();
    $(".j_state a").removeClass('j_non');
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
    $('html,body').animate({scrollTop:'0px'},500)
    console.log('jhhkj')
});
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
  $(this).parents(".j_pjAr").css({"height":"453px",});
  $(this).parents(".y_zhankai").siblings(".l_zhankai").show();
});
// 判断是不是4的倍数
$('.j_pic').each(function(){
  var index=$(this).index()+1;
  if(index%4==0){
    $(this).css('margin-right',0);
  }
})