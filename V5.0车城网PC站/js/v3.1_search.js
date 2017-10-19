$(document).ready(function(){
	// 搜索页相关车系最后一个margin-right为0px
	var length = $(".lxy_audi_list ul li").length;
    if (length>=4) {
        for (var i=3; i<=length;i++) {
            if ((i-3)%4 == 0) {
                $(".lxy_audi_list ul li").eq(i).css("margin-right","0px");
            }
        }
	}
	//搜索无结果页页面高度随窗口高度变化
	var height = $(window).height();
	$(".lxy_noresult").css("height",(height-231)+"px");

	
})