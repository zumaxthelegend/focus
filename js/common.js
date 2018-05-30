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

	/* SLIDER................................................*/


	$(".slider").slick({

		dots: true,
		infinite: false,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		appendArrows: '.slider-nav',
		prevArrow: '.left',
		nextArrow: '.right',
		appendDots: '.slider-dots',
		focusOnSelect: false

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
		gutter: 8
	});
	$('.projects').mCustomScrollbar({
		theme: "projects"
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
			controls: ['default']
		});

		myPlacemark = new ymaps.Placemark([55.034676, 82.911659], {
			balloonContent: 'IM-group, разработка, продвижение'
		}, {
			balloonContentSize: [387, 287],
			balloonLayout: "default#imageWithContent",
			balloonImageHref: 'images/balloon-bg.png',
			balloonImageSize: [416, 316],
			balloonShadow: false
		});

		myMap.geoObjects.add(myPlacemark);

		myMap.geoObject.events.add([
			'balloonopen'
			], function(e) {
				var geoObject = e.get('target');
				myMap.panTo(geoObject.geometry.getCoordinates(), {
					delay: 0
				});
			});
	}


	/* POP-UP................................................*/


	$('#callback-btn, #order-btn').on("click", function() {
		$('#popup-callback-order').toggleClass('show');
	});
	$('.close').on("click", function() {
		$('#popup-callback-order').removeClass('show');
	});


	$('.burger').on("click", function() {
		$('#popup-menu').toggleClass('show');
	});
	$('.close').on("click", function() {
		$('#popup-menu').removeClass('show');
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
	});


	/* ANIMATION................................................*/

	$('.team-member').on('mouseover', function() {
		$(this).parent().addClass('focusUp');
	}).on('mouseout', function() {
		$(this).parent().removeClass('focusUp');
	});
});
