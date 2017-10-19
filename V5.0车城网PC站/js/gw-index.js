$("#tab01 li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#tabcon01 ul").removeClass("now");
    $("#tabcon01 ul:nth-child("+preNumber+")").addClass("now");
    $(".tab-sale .list").removeClass("now");
    $(".tab-sale .list:nth-child("+preNumber+")").addClass("now");
});
$("#tabcon01 ul").each(function(){
    $(this).find("li:last").css("border","none");
});
$("#tab02 li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#tabcon02 ul").removeClass("now");
    $("#tabcon02 ul:nth-child("+preNumber+")").addClass("now");
});
$("#tab03 li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#tabcon03 .form-list").removeClass("now");
    $("#tabcon03 .form-list:nth-child("+preNumber+")").addClass("now");
});
$(function(){
    $(".wzcx .dropdown-100:last").css("margin","0");
});
$("#tab04 li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#tabcon04 ul").removeClass("now");
    $("#tabcon04 ul:nth-child("+preNumber+")").addClass("now");
});
$("#tab05 li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#tabcon05 ul").removeClass("now");
    $("#tabcon05 ul:nth-child("+preNumber+")").addClass("now");
});
$("#tab06 li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#tabcon06 ul").removeClass("now");
    $("#tabcon06 ul:nth-child("+preNumber+")").addClass("now");
});
$("#tab07 li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#tabcon07 .arry").removeClass("now");
    $("#tabcon07 .arry:nth-child("+preNumber+")").addClass("now");
});
$(function(){
  var sw = 0;
  var apic = $(".banner .pic li");
  var atit = $(".banner .tit li");
  var aword = $(".banner .con a");
  aword.click(function(){
    sw = aword.index(this);
    myShow(sw);
  });
  function myShow(i){
    aword.eq(i).addClass("current").siblings("a").removeClass("current");
    apic.eq(i).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);
    atit.eq(i).addClass("current").siblings().removeClass("current");
  }
  $(".banner").hover(function(){
    if(myTime){
       clearInterval(myTime);
    }
  },function(){
    myTime = setInterval(function(){
      myShow(sw)
      sw++;
      if(sw==apic.length){sw=0;}
    } , 3000);
  });
  var myTime = setInterval(function(){
     myShow(sw)
     sw++;
     if(sw==apic.length){sw=0;}
  } , 3000);
});
//
function DY_scroll(wraper,prev,next,img,speed,or)
 { 
  var wraper = $(wraper);
  var prev = $(prev);  
  var next = $(next);
  var img = $(img).find('ul');
  var w = img.find('li').outerWidth(true);
  var s = speed;
  var len = img.find('li').length;
  next.click(function(){
      if (len<5) {return false};
        img.animate({'margin-left':-w},function()
          {
           img.find('li').eq(0).appendTo(img);
           img.css({'margin-left':0});
           });
  });
  prev.click(function(){
       if (len<5) {return false};
        img.find('li:last').prependTo(img);
        img.css({'margin-left':-w});
        img.animate({'margin-left':0});
  });
  if (or == true)
  {
   ad = setInterval(function() { next.click();},s*1000);
   wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*1000);});
  }
 }
 DY_scroll('.zhuanti .list','.zhuanti .pre','.zhuanti .next','.zhuanti .list',3,false);// true为自动播放，不加此参数或false就默认不自动