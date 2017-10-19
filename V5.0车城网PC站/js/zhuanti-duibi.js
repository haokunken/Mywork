
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