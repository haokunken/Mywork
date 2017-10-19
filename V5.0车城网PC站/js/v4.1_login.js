$(document).ready(function(){
	// 登入车城网
	$(".y_input_number").keyup(function(){
		if($(".y_input_number").val() != '') {
        	$(this).siblings("em").show();
    	}else{
        	$(this).siblings("em").hide();
    	}

	});
  // 个人中心头部-右侧
  $(".y_B_topRA_hide").hover(function(){
    $(this).next('.y_B_topRA_show').show();
  })
  $(".y_B_topRA").mouseleave(function(){
    $(".y_B_topRA_show").hide();
  })
	// 登入车城网-点击输入框示意选中
	$(".y_loginA_cenA input").click(function(){
		$(this).addClass("y_input_add");
		$(this).parents(".y_loginA_cenA").siblings(".y_loginA_cenB").find(".y_input_number").removeClass("y_input_add");
	});
	$(".y_loginA_cenB input").click(function(){
		$(this).addClass("y_input_add");
		$(this).parents(".y_loginA_cenB").siblings(".y_loginA_cenA").find(".y_input_number").removeClass("y_input_add");
	});
	$(".y_name_login_cen input").click(function(){
		$(this).addClass("y_input_add");
	});
	// 手机注册-点击输入框示意选中
	$(".y_phone").click(function(){
		$(this).addClass("y_input_add");
		$(this).parents(".y_findpassword_cenA").siblings(".y_findpassword_cenB").find("input").removeClass("y_input_add");
		$(this).parents(".y_findpassword_cenA").siblings(".y_findpassword_cenC").find("input").removeClass("y_input_add");
		$(this).parents(".y_findpassword_cenA").siblings(".y_findpassword_cenD").find("input").removeClass("y_input_add");
	});
	$(".y_new_pwd").click(function(){
		$(this).addClass("y_input_add");
		$(this).parents(".y_findpassword_cenC").siblings(".y_findpassword_cenA").find("input").removeClass("y_input_add");
		$(this).parents(".y_findpassword_cenC").siblings(".y_findpassword_cenB").find("input").removeClass("y_input_add");
		$(this).parents(".y_findpassword_cenC").siblings(".y_findpassword_cenD").find("input").removeClass("y_input_add");
	});
	$(".y_confirm_pwd").click(function(){
		$(this).addClass("y_input_add");
		$(this).parents(".y_findpassword_cenD").siblings(".y_findpassword_cenA").find("input").removeClass("y_input_add");
		$(this).parents(".y_findpassword_cenD").siblings(".y_findpassword_cenB").find("input").removeClass("y_input_add");
		$(this).parents(".y_findpassword_cenD").siblings(".y_findpassword_cenC").find("input").removeClass("y_input_add");
	});
	$(".y_yzm").click(function(){
		$(this).addClass("y_input_add");
		$(this).parents(".y_findpassword_cenB").siblings(".y_findpassword_cenA").find("input").removeClass("y_input_add");
		$(this).parents(".y_findpassword_cenB").siblings(".y_findpassword_cenD").find("input").removeClass("y_input_add");
		$(this).parents(".y_findpassword_cenB").siblings(".y_findpassword_cenC").find("input").removeClass("y_input_add");
	});
	// 获取验证码倒计时
	// var stinxasss;
 //    var curTImr = 60;
 //    $(".l_yzm_con,.y_yzm_con,.l_person_newphone_yzm").click(function() {
 //      if ($(this).attr("endab") == "false") {
 //        return false;
 //      }
 //      $(".l_yzm_con,.y_yzm_con,.l_person_newphone_yzm").text( "" + curTImr + "S后重新获取");
 //      $(".l_yzm_con,.y_yzm_con,.l_person_newphone_yzm").addClass("l_yzm_color");
 //      curTImr = 60;
 //      $(this).attr("endab", "false");

 //      stinxasss = setInterval(function() {
 //        curTImr--;
 //        $(".l_yzm_con,.y_yzm_con,.l_person_newphone_yzm").text( "" + curTImr + "S后重新获取");
 //        $(".l_yzm_con,.y_yzm_con,.l_person_newphone_yzm").addClass("l_yzm_color");
 //        if (curTImr <= 0) {
 //          $(".l_yzm_con,.y_yzm_con,.l_person_newphone_yzm").text( "获取验证码");
 //          clearInterval(stinxasss);
 //          $(".l_yzm_con,.y_yzm_con,.l_person_newphone_yzm").attr("endab", "true");
 //          $(".l_yzm_con,.y_yzm_con,.l_person_newphone_yzm").removeClass("l_yzm_color");
 //        }

 //      }, 1000)
 //    })  

    //基本信息
    $(".l_person_information_tableA a").click(function(){
    		$(".l_person_information_tableA input").removeAttr("disabled");
    		$(".l_person_information_tableA input").addClass("l_person_add");
    });
    $(".l_person_information_tableB a").click(function(){   		
    		$(".l_person_information_tableB input").removeAttr("disabled");
    		$(".l_person_information_tableB input").addClass("l_person_add");
    });
    $(".l_person_information_tableD a").click(function(){    		
    		$(".l_person_information_tableD input").removeAttr("disabled");
    		$(".l_person_information_tableD input").addClass("l_person_add");
    });

  //找回密码--点击输入框示意选中
  $(".l_phone").click(function(){
    $(this).addClass("l_input_add");
    $(this).parents(".l_findpassword_cenA").siblings(".l_findpassword_cenB").find("input").removeClass("l_input_add");
    $(this).parents(".l_findpassword_cenA").siblings(".l_findpassword_cenC").find("input").removeClass("l_input_add");
    $(this).parents(".l_findpassword_cenA").siblings(".l_findpassword_cenD").find("input").removeClass("l_input_add");

  });

  $(".l_yzm").click(function(){
    $(this).addClass("l_input_add");
    $(this).parents(".l_findpassword_cenB").siblings(".l_findpassword_cenA").find("input").removeClass("l_input_add");
    $(this).parents(".l_findpassword_cenB").siblings(".l_findpassword_cenC").find("input").removeClass("l_input_add");
    $(this).parents(".l_findpassword_cenB").siblings(".l_findpassword_cenD").find("input").removeClass("l_input_add");

  }); 
  $(".l_new_pwd").click(function(){
    $(this).addClass("l_input_add");
    $(this).parents(".l_findpassword_cenC").siblings(".l_findpassword_cenA").find("input").removeClass("l_input_add");
    $(this).parents(".l_findpassword_cenC").siblings(".l_findpassword_cenB").find("input").removeClass("l_input_add");
    $(this).parents(".l_findpassword_cenC").siblings(".l_findpassword_cenD").find("input").removeClass("l_input_add");
  }); 

  $(".l_new_npwd").click(function(){
    $(this).addClass("l_input_add");
    $(this).parents(".l_findpassword_cenD").siblings(".l_findpassword_cenA").find("input").removeClass("l_input_add");
    $(this).parents(".l_findpassword_cenD").siblings(".l_findpassword_cenB").find("input").removeClass("l_input_add");
    $(this).parents(".l_findpassword_cenD").siblings(".l_findpassword_cenC").find("input").removeClass("l_input_add");
  }); 
  // 个人中心-我的收藏-车系
  function lastmargin(obj){
    var length = $(obj).length;
      if (length>=4) {
          for (var i=3; i<=length;i++) {
              if ((i-3)%4 == 0) {
                  $(obj).eq(i).css("margin-right","0px");
              }
          }
    }
  }
  lastmargin(".y_collect_chexi ul li");
  // 个人中心-我的收藏-车系-加载更多
  $(".y_more a").click(function(){       
    $(".y_collect_chexi ul .y_none").show();
  });

      
  $(".hk_level .hk_selected").click(function(){
     $(this).toggleClass("hk_selected_none");
    })


  // $(".hk_shangchuan").mouseover(function() {
  //    $(".hk_portrait_click").attr('src','images/hk_14.png');
  //    $(".hk_add_images").css('display','block');
  // })
  // $(".hk_shangchuan").mouseout(function() {
  //    $(".hk_portrait_click").attr('src','images/hk_08.png');
  //    $(".hk_add_images").css('display','none');
  // })
  // $(".hk_shangchuan1").mouseover(function() {
  //    $(".hk_id_img_click").attr('src','images/hk_13.png');
  //    $(".hk_add_images1").css('display','block');
  // })
  // $(".hk_shangchuan1").mouseout(function() {
  //    $(".hk_id_img_click").attr('src','images/hk_09.png');
  //    $(".hk_add_images1").css('display','none');
  // })
  // $(".hk_shangchuan2").mouseover(function() {
  //    $(".hk_sczhengjian_click").attr('src','images/hk_17.png');
  //    $(".hk_add_images2").css('display','block');
  // })
  // $(".hk_shangchuan2").mouseout(function() {
  //    $(".hk_sczhengjian_click").attr('src','images/hk_16.png');
  //    $(".hk_add_images2").css('display','none');
  // })
  // hover img图片切换
  function showCutdown() {
      // 获取验证码倒计时
      var stinxasss;
      var curTImr = 60;
      $("#getVcode").text("" + curTImr + "S 后重新发送");
      $("#getVcode").addClass("hk_ing");
      curTImr = 60;
      $(this).attr("endab", "false");

      stinxasss = setInterval(function () {
          curTImr--;
          $("#getVcode").text("" + curTImr + "S 后重新发送");
          $("#getVcode").addClass("hk_ing");

          return false;
          if (curTImr <= 0) {

              $("#getVcode").text("重新取验证码");
              clearInterval(stinxasss);
              $("#getVcode").attr("endab", "true");
              $("#getVcode").removeClass("hk_ing");
          }

      }, 1000);
  } 
  // $("#getVcode").click(function(){ 
  //         showCutdown(); 
  // });//测试倒计时功能

    // $("#getVcode").click(function () {
    //     if($(this).hasClass('hk_ing')){
    //         return false
    //     }





// var stinxasss;
//     var curTImr = 60;
//     $(".y_yzm_con").click(function() {
//       if ($(this).attr("endab") == "false") {
//         return false;
//       }
//       $(".y_yzm_con").text( "" + curTImr + "S后重新获取");
//       $(".y_yzm_con").addClass("hk_ing");
//       curTImr = 60;
//       $(this).attr("endab", "false");

//       stinxasss = setInterval(function() {
//         curTImr--;
//         $(".y_yzm_con").text( "" + curTImr + "S后重新获取");
//         $(".y_yzm_con").addClass("hk_ing");
//         if (curTImr <= 0) {
//           $(".y_yzm_con").text( "获取验证码");
//           clearInterval(stinxasss);
//           $(".y_yzm_con").attr("endab", "true");
//           $(".y_yzm_con").removeClass("hk_ing");
//         }

//       }, 1000)
//     })  























});//ready结束标签
// 自媒体管理后台个人和机构字数限制
function checkLength(which) {
  var maxChars = 15;
  if (which.value.length > maxChars) {
      // 超过限制的字数了就将 文本框中的内容按规定的字数 截取
      which.value = which.value.substring(0, maxChars);
      return false;
  } else {
      var curr = which.value.length + 15 - maxChars; //减去 当前输入的
      document.getElementById("sy").innerHTML = curr.toString();
      return true;
  }
}
// 自媒体 
function zmtintroduce(which) {
  var maxChars = 60;
  if (which.value.length > maxChars) {
      // 超过限制的字数了就将 文本框中的内容按规定的字数 截取
      which.value = which.value.substring(0, maxChars);
      return false;
  } else {
      var curr = which.value.length + 60 - maxChars; //减去 当前输入的
      document.getElementById("sy1").innerHTML = curr.toString();
      return true;
  }
}
// 自媒体简介
function hk_name_zishu(which) {
  var maxChars = 15;
  if (which.value.length > maxChars) {
      // 超过限制的字数了就将 文本框中的内容按规定的字数 截取
      which.value = which.value.substring(0, maxChars);
      return false;
  } else {
      var curr = which.value.length + 15 - maxChars; //减去 当前输入的
      document.getElementById("sy2").innerHTML = curr.toString();
      return true;
  }
}
// 姓名
function hk_zuzhi_zishu(which) {
  var maxChars = 15;
  if (which.value.length > maxChars) {
      // 超过限制的字数了就将 文本框中的内容按规定的字数 截取
      which.value = which.value.substring(0, maxChars);
      return false;
  } else {
      var curr = which.value.length + 15 - maxChars; //减去 当前输入的
      document.getElementById("sy5").innerHTML = curr.toString();
      return true;
  }
}
// 组织名称
function hk_daima_zishu(which) {
  var maxChars = 25;
  if (which.value.length > maxChars) {
      // 超过限制的字数了就将 文本框中的内容按规定的字数 截取
      which.value = which.value.substring(0, maxChars);
      return false;
  } else {
      var curr = which.value.length + 25 - maxChars; //减去 当前输入的
      document.getElementById("sy6").innerHTML = curr.toString();
      return true;
  }
}
// 机构代码
function sfzID(which) {
  var maxChars = 18;
  if (which.value.length > maxChars) {
      // 超过限制的字数了就将 文本框中的内容按规定的字数 截取
      which.value = which.value.substring(0, maxChars);
      return false;
  } else {
      var curr = which.value.length + 18 - maxChars; //减去 当前输入的
      document.getElementById("sy3").innerHTML = curr.toString();
      return true;
  }
}
// 身份证号码
function telephone(which) {
  var maxChars = 11;
  if (which.value.length > maxChars) {
      // 超过限制的字数了就将 文本框中的内容按规定的字数 截取
      which.value = which.value.substring(0, maxChars);
      return false;
  } else {
      var curr = which.value.length + 11 - maxChars; //减去 当前输入的
      document.getElementById("sy4").innerHTML = curr.toString();
      return true;
  }
}
// 手机
