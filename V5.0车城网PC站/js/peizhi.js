$(window).load(function() {
    var tableMenu = $("#J_tableHead");
    var tableBody = $("#J_tableBody");
    var leftMenu = $("#J_navSidebar");
    // var scrollContent = $("#J_handleBox");
    var topSpaceHeight = tableBody.offset().top;
    var leftSpaceWidth = tableBody.offset().left;

    var topHeight = tableMenu.height()+20+13;
    var topSider = topSpaceHeight -30- 62;
    var navScroll = $(document).scrollTop();
    leftMenu.css({
        "top": topHeight
    });
    var cc= $("#J_tableHead").offset().top;
    var windowScroll = function() {
        navScroll = $(document).scrollTop();
        if (navScroll >= topSider) {
            tableMenu.addClass("head-add");
            $("#J_tableBody").css("margin-top", "290px"); 
            leftMenu.css({
                "top": navScroll + topHeight - topSider
            });
        } else {
            // alert(topHeight);
            tableMenu.removeClass("head-add");
            $("#J_tableBody").css("margin-top", "0");
            leftMenu.css({
                "top": topHeight
            });
        };
        //滚动条跟随样式
        for (var i = 0; i < $("#J_navSidebar").find("li").length; i++) {
            var typeTop = $("#J_tableBody").find("h4").eq(i).offset().top,
            typeHeight = $("#J_tableBody").find(".topKind").eq(i).height(),
             beginHeight = topSpaceHeight -62; 
            // alert(typeHeight);
            typePoint = 0;
            if (navScroll < beginHeight) {
                typePoint = beginHeight;
            } else {
                typePoint = navScroll;
            }
            if (typeTop <= typePoint + typeHeight / 2 + 200 && typeTop >= typePoint - typeHeight / 2 + 200) {
                $("#J_navSidebar").find("li > a").removeClass("on");
                $("#J_navSidebar").find("li").eq(i).find("a").addClass("on");
            }
        };
    };
    $(window).scroll(function() {
        windowScroll();
    });
    $("#J_navSidebar li").live("click",
    function() {
        var dd =$("#J_navSidebar li").height();
        var dataCurrent = $(this).index(),
        tt =dd*dataCurrent,
        classCurrentTop = $('#J_tableBody').find("h4").eq(dataCurrent).offset().top-140-tt;

        $("body,html").animate({
            "scrollTop": classCurrentTop
        },
        800);
    });
    
 $(".pluscar").click(function(){
    var clil=$(this).next(".tianjia"); 
    clil.slideToggle("fast");
    clil.parents("td").siblings().find(".tianjia").hide();
   }); 

});


