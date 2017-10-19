var nonon = $("#J_tableHead td").find(".interchang");
var len = nonon.parents("td").length;
if (len >1) {
  nonon.parents("td:first").find('.interchang > li.prev > a').addClass('non');
  nonon.parents("td:last").find('.interchang > li.next > a').addClass('non');
}else {
    nonon.parents("td").find('.interchang > li.prev > a').addClass('non');
    nonon.parents("td").find('.interchang > li.next > a').addClass('non');
};


$("#J_tableHead td:not(.nodata)").find(".interchang > li.prev > a").live("click",
function() {
    if (!$(this).hasClass('non')) {
        var index = $(this).parents("td").index(),
        len = $(this).parents("tr").children('td:not(.append)').length;
        // alert(len);
        if (index - 1 == 1) { //点击的是第二列数据（多一列左侧X轴标题td，否则使用index - 1 == 0）
            $(this).addClass('non');
            $(this).parents("td").prev().find('.interchang > li.prev > a').removeClass('non');
        }
        if (index + 1 == len) { //点击的是最后一列数据
            $(this).parents("td").prev().find('.interchang > li.next > a').addClass('non');
            $(this).parents("td").find('.interchang > li.next > a').removeClass('non');
        }
        $('#J_tableHead').find('tr').each(function() {
            var that = $(this);
            that.children('td:eq(' + index + ')').insertBefore(that.children('td:eq(' + (index - 1) + ')'));
        });
        $('#J_tableBody .topKind').find('tr').each(function() {
            var that = $(this);
            that.children('td:eq(' + index + ')').insertBefore(that.children('td:eq(' + (index - 1) + ')'));
        });
    }
});

$("#J_tableHead td:not(.nodata)").find(".interchang > li.next > a").live("click",
function() {
    if (!$(this).hasClass('non')) {
        var index = $(this).parents("td").index(),
        len = $(this).parents("tr").children('td:not(.append)').length;
        if (index + 1 == len - 1) { //点击的是倒数第二列数据
            $(this).parents("td").next().find('.interchang > li.next > a').removeClass('non');
            $(this).addClass('non');
        }
        if (index - 1 == 0) { //点击的是第一列数据（多一列左侧X轴标题td，否则使用index == 0）
            $(this).parents("td").next().find('.interchang > li.prev > a').addClass('non');
            $(this).parents("td").find('.interchang > li.prev > a').removeClass('non');
        }
        $('#J_tableHead').find('tr').each(function() {
            var that = $(this);
            that.children('td:eq(' + index + ')').insertAfter(that.children('td:eq(' + (index + 1) + ')'));
        });
        $('#J_tableBody .topKind').find('tr').each(function() {
            var that = $(this);
            that.children('td:eq(' + index + ')').insertAfter(that.children('td:eq(' + (index + 1) + ')'));
        });
    }
});