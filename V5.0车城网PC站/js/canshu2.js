$(window).load(function() {
    var tableMenu = $("#J_tableHead");
    var tableBody = $("#J_tableBody");
    var tableNav = $("#J_tableNav");
    var leftMenu = $("#J_navSidebar");
    var scrollContent = $("#J_handleBox");
    var topSpaceHeight = tableBody.offset().top;
    var leftSpaceWidth = tableBody.offset().left;
    // var wwezhi = leftMenu.offset().left;

    var topHeight = tableBody.offset().top;
    var topSider = topSpaceHeight - 140;
    var navScroll = $(document).scrollTop();
    var preNumber = $(document).scrollLeft();
    tableMenu.find(".air-b").css({
        "width": $(document).width()
    });
    // leftMenu.css({
    //     "top": topHeight
    // });
    var cc= $("#J_tableHead").offset().top;
    var windowScroll = function() {
        navScroll = $(document).scrollTop();
        leftscroll = $(document).scrollLeft();
        if (navScroll >= topSider) {
            tableMenu.addClass("head-follow");
            $("#J_tableBody").css("margin-top", "265px"); //tableMenu.height() of static 307 - 15
            //  leftMenu.css({
            //     "top": navScroll - cc +170
            // });
            if (leftscroll != 0) {
                tableMenu.css({
                    "left": -leftscroll
                });
            } else {
                tableMenu.css({
                    "left": 0
                });
            }
        } else {
            tableMenu.removeClass("head-follow");
            $("#J_tableBody").css("margin-top", "0");
            // leftMenu.css({
            //     "top": topHeight
            // });
        };
        //滚动条跟随样式
        // for (var i = 0; i < $("#J_navSidebar").find("li").length; i++) {
        //     var typeTop = $("#J_tableBody").find("h4").eq(i).offset().top,
        //     typeHeight = $("#J_tableBody").find(".topKind").eq(i).height()-50,
        //     beginHeight = topSpaceHeight - 140;
        //     typePoint = 0;
        //     if (navScroll < beginHeight) {
        //         typePoint = beginHeight;
        //     } else {
        //         typePoint = navScroll;
        //     }
        //     if (typeTop <= typePoint + typeHeight / 1 + 200 && typeTop >= typePoint - typeHeight / 2 + 200) {
        //         // alert(typeTop);
        //         $("#J_navSidebar").find("li > a").removeClass("on");
        //         $("#J_navSidebar").find("li").eq(i).find("a").addClass("on");
        //     }
        // };
    };
    $(window).scroll(function() {
        windowScroll();
    });
//     $("#J_navSidebar li").live("click",
//      function(e) {
//         var dd =$("#J_navSidebar li").height();
//         var dataCurrent = $(this).index(),
//         tt =dd*dataCurrent,
//         classCurrentTop = $('#J_tableBody').find("h4").eq(dataCurrent).offset().top-135-tt;
// // $(this).find('a').addClass('on');
// // $(this).siblings().find('a').removeClass('on');
//         $("body,html").animate({
//             "scrollTop": classCurrentTop
//         },
//         800);
//         e.stopPropagation();
//     });
    /*默认保留五个*/
    var btn=$(".closebtn");
        var len = btn.parents("td").length;
        if (len < 5) {
            var leftLen = 5-len;
            for($i=0; $i<(leftLen); $i++) {
                $("#J_tableHead tr").append('<td class="append"><p class="appendtd"></p></td>');  
                $("#J_tableBody tr").append('<td class="append"><p class="appendtd"></p></td>');                
            }
    };
     /*点击保留五个*/
    function appendTd() {
         $(".append").remove();
         var len = $(".closebtn:visible").length;
        // alert(len);
         if (len < 5) {
            var leftLen = 5-len;
            for($i=0; $i<(leftLen); $i++) {
                $("#J_tableHead tr").append('<td class="append"><p class="appendtd"></p></td>');  
                $("#J_tableBody tr").append('<td class="append"><p class="appendtd"></p></td>');                
            }
        }       
    };
    $("#J_tableHead td").find(".layer > i.closebtn").bind("click",
    function() {
        var index = $(this).parents("td").index(),
        len = $(this).parents("tr").children('td').length;
        len = $(".closebtn:visible").length+1;
        if (len > 2) {
            if (index - 1 == 0) { //点击的是第一列数据（多一列左侧X轴标题td，否则使用index == 0）
                $(this).parents("td").next().find('.interchang > li.prev > a').addClass('non');
                $(this).parents("td").find('.interchang > li.prev > a').removeClass('non');
            }
            if (index + 1 == len) { //点击的是最后一列数据
                $(this).parents("td").prev().find('.interchang > li.next > a').addClass('non');
                $(this).parents("td").find('.interchang > li.next > a').removeClass('non');
            }
            $('#J_tableHead').find('tr').each(function() {
                var that = $(this);
                that.children('td:eq(' + index + ')').remove();
            });
            $('#J_tableBody .topKind').find('tr').each(function() {
                var that = $(this);
                that.children('td:eq(' + index + ')').remove();
            });
            tableWidth = tableMenu.find('table').width();
            tableBody.find('h4').css({
                'width': tableWidth - 36
            });
        } else {
            alert('只剩一个车型，不能再删除了！');
        } 
        appendTd(len);
    });

       

});