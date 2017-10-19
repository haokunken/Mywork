$(function(){
    $(".tree").treemenu({delay:300}).openActive();
});
//
var $cartree = $(".cartree");
    var $letterList = $(".letter-list");
    $letterList.find("a").click(function (e) {
    var $link = $(e.target);
    if (!$link.parent().hasClass("disabled")) {
        $letterList.find("li").removeClass("current");
        $link.parent().addClass("current");
        var letter = $link.text();
        $cartree.find(".cartree-letter").each(function () {
            var $targetLetter = $(this);
            if ($targetLetter.text() == letter) {
                $cartree.scrollTop($targetLetter.prop("offsetTop"));
                return;
            }
        });
    }
    return false;
});
//
$("#listTab li").hover(function(){
    $(this).siblings().find("a").removeClass("now");
    $(this).find("a").addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $("#chexingList ul li").removeClass("now");
    $("#chexingList ul li:nth-child("+preNumber+")").addClass("now");
});
//滚动定位 
onload = function () {
  scrollToLocation();
};
function scrollToLocation() {
  var treeCon = $('.cartree'),
    scrollToTree = treeCon.find('.tree-opened');
    menuLi = $('.treemenu > li');
    if(menuLi.hasClass('tree-opened')) {
          treeCon.animate({
            scrollTop: scrollToTree.offset().top - treeCon.offset().top + treeCon.scrollTop()
          },0);  
      };
};
// var aNav = $("#letter-list li");//导航
// var aDiv = $(".cartree .cartree-letter");//楼层  
//     $(".cartree").scroll(function(){
//         var iTop =aDiv.scrollTop();
//          aDiv.each(function(){
//             alert(iTop);
//             if(iTop > 135){
//                 aNav.removeClass('current');
//                 aNav.eq($(this).index()).addClass('current');
//             }
//          })  
//      })  
/*发布更多信息*/
$("#tagBtn").click(function(){
    if($("#ycBox").is(':hidden')){  
        $("#ycBox").css("display","block");
        document.getElementById("word").innerHTML = '收起';
        $(".jiantou").css("border-width","0px 5px 5px")
        $("#tagBtn span").css("color","#eb2e3b")
    }else{  
        $("#ycBox").css("display","none");
        document.getElementById("word").innerHTML = '展开';
        $(".jiantou").css("border-width","5px 5px 0px")
        $("#tagBtn span").css("color","#333")
        }  
});

(function(){
   var aaTop = $('.topding').offset().top; 
    var ccTop = $('.inforLeft').offset().top;
    var aawidth = $("#width01").width();
    var ccwidth = $("#width02").width(); 
    var footerheight = $("#footer").height(); 
    var aaheight = $(".topding").height(); 
    var ccheight = $("#letter-list").height(); 
    var boxheight = $(window).height();  
    var changeheight = boxheight - footerheight - ccheight - aaheight-100;
    var lheight = boxheight - aaheight - ccheight -70;
    $('#cartree').height(lheight);
    var stickyMenu = function(){
        var scrollTop = $(window).scrollTop();  
        var scrollbottom = $(document).height() - $(window).height() - footerheight; 
        if (scrollTop > aaTop) { 
            $('.topding').css({'width':aawidth, 'position': 'fixed', 'top':0 });
            $('.inforLeft').css({'width':ccwidth, 'position': 'fixed', 'top':50 });
            } else {
                $('.topding').css({ 'position': 'relative', 'top':0})         
                $('.inforLeft').css({ 'position': 'relative', 'top':0})         
            };
            if (scrollTop >=scrollbottom){
                $('#cartree').css('height',changeheight);
                } else {
                $('#cartree').css('height',lheight);                  
            } 
    };      
    $(window).scroll(function(){stickyMenu();});    
})();

//
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
//
var $openBtn = $('.openBtn a');
$openBtn.each(function () {
    var $openBtn = $('#openBtn' + $(this).attr('data-value'));
    var $openBox = $('#openBox' + $(this).attr('data-value'));
    $(this).click(function(){
        if ($openBox.is(':hidden')) {
            $openBox.show();
            $openBtn.find("em").removeClass('jiantouUp');
            $openBtn.find("#word").html("收起");
        }else{
          $openBox.hide();  
          $openBtn.find("em").addClass('jiantouUp');
          $openBtn.find("#word").html("展开");
        }
    });
});

//$("#tjLink").click(function(){
//    $("#mask").css("display","block");
//});
//$("#brandClose").click(function(){
//    $("#mask").css("display","none");
//});

/*级别事件*/
// var $levels = $('.jiebieBox .jibeiTab');
// $levels.each(function () {
//     var $levelcon = $('#level' + $(this).attr('data-value'));
//     $(this).on('mouseover', function () {
//         $('.jibie-open').hide();
//         $levels.removeClass('current');
//         $(this).addClass('current');
//         if ($levelcon.is(':hidden')) {
//             $levelcon.show();
//         }
//     });
// })


// 右侧定位
// var rightFix = $("#fixTit").offset().top-72;
// var fixList = function(){
//     var scrollTop = $(window).scrollTop();  
//     var fixWidth = $("#fixWidth").width();
//     if (scrollTop > rightFix) { 
//         $(".rightFix").css({"position": "fixed", "top":-30 });
//         $("#fixTit").css({'width':fixWidth,"position": "fixed", "top":50,"z-index":998 });
//         } else {
//         $(".rightFix").css({ "position": "relative", "top":0})                
//         $("#fixTit").css({ "position": "relative", "top":0})                
//         };
// };      
// $(window).scroll(function(){fixList();});    

// var fixedList = $(".fixedList a");//导航
// var brandInfor = $(".brandInfor .brandName");//楼层
// fixedList.click(function(){
//     var t = brandInfor.eq($(this).index());
//     $('body,html').animate({scrollTop: t.offset().top - $("body,html").offset().top + $("body,html").scrollTop()-125},500);
// });

// 对比
var tempArr = [];//对比功能，存放车ID，长度最大为5
$('body', document).click(function(e){
    // e.stopPropagation();
    if (!$(e.target).parents('.pk02').length && $(e.target).attr('class') !== 'pk02') {
        $('#duibiFix .contrast').removeClass("on");
        $(".pk02").hide();
    }
});

// 更新对比列表
function updateList() {
    var listLen = $(".carList li").length;
    listLen >= 5 ? $("#selectCar").hide() : $("#selectCar").show();
    tempArr = [];
    for(var k = 0; k < listLen; k++) {
        var tempid = $(".carList li").eq(k).children('.del').attr("data-id");

        for(var i = 0; i < $(".tableDuibi").length; i++) {
            if($(".tableDuibi").eq(i).parents('td').siblings('.tdleft').find('.Jtype').attr('carid') == tempid) {
                $(".tableDuibi").eq(i).addClass("non").find("#chanWord").html("已加入");
                continue;
            }
        }
        tempArr.push(tempid);
    }
    autolist = tempArr.join(',');
    if(autolist!=null && autolist!=""&&autolist!="null") {
        setCookie('autolist',autolist,null);
    } else {
        setCookie('autolist','',null);
    }
}
function getCookie(c_name) {
    if (document.cookie.length>0) {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1) {
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return "";
}

function setCookie(c_name,value,expiredays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+";path=/"+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

//加对比按钮
$("body").on("click",'.tableDuibi',function(e){
    e.stopPropagation();
    $('#duibiFix .contrast').addClass("on");
    $('#duibiFix .pk02').show();
    $('.jrcomm').text('进入对比');
    $('.tjLink').css({ 'display': 'block'})
    var carid = $(this).parents('td').siblings('.tdleft').find('.Jtype').attr('carid');
    // alert(carid);
    if ( carid == 0) {
        return;
    } else if (tempArr.indexOf(carid) != -1) {
        alert("此车型已选过！");
        return false;
    } else if (tempArr.length == 5) {
        alert("同时只能对比五款车！");
        return false;
    } else {
        $(this).addClass("non").find("#chanWord").html("已加入");
        tempArr.push(carid);
        $(".carList").append('<li class="cf"><a href="javascript:void(0);">'+ $(this).parents('td').siblings('.tdleft').find('.wordInfor').html()+'</a><a href="javascript:void(0);" class="chooseClose del" data-id="'+ carid +'" title="删除">&nbsp;</a></li>');
        if (tempArr.length == 5) {
            $("#selectCar").hide();
        }

        if($('.duibiId1').length == 0){
            $('#box').append('<input type="hidden" class="duibiId1" data-num="1" value="'+carid+'">');
        }else if($('.duibiId2').length == 0){
            $('#box').append('<input type="hidden" class="duibiId2" data-num="2" value="'+carid+'">');
        }else if($('.duibiId3').length == 0){
            $('#box').append('<input type="hidden" class="duibiId3" data-num="3" value="'+carid+'">');
        }else if($('.duibiId4').length == 0){
            $('#box').append('<input type="hidden" class="duibiId4" data-num="4" value="'+carid+'">');
        }else if($('.duibiId5').length == 0){
            $('#box').append('<input type="hidden" class="duibiId5" data-num="5" value="'+carid+'">');
        }
    }   
    updateList();
});
//
$("#carmm").change(function(){
    if ($(this).val() == 0) {
        return;
    } else if (tempArr.indexOf($(this).val()) != -1) {
        alert("此车型已选过！");
        return false;
    } else if (tempArr.length == 5) {
        alert("同时只能对比五款车！");
        return false;
    } else {
        tempArr.push($(this).val());
        $(".carList").append('<li class="cf"><a href="" target="_blank">'+ $(this).find("option:selected").text() +'</a><a href="javascript:void(0);" class="chooseClose del" data-id="'+ $(this).val() +'" title="删除">&nbsp;</a></li>');
        if (tempArr.length == 5) {
            $("#selectCar").hide();
        }

        if($('.duibiId1').length == 0){
            $('#box').append('<input type="hidden" class="duibiId1" data-num="1" value="'+$(this).val()+'">');
        }else if($('.duibiId2').length == 0){
            $('#box').append('<input type="hidden" class="duibiId2" data-num="2" value="'+$(this).val()+'">');
        }else if($('.duibiId3').length == 0){
            $('#box').append('<input type="hidden" class="duibiId3" data-num="3" value="'+$(this).val()+'">');
        }else if($('.duibiId4').length == 0){
            $('#box').append('<input type="hidden" class="duibiId4" data-num="4" value="'+$(this).val()+'">');
        }else if($('.duibiId5').length == 0){
            $('#box').append('<input type="hidden" class="duibiId5" data-num="5" value="'+$(this).val()+'">');
        }
        updateList();
    }
});

$('#selectCar select').on('change',function(){
    setBtnState();
})

function setBtnState(){
    //console.log($('#selectCar select').eq(0).val());
    if($('#selectCar select').eq(0).val() == '0' && $('#selectCar select').eq(1).val() == '0' && $('#selectCar select').eq(2).val() == '0'){
        $('.jrcomm').text('请选择');
        $('.tjLink').hide();
    }else{
        $('.jrcomm').text('进入对比');
        $('.tjLink').show();
    }
}

$('.tjLink').on('click',function(){
    $('#selectCar select').val(0);
    setBtnState();
})



//
$(".pk02").delegate(".del", "click", function(e) {
    e.stopPropagation();
    $(this).parent("li").remove();
    $('#selectCar select').val(0);
    setBtnState();
    var sId = $(this).attr("data-id");
    for(var i = 0; i < $(".tableDuibi").length; i++) {
        if($(".tableDuibi").eq(i).parents('td').siblings('.tdleft').find('.Jtype').attr('carid') == sId) {
            $(".tableDuibi").eq(i).removeClass('non').find("#chanWord").html("对比");
        }
    }
    var nIndex = tempArr.indexOf(sId);
    tempArr.splice(nIndex, 1);
    if (tempArr.length < 5) {
        $("#selectCar").show();
    }

    $('#box input[value="'+sId+'"]').remove();


    updateList();
});

$(".pk02").delegate(".jrcomm", "click", function(e) {
    e.stopPropagation();
    if (tempArr.length > 0) {
        var list = "";
        for (var i=0; i < tempArr.length; i++) {
            if (i == tempArr.length - 1) {
                list += tempArr[i];
            } else {
                list += tempArr[i] + ",";
            }
        }

        var urlpath = '';
        var num = 0;
        $("#box input").each(function(){
            var v = $(this).val();
            urlpath = urlpath + v +",";
            num++;
        });
        if(num < 5){
            for(var a=1; a<=(5-num); a++){
                urlpath = urlpath + '0,';
            }
        }

        window.open(url_ajax+"/duibi/chexing/carids="+urlpath);
    } else {
        alert('至少选择一辆车进行对比！');
    }

});


$(".pk02").delegate(".tjLink", "click", function(e) {
    e.stopPropagation();
    $(".pk02 .carList li").remove();
    $(".tableDuibi[class*='non']").each(function(index, ele) {
        $(ele).removeClass('non').find("#chanWord").html("对比");
    });
    tempArr = [];
    $("#selectCar").show();

    $('#box input').remove();
    updateList();
});


$('#duibiFix .contrast').delegate('a', 'click', function(e) {
    e.stopPropagation();
    if ($('#duibiFix .contrast').hasClass('on')) {
        $('#duibiFix .contrast').removeClass("on");
        $('#duibiFix .pk02').hide();
    } else {
        $('#duibiFix .contrast').addClass("on");
        $('#duibiFix .pk02').show();
    }
});
//

// 品牌页介绍
var time = 300;
var h = 40;
function showdiv(obj) {

    //obj.parentNode.nextSibling.nextSibling.style.display = "block";
    var x = obj.parentNode.nextSibling;
    //包含众多空格作为文本节点，因此在我们使用nextSibling和previousSibling时就会出现问题。
    //因为FireFox会把文本节点误当做元素节点的兄弟节点来处理。我们可以添加nodeType来判断。
    //当上一节点或者是下一节点为文本节点时，就继续寻找，直到找到下一个元素节点。
    //  其中nodeType的值主要有以下几种：
    //
    // 元素节点的nodeType值为1
    // 属性节点的nodeType值为2
    // 文本节点的nodeType值为3
    if (x.nodeType != 1) {
        x = x.nextSibling;
    }
    x.style.display = "block";
    obj.parentNode.style.display = "none";

}
function hidediv(obj) {

    obj.parentNode.parentNode.style.display = "none";
    var x = obj.parentNode.parentNode.previousSibling;
    if (x.nodeType != 1) {
        x = x.previousSibling;
    }
    x.style.display = "block";
}


$("#refreshTab li").hover(function(){
    $(this).siblings().removeClass("now");
    $(this).addClass("now");
    var preNumber=$(this).prevAll().size()+1;
    $("#refreshTag ul li").removeClass("now");
    $("#refreshTag ul li:nth-child("+preNumber+")").addClass("now");
});