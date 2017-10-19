$(function(){
	 
	/*console.log($(".j_xmA1_td2 span").eq(0).text())
	console.log($(".j_xmA2_td2 input").eq(0).val())
	console.log($(".j_xmA3_td2 input").eq(0).val())
	console.log($('.j_xmA1_td2 span').eq(0).text())
	console.log(parseFloat($(".j_xmA1_td2 span").eq(0).text())+parseFloat($(".j_xmA2_td2 input").eq(0).val())+parseFloat($(".j_xmA3_td2 input").eq(0).val())+parseFloat($('.j_xmA1_td2 span').eq(0).text()))
	*/



function NeedPrice(price){

    this.purchase = parseInt(price/(1+0.17) * 0.1);//购置税
    this.license = 500;//上牌费

    this.useTag = {//车船使用费
        1:300,
        1.6:420,
        2.0:480,
        2.5:900,
        3.0:1920,
        4.0:3480,
        4.1:5280
    };

    this.force = {//交强险
        5 : 950,
        6 : 1100
    };


}

function Insurance(price,index,zws){
    var other1 = {//第三者责任险
        5:516,
        10:746,
        20:924,
        50:1252,
        100:1630
    };
    var order_six = { //第三者责任险6座以上
        5:478,
        10:674,
        20:821,
        50:1094,
        100:1425
    };
    if(zws > 5 ) {
        this.other = order_six[index];
    } else {
        this.other = other1[index];
    }
    this.carDestroy1 = parseInt(459+price*0.01088);//车辆损失险
    this.carDestroy2 = parseInt(550+price*0.01088);//车辆损失险 6座以上
    if(zws > 5 ) {
        this.carDestroy = this.carDestroy2;
    } else {
        this.carDestroy = this.carDestroy1;
    }
    this.carSteal1 = parseInt(120+price*0.0049);//全车盗抢险
    this.carSteal2 = parseInt(140+price*0.0044);//全车盗抢险 6座以上
    if(zws > 5 ) {
        this.carSteal = this.carSteal2;
    } else {
        this.carSteal = this.carSteal1;
    }
    this.carGlass = { //玻璃
        import: parseInt(price*0.0025),
        domestic: parseInt(price*0.0015)
    };
    this.fire = parseInt(price*0.0015);//自燃险
    this.ext = parseInt((this.other + this.carDestroy) * 0.2);//不计免赔特约险
    this.noDuty = parseInt(this.other * 0.2);//无过责任险
    this.carScratch = {//车身划痕险
        2000: 400,
        5000: 570,
        10000: 760,
        20000: 1140
    };
}
var pri = $('.j_contC_btm input').val()

var aa = new NeedPrice(pri)
//项目二
$('.j_xmA1_td2').eq(2).html(aa.purchase+ ' ' + '<span>元</span>')  // 购置税
$('.j_xmA2_td2 input').eq(1).val(aa.license)//上牌费



//项目三
var bb = new Insurance(pri)
$('.j_xmB1_radio input').click(function(){
   var prii = parseInt($('.j_xmB1_radio input:radio:checked').siblings('span').text())
   console.log(prii)
})

var lcjg = $('.j_luochejg').val();



/*$('.j_xmA3_td3_radio ').unbind('click').click(function(e) {
    e.stopPropagation()
     console.log($(this))
     $("#chechuan").val($(this).attr('data-price'));
     
     alert(12)
     $(this).attr('aaaa','1111')
    //$(this).parent().find('span');
     var qian= $(this).siblings('span').html();
    // $('j_money').val()=qian * lcjg
    //return false
});*/
$('.j_money').val(lcjg)

})
$('.aaa').click(function(event) {
    alert(1)
});