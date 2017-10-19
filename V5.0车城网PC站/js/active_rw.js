   $(document).ready(function() {
        Yeffect.fullAnimatbanner(".g_banner ul", ".g_banner ul li", ".g_bankz a", ".L", ".R", "g_bkzdqys", 5000, 500, "easeInQuart");
        $(".hk_cxqh a").click(function() {
          var index = $(".hk_cxqh a").index($(this));
          $(".hk_cxqh a i").removeClass("hk_xhx");
          $(".hk_cxqh a").removeClass("hk_txt");
          $(this).find("i").addClass("hk_xhx");
          $(this).addClass("hk_txt");
          $(".hk_02").hide().eq(index).show();
        });
        $(".hk_cxqh1 a").click(function() {
          var index = $(".hk_cxqh1 a").index($(this));
          $(".hk_cxqh1 a i").removeClass("hk_xhx");
          $(".hk_cxqh1 a").removeClass("hk_txt");
          $(this).find("i").addClass("hk_xhx");
          $(this).addClass("hk_txt");
          $(".configure_d").hide().eq(index).show();
        });
});
   /*SuperSlide图片切换*/
        // jQuery(".focusBox").slide({ mainCell:".pic",effect:"fold", autoPlay:true, delayTime:600, trigger:"click"});