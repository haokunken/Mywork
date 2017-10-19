//品牌、车系下拉菜单  点搜索跳转再浏览器后退  恢复默认选项
$(".selectBrand option").eq(0).attr('selected', 'true');
$(".selectBrandType option").eq(0).attr('selected', 'true');

$("#hotTab li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#hotTag ul li").removeClass("now");
    $("#hotTag ul li:nth-child("+preNumber+")").addClass("now");
});

$("#repTab li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $(".cheList .listStyle").removeClass("now");
    $(".cheList .listStyle:nth-child("+preNumber+")").addClass("now");
});
$("#myTbb li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#manyiBox .manyiList").removeClass("current");
    $("#manyiBox .manyiList:nth-child("+preNumber+")").addClass("current");
});
$("#findTab li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#findBox .findList").removeClass("current");
    $("#findBox .findList:nth-child("+preNumber+")").addClass("current");
});

    //
var $fastNum = $('#mainFn a'); 
$fastNum.click(function(e){
var $fastchange = $('#fastchange' + $(this).attr('data-value'));
$('#fastroad').animate({scrollTop: $fastchange.offset().top - $("#fastroad").offset().top + $("#fastroad").scrollTop()-14},500);
// alert($("#fastroad").scrollTop())
// e.stopPropagation();
});

// var $smallFn = $('#smallFn a'); 
// $smallFn.click(function(e){
// var $smallRd = $('#smallRd' + $(this).attr('data-value'));
// $('#smallPlace').animate({scrollTop: $smallRd.offset().top - $("#smallPlace").offset().top + $("#smallPlace").scrollTop()-14},500);
// // e.stopPropagation();
// });
var $fastNum02 = $('.fastNum a'); 
$fastNum02.each(function(){
    $(this).click(function(){
        var num02 = $(this).index();
        var clist02 = $(this).parents(".stopP").next(".dropdown-place");
        var legy02= clist02.find(".zimu");
        // alert(num);
        // var num = $(this).index();
        // var $fastchange = $('#fastchange' + $(this).attr('data-value'));
        clist02.animate({scrollTop: legy02.eq(num02).offset().top - clist02.offset().top + clist02.scrollTop()},300);
    });
});
$(".dropdown-place,.fastNum").click(function(e){
    e.stopPropagation();
});

//更多发动机
$(".fadongji-more").hover(function(){
    $(this).next(".fadongji-pop").fadeIn(100); 
    $(this).find('em').removeClass('jiantouUp');    
  });
 $(".small_nav").mouseleave(function(){
    $(this).find(".fadongji-pop").fadeOut(100);
    $(this).find('em').addClass('jiantouUp');        
  });
//更多颜色
$(".carcolor-more").hover(function(){
    $(this).next(".carcolor-pop").fadeIn(100); 
    $(this).find('em').removeClass('jiantouUp');    
  });
 $(".small_nav").mouseleave(function(){
    $(this).find(".carcolor-pop").fadeOut(100);
    $(this).find('em').addClass('jiantouUp');        
  });
 

/*2016-11-21*/
/*城市切换*/
// $(".headerCity").hover(function(){
//     $(this).addClass("active")
// });
// $(".headerCity").mouseleave(function(){
//     $(this).removeClass("active");
//     $(".searchMini").hide();        
// });
// var $fastNum = $('.sfNum a'); 
// $fastNum.click(function(e){
// var $fastchange = $('#fastHuan' + $(this).attr('data-value'));
// $('.cityList').animate({scrollTop: $fastchange.offset().top - $(".cityList").offset().top + $(".cityList").scrollTop()},300);
// });


/*回到顶部*/
jQuery.fn.goToTop = function(){
        if($(window).scrollTop() < 1) {
            $("#goToTop").hide();//滚动条距离顶端的距离小于showDistance是隐藏goToTop按钮
        }
        $(window).scroll(function(){
                if($(this).scrollTop()>10){
                    $("#goToTop").fadeIn();
                } else {
                    $("#goToTop").fadeOut();
                }
            });
         //给这个按钮绑定一个单击事件 
        this.bind('click',function(){
            $('html,body').animate({scrollTop:0},'slow');
            return false;
        });        
    }
    //调用这个插件
    $(document).ready(function(){
        $('#goToTop').goToTop();
});
// 询价tab切换
$("#ingtab-new li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $(".new-wrapper .tab-con .ingUl").removeClass("now");
    $(".new-wrapper .tab-con .ingUl:nth-child("+preNumber+")").addClass("now");
});
$(".header-city").hover(function(){
    $(this).addClass("active")
});
$(".header-city").mouseleave(function(){
    $(this).removeClass("active");
    $(this).find(".searchMini").hide();    
});
//
var $fastNum03 = $('.new-header .sfNum a'); 
$fastNum03.each(function(){
    $(this).click(function(){
        var num03 = $(this).index()-1;
        var clist03 = $(this).parents(".sfNum").next(".cityList");
        var legy03= clist03.find(".zimu");
        // alert(num);
        // var num = $(this).index();
        // var $fastchange = $('#fastchange' + $(this).attr('data-value'));
        clist03.animate({scrollTop: legy03.eq(num03).offset().top - clist03.offset().top + clist03.scrollTop()},300);
    });
});

//搜索
var $brand_letter = $('.brand-letters a'); 
$brand_letter.click(function(){
var $lettercon = $('#master-indexletters_' + $(this).attr('data-value'));
$lettercon.length > 0 && $(".brand-name").animate({scrollTop: $lettercon.offset().top - $(".brand-name").offset().top + $(".brand-name").scrollTop()},500)
});
var $brand_name = $('#brand-name a'); 
$brand_name.click(function(){
    // var $carlin = $('#carlin_' + $(this).attr('data-value'));
    $('.models_bg').show();
    // $carlin.show();
    $(this).addClass('current');
    // $carlin.siblings('.carlin').hide();
    $(this).siblings().removeClass('current');
});
//
$("#indexSear").click(function(e){
    $("#brandFirst").show();
    $(document).click(function(){
        $(".brand-bg").hide();
        $(".carlin").hide();
        $brand_name.removeClass('current');
    });
    e.stopPropagation();
});
$("#brandFirst").click(function(e){
    e.stopPropagation();
});