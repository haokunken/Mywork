$("#tabTop01 li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $(".changeList ul").removeClass("now");
    $(".changeList ul:nth-child("+preNumber+")").addClass("now");
    $(".rlBox .rlList").removeClass("now");
    $(".rlBox .rlList:nth-child("+preNumber+")").addClass("now");
});
$("#tabTop02 li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#newsList-new ul").removeClass("now");
    $("#newsList-new ul:nth-child("+preNumber+")").addClass("now");
});
$("#tabTop03 li").hover(function(){
    $(this).siblings().find("a").removeClass("current");
    $(this).find("a").addClass("current");
    var preNumber=$(this).prevAll().size()+1;
    $("#hotSeaRight ul").removeClass("now");
    $("#hotSeaRight ul:nth-child("+preNumber+")").addClass("now");
});
$("#newsList-new ul").each(function(){
    $(this).find("li:last").css("border","none");
});
// $(function(){
//     //首页专题效果
//     $("#count").dayuwscroll({
//         parent_ele: '#wrapBox',
//         // list_btn: '#tabT04',
//         pre_btn: '#left',
//         next_btn: '#right',
//         path: 'left',
//         auto: false,
//         time: 3000,
//         num: 4,
//         gd_num: 4,
//         waite_time: 1000
//     });
// });
jQuery(".cnxh").slide({ mainCell:".contentInner ul", effect:"left",delayTime:400});