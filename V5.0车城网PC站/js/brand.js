/*发布更多信息*/
$("#tagBtn").click(function(){
    if($("#ycBox").is(':hidden')){  
        $("#ycBox").css("display","block");
        document.getElementById("word").innerHTML = '点击收起';
        $(".jiantou").css("border-width","0px 5px 5px")
    }else{  
        $("#ycBox").css("display","none");
        document.getElementById("word").innerHTML = '点击展开';
        $(".jiantou").css("border-width","5px 5px 0px")
        }  
});

var $letters = $('.brandLetter a');
$letters.each(function () {
    var $brandcon = $('#brand' + $(this).attr('data-value'));
    $(this).hover(function(){
        $('.brandcont-open').hide();
        $('.brandLetter a').removeClass('current');
        $(this).addClass('current');
        if ($brandcon.is(':hidden')) {
            $brandcon.show();
        }
    });
});
var topFixedNav = $('#topFixedNav').offset().top;
var basebrand = $('#basebrand').offset().top;
var top01 = $('#topFixedNav').width();
var top02 = $('#basebrand').width();
var stickyMenu03 = function(){
    var scrollTop = $(document).scrollTop();  
    if (scrollTop > topFixedNav) { 
        $('#topFixedNav').css({'width':top01, 'position': 'fixed', 'top':0,'z-index':'99','border':'1px solid #e5e5e5'});
        $('#ycBox').css({'margin-bottom':'48px'});
    } else {
        $('#topFixedNav').css({'width':top01, 'position': 'relative', 'top':0,'border':'none'});
        $('#ycBox').css({'margin-bottom':'0'});         
    };
    if($("#ycBox").is(':hidden')){
        basebrand= 218; 
        // alert(basebrand)
        // if (scrollTop > basebrand) { 
        // // alert(basebrand);
        //     $('#basebrand').css({'width':top02+2, 'position': 'fixed', 'top':-13,'z-index':'98'});
        //     $('#main').css({'margin-top':'142px'});
        // } else {
        //     $('#basebrand').css({'width':top02, 'position': 'relative', 'top':0}); 
        //     $('#main').css({'margin-top':'0'});
        // }; 
    }
    // else{
    //    basebrand= $('#basebrand').offset().top; 
    // }
    if (scrollTop > basebrand) { 
        // alert(basebrand);
        $('#basebrand').css({'width':top02+2, 'position': 'fixed', 'top':-13,'z-index':'98'});
        $('#main').css({'margin-top':'142px'});
    } else {
        $('#basebrand').css({'width':top02, 'position': 'relative', 'top':0}); 
        $('#main').css({'margin-top':'0'});
    };
    
};      
$(window).scroll(function(){stickyMenu03();}); 
var aNav = $("#LoutiNav a");
var aDiv = $("#main .numgrey");
aNav.click(function(){
    var t = aDiv.eq($(this).index()).offset().top;
    $('body,html').animate({"scrollTop":t-125},100);
    $(this).addClass("current").siblings().removeClass("current");
});
//
var aNav01 = $(".cff a");
var aDiv01 = $("#main .boxfu");
aNav01.click(function(){
    var hnum = $('#html' + $(this).attr('data-value'));
    var ttop = hnum.offset().top;
    $('body,html').animate({"scrollTop":ttop-125},100);
});
// //
// $(".tab-nav a").click(function(){
//     $(this).siblings().removeClass("current");
//     $(this).addClass("current");
//     var preNumber=$(this).prevAll().size()+1;
//     $("#main .ulist").removeClass("now");
//     $("#main .ulist:nth-child("+preNumber+")").addClass("now");
// });
$("#two").click(function(){
    $(".ulist").addClass("newpiclist");
    $(this).addClass("current");
    $(this).siblings().removeClass("current");
});
$("#one").click(function(){
    $(".ulist").removeClass("newpiclist");
    $(this).addClass("current");
    $(this).siblings().removeClass("current");
});
