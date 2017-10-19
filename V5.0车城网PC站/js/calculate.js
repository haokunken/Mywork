/**
 * Created by Administrator on 2016/11/23.
 */

function NeedPrice(price){

    this.purchase = parseInt(price/(1+0.17) * 0.1);
    this.license = 500;

    this.useTag = {
        1:300,
        1.6:420,
        2.0:480,
        2.5:900,
        3.0:1920,
        4.0:3480,
        4.1:5280
    };

    this.force = {
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

$.fn.changeFormat = function(value){
    if(!isNaN(parseInt(value))) {
        $(this).html($(this).formatGo(parseInt(value)));
    }
};

$.fn.setPrice = function (value) {
    if (!isNaN(parseInt(value))) {
        $(this).attr('value',$(this).formatGo(parseInt(value)));
    }
};

$.fn.getPrice = function(){
    var value = $(this).val();
    return $(this).commafyback(value);
};

$.fn.commafyback = function(num)
{
    var x = num.split(',');
    return parseInt(x.join(""));
};

$.fn.formatGo = function  (num) {
    return (num+'').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
};
