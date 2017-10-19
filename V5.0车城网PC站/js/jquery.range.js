/*jshint multistr:true, curly: false */
/*global jQuery:false, define: false */
/**
 * jRange - Awesome range control
 *
 * Written by
 * ----------
 * Nitin Hayaran (nitinhayaran@gmail.com)
 *
 * Licensed under the MIT (MIT-LICENSE.txt).
 *
 * @author Nitin Hayaran
 * @version 0.1-RELEASE
 *
 * Dependencies
 * ------------
 * jQuery (http://jquery.com)
 *
 **/
(function($, window, document, undefined) {
	'use strict';

	var jRange = function() {
		return this.init.apply(this, arguments);
	};
	jRange.prototype = {
		defaults: {
			onstatechange: function() {},
			isRange: false,
			showLabels: true,
			showScale: true,
			step: 1,
			format: '%s',
			theme: 'theme-green',
			width: 300,
			disable: false
		},
		template: '<div class="slider-container">\
			<div class="back-bar">\
                <div class="selected-bar"></div>\
                <div class="pointer low"></div><div class="pointer-label pointer-label_left"></div>\
                <div class="pointer high"></div><div class="pointer-label pointer-label_right"></div>\
                <div class="clickable-dummy"></div>\
                <div class="irs-single"><span>7万</span> <font>—</font> <span>15万</span></div>\
            </div>\
            <div class="scale"></div>\
		</div>',
		init: function(node, options) {
			this.options       = $.extend({}, this.defaults, options);
			this.inputNode     = $(node);
			this.options.value = this.inputNode.val() || (this.options.isRange ? this.options.from + ',' + this.options.from : this.options.from);
			this.domNode       = $(this.template);
			this.domNode.addClass(this.options.theme);
			this.inputNode.after(this.domNode);
			this.domNode.on('change', this.onChange);
			this.pointers      = $('.pointer', this.domNode);
			this.lowPointer    = this.pointers.first();
			this.highPointer   = this.pointers.last();
			this.labels        = $('.pointer-label', this.domNode);
			this.lowLabel      = this.labels.first();
			this.highLabel     = this.labels.last();
			this.scale         = $('.scale', this.domNode);
			this.bar           = $('.selected-bar', this.domNode);
			this.clickableBar  = this.domNode.find('.clickable-dummy');
			this.interval      = this.options.to - this.options.from;
			this.order=$('.irs-single'); // created by wml
			this.render();
		},
		render: function() {
			// Check if inputNode is visible, and have some width, so that we can set slider width accordingly.
			if (this.inputNode.width() === 0 && !this.options.width) {
				//console.log('jRange : no width found, returning');
				return;
			} else {
				this.domNode.width(this.options.width || this.inputNode.width());
				this.inputNode.hide();
			}

			if (this.isSingle()) {
				this.lowPointer.hide();
				this.lowLabel.hide();
			}
			if (!this.options.showLabels) {
				this.labels.hide();
			}
			this.attachEvents();
			if (this.options.showScale) {
				this.renderScale();
			}
			this.setValue(this.options.value);
		},
		isSingle: function() {
			if (typeof(this.options.value) === 'number') {
				return true;
			}
			return (this.options.value.indexOf(',') !== -1 || this.options.isRange) ?
				false : true;
		},
		attachEvents: function() {
			this.clickableBar.click($.proxy(this.barClicked, this));
			this.pointers.on('mousedown touchstart', $.proxy(this.onDragStart, this));
			this.pointers.bind('dragstart', function(event) {
				event.preventDefault();
			});
		},
		onDragStart: function(e) {
			if ( this.options.disable || (e.type === 'mousedown' && e.which !== 1)) {
				return;
			}
			e.stopPropagation();
			e.preventDefault();
			var pointer = $(e.target);
			this.pointers.removeClass('last-active');
			pointer.addClass('focused last-active');
			this[(pointer.hasClass('low') ? 'low' : 'high') + 'Label'].addClass('focused');
			$(document).on('mousemove.slider touchmove.slider', $.proxy(this.onDrag, this, pointer));
			$(document).on('mouseup.slider touchend.slider touchcancel.slider', $.proxy(this.onDragEnd, this));
		},
		onDrag: function(pointer, e) {
			e.stopPropagation();
			e.preventDefault();

			if (e.originalEvent.touches && e.originalEvent.touches.length) {
				e = e.originalEvent.touches[0];
			} else if (e.originalEvent.changedTouches && e.originalEvent.changedTouches.length) {
				e = e.originalEvent.changedTouches[0];
			}

			var position = e.clientX - this.domNode.offset().left;
			this.domNode.trigger('change', [this, pointer, position]);


			//Add  js 2017-07-31
			var va = $(".range-slider").val();
			var reg = va.split(',');
			// 若最大值与最小值相同时取出一个值
			 this.domNode.find('.irs-single').html('<span>'+reg[0]+'万</span> <font>-</font> <span>'+reg[1]+'万</span>');
			if(reg[0] == reg[1]){
				this.domNode.find('.irs-single').html('<span>'+reg[0]+'万</span> ');
			}
			//最小值大于等于10，最大值大于等于100，显示10万以上
			if(reg[0] >= 0 && reg[1] >= 101){
				this.domNode.find('.irs-single').html('<span>'+reg[0]+'万以上</span> ');
			}			
			//最小值等于0，最大值不等于0，显示max万以下
			if(reg[0] == 0 && reg[1] !=0){
				this.domNode.find('.irs-single').html('<span>'+reg[1]+'万以下</span> ');
			}
			//最小值等于0，最大值等于101，显示全部价格
			if(reg[0] == 0 && reg[1] == 101){
				this.domNode.find('.irs-single').html('<span>全部价格</span> ');
			}
			//最小值等于0，最大值等于0，显示2万以下
			if(reg[0] == 0 && reg[1] == 0){
				this.domNode.find('.irs-single').html('<span>'+2+'万以下</span> ');
			}
			//最小值大于100，最大值大于100，显示100万以上
			if(reg[0] > 100 && reg[1] > 100){
				this.domNode.find('.irs-single').html('<span>'+100+'万以上</span> ');
			}
			//最小值小于2，最大值大于2，显示2万以下
			if(reg[0] < 2 && reg[1] < 2){
				this.domNode.find('.irs-single').html('<span>'+2+'万以下</span> ');
			}
			//最小值等于100，最大值等于101，显示100万以上---->  css
			if(reg[0] == 100 && reg[1] == 101){
				$(".irs-single").css("left","775px")
			}

		},
		onDragEnd: function(e) {
			this.pointers.removeClass('focused');
			this.labels.removeClass('focused');
			$(document).off('.slider');
			var va = $(".range-slider").val();
			var reg = va.split(',');
			$.ajax({
				'type':'post',
				'url':url_pre+'/ajax/getKoubeiRank',
				'data':{'_token':'123','min_price':reg[0],'max_price':reg[1]},
				'dataType':'jsonp',
				'jsonp': "callback",
				success:function(data){
					$.each(data, function(index,val) {
						//console.log('index='+index);

						var html = '';
						html +='<ul>';
						if(val.length > 0){

							$.each(val,function (k, v) {
								html +='<li>';
								html +='<img class="l_number" src="'+static_server+'/common/car/images/v3.1_koubei/'+(k+1)+'.png"/>';
								html +=' <a href="'+ site_koubei +'/m'+ v.car_brand_son_type_id +'"  target="_blank"><img src="'+v.pic_url+'" alt="'+v.car_brand_son_type_name+'" title="'+v.car_brand_son_type_name+'"/></a>';
								html +='<p class="l_satisfiedChexingListsName"><a href="'+ site_koubei +'/m'+ v.car_brand_son_type_id +'" title="'+v.car_brand_son_type_name+'">'+v.car_brand_type_name + ' '+v.car_brand_son_type_name+'</a></p>';
								html +='<p>厂商指导价：<span class="l_price">'+v.factory_price+'万</span></p>';
								html +='<p class="l_stars"><span><i style="width: '+v.ratio+'%;"></i></span>'+v.average+'</p>';
								html +='<p class="l_average">(共<span>'+v.kb_count+'</span>人平均值)</p>';
								html +='<a href="'+url_pre+'/dealer/order-'+ v.car_brand_type_id +'?spec='+ v.car_brand_son_type_id +'&clue_id=127" class="l_floorPrice" target="_blank">询底价</a>';

								html +='</li>';
								//console.log(v.car_brand_son_type_id);
							});

						}else{
							html +='<div style="height: 100px; text-align: center;padding-top: 50px;">抱歉，该排行暂无车辆入选，您可以看看其它榜单或换个价格看看。</div>';
						}

						html +='<div class="clear_float"></div>';
						html +='</ul>';
						$(".l_satisfiedChexingLists").eq(index).html(html);
					});
				},
				error:function(){

				}
			});
		},
		barClicked: function(e) {
			if(this.options.disable) return;
			//2点重合临界值判断 created by wml
			var clickBarLeft=this.clickableBar.offset().left;
			var pointerLeft=this.pointers.first().offset().left;
			var pageX=e.pageX;
			var x = pageX - clickBarLeft;
			if (this.isSingle())
				this.setPosition(this.pointers.last(), x, true, true);
			else {
				var a= Math.abs(parseInt(this.pointers.first().css('left'), 10) - x + this.pointers.first().width() / 2);
				var b=Math.abs(parseInt(this.pointers.last().css('left'), 10) - x + this.pointers.first().width() / 2) ;
				//2个值相同时,判断点击的时候 是左还是右 created by wml
				if(a==b){
					var pointer=pageX<pointerLeft?this.pointers.first() : this.pointers.last();
				}else{
					var pointer = a<b ?this.pointers.first() : this.pointers.last();
				}
				this.setPosition(pointer, x, true, true);
			}
			var va = $(".range-slider").val();
			var reg = va.split(',');
			//console.log(reg[0]);
			//console.log(reg[1]);
			//console.log(this.domNode.find('.irs-single').html('<span>'+reg[0]+'万</span> <font>-</font> <span>'+reg[1]+'万</span>'));//.append("");
			this.domNode.find('.irs-single').html('<span>'+reg[0]+'万</span> <font>-</font> <span>'+reg[1]+'万</span>');
			if(reg[0] == reg[1]){
				this.domNode.find('.irs-single').html('<span>'+reg[0]+'万</span> ');
			}
			//最小值大于等于10，最大值大于等于100，显示10万以上
			if(reg[0] >= 0 && reg[1] >= 101){
				this.domNode.find('.irs-single').html('<span>'+reg[0]+'万以上</span> ');
			}			
			//最小值等于0，最大值不等于0，显示max万以下
			if(reg[0] == 0 && reg[1] !=0){
				this.domNode.find('.irs-single').html('<span>'+reg[1]+'万以下</span> ');
			}
			//最小值等于0，最大值等于101，显示全部价格
			if(reg[0] == 0 && reg[1] == 101){
				this.domNode.find('.irs-single').html('<span>全部价格</span> ');
			}
			//最小值等于0，最大值等于0，显示2万以下
			if(reg[0] == 0 && reg[1] == 0){
				this.domNode.find('.irs-single').html('<span>'+2+'万以下</span> ');
			}
			//最小值大于100，最大值大于100，显示100万以上
			if(reg[0] > 100 && reg[1] > 100){
				this.domNode.find('.irs-single').html('<span>'+100+'万以上</span> ');
			}
			//最小值小于2，最大值大于2，显示2万以下
			if(reg[0] < 2 && reg[1] < 2){
				this.domNode.find('.irs-single').html('<span>'+2+'万以下</span> ');
			}
			//最小值等于100，最大值等于101，显示100万以上---->  css
			if(reg[0] == 100 && reg[1] == 101){
				$(".irs-single").css("left","775px")
			}

			$.ajax({
				'type':'post',
				'url':url_pre+'/ajax/getKoubeiRank',
				'data':{'_token':'123','min_price':reg[0],'max_price':reg[1]},
				'dataType':'jsonp',
				'jsonp': "callback",
				success:function(data){
					$.each(data, function(index,val) {
						//console.log('index='+index);

						var html = '';
						html +='<ul>';
						if(val.length > 0){

							$.each(val,function (k, v) {
								html +='<li>';
								html +='<img class="l_number" src="'+static_server+'/common/car/images/v3.1_koubei/'+(k+1)+'.png"/>';
								html +=' <a href="'+ site_koubei +'/m'+ v.car_brand_son_type_id +'"  target="_blank"><img src="'+v.pic_url+'" alt="'+v.car_brand_son_type_name+'" title="'+v.car_brand_son_type_name+'"/></a>';
								html +='<p class="l_satisfiedChexingListsName"><a href="'+ site_koubei +'/m'+ v.car_brand_son_type_id +'" title="'+v.car_brand_son_type_name+'">'+v.car_brand_type_name + ' '+v.car_brand_son_type_name+'</a></p>';
								html +='<p>厂商指导价：<span class="l_price">'+v.factory_price+'万</span></p>';
								html +='<p class="l_stars"><span><i style="width: '+v.ratio+'%;"></i></span>'+v.average+'</p>';
								html +='<p class="l_average">(共<span>'+v.kb_count+'</span>人平均值)</p>';
								html +='<a href="'+url_pre+'/dealer/order-'+ v.car_brand_type_id +'?spec='+ v.car_brand_son_type_id +'&clue_id=127" class="l_floorPrice" target="_blank">询底价</a>';

								html +='</li>';
								//console.log(v.car_brand_son_type_id);
							});

						}else{
							html +='<div style="height: 100px; text-align: center;padding-top: 50px;">抱歉，该排行暂无车辆入选，您可以看看其它榜单或换个价格看看。</div>';
						}
						html +='<div class="clear_float"></div>';
						html +='</ul>';
						$(".l_satisfiedChexingLists").eq(index).html(html);
					});
				},
				error:function(){

				}
			});
		},
		onChange: function(e, self, pointer, position) {
			var min, max;
			if (self.isSingle()) {
				min = 0;
				max = self.domNode.width();
			} else {
				min = pointer.hasClass('high') ? self.lowPointer.position().left + self.lowPointer.width() / 2 : 0;
				max = pointer.hasClass('low') ? self.highPointer.position().left + self.highPointer.width() / 2 : self.domNode.width();
			}
			var value = Math.min(Math.max(position, min), max);
			self.setPosition(pointer, value, true);

		},
		setPosition: function(pointer, position, isPx, animate) {
			var leftPos,
				lowPos = this.lowPointer.position().left,
				highPos = this.highPointer.position().left,
				circleWidth = this.highPointer.width() / 2;

				//console.log(highPos+' '+lowPos)
			if (!isPx) {
				position = this.prcToPx(position);
			}
			if (pointer[0] === this.highPointer[0]) {
				highPos = Math.round(position - circleWidth);
			} else {
				lowPos = Math.round(position - circleWidth);
			}
			pointer[animate ? 'animate' : 'css']({
				'left': Math.round(position - circleWidth)
			});
			if (this.isSingle()) {
				leftPos = 0;
			} else {
				leftPos = lowPos + circleWidth;
			}
			this.bar[animate ? 'animate' : 'css']({
				'width': Math.round(highPos + circleWidth - leftPos),
				'left': leftPos
			});
			// created by wml
			var orderLeft=highPos/2-$('.irs-single').width()/2+15+lowPos/2;	
				window.orderLeft=orderLeft;
			if(!($('.high').hasClass('focused')||$('.low').hasClass('focused'))){				
				this.order[animate ? 'animate' : 'css']({
				'left': orderLeft
			});
				this.showPointerValue(pointer, position, animate);
			}else{
				this.showPointerValue(pointer, position, animate);
			}
			this.isReadonly();	
			
		},
		// will be called from outside
		setValue: function(value) {
			var values = value.toString().split(',');
			this.options.value = value;
			var prc = this.valuesToPrc(values.length === 2 ? values : [0, values[0]]);
			if (this.isSingle()) {
				this.setPosition(this.highPointer, prc[1]);
			} else {
				this.setPosition(this.lowPointer, prc[0]);
				this.setPosition(this.highPointer, prc[1]);
			}
		},
		renderScale: function() {
			var s = this.options.scale || [this.options.from, this.options.to];
			var prc = Math.round((100 / (s.length - 1)) * 10) / 10;
			var str = '';
			for (var i = 0; i < s.length; i++) {
				str += '<span style="left: ' + i * prc + '%">' + (s[i] != '|' ? '<ins>' + s[i] + '</ins>' : '') + '</span>';
			}
			this.scale.html(str);

			$('ins', this.scale).each(function() {
				$(this).css({
					marginLeft: -$(this).outerWidth() / 2
				});
			});
		},
		getBarWidth: function() {
			var values = this.options.value.split(',');
			if (values.length > 1) {
				return parseInt(values[1], 10) - parseInt(values[0], 10);
			} else {
				return parseInt(values[0], 10);
			}
		},
		showPointerValue: function(pointer, position, animate) {
			var label = $('.pointer-label', this.domNode)[pointer.hasClass('low') ? 'first' : 'last']();
			var order = this.order;// created by wml
			var text;
			var value = this.positionToValue(position);
			if ($.isFunction(this.options.format)) {
				var type = this.isSingle() ? undefined : (pointer.hasClass('low') ? 'low' : 'high');
				text = this.options.format(value, type);
			} else {
				text = this.options.format.replace('%s', value);
			}

			var width = label.html(text).width(),
				left = position - width / 2;
			left = Math.min(Math.max(left, 0), this.options.width - width);
			label[animate ? 'animate' : 'css']({
				left: left
			});
			// created by wml
			if($('.high').hasClass('focused')||$('.low').hasClass('focused')){
				order[animate ? 'animate' : 'css']({
					left: orderLeft
				});
			}

			
			this.setInputValue(pointer, value);
		},
		valuesToPrc: function(values) {
			var lowPrc = ((values[0] - this.options.from) * 100 / this.interval),
				highPrc = ((values[1] - this.options.from) * 100 / this.interval);
			return [lowPrc, highPrc];
		},
		prcToPx: function(prc) {
			return (this.domNode.width() * prc) / 100;
		},
		positionToValue: function(pos) {
			var value = (pos / this.domNode.width()) * this.interval;
			value = value + this.options.from;
			return Math.round(value / this.options.step) * this.options.step;
		},
		setInputValue: function(pointer, v) {
			// if(!isChanged) return;
			if (this.isSingle()) {
				this.options.value = v.toString();
			} else {
				var values = this.options.value.split(',');
				if (pointer.hasClass('low')) {
					this.options.value = v + ',' + values[1];
				} else {
					this.options.value = values[0] + ',' + v;
				}
			}
			if (this.inputNode.val() !== this.options.value) {
				this.inputNode.val(this.options.value);
				this.options.onstatechange.call(this, this.options.value);
			}
		},
		getValue: function() {
			return this.options.value;
		},
		isReadonly: function(){
			this.domNode.toggleClass('slider-readonly', this.options.disable);
		},
		disable: function(){
			this.options.disable = true;
			this.isReadonly();
		},
		enable: function(){
			this.options.disable = false;
			this.isReadonly();
		},
		toggleDisable: function(){
			this.options.disable = !this.options.disable;
			this.isReadonly();
		}
	};

	/*$.jRange = function (node, options) {
		var jNode = $(node);
		if(!jNode.data('jrange')){
			jNode.data('jrange', new jRange(node, options));
		}
		return jNode.data('jrange');
	};

	$.fn.jRange = function (options) {
		return this.each(function(){
			$.jRange(this, options);
		});
	};*/

	var pluginName = 'jRange';
	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[pluginName] = function(option) {
		var args = arguments,
			result;

		this.each(function() {
			var $this = $(this),
				data = $.data(this, 'plugin_' + pluginName),
				options = typeof option === 'object' && option;
			if (!data) {
				$this.data('plugin_' + pluginName, (data = new jRange(this, options)));
				$(window).resize(function() {
					data.setValue(data.getValue());
				}); // Update slider position when window is resized to keep it in sync with scale
			}
			// if first argument is a string, call silimarly named function
			// this gives flexibility to call functions of the plugin e.g.
			//   - $('.dial').plugin('destroy');
			//   - $('.dial').plugin('render', $('.new-child'));
			if (typeof option === 'string') {
				result = data[option].apply(data, Array.prototype.slice.call(args, 1));
			}
		});

		// To enable plugin returns values
		return result || this;

	};

})(jQuery, window, document);