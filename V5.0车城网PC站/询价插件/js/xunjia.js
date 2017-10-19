$('.xj-closebtn').click(function(){
    $('.ina_pricebox').css("display","none");
    $('.ina_ina_priceboxbtn').css('display','block');
   
});

$('.ina_ina_priceboxbtn').click(function(){
    $('.ina_pricebox').css("display","block");
    $(this).hide();
});