$("#phblist li").hover(function(){
    $(this).siblings().removeClass("now");
    $(this).addClass("now");    
});
$("#datelist li").hover(function(){
    $(this).siblings().removeClass("now");
    $(this).addClass("now");    
});
$("#tab08 li").click(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#tabcon08 .article").removeClass("now");
    $("#tabcon08 .article:nth-child("+preNumber+")").addClass("now");
});
// $("#tabcon08 ul").each(function(){
//     $(this).find("li a:last").css("border","none");
// });
$(function(){
  var newssw = 0;
  var newsaword = $(".banner-wrapper .word li");
  var newsapic = $(".banner-wrapper .pic li");
  newsaword.mouseover(function(){
    newssw = newsaword.index(this);
    myShow(newssw);
  });
  function myShow(i){
    newsaword.eq(i).addClass("current").siblings("li").removeClass("current");
    newsapic.eq(i).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);
  }
  $(".banner-wrapper").hover(function(){
    if(myTime){
       clearInterval(myTime);
    }
  },function(){
    myTime = setInterval(function(){
      myShow(newssw)
      newssw++;
      if(newssw==newsapic.length){newssw=0;}
    } , 3000);
  });
  var myTime = setInterval(function(){
     myShow(newssw)
     newssw++;
     if(newssw==newsapic.length){newssw=0;}
  } , 3000);
});
// 详情页
$("#art li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#artcont .list").removeClass("now");
    $("#artcont .list:nth-child("+preNumber+")").addClass("now");
});
$(".lowest-price .cont table tr:last td").css("border","0")
//
$("#prev-new,#next-new").click(function(){
    $("#hdtwo").show();
    $("#hdnew").hide();
})
$("#zkan").click(function(){
    $("#hdtwo").hide();
    $("#hdnew").show();
})
$(".uninterested .alink").click(function(){
    $(this).siblings(".uninterested .word").toggle();
})
$(".quxiao").click(function(){
    $(this).parents(".uninterested .word").hide();
})
$(".queding").click(function(){
    $(this).parents(".hide-style").hide();
    var qdval=$(this).parents(".hide-style").find("input[type='radio']:checked").val();  
    // alert(qdval)  
});
$(window).load(function(){
    var showbg = $('#showbg').offset().top; 
    var salewidth = $("#saleinfor").width();
    var saleheight = $("#saleinfor").height();
    var showLeft = $('.w880').height();
    var showLeftoffset = $('.w880').offset().top-22; 
    var showRight = $('.w300').height();
    var stickyMenu02 = function(){
        var scrollTop = $(document).scrollTop();  
        var scrollheight = $(document).height(); 
        if (showLeft < showRight){
                $('#saleinfor').css({'width':salewidth ,'position': 'relative', 'top':0}) 
            };
        if (scrollTop > showbg&&showLeft > showRight) { 
                $('#saleinfor').css({'width':salewidth ,'position': 'fixed', 'top':0});

                if(scrollTop + saleheight >showLeftoffset+showLeft){
                    $('#saleinfor').css('top',showLeftoffset+showLeft-scrollTop-saleheight+'px');
                };

            } else {
                $('#saleinfor').css({'width':salewidth , 'position': 'relative', 'top':0})                
            };
    };      
    $(window).scroll(function(){stickyMenu02();}); 
}); 