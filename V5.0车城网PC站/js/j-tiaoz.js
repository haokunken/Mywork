/*右侧吸顶*/
$(function(){
  
    /*获取元素*/
    var $jprev = $("#j_prev");
    var $jnext = $("#j_next");
    var $jlist = $("#j_pic-list");
    var $jpicLi = $("#j_pic-list li");
    var $jwrap = $("#j_wrap");

    /*可能会用的变量*/
    var iNow = 0;
    var iW = $jpicLi.outerWidth();
    var len = $jpicLi.length;
    var kk=$jprev.length;
    var timer = null;
    var animated =true;  //代表动画结束
    //1、把li 下标是0的那个，复杂，然后插入到list里面
    // $picLi.eq(0).clone().appendTo($list);
    $jpicLi.eq(0).clone().appendTo($jlist)
   // 2、创建一个li，让他的img个第一个的图片一样，然后添加到list里面
    // console.log($picLi.eq(0).find("img").attr("src"))//第一个图片的src
    // var src = $picLi.eq(0).find("img").attr("src");
    // $('<li><a href="###"><img src="'+src+'"></a><>').appendTo($list);

   //自动轮播
    timer=setInterval(autoPlay,2000)

   //移到壳子上停掉轮播，离开轮播重新开始

  
    $jwrap.hover(function(){
        clearInterval(timer)
   },function(){
        timer=setInterval(autoPlay,2000)
   })

   //下一张
   $jnext.click(function(){
        if(!animated){
            return
        }
        if(iNow>=(len-3)){
            iNow=0;
            $jlist.css({"left":0})
        }
        iNow++;
        // console.log(iNow)
        // console.log(iNow%len)
        changeView()
   })

   //上一张
   $jprev.click(function(){
        if(!animated){
            return
        }
        if(iNow<=0){
            iNow=(len-3);
            $jlist.css("left","-12px")
        }
        iNow--;
        // console.log(iNow)
        changeView();
   })


   function changeView(){
        animated=false;
        $jlist.stop().animate({"left":-iNow*iW},function(){
            animated=true;
            if(iNow>=len){
                $jlist.css('left','0px');
            }
        })
   }


   function autoPlay(){
       if(iNow>=(len-3)){
           iNow=0;
           $jlist.css({"left":0})
       }
       iNow++;
       // console.log(iNow)
       // console.log(iNow%len)
       changeView()
  }

})
$(function(){
      var ie6 = document.all;
    var dv = $('.j_w880_w120'), st;
    dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
    $(window).scroll(function () {
    st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
    if (st > parseInt(dv.attr('otop'))) {
        
    if (ie6) {//IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
    dv.css({ position: 'absolute', top: st });
    }
    else if (dv.css('position') != 'fixed') dv.css({ 'position': 'fixed', top: 0 ,"overflow":"hidden"});
    } else if (dv.css('position') != 'static') dv.css({ 'position': 'static' });
    });
})
$(function(){
    var ie6 = document.all;
    var dv = $('.j_NewzdjB'),st;
    dv.attr('otop', dv.scrollTop()); //存储原来的距离顶部的距离
    $(window).scroll(function () {
    st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
    if (st > parseInt(dv.attr('otop'))) {
        
     if (ie6) {//IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
    dv.css({ position: 'absolute', top: st });
    }
    else if (dv.css('position') != 'fixed') dv.css({ 'position': 'fixed', top: 0 ,"overflow":"hidden"});
    } else if (dv.css('position') != 'static') dv.css({ 'position': 'static' });
    });
 
})
