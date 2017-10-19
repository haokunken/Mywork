// JavaScript Document
$(document).ready(function() {
	//首页城市切换
	$(".y_topLR").hover(function(){
		$(this).next('.y_cityA').fadeIn(200);
		$('.citySelector').fadeIn(200);
		//$('.cityslide').fadeIn(200);
		$(this).find('i').addClass("y_topLR_open");
		$(this).find('span').addClass("y_topLR_span");
		$(this).find('em').addClass("y_topLR_em");
		//首页城市切换- 城市选择-跟随样式载入
		msgdmd(".y_cityA_cenB a",".y_cityA_cenC ul li","now",500);
		function msgdmd(dhli,bkli,dqys,time){
		    var shuzu=[];
			$(bkli).each(function(index, element) {
		        shuzu.push($(this).offset().top-185);
		    });
			function box(top){
				for(var i=0;i<shuzu.length;i++){
					if(shuzu[i]>top){
						return i;
					}
				}
			};
			$(".y_cityA_cenC").scroll(function(){
				var gdttop=$(".y_cityA_cenC").scrollTop();
				var num=box(gdttop);
				$(dhli).removeClass(dqys);
				$(dhli).eq(Math.max(num-1,0)).addClass(dqys);	
			});
			$(dhli).click(function(){		
				var aasdasd=$(dhli).index(this);
				var scrollHeight = $(bkli).eq(aasdasd).offset().top-$(".y_cityA_cenC").offset().top+$(".y_cityA_cenC").scrollTop();
				$(".y_cityA_cenC").stop().animate({scrollTop: scrollHeight},time);
			});	
		}
	})
	$(".y_topL").mouseleave(function(){
		$(this).find(".y_cityA").fadeOut(200);
		$('.citySelector').fadeOut(200);
		//$('.cityslide').fadeOut(200);
		$(this).find('i').removeClass("y_topLR_open");
		$(this).find('span').removeClass("y_topLR_span");
		$(this).find('em').removeClass("y_topLR_em");
	})
	// 首页城市——input热门城市切换
	// $(".y_cityA_topL input").click(function(e){
	// 	e.stopPropagation();  
	// 	$(this).parents('.y_cityA_topL').siblings('.y_cityA_top_hide').toggle();
	// })
	/*$("#searchCity").keyup(function(){
		var keywords = $("#searchCity").val();
		keywords = $.trim(keywords);
		if(keywords==''){
			return;
		}

		$.ajax({
			'type':'post',
			'url':url_pre+'/ajax/searchCityName',
			'data':{'_token':'123','keywords':keywords},
			'dataType':'jsonp',
			'jsonp': "callback",
			success:function(data){
				$("#cityQueryList").show();
				$("#searchCityList").html(data);
			},
			error:function(){

			}
		});
	});*/
	//首页顶部右侧栏目导航划入效果
	$(".y_topR ul li").hover(function(){
		$(this).find('a').addClass("y_now");
	})
	$(".y_topR ul li").mouseleave(function(){
		$(this).find('a').removeClass("y_now");
	})
	// 首页搜索选择车系车型
	// $(".y_headerR input").click(function(e){
	//     $("#brandFirst").show();
	//     // $(document).click(function(){
	//     //     $(".brand-bg").hide();
	//     //     $(".carlin").hide();
	//     //     //$brand_name.removeClass('current');
	//     // });
	//     e.stopPropagation();
	// });
	// $("#brandFirst").click(function(e){
	//     e.stopPropagation();
	// });
	//搜索
	var $brand_letter = $('.brand-letters a'); 
	$brand_letter.click(function(){
	var $lettercon = $('#master-indexletters_' + $(this).attr('data-value'));
	$lettercon.length > 0 && $(".brand-name").animate({scrollTop: $lettercon.offset().top - $(".brand-name").offset().top + $(".brand-name").scrollTop()},500)
	});

	var $brand_name = $('#brand-name a'); 
	$brand_name.click(function(){
	    // var $carlin = $('#carlin_' + $(this).attr('data-value'));
	    $('.models_bg').show();
	    // $carlin.show();
	    $(this).addClass('current');
	    // $carlin.siblings('.carlin').hide();
	    $(this).siblings().removeClass('current');
	});
	//
	// $(".y_headerR input").click(function(e){
	//     $("#brandFirst").show();
	//     $(document).click(function(){
	//         $(".brand-bg").hide();
	//         $(".carlin").hide();
	//         $brand_name.removeClass('current');
	//     });
	//     e.stopPropagation();
	// });
	// $("#brandFirst").click(function(e){
	//     e.stopPropagation();
	// });


	// 首页-底部-热门车型 热门车系 友情链接
	Yeffect.hover_hxkWcf(".y_friendship_top a",".y_friendship_cen","y_current");
	// 2017.9.13 添加 
	//右侧悬浮
	$(".l_gotop ul .l_gotopApp").hover(function(){
		$(this).children("i").css("display","none");
		$(".l_hoverAPP").css("display","block");
		$(this).children("span").css("display","block");
	},function(){	
		$(".l_hoverAPP").css("display","none");
		$(this).children("i").css("display","block");
		$(this).children("span").css("display","none");
	});
	$(".l_gotop ul .l_gotopAdivice").hover(function(){
		$(this).css({"background":"#528cf5","border":"none"});
		$(this).children("i").css("display","none");
		$(this).children("span").css("display","block");
	},function(){
		$(this).css({"background":"#fff","border":"1px solid #e9eef4"});
		$(this).children("i").css("display","block");
		$(this).children("span").css("display","none");
	})
	$(".l_gotop ul .l_gotopTo").hover(function(){
		$(this).css({"background":"#528cf5","border":"none"});
		$(this).children("i").css("display","none");
		$(this).children("span").css("display","block");
	},function(){	
		$(this).css({"background":"#fff","border":"1px solid #e9eef4","border-top":"none"});
		$(this).css("background","#fff");
		$(this).children("i").css("display","block");
		$(this).children("span").css("display","none");
	})
	//如果是第一屏  置顶的图标去掉
	$(window).scroll(function(){
		if(document.documentElement.scrollTop >= 1 || window.pageYOffset >= 1 || document.body.scrollTop >= 1){
			$(".l_gotopTo").css("display","block")
		}else{
			$(".l_gotopTo").css("display","none")
		}
	});
	$('.l_gotopTo').click(function() {
	    $('body,html').animate({
	        'scrollTop': '0px'
	    },
    	200)
	});
//右侧悬浮结束
	$('.hk_show').click(function() {
	    $('.lxy_associate').css('display', 'block');
	    $('.y_headerR').attr('id','divselect');
	}) 
if ($("#divselect").length>0 ) {
    window.onload = function() {
	    var box = document.getElementById('divselect');
	    var title = box.getElementsByTagName('input')[0];
	    var menu = box.getElementsByTagName('div')[0];
	    var as = document.getElementById('rSearch');
	    var ass = as.getElementsByTagName('a');
	    var asp = as.getElementsByTagName('p');
	    var index = -1;
	    // alert(ass);
	    function resetA() {
	        for (var i = 0; i < ass.length; i++) {
	            ass[i].style.background = "#fff";
	        }
	    }

	    // function resetM() {
	    //   box.className = '';
	    //   menu.className = '';
	    //   menu.style.display = "none";
	    //   index = -1;
	    //   resetA();
	    // }
	    title.onclick = function(event) {
	        event = event || window.event;
	        event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
	        if (box.className.indexOf("y_headerR")>-1) {
	            // resetM();
	        } else {
	            box.className = "y_headerR fr";
	            // menu.className = "anim_extendDown animated speed_fast";
	            menu.style.display = "block";
	        }
	    }

	    for (var i = 0; i < ass.length; i++) {
	        ass[i].onmouseover = function() {
	            resetA();
	            this.style.background = "#ccc";
	            index = this.getAttribute('selectid') - 1;
	        }
	        ass[i].onclick = function() {
	            resetM();
	            title.innerHTML = this.innerHTML;
	        }
	    }

	    document.onclick = function() {
	        // break; 
	    $('.y_headerR').attr('id','');
	    }

	    document.onkeydown = function(e) {

			if (e.keyCode==38 || e.keyCode == 40 || e.keyCode == 13){

				e = e || window.event;
				if ($("#divselect").length>0) {
					if (e.keyCode == 40) {
						e.preventDefault ? e.preventDefault() : e.returnValue = false;
						index++;
						if (index > ass.length - 1) {
							index = 0;
						}
						resetA();
						$(".hk_show").val("").focus().val(asp[index].innerHTML);
						ass[index].style.backgroundColor = "#ccc";
					} else if (e.keyCode == 38) {
						e.preventDefault ? e.preventDefault() : e.returnValue = false;
						index--;
						if (index < 0) {
							index = ass.length - 1;
						}
						resetA();

						$(".hk_show").val("").focus().val(asp[index].innerHTML);
						ass[index].style.backgroundColor = "#ccc";
					} else if (e.keyCode == 13 && index != -1) {
						e.preventDefault ? e.preventDefault() : e.returnValue = false;
						title.innerHTML = ass[index].innerHTML;
						title.onclick = ass[index].click();
						index = -1;
						resetA();
					}
				}
			}else{
				index = -1;
			}

	    };
	}
}

});
/**
 *
 * 获取登陆信息
 */
//var url_member = "http://member.checheng.com";

var is_log=''; //用来记录用户是否登录

//开始登陆
$.ajax({
	'type': 'get',
	'url': url_member + '/ajax/getUserInfo',
	'data': {'_token': 'getUserInfo'},
	'dataType': 'jsonp',
	'jsonp': "callback",
	'success': function (res) {
        is_log = res.code; //记录用户是否登录
		var loginStr = '';
		(res.data.nick_name == '') ? name=res.data.mobile : name=res.data.nick_name;
		//注册成功
		var url = window.location.href
		if (res.code == 1) {
			loginStr += '<a href="' + url_member + '/info">' + name + '</a>';
			loginStr += '<a href="' + url_member + '/logout">退出</a>';
		} else {
			loginStr += '<a href="' + url_member + '/login?rel='+url+'" title="登录" class="y_login_L">登录</a>';
			loginStr += '<a href="' + url_member + '/register?rel='+url+'" title="注册" class="y_login_R">注册</a>';
		}
		$("#y_login_block").html(loginStr);
	},
	error: function () {

	}
});

//订阅函数
function subscribe(id) {

	if(is_log != '1'){ //只有登录的时候才进行提示
		alert('请登陆后进行订阅')
		window.location.href=url_member+'/login?rel='+window.location.href;
		return false;
	}
	if(confirm("您确定该订阅该作者?")){
		$.ajax({
			'type':'get',
			'url':url_member+'/ajax/sureMsg',
			'data':{'_token':'sureMsg','id':id},
			'dataType':'jsonp',
			'jsonp': "callback",
			'success':function(data){
				//取消成功
				if(data.code == 1){
					alert('订阅成功');
				}else if(data.code == 2){ //用户没有登录
					alert(data.msg) 
					window.location.href=url_member+'/login?rel='+window.location.href; 
				}else{
					alert(data.msg);
				}
			},
			error:function(){

			}
		});
	}
}
//搜索框点击，展示最热车系
$("#indexSear").click(function(e){
	var keywords = $("#indexSear").val();
	if($.trim(keywords) ==''){
		$("#brandFirst").hide();
		$("#brand-type-name").hide();
		//ajax请求
		$.ajax({
			'type':'post',
			'url':url_pre+'/ajax/getHotRelationSearch',
			'data':{'_token':'search'},
			'dataType': "jsonp",
			'jsonp': "callback",
			success:function(res){

					if(res && res.length>0){
						var html = '';
						$.each(res, function(i, item){

							html += '<li>';
							html += '<a selectid="'+(i+1)+'" href="javascript:searchJump(\''+item.href+'\');">';
							//html += '<a  href="'+item.href+'" selectid="'+(i+1)+'">';
							html += '<p>'+item.name+'</p>';
							if(item.pd==1){
								html += '<span>频道&nbsp;&gt;</span>';
							}
							html += '<div class="clear"></div>';
							html += '</a>';
							html += '</li>';
						})
						$("#j_pindao_list").html(html);
						$("#rSearch").show();
					}else{
						$("#rSearch").hide();
					}

			},
			error:function(){
			}
		});

	}else{
		$("#rSearch").hide();
	}

});

//仅显示再售
$("#onlySale").change(function () {
	if($('#onlySale').is(':checked')){

        //选择在售车系时候 判断级别没有在售车系时进行隐藏
        if($("a[name='modelSwitchTab']").is('.hiding')){
            $(".hiding").hide();
		}
		//选中，则隐藏所有停售
		$("a[rel='haltsale']").hide();
		$("li[name='haltsale']").hide();
		$(".lxy_brand_photo").each(function () {
			var count = $(this).find("li").length; //总的元素个数
			var hideCount = $(this).find("li[name='haltsale']").length;
			if(count == hideCount){
				$(this).hide();
			}
            //默认显示全部级别下的数据
            $("div[name='modelTabPage']").hide();
            $('#all-car').show();
            $("#carModelAllTab").addClass("current")
            //给级别下除了全部其他的都去掉class值的current
            $("a[name='modelSwitchTab']").removeClass("current");
		});

	}else{
		//显示所有在售和停售
		$("li[name='haltsale']").show();
		$(".lxy_brand_photo").show();
		$("a[name='modelSwitchTab']").show();
	}
});

//收藏函数
function collection(id,type) {
	//if(confirm("您确定该订阅该作者?")){

	if(is_log != '1'){ //只有登录的时候才进行提示
		alert('请登陆')
		window.location.href=url_member+'/login?rel='+window.location.href;
		return false;
	}
	$.ajax({
		'type':'get',
		'url':url_member+'/ajax/collection',
		'data':{'_token':'sureMsg','id':id,'type':type},
		'dataType':'jsonp',
		'jsonp': "callback",
		'success':function(data){
			//取消成功
			if(data.code == 1){
				alert('收藏成功');
			}else if(data.code == 2){ //用户没有登录
				alert(data.msg)
				window.location.href=url_member+'/login?rel='+window.location.href;
			}else{
				alert(data.msg);
			}
		},
		error:function(){

		}
	});














	// $(".cityslide").hover(function(){//citySelector
	// 	alert(1);
	// 	$(this).find(".y_topL").next('.y_cityA').fadeIn(200);
	// 	$('.cityslide').fadeIn(200);
	// 	//$('.cityslide').fadeIn(200);
	// 	$(this).find(".y_topL").find('i').addClass("y_topLR_open");
	// 	$(this).find(".y_topL").find('span').addClass("y_topLR_span");
	// 	$(this).find(".y_topL").find('em').addClass("y_topLR_em");
	// })
	// $(".cityslide").mouseleave(function(){
	// 	$(this).find(".y_topL").find(".y_cityA").fadeOut(200);
	// 	$('.cityslide').fadeOut(200);
	// 	//$('.cityslide').fadeOut(200);
	// 	$(this).find(".y_topL").find('i').removeClass("y_topLR_open");
	// 	$(this).find(".y_topL").find('span').removeClass("y_topLR_span");
	// 	$(this).find(".y_topL").find('em').removeClass("y_topLR_em");
	// })



}