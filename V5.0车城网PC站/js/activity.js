// JavaScript Document
$(document).ready(function() {
	$(function(){ 
		// 点击go显示输入验证码
		$(".y_btn_run").click(function(){		
			$(".y_act_messages").show(); 
			$(".y_act_hide").show(); 
	    });
	    $(".y_close em").click(function(){		
			$(".y_act_messages").hide(); 
			$(".y_act_hide").hide(); 
	    });
	    /*$(".y_act_sure a").click(function(){
	    	$(".y_act_messages").hide(); 
	    	$(".y_act_hide").hide(); 	
			$(".y_act_sure a").attr('disabled',true).css("cursor","default"); 
	        lottery();	 

	    });*/
	}); 
	/*function lottery(){
	    $.ajax({ 
	        type: 'get', 
	        url: 'http://testwww3.checheng.cn/ajax/choujiang', 
	        dataType: 'jsonp', 
	        cache: false, 
	        error: function(){return false;}, 
	        success:function(obj){			
					$(".y_run").rotate({ 
						duration:3000, //转动时间 
						angle: 0, //默认角度
						animateTo:360*5+obj.rotate, //转动角度 
						easing: $.easing.easeOutSine, 
						callback: function(){ 
							alert(obj.results); 
							//alert("恭喜，您中一等奖")
							$(".y_act_sure a").attr('disabled',false).css("cursor","pointer"); 
						} 
					});
	        } 
	    }); 
	};*/


	//热门车新tab切换
		$(".l_hotCar").mouseenter(function(){
			var data_id = $(this).attr("data-id");
	//		console.log($(this).attr("data-id"));
			$(".l_hotCar").removeClass("l_changeColor");
			$(".l_display").css({'display':'none'});
			$(this).addClass("l_changeColor")
			$('#'+data_id).css({'display':'block'})
		})


});

