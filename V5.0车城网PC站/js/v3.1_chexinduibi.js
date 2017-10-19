$(window).scroll(function(){
    autofixed();
    function autofixed(){
        var c = document.body.clientWidth;
        var d = (c-1200)/2;
        var e =parseInt(d)
        if ($(document).scrollTop()>250) {
            var a = $(this).scrollLeft();
            var b = parseInt(a); 
            $(".j_shangla").addClass("lxy_fixed");
            $(".j_shangla").css('left',(d-b));  
            $(".j_shangla").css("top","0px");
            $(".j_shangla").css("display","block");
            $(".j_left_nav").css('left',(d-b-70)+"px");
            $(".lxy_blank").css("display","block");
        }else{
            $(".j_shangla").removeClass("lxy_fixed");
            $(".j_shangla").css("top","380px");
            $(".j_shangla").css('left',e);
            $(".j_shangla").css("display","none");
            $(".lxy_blank").css("display","none");
            $("j_left_nav").css('left',(c/2-670)+"px");
        }
        if ($(document).scrollTop() >= 420 ) {
            $(".j_left_nav").addClass("lxy_fixed");
            $(".j_left_nav").css("top","78px");
        }else{
            $(".j_left_nav").removeClass("lxy_fixed");
            $(".j_left_nav").css("top","250px");
            $(".j_left_nav").css("left","-70px");
        } 
    }
    window.onresize=autofixed; //浏览器窗口发生变化时同时变化楼层left值
})

  //对比和楼层固定
  // $(window).scroll(function(){
  //   if ($(document).scrollTop() >=250 ) {
  //       $(".j_shangla").addClass("lxy_fixed");
  //       $(".j_shangla").css("top","0px");
  //       $(".j_shangla").css("display","block");
  //       // $(".j_first").css("left","-1px");
  //       $(".lxy_blank").css("display","block");
  //   }else{
  //       $(".j_shangla").removeClass("lxy_fixed");
  //       $(".j_shangla").css("top","380px");
  //       $(".j_shangla").css("display","none");
  //       $(".lxy_blank").css("display","none");
  //   }
  //   if ($(document).scrollTop() >= 420 ) {
  //       $(".j_left_nav").addClass("lxy_fixed");
  //       $(".j_left_nav").css("top","78px");
  //       autodivwidth();
  //       function autodivwidth(){ //函数：获取尺寸
  //           //获取浏览器窗口宽度
  //           var winWidth=0;
  //           if (window.innerWIdth){
  //               winWidth = window.innerWidth;
  //           }
  //           else if ((document.body) && (document.body.clientWidth)){
  //               winWidth = document.body.clientWidth;
  //           }
  //           //通过深入Document内部对body进行检测，获取浏览器窗口高度
  //           if (document.documentElement && document.documentElement.clientWidth){
  //               winWidth = document.documentElement.clientWidth;
  //           }
  //           document.getElementById("j_left_nav").style.left = (winWidth/2-670)+"px";
  //           //楼层left值
  //       }
  //       window.onresize=autodivwidth; //浏览器窗口发生变化时同时变化楼层left值
  //   }else{
  //       $(".j_left_nav").removeClass("lxy_fixed");
  //       $(".j_left_nav").css("top","250px");
  //       $(".j_left_nav").css("left","-70px");
  //   }
  // })

// 删除信息栏
$(".j_duibib_top td").find(".j_elet").on("click",
    function() {
        var index = $(this).parents("td").index();
        
        len = $(this).parents("tr").children('td').length;
        
        if(len > 2){
            if (index - 1 == 0) { //点击的是第一列数据（多一列左侧X轴标题td，否则使用index == 0）
                $(this).parents("td").next().find('.j_interchang > li.prev > a').addClass('j_non');
                $(this).parents("td").find('.j_interchang > li.prev a').removeClass('j_non');
            }
            if (index + 1 == len) { //点击的是最后一列数据
                $(this).parents("td").prev().find('.j_interchang > li.next a').addClass('j_non');
                $(this).parents("td").find('.j_interchang > li.next a').removeClass('j_non');
            }
            $('.j_duibib_top').find('tr').each(function() {
                var that = $(this);
                that.children('td:eq(' + index + ')').remove();
            });
        }else{
            $('.j_mask').show();
            $('.j_box').show();
        }
  });    
//点击关闭弹框
$('.j_tu a').click(function(){
    $('.j_mask').hide();
    $('.j_box').hide();
})
  //位置调换
$(".j_duibib_top td:not(.nodata)").find(".j_interchang > li.prev > a").on("click",
function() {
    if (!$(this).hasClass('j_non')) {
        var index = $(this).parents("td").index(),
        len = $(this).parents("tr").children('td:not(.append)').length;
        // alert(len);
        if (index - 1 == 1) { //点击的是第二列数据（多一列左侧X轴标题td，否则使用index - 1 == 0）
            $(this).addClass('j_non');
            $(this).parents("td").prev().find('.j_interchang > li.prev > a').removeClass('j_non');
        }
        if (index + 1 == len) { //点击的是最后一列数据
            $(this).parents("td").prev().find('.j_interchang > li.next > a').addClass('j_non');
            $(this).parents("td").find('.j_interchang > li.next > a').removeClass('j_non');
        }
        $('.j_duibib_top').find('tr').each(function() {
            var that = $(this);
            that.children('td:eq(' + index + ')').insertBefore(that.children('td:eq(' + (index - 1) + ')'));
        });
    }
});
$(".j_duibib_top td:not(.nodata)").find(".j_interchang > li.next > a").on("click",
function() {
    if (!$(this).hasClass('j_non')) {
        var index = $(this).parents("td").index(),
        len = $(this).parents("tr").children('td:not(.append)').length;
        if (index + 1 == len - 1) { //点击的是倒数第二列数据
            $(this).parents("td").next().find('.j_interchang > li.next > a').removeClass('j_non');
            $(this).addClass('j_non');
        }
        if (index - 1 == 0) { //点击的是第一列数据（多一列左侧X轴标题td，否则使用index == 0）
            $(this).parents("td").next().find('.j_interchang > li.prev > a').addClass('j_non');
            $(this).parents("td").find('.j_interchang > li.prev > a').removeClass('j_non');
        }
        $('.j_duibib_top').find('tr').each(function() {
            var that = $(this);
            that.children('td:eq(' + index + ')').insertAfter(that.children('td:eq(' + (index + 1) + ')'));
        });
    }
});
// 参数页楼层定位
msgdmd(".j_left_nav ul li",".j_params-carbody","on",500);
function msgdmd(dhli,bkli,dqys,time){
    var shuzu=[];      
  $(bkli).each(function(index, element) {
        shuzu.push($(this).offset().top-150);
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
    
    $(dhli).find("a").removeClass(dqys).eq(Math.max(num-1,0)).addClass(dqys); 
  });
  
  $(dhli).click(function(){   
    var aasdasd=$(dhli).index(this);
    $("html,body").animate({scrollTop:$(bkli).eq(aasdasd).offset().top-136},time,"easeInOutCubic");
  }); 
}
    
    
 //head头部搜索   
$(".j_state_zs").hover(function(){
  $(".j_zaishou_hide").toggle();
});
$(".j_state_ts").hover(function(){
  $(".j_tingshou_hide").toggle();
});
//更换车辆
$('.j_duoli a').click(function(){
  if($(this).parents('.j_duoli').find('.j_btmnews').css('display') == "none"){
    $(this).parents('.j_duoli').find('.j_btmnews').css('display',"block");
  }else{
     $(this).parents('.j_duoli').find('.j_btmnews').css('display',"none")
  }
})
$('.j_delet').click(function(){
    var index = $(this).parents("td").index();
        
        len = $(this).parents("tr").children('td').length;
        
        if(len > 2){
            if (index - 1 == 0) { //点击的是第一列数据（多一列左侧X轴标题td，否则使用index == 0）
                $(this).parents("td").next().find('.j_interchang > li.prev > a').addClass('j_non');
                $(this).parents("td").find('.j_interchang > li.prev a').removeClass('j_non');
            }
            if (index + 1 == len) { //点击的是最后一列数据
                $(this).parents("td").prev().find('.j_interchang > li.next a').addClass('j_non');
                $(this).parents("td").find('.j_interchang > li.next a').removeClass('j_non');
            }
            $('.j_duibib_top').find('tr').each(function() {
                var that = $(this);
                that.children('td:eq(' + index + ')').remove();
            });
        }else{
            $('.j_mask').show();
            $('.j_box').show();
        }
})
//车型对比页面   鼠标滑过换辆车时
$(".j_duoli a").hover(function(){
	$(this).find("i").addClass("j_duoliChange");
},function(){
	$(this).find("i").removeClass("j_duoliChange");
})
