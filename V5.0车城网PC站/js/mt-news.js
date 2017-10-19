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

$("#flink li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#linkcon ul").removeClass("now");
    $("#linkcon ul:nth-child("+preNumber+")").addClass("now");
});



