$(window).load(function(){
    var menuFixed = $('#menuFixed').offset().top; 
    var menuFixedWidth = $("#menuFixed").width();
    var stickyMenu03 = function(){
        var scrollTop = $(document).scrollTop();  
        if (scrollTop > menuFixed) { 
                $('#menuFixed').css({'width':menuFixedWidth, 'position': 'fixed', 'top':0,'z-index':99 });
            } else {
                $('#menuFixed').css({ 'position': 'relative', 'top':0})                
            };
    };      
    $(window).scroll(function(){stickyMenu03();}); 
});   