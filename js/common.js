$(document).ready(function() {
	// var slideIndex  = 1,
	// sliding     = false;

	// $('#fullpage').fullpage({
	// 	scrollHorizontally: true,
	// 	navigation: false,
	// 	slidesNavPosition: 'right'
	// });

	//  $('#fullpage').on('mousewheel', function(event) {
 //        if (event.deltaY > 0){$.fn.fullpage.moveSlideRight();}
 //        else{$.fn.fullpage.moveSlideLeft();}
	//  });

	/* PRELOADER.............................................*/

	$(window).on('load', function(){
		$preloader = $('#preloader'),
		$preloaderContent = $preloader.find('.preloader-content');
		setTimeout(function() {
			$('.f-wrapper').addClass('scaled');
		}, 0);
		setTimeout(function() {
			$preloader.fadeOut();
		}, 3000);


	});


	/* SLIDER................................................*/


	$(".slider").slick({

		dots: true,
		infinite: false,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,
		appendArrows: '.slider-nav',
		prevArrow: '.left',
		nextArrow: '.right',
		appendDots: '.slider-dots',
		focusOnSelect: false,
		cssEase: 'cubic-bezier(.19,.1,.63,1.03)'

	});

		$(".slider").on('wheel', (function(e) {
		e.preventDefault();

		if (e.originalEvent.deltaY > 0) {
		$(this).slick('slickNext');
		} else {
		$(this).slick('slickPrev');
		}
	}));

	$('.elements-grid').masonry({
		itemSelector: '.element-item',
		columnWidth: '.element-item',
		percentPosition: true,
		gutter: 0
	});
	$('.projects').mCustomScrollbar({
		theme: "projects",
		scrollbarPosition: "outside"
	});
	$('.text-about').mCustomScrollbar({
		theme: "text-about"
	});


	/* FANCY-BOX................................................*/

	$().fancybox({
		selector : '[data-fancybox="gallery"]',
		loop	 : true
	});

	/*function animate(elem){
		var effect = elem.data("effect");
		elem.addClass(effect);
		setTimeout( function(){
			elem.removeClass(effect);
		}, 1000);
	}
	$(".team-member").mouseenter(function() {
		animate($(this).children("div.top-left"));
		animate($(this).children("div.top-right"));
		animate($(this).children("div.bottom-left"));
		animate($(this).children("div.bottom-right"));
	});
*/


	/* YANDEX_MAP................................................*/


	ymaps.ready(init);
	var myMap,
		myPlacemark;

	function init(){
		myMap = new ymaps.Map("map", {
			center: [55.034676, 82.911659],
			zoom: 16,
			controls: []
		});


		myPlacemark = new ymaps.Placemark([55.034676, 82.917659], {
			balloonContentHeader: '<div class="container-map-top">' +
								'<div class="top-left"></div>' +
								'<div class="top-right"></div>' +
							'</div>',
			balloonContent: '<div class=container-map>' + 
								'<h1>Контакты</h1>' + 
								'<p>Пр. Димитрова, 7, офис, 807</p>' +
								'<div class="contacts-map">'+
									'<div class="tel-map">' +
										'<a href="tel:+7(383)3830987">+7 (383) 383-09-87</a>' +
									'</div>' +
									'<div class="mail-map">' +
										'<a href="mailto:mail@imgroup54.ru">mail@imgroup54.ru</a>' +
									'</div>' +
								'</div>' +
								'<div class="socials-map">' +
									'<a href="#" target="_blank" class="youtube"></a>' +
									'<a href="#" target="_blank" class="vk"></a>' +
									'<a href="#" target="_blank" class="fb"></a>' +
								'</div>' +
								'<p class="goodbye-text">Приходите к нам в гости!</p>' +
							'</div>',
			balloonContentFooter: '<div class="container-map-bottom">' +
								'<div class="bottom-left"></div>' +
								'<div class="bottom-right"></div>' +
							'</div>'
		}, {
			balloonMaxWidth : 416,
			balloonOffset:[-150, 150],
			iconLayout: 'default#image',
			iconImageHref: 'images/F-logo-map.png',
			iconImageSize: [56, 69],
			iconImageOffset: [-30,-70]
		});

		myMap.geoObjects.add(myPlacemark);
		myMap.controls.add('zoomControl');
		myMap.behaviors.disable('scrollZoom');
		myMap.behaviors.disable('drag');
		myMap.behaviors.disable('multiTouch');
	}


	/* POP-UP................................................*/


	$('#callback-btn, #order-btn').on("click", function() {
		$('#popup-callback-order').toggleClass('show');

		if($('body .top-block').hasClass('top-block_active')) {
			$('body .top-block').removeClass('top-block_active');
		} else {
			setTimeout(function(){
				$('body .top-block').addClass('top-block_active');
			}, 500);
		}
		if($('body .right-block').hasClass('right-block_active')) {
			$('body .right-block').removeClass('right-block_active');
		} else {
			setTimeout(function(){
				$('body .right-block').addClass('right-block_active');	
			}, 500);
		}
	});
	$('.close').on("click", function() {
		$('#popup-callback-order').removeClass('show');
		$('.top-block').removeClass('top-block_active');
		$('.right-block').removeClass('right-block_active');
	});

	/*$('body').on("click", function() {
		if($('#popup-menu') || $('#popup-callback-order')).hasClass('show') {
			$('#popup-callback-order').toggleClass('show');
		}	
	});*/

	$(document).mouseup(function(e) {
	  //Выпадающие списки
	if( $(event.target).closest('#popup-menu, #popup-callback-order').length ) return;
		$('#popup-menu, #popup-callback-order').removeClass('show');
		$('.top-block').removeClass('top-block_active');
		$('.right-block').removeClass('right-block_active');
	event.stopPropagation();
	 });

	$('.burger').on("click", function() {
		$('#popup-menu').toggleClass('show');
		
		if($('body .top-block').hasClass('top-block_active')) {
			$('body .top-block').removeClass('top-block_active');
		} else {
			setTimeout(function(){
				$('body .top-block').addClass('top-block_active');
			}, 500);
		}
		if($('body .right-block').hasClass('right-block_active')) {
			$('body .right-block').removeClass('right-block_active');
		} else {
			setTimeout(function(){
				$('body .right-block').addClass('right-block_active');	
			}, 500);
		}
	});
	$('.close').on("click", function() {
		$('#popup-menu').removeClass('show');
		$('.top-block').removeClass('top-block_active');
		$('.right-block').removeClass('right-block_active');
	});

	$(document).keydown(function(event) { 
		if (event.keyCode == 27) { 
	    	$('#popup-menu, #popup-callback-order').removeClass('show');
	    	$('.top-block').removeClass('top-block_active');
			$('.right-block').removeClass('right-block_active');
		}
	});


	$('.input-dropdawn').on('click', function() {
		$('.input-dropdawn').not(this).removeClass('active');
		if ( !$(this).hasClass('active') ) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
			}
		});

		$('.input-dropdawn li').on('click', function() {
			var valDrop = $(this).attr('data-val');
			var htmlDrop = $(this).html();

		$(this).addClass('active').siblings('li').removeClass('active');
		$(this).closest('.input-dropdawn').find('div').html(htmlDrop);
		$(this).closest('.input-dropdawn').find('input').val(valDrop);

		if($(this).closest('.input-dropdawn').find('input[type="hidden"]').val() != '') {
			$(this).closest('.input-dropdawn').addClass('selected');
		} else {
			$(this).closest('.input-dropdawn').removeClass('selected');
		}
	});

	/* PHONE-MASK................................................*/

	$(function() {
		$("#phone").mask("+7(999) 999-9999")
	});


	/* ANCHORS................................................*/

	$('a[data-slide]').click(function(e) {
		e.preventDefault();
		var slidenum = $(this).data('slide');
		$('.slider').slick('slickGoTo', slidenum - 1);
		$('#popup-menu').removeClass('show');
		$('.burger').removeClass('show');
		$('.top-block').removeClass('top-block_active');
		$('.right-block').removeClass('right-block_active');
	});


	/* ANIMATION................................................*/

	$('.member').on('mouseover', function() {
		var x = parseInt($(this).attr('x'));
		var y =  parseInt($(this).attr('y'));
		var height = parseInt($(this).attr('height'));
		var width = parseInt($(this).attr('width'));
		$('#pixelate').animate({'opacity': 1}, 300);
		$('#face rect, #arrows').animate({
			'x' : x,
			'y' : y,
			'height' : height,
			'width' : width
		}, 300);
		$('#left-top').animate({
			'x' : x-24,
			'y' : y-24
		}, 300);
		$('#right-top').animate({
			'x' : x + width - 40,
			'y' : y-24
		}, 300);
		$('#left-bottom').animate({
			'x' : x-24,
			'y' : y + height - 40
		}, 300);
		$('#right-bottom').animate({
			'x' : x + width - 40,
			'y' : y + height - 40
		}, 300);
	});
	$('.member').on('mouseout', function() {
		$('#pixelate').animate({'opacity': 0}, 300);
		$('#face rect, #arrows').animate({
			'x' : 0,
			'y' : 0,
			'height' : '100%',
			'width' : '100%'
		}, 300);

		$('#left-top').animate({
			'x' : 16,
			'y' : 16
		}, 300);
		$('#right-top').animate({
			'x' : 1104,
			'y' : 16
		}, 300);
		$('#left-bottom').animate({
			'x' : 16,
			'y' : 704
		}, 300);
		$('#right-bottom').animate({
			'x' : 1104,
			'y' : 704
		}, 300);
	});


	/* PROJECTS.......................................................*/



	$('a.element-item').on('mouseover', function(e) {
		var self = $(this);
		$('a.element-item .image-container img').addClass('blurred');
		self.find('.image-container').removeClass('blurred');
		self.find('.image-container').css({opacity: '0'});
		self.find('.image-container-hover').css({opacity: '1'});
		$('a.element-item').addClass('block');

	});

	$('a.element-item').on('mouseout', function() {
		var self = $(this);
		$('a.element-item .image-container img').removeClass('blurred');
		self.find('.image-container').css({opacity: '1'});
		self.find('.image-container-hover').css({opacity: '0'});
		$('a.element-item').removeClass('block');
	});
});
