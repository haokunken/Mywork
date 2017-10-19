// JavaScript Document
$(document).ready(function(e) {
	
	// 宝骏专题页底部选项卡效果
	Yeffect.click_hxk(".y_bjcarB a",".y_box1","y_bjcarBmr");
	Yeffect.click_hxk(".y_bjcarA_A",".y_box1","y_bjcarBmr");

	//右侧浮动
	$('.y_close').click(function(){	
		$('.y_floatA').hide();
	})

	//原生列表滚动条
	Yeffect.scrollTOPtiaoA(".y_mediaA",".y_mediaAL",".y_tuodongtiaosh",".y_stiodongt"); 


	// 意向车型插件修改
	$('#indexSear').click(function(){	
		$('#brandFirst,.carlin').show();
	})
	$('.carlin a').click(function(){	
		$('.brand-bg').hide();
	});




});

