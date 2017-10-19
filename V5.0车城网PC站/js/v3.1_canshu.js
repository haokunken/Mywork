//判断是火狐还是谷歌浏览器
function myBrowser() {
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		if(userAgent.indexOf("Firefox") > -1) {
			return "FF";
		} 
		if(userAgent.indexOf("Chrome") > -1) {
			return "Chrome";
		}
}	
//判断是否是ie8
//if (navigator.appName === 'Microsoft Internet Explorer') { //判断是否是IE浏览器
//  if (navigator.userAgent.match(/Trident/i) && navigator.userAgent.match(/MSIE 8.0/i)) { //判断浏览器内核是否为Trident内核IE8.0
//      //alert('IE8');
//  }else{
////  		headFixed();
//  }
//}
//以下是调用上面的函数
var mb = myBrowser();
if("FF" == mb) {
		var c = document.body.clientWidth;
    var d = (c-1200)/2-1;
    headFixed();
}else if("Chrome" == mb) {
		var c = document.body.clientWidth;
    var d = (c-1200)/2;
    headFixed();
}else if (navigator.appName === 'Microsoft Internet Explorer'){
		if (navigator.userAgent.match(/Trident/i) && navigator.userAgent.match(/MSIE 8.0/i)) { //判断浏览器内核是否为Trident内核IE8.0
        //alert('IE8');
    }else{
    		headFixed();
    }
}else{
		var c = document.body.clientWidth;
    var d = (c-1200)/2-0.5;
    $(".l_fixedtable").css("height","100px");
		headFixed();
}
function headFixed(){
		 $(window).scroll(function(){
    autofixed();
    function autofixed(){
        //var c = document.body.clientWidth;
       // var d = (c-1200)/2;
        var e =parseInt(d)
        if ($(document).scrollTop()>465) {
            var a = $(this).scrollLeft();
            var b = parseInt(a);
            $(".j_first").css('left',(d-b));  
            $(".j_left_nav").css('left',(d-b-70)+"px");
            $(".j_first").addClass("lxy_fixed");
            $(".l_duibib_top .l_tdsecond .yl_price").css("display","block");//厂商指导价显示
            //alert(1);
            $("#trimArglist-side").css("display","block");
            $("#trimArglist-side").attr("j_taodib");
            $("#trimArglist-side").addClass("fixed-table");


            $(".j_first").css("top","0px");
            $(".lxy_blank").css("display","block");
        }else{
        	 $(".j_first").removeClass("lxy_fixed").attr('style','');    //修复参数页面 顶部fixed  06-24 zz
//          $(".j_first").removeClass("lxy_fixed");
            //alert(2);
            $("#trimArglist-side").css("display","none");
            $("#trimArglist-side").removeClass("j_taodib");
            $("#trimArglist-side").removeClass("fixed-table");
            $(".l_duibib_top .l_tdsecond .yl_price").css("display","none");//厂商指导价隐藏
//          $(".j_first").css("top","380px");
            $(".lxy_blank").css("display","none");
            $(".j_first").css('left',e);
            $("j_left_nav").css('left',(c/2-670)+"px");
        }
        if ($(document).scrollTop() >= 650 ) {
            $(".j_left_nav").addClass("lxy_fixed");
            //alert(3);
            //$("#trimArglist-side").addClass("j_taodib");
            //$("#trimArglist-side").addClass("fixed-table");


            $(".j_left_nav").css("top","78px");
        }else{
        	$(".j_left_nav").removeClass("lxy_fixed").attr('style','');   //修复参数页面 顶部fixed  06-24 zz
//          $(".j_left_nav").removeClass("lxy_fixed");
            //alert(4);
            //$("#trimArglist-side").removeClass("j_taodib");
            //$("#trimArglist-side").removeClass("fixed-table");


            $(".j_left_nav").css("top","250px");
            $(".j_left_nav").css("left","-70px");
        } 
    }
    window.onresize=autofixed; //浏览器窗口发生变化时同时变化楼层left值
})
}

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

        //显示高亮
        highlight_conf();
        //隐藏相同
        hide_sameconf();
        is_delete = 1;
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
    $("html,body").animate({scrollTop:$(bkli).eq(aasdasd).offset().top-99},time,"easeInOutCubic");
  }); 
}
    
 //head头部搜索   
// $(".j_state_zs").hover(function(){
//   $(".j_zaishou_hide").toggle();
// });
// $(".j_state_ts").hover(function(){
//   $(".j_tingshou_hide").toggle();
// });
//hk_2017-9-27 toggle闪动问题
            var z=1;
        $(".j_state_zs").hover(function(){
            if(z==0){
                 $(".j_zaishou_hide").hide();
                 z=1;
            }else  {
                 $(".j_zaishou_hide").show();
                 z=0;
            }

        });
        $(".j_state_ts").hover(function(){
            if(z==0){
                 $(".j_tingshou_hide").hide();
                 z=1;
            }else  {
                 $(".j_tingshou_hide").show();
                 z=0;
            }

        });
// $(document).click(function(){
//     $('.j_duice').hide();
// })
// 左侧参数添加对比

// $('.j_duifix').click(function(e){
//      e.stopPropagation()
//     if($('.j_duice').css('display') == "block"){
//         $('.j_duice').hide();
//     }else{
//         $('.j_duice').show();
//     }
// })
// $('.j_interchang .add').click(function(e){
//     e.stopPropagation();
//     $('.j_duice').show();
//     if($('.j_carlist li').length >4){
//         alert("最多能添加5条")
//     }else{
//         var tsss = $(this).parents('.j_tdbox').find('p').eq(1).text();
//         var carid = $(this).parents('.j_tdbox').attr('data-num');
//         if($(this).find('.commpare-btn').hasClass('j_non') == true){
//             alert('已添加');
//         }else{
//             $('.j_carlist').append('<li data-num ="'+carid+'"><a class="j_span" target="_blank" >'+tsss+'</a><a class="j_em" id="j_em" href="javascript:;"> </a></li>');
        
//              $(this).find('.commpare-btn').addClass('j_non');
//         }
       
        
//     }   
// })
// $('.j_duice ').click(function(e){
//     e.stopPropagation();
//     $('.j_duice').show();
// })

// 事件委托
// $('.j_carlist').delegate('#j_em','click',function(e){
//     e.stopPropagation();
//     $(this).parents('li').remove();
//     var bb = $(this).parents('li').attr('data-num');
//     console.log(bb)
//     for(var i = 0; i < $(".j_bgyou").length; i++) {
//         if($(".j_bgyou").eq(i).find('.j_tdbox').attr('data-num') == bb) {
//             $(".j_bgyou").eq(i).find('.commpare-btn').removeClass('j_non');
//         }
//     }
// })
$('.j_tc .counter').mouseenter(function(){
    $(this).parents('.j_tc').find('span').show();
})  
// autofixed();
// function autofixed(){
//     var c = document.body.clientWidth;
//     var d = (c-1200)/2;
//     var e =parseInt(d)
//     $('.lxy_fixed').css('left',e) 
//     $(window).scroll(function(){
//         var a = $(this).scrollLeft();
//         var b = parseInt(a);
//         $('.lxy_fixed').css('left',0);  
//     })
// }
// window.onresize=autofixed; //浏览器窗口发生变化时同时变化楼层left值


//参数配置页面  鼠标滑动显示右移
$(".next").hover(function(){
		$(this).next().css("display","inline-block");
},function(){
		$(this).next().css("display","none");
})
//参数配置页面  鼠标滑动显示左移
$(".prev").hover(function(){
		$(this).prev().css("display","inline-block");
},function(){
		$(this).prev().css("display","none");
})

//刷新显示高亮
function highlight_conf() {
    if ($('.highlight_conf').is(':checked')) {
        $('.highlight_conf').prop("checked",true);
        $('.highlight_conf').highLightDiffent({isBindDom:true}, 0);
        $('.highlight_conf').highLightDiffent({hightLightClass:'l_gaoliang',isBindDom:true}, 1);
    }
}

//隐藏相同
function hide_sameconf() {
    //$('.hide_sameconf').prop("checked",true);
    //$(this).hideSame({isBindDom:true}, 0);
    if ($('.hide_sameconf').is(':checked')) {
        $(this).hideSame({isBindDom:true}, 0);
        $(this).hideSame({isBindDom:true}, 1);
    }

}

