"use strict";
(function ($) {
    $.fn.extend({
        "filterCar": function (options) {
            init(options); //初始化参数
           /* $("input:checkbox:checked").each(function (e) {
                alert($(this).val());
            });*/
            var value = $.trim($(this).val()); //获取当前选中的值
            var ColumnObj = $(defaults.yDom).find(defaults.columnDom); //查找列dom对象
            var flag = 0;
            //condition[defaults.y]=[];
            ColumnObj.each(function () {

                var columnText = $.trim($(this).find(defaults.textDom).text());//获取列的内容
                var column = $(this).attr(defaults.column);//获取列的序号

                //console.log('num:'+column);
                if (columnText.indexOf(value) !== -1) { //有匹配到字符串
                    if (defaults.show === 0) {
                        removeCondition(column);
                    } else {
                        addCondition(column);
                    }
                    flag = 1;
                }
            });

            if(defaults.show === 0 && flag == 0){
                isNoResult = 0;
            }
            //console.log("is_delete:" +is_delete);
            //console.log(condition);
            //console.log('flag:'+flag);
            //console.log('show:'+defaults.show);
            //console.log('isNoResult:'+isNoResult);
            if((flag == 0 && defaults.show == 1) || (is_delete == 1 &&  isNoResult == 1)){
                //console.log('defaults');
                hideAll();
            }else{
                //console.log('yes');
                $("#no_result").hide();
                showColumn();
            }

        },
        "highLightDiffent": function (options, exchange) {
            init(options); //初始化参数
            var rowObj = $(defaults.rowDom); //查找行dom对象
            if (exchange === 0) {
                //rowObj.css('background', defaultBackground);
                if(defaults.isBindDom){
                    $(defaults.bindDom).removeClass(defaults.hightLightClass);
                }
                rowObj.removeClass(defaults.hightLightClass);
                return true;
            }
            rowObj.each(function () {
               // defaultBackground = $(this).css('background');
                var ColumnObj = $(this).find(defaults.columnDom); //查找列dom对象
                var step = 0;
                var prevText;
                ColumnObj.each(function () {
                    if($(this).is(':hidden')){
                        return true;
                    }
                    var columnText = $.trim($(this).text());
                    if(columnText==''){
                        return true;
                    }
                    if (step === 0) {
                        prevText = $.trim($(this).text());
                        step = 1;
                        return true;
                    }

                    if (columnText == prevText) {
                        prevText = columnText;
                    } else {
                        step = 2;
                        return false;
                    }
                });
                if (step === 2) {
                    if(defaults.isBindDom){
                        var num=$(this).attr(defaults.row);
                        var bind_obj=[defaults.bindTag, '[', defaults.bindAttrbute, '=',num, ']'].join('');
                        $(bind_obj).addClass(defaults.hightLightClass);
                    }
                    $(this).addClass(defaults.hightLightClass);
                }
            });

        },
        "hideSame": function (options, exchange) {
            init(options); //初始化参数
            var rowObj = $(defaults.rowDom); //查找行dom对象
            if (exchange === 0) {
                if(defaults.isBindDom){
                    $(defaults.bindDom).show();
                }
                rowObj.show();
                return true;
            }
            if(defaults.isBindDom){
                $(defaults.bindDom).hide();
            }
            //rowObj.hide();
            rowObj.each(function () {

                var ColumnObj = $(this).find(defaults.columnDom); //查找列dom对象
                var step = 0;
                var prevText;
                ColumnObj.each(function () {
                    if($(this).is(':hidden')){
                        return true;
                    }
                    var columnText = $.trim($(this).text());
                    if(columnText==''){
                        return true;
                    }
                    if (step === 0) {
                        prevText = $.trim($(this).text());
                        step = 1;
                        return true;
                    }
                    if (columnText == prevText) {
                        prevText = columnText;
                    } else {
                        step = 2;
                        return false;
                    }
                });
                if (step === 2) {
                    if(defaults.isBindDom){
                        var num=$(this).attr(defaults.row);
                        var bind_obj=[defaults.bindTag, '[', defaults.bindAttrbute, '=',num, ']'].join('');
                        $(bind_obj).show();
                    }
                    $(this).show();
                }else{
                    $(this).hide();
                }
            });

        },
        "hideEmpty": function (options, exchange) {
            init(options); //初始化参数
            var rowObj = $(defaults.rowDom); //查找行dom对象
            if (exchange === 0) {
                if(defaults.isBindDom){
                    $(defaults.bindDom).show();
                }
                rowObj.show();
                return true;
            }
            rowObj.each(function () {
                var ColumnObj = $(this).find(defaults.columnDom); //查找列dom对象
                var step = 0;
                var length = ColumnObj.length;
                ColumnObj.each(function () {
                    var columnText = $.trim($(this).text());
                    if (columnText != '-' && columnText != '' && columnText != ' ') { //columnText.indexOf('-')===-1
                        //console.log(columnText);
                        return false;
                    }
                    step += 1;

                });
                if (step === length) {
                    if(defaults.isBindDom){
                        var num=$(this).attr(defaults.row);
                        var bind_obj=[defaults.bindTag, '[', defaults.bindAttrbute, '=',num, ']'].join('');
                        $(bind_obj).hide();
                    }
                    $(this).hide();
                }
            });

        },
    });
    //默认参数
    var defaults = {
        //hightLightBackground: '#fff9ea',
        hightLightClass:'hightlight',
        columnTag: 'td',
        rowTag: 'tr',
        column: 'data-column',
        row: 'data-row',
        x: 0,
        y: 1,
        show: 1, //0或者1
        textDom:'p',
        isBindDom:false,
        bindTag:'tr',
        bindAttrbute:'data-bind-row'
    };
    //筛选条件
    var condition = new Object();
    var defaultBackground = '#ffffff';
    var isNoResult = 0 ; //是不是没有结果
    var isDelete = 0 ; //有没有删除

    function init(options) {
        $.extend(defaults, options);
        defaults.columnDom = [defaults.columnTag, '[', defaults.column, ']'].join('');
        defaults.rowDom = [defaults.rowTag, '[', defaults.row, ']'].join('');
        defaults.xDom = [defaults.columnTag, '[', defaults.column, '=', defaults.x, ']'].join('');
        defaults.yDom = [defaults.rowTag, '[', defaults.row, '=', defaults.y, ']'].join('');
        if(defaults.isBindDom){
            defaults.bindDom= [defaults.bindTag, '[', defaults.bindAttrbute, ']'].join('');
        }
    }

    function showColumn() {
        //受影响的数量
        var effectNum = 0;
        if(JSON.stringify(condition) == "{}"){
            $(defaults.columnDom).show();
        }else{
            $(defaults.columnDom).hide();
            $.each(filter(), function (k, index) {
                var attr = [defaults.columnTag, '[', defaults.column, '=', index, ']'].join('');
                $(attr).show();
                effectNum ++;
            })

            var keys=Object.keys(condition);
            //console.log('effectNum:' + effectNum);
            //console.log('keys:' + keys);
            //console.log(condition);
            if (keys.length <= 0) {
                $(defaults.columnDom).show();
                $("#no_result").show();
                return false;

            }
            //没有任何一行
            if( effectNum == 0){
                hideAll();
                return false;
            }
            //is_delete = 0;
            isNoResult = 0;

        }



    }

    function addCondition(index) {
        var colums = new Object();

        if (condition[defaults.y]) {
            //console.log('right');
            colums = condition[defaults.y];
        }else{
            //console.log('error');
        }
        colums[index] = index;
        condition[defaults.y] = colums;
    }

    function removeCondition(index) {
        var colums = new Object();
        if (condition[defaults.y]) {
            colums = condition[defaults.y];
        }
        delete colums[index];
        condition[defaults.y] = colums;
        if (Object.keys(colums).length <= 0) {
            delete condition[defaults.y];
        }
    }

    function filter() {
        var next = new Array;
        var step = 0;
        var columns = new Array;
        $.each(condition, function (k, v) {
            if (step === 0) {
                columns = Object.keys(v);
                step += 1;
            } else {
                next = Object.keys(v);
                columns = Array.intersect(columns, next);
            }
        })
        return columns;
    }

    //隐藏所有列，只留下第一列
    function hideAll() {
        /*$(".lsd tbody tr td").css("display","none");
        $(".lsd tbody tr td").first().css("display","table-cell");
        $(".lsd tbody tr td.j_start").css("display","table-cell");
        $("#no_result").show();*/

        $(".lsd tbody tr td").css("display","none");
        $(".lsd tbody tr td").first().css("display","table-cell");
        $(".lsd tbody tr td.j_start").css("display","table-cell");
        $('.j_second').each(function(index,item){
            $(this).children('td').first().css("display","table-cell");
        })
        $('.j_params-carbody td').css("display","table-cell");

        $("#no_result").show();
        isNoResult = 1;

    }

    Array.intersect = function () {
        //console.log('arguments');
        //console.log(arguments);
        var result = new Array();
        var obj = {};
        for (var i = 0; i < arguments.length; i++) {
            for (var j = 0; j < arguments[i].length; j++) {
                var str = arguments[i][j];
                if (!obj[str]) {
                    obj[str] = 1;
                }
                else {
                    obj[str]++;
                    if (obj[str] == arguments.length) {
                        result.push(str);
                    }
                }//end else
            }//end for j
        }//end for i
        return result;
    }
})(window.jQuery);


(function ($) {
    $.fn.extend({
        "addToCompare": function (options) {
            $.extend(compareOptions, options);
            var button = $(compareOptions.compareButton);
            $(document).click(function () {
                $(compareOptions.compareListBoxId).hide();
            })
            $(compareOptions.compareListBoxId).click(function (e) {
                e.stopPropagation();
            })
            $(compareOptions.submitButtom).click(function (e) {
                e.stopPropagation();
                var values=[];
                $('.'+compareOptions.inputClass).each(function(){
                    values.push($(this).val());
                })
                window.open(compareOptions.url+'?'+compareOptions.paramName+'='+values.toString())
            })
            if (button.length > 1) {
                this.each(function () {
                    var $this = $(this);
                    $this.bind('click', function (e) {
                        e.stopPropagation()
                        if ($(compareOptions.compareListBoxId).is(':hidden')) {
                            $(compareOptions.compareListBoxId).show();
                        } else {
                            $(compareOptions.compareListBoxId).hide();
                        }
                    })
                })
            } else {
                button.bind('click', function (e) {
                    e.stopPropagation()
                    if ($(compareOptions.compareListBoxId).is(':hidden')) {
                        $(compareOptions.compareListBoxId).show();
                    } else {
                        $(compareOptions.compareListBoxId).hide();
                    }
                })
            }
            var compare_buttons = $(this);
            $(compareOptions.compareList).on('click', compareOptions.deleteButtonInBox, function (e) {
                e.stopPropagation()
                var id = $(this).attr(compareOptions.idSelector);
                $(this).parent('.' + compareOptions.oneDataClass).remove();
                compare_buttons.each(function () {
                    if ($(this).attr(compareOptions.idSelector) == id) {
                        $(this).removeClass(compareOptions.selectClass);
                        $(this).html('对比');
                    }
                })
            })
            this.each(function () {
                var $this = $(this);
                $this.bind('click', function (e) {
                    e.stopPropagation()
                    if ($this.hasClass(compareOptions.selectClass) == true) {
                        alert('已添加');
                    } else {
                        var text = $this.attr(compareOptions.textSelector);
                        var id = $this.attr(compareOptions.idSelector);
                        if ($(compareOptions.compareList).children().length + 1 <= 5) {
                            if(unique(id)){
                                $(compareOptions.compareList).append($.fn.compareBoxTemplete(id, text));
                                $(compareOptions.compareListBoxId).show();
                                $this.addClass(compareOptions.selectClass).html('已添加');
                            }else{
                                alert('已经加入了对比');
                            }
                        } else {
                            alert('最多能添加5条');
                        }
                    }
                })
            })
        },
        "carDropDown": function (options) {
            $.extend(defaults, options);
            getJsonByAjaxJson(this);
        },
        "setToCompare": function (id, text, options) {
            $.extend(compareOptions, options);
            if ($(compareOptions.compareList).children().length + 1 <= 5) {
                if (unique(id)) {
                    $(compareOptions.compareList).append($.fn.compareBoxTemplete(id, text));
                    $('[data-id='+id+']').addClass(compareOptions.selectClass);
                } else {
                    alert('已经加入了对比');
                }
            } else {
                alert('最多能添加5条');
            }

        }
    });
    function unique(id) {
        var object = $('.' + compareOptions.oneDataClass).find('[' + compareOptions.idSelector + ']');
        var sign = true;
        object.each(function () {
            if ($(this).attr(compareOptions.idSelector) == id) {
                sign = false;
                return false;
            }
        });
        if (sign) {
            return true;
        } else {
            return false;
        }

    }

    $.fn.compareBoxTemplete = function (carid, text) {
        var templete = '<li class="' + compareOptions.oneDataClass + '">' +
            '<a class="j_span" target="_blank" title="' + text + '">' + text + '</a>' +
            '<input type="hidden" name="carids[]" class="' + compareOptions.inputClass + '" value="' + carid + '" />' +
            '<a data-id="' + carid + '" class="j_em"  href="javascript:;"> </a>' +
            '</li>';
        return templete
    }
    var compareOptions = {
        compareButton: '#compare_button',
        compareListBoxId: '#compare_box',
        compareList: '.j_carlist',
        selectClass: 'j_non',
        textSelector: 'data-text',
        idSelector: 'data-id',
        deleteButtonInBox: '.j_em',
        oneDataClass: 'compare_one',
        inputClass:'carids',
        submitButtom:'#compare_submit',
        url:window.location.href,
        paramName:'carids'
    }
    //默认参数
    var defaults = {
        url: '',
        data: '',
        type: "get",
        dataType: "jsonp",
        jsonp: "callback"
    };

    function getJsonByAjaxJson(obj) {
        $.ajax({
            type: "get",    //请求方式
            async: true,    //是否异步
            url: defaults.url,
            dataType: defaults.dataType,    //跨域json请求一定是jsonp
            jsonp: defaults.jsonp,    //跨域请求的参数名，默认是callback
            data: defaults.data,    //请求参数
            success: function (data) {
                obj.html(data);
            },
            error: function (XMLHttpRequest) {
                console.error(XMLHttpRequest.responseText);
            }
        });
    }

})(window.jQuery);


