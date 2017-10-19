$(document).ready(function(){
  $('.slider8').bxSlider({
    mode: 'fade',
    // slideWidth: 600, 
    auto: true,
    slideMargin: 10
  });
});
//
$("#cheTab li").hover(function(){
    $(this).siblings().removeClass("now");
    $(this).addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $(".cheList .listStyle").removeClass("now");
    $(".cheList .listStyle:nth-child("+preNumber+")").addClass("now");
    $(".rlBox .rlList").removeClass("now");
    $(".rlBox .rlList:nth-child("+preNumber+")").addClass("now");
});
//
$("#Tab01 li").hover(function(){
    $(this).siblings().removeClass("now");
    $(this).addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $(".newsWord").removeClass("now");
    $(".newsWord:nth-child("+preNumber+")").addClass("now");
});
//
$("#Tab02 li").hover(function(){
    $(this).siblings().removeClass("now");
    $(this).addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $(".hangQing").removeClass("now");
    $(".hangQing:nth-child("+preNumber+")").addClass("now");
});
//
$("#bjPrice li").hover(function(){
    $(this).siblings().removeClass("now");
    $(this).addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $("#priceList ul li").removeClass("now");
    $("#priceList ul li:nth-child("+preNumber+")").addClass("now");
});
//
$("#phbTab li").hover(function(){
    $(this).siblings().removeClass("now");
    $(this).addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $("#phb .phbList").removeClass("now");
    $("#phb .phbList:nth-child("+preNumber+")").addClass("now");
});
//
$("#hotTab li").hover(function(){
    $(this).siblings().removeClass("now");
    $(this).addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $("#hotTag ul li").removeClass("now");
    $("#hotTag ul li:nth-child("+preNumber+")").addClass("now");
});
//
$("#newsTab li").hover(function(){
    $(this).siblings().removeClass("now");
    $(this).addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $("#newsList ul").removeClass("now");
    $("#newsList ul:nth-child("+preNumber+")").addClass("now");
});
//
$(".listStyle").each(function(){
    $(this).find("li:last").css("border","none");
});
//
var $brand_letter = $('.brand-letters a'); 
$brand_letter.click(function(){
var $lettercon = $('#master-indexletters_' + $(this).attr('data-value'));
$lettercon.length > 0 && $(".brand-name").animate({scrollTop: $lettercon.offset().top - $(".brand-name").offset().top + $(".brand-name").scrollTop()},500)
});

var $brand_name = $('#brand-name a'); 
$brand_name.click(function(){
    var $carlin = $('#carlin_' + $(this).attr('data-value'));
    $('.models_bg').show();
    $carlin.show();
    $(this).addClass('current');
    $carlin.siblings('.carlin').hide();
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


