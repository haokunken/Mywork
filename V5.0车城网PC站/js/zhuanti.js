$("#baojia li").click(function(){
    $(this).siblings().find("a").not(".haslass").removeClass("now");
    $(this).find("a").not(".haslass").addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $("#baojiaList li").removeClass("now");
    $("#baojiaList li:nth-child("+preNumber+")").addClass("now");
});
$("#ztTab li").hover(function(){
    $(this).siblings().find("a").removeClass("now");
    $(this).find("a").addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $("#kbList ul").removeClass("now");
    $("#kbList ul:nth-child("+preNumber+")").addClass("now");
});

var $qq = $("#colorTab ul li");
$qq.hover(function() {
    var weizhi = $qq.index(this);
    $("#ztPic ul > li").eq(weizhi).show().siblings().hide();
}).hover(function(){
    $(".innerblock").hide();
    },function(){
        $(".innerblock").show();
        })


$("#tjLink").click(function(){
    $("#mask").css("display","block");  
});
$("#brandClose").click(function(){
    $("#mask").css("display","none");    
});

$("#mlTab li").hover(function(){
    $(this).siblings().find("a").removeClass("now");
    $(this).find("a").addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $("#mlBox .mlList").removeClass("now");
    $("#mlBox .mlList:nth-child("+preNumber+")").addClass("now");
});

$("#carClassify li").hover(function(){
    $(this).siblings().find("a").removeClass("now");
    $(this).find("a").addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $("#carClassList .hotList").removeClass("now");
    $("#carClassList .hotList:nth-child("+preNumber+")").addClass("now");
});

$(".newCarTit").click(function(){
    $(".newCarBox").css("display","block");  
});
$("#zhuantiFnClose").click(function(){
    $(".newCarBox").css("display","none");  
});
// v2.1
$("#zhankai-new").click(function () {
    var pli = $(".priceProvince");
    var delearStyle = $("#jtNew");
    var delaerTxt = $("#nrNew");
    // var i;
    if (delearStyle.hasClass("jiantou jiantouUp")) {
        delearStyle.removeClass("jiantouUp");
        delaerTxt.html("收起部分");
        pli.height('');
    } else {
        delearStyle.addClass("jiantouUp");
        delaerTxt.html("展开全部");
        pli.height(25);
    }
});

$("#showS03").hover(function () {
    $("#hideS03").show()
})
$("#showS03").mouseleave(function(){
    $("#hideS03").hide();        
});
var hideA=$("#hideS03").find("a")
hideA.click(function () {
    $("#hideS03").hide();
})

$("#tabBuy li").hover(function(){
    $(this).siblings().find("a").removeClass("now");
    $(this).find("a").addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $("#tab-new ul").removeClass("now");
    $("#tab-new ul:nth-child("+preNumber+")").addClass("now");
});
/*更多经销商*/
$("#jxsBtn").click(function(){
    if($("#jxs-more").is(':hidden')){  
        $("#jxs-more").css("display","block");
        document.getElementById("word").innerHTML = '收起';
        $(".jiantou").css("border-width","0px 5px 5px")
    }else{  
        $("#jxs-more").css("display","none");
        document.getElementById("word").innerHTML = '展开';
        $(".jiantou").css("border-width","5px 5px 0px")
        }  
});
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
 DY_scroll('.hdNew-wrapper .zt-hdNew','.hdNew-wrapper .pre','.hdNew-wrapper .next','.hdNew-wrapper .zt-hdNew',3,false);// true为自动播放，不加此参数或false就默认不自动
 // 专题文章
 $(".h-artlist li").hover(function(){
    $(this).siblings().removeClass("now");
    $(this).addClass("now");    
  });
 $(".nointrest").click(function(){
    $(this).siblings(".bgxq").toggle();
})
$(".quxiao").click(function(){
    $(this).parents(".bgxq").hide();
})
$(".queding").click(function(){
    $(this).parents(".hideOne").hide();
    var qdval=$(this).parents(".hideOne").find("input[type='radio']:checked").val();  
    setCookie('article_not_like_10',1,qdval);
});
function setCookie(name,value,days)
{
    var exp = new Date();
    exp.setTime(exp.getTime() + days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/";
}