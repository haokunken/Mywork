$(".header-city").hover(function(){
    $(this).addClass("active")
});
$(".header-city").mouseleave(function(){
    $(this).removeClass("active");
    $(this).find(".searchMini").hide();    
});
//
var $fastNum = $('.sfNum a'); 
$fastNum.each(function(){
    $(this).click(function(){
    	var num = $(this).index()-1;
    	var clist = $(this).parents(".sfNum").next(".cityList");
    	var legy= clist.find(".zimu");
    	// alert(num);
    	// var num = $(this).index();
		// var $fastchange = $('#fastchange' + $(this).attr('data-value'));
		clist.animate({scrollTop: legy.eq(num).offset().top - clist.offset().top + clist.scrollTop()},300);
    });
});
$(".dropdown-140:last").css("margin","0")
//
$(function(){
  $(".highPrice li:last").css("border","none")
})
$("#flink li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#linkcon ul").removeClass("now");
    $("#linkcon ul:nth-child("+preNumber+")").addClass("now");
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