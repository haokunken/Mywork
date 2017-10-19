// (function(){
$(window).load(function(){
    var showEwm = $('#showEwmbg').offset().top; 
    var showEwmWidth = $("#tunId").width();
    var showheight = $("#tunId").height();
    var showLeft = $('.col-showLeft').height();
    var showLeftoffset = $('.col-showLeft').offset().top-70; 
    // alert(showLeft);
    var showRight = $('.col-showRight').height();

    var stickyMenu02 = function(){
        var scrollTop = $(document).scrollTop();  
        var scrollheight = $(document).height(); 
        // var bottomHeight=$('#friendLink').height()+$('#footer').height()+75;
        // var elseHeight= scrollheight-bottomHeight;
        if (showLeft < showRight){
                $('#tunId').css({'width':showEwmWidth ,'position': 'relative', 'top':0}) 
            };
        if (scrollTop > showEwm&&showLeft > showRight) { 
                $('#tunId').css({'position': 'fixed', 'top':30});

                if(scrollTop + showheight >showLeftoffset+showLeft){
                    $('#tunId').css('top',showLeftoffset+showLeft-scrollTop-showheight+'px');
                };

            } else {
                $('#tunId').css({'width':showEwmWidth , 'position': 'relative', 'top':0})                
            };
    };      
    $(window).scroll(function(){stickyMenu02();}); 
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
    // alert(qdval)  
});
$("#cliTcc01,#cliTcc02").click(function(){
    $("#txxx").show();
})
$("#btn").click(function(){
    $("#txxx").hide();
})

$("#tab10 li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#newsRecom ul").removeClass("now");
    $("#newsRecom ul:nth-child("+preNumber+")").addClass("now");
});
$("#nextNew,#preNew").click(function(){
    $("#active-new").show();
    $("#hdnew").hide();
})
$("#zkan").click(function(){
    $("#active-new").hide();
    $("#hdnew").show();
})
//修改2017-01-04
// $("#hdnew ul li").click(function(){
//     $("#y_txxx").show();
// })
$(".btn").click(function(){
    $("#y_txxx").hide();
})