$(window).load(function(){
    var showEwm = $('#y_fixed').offset().top; 
    var showEwmWidth = $("#y_fixed").width();
    var showheight = $("#y_fixed").height();
    var showLeft = $('#leftHeight').height();
    // alert(showLeft);
    var showRight = $('#rightHeight').height();

    var stickyMenu02 = function(){
        var scrollTop = $(document).scrollTop();  
        var scrollheight = $(document).height(); 
        var leftHeightoffset =$('#leftHeight').offset().top; 
        if (showLeft < showRight){
                $('#y_fixed').css({ 'position': 'relative', 'top':0}) 
            };
        if (scrollTop > showEwm&&showLeft > showRight) { 
                $('#y_fixed').css({'width':showEwmWidth, 'position': 'fixed', 'top':0 });

                if(scrollTop + showheight >leftHeightoffset+showLeft){
                    $('#y_fixed').css('top',leftHeightoffset+showLeft-scrollTop-showheight+'px');
                };

            } else {
                $('#y_fixed').css({ 'position': 'relative', 'top':0})                
            };
    };      
    $(window).scroll(function(){stickyMenu02();}); 
});
