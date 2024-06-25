
$(document).ready(function() {

	// ====== mobile menu ======

	$(".main_header .toggle-btn").click(function(e){
		$(this).toggleClass("active");
		$(".main_header").toggleClass("slide");
		$("body").toggleClass("open-nav");
		e.preventDefault();
	});

	// ====== mobile menu ======

	// ===== Niceselect: Start =====

	$('select').niceSelect();
	
	// ===== Niceselect: End =====

	// ===== Review slider: Start =====

	let productCarousel = new Swiper('.review_slider', {
		direction: 'horizontal',
		spaceBetween: 30,
		speed: 1000,
		navigation: {
			nextEl: '.swiper-btn-next',
			prevEl: '.swiper-btn-prev'
		},
		breakpoints: {
			767: {
				slidesPerView: 1,
			},
			768: {
			  	slidesPerView: 2,
			},
			991: {
				slidesPerView: 1,
			},
			1199: {
				slidesPerView: 2,
			},
		},
	});





	// ===== Review slider: End =====

	// ===== releted product slider: Start =====

	let reletedCarousel = new Swiper('.releted_swiper', {
		direction: 'horizontal',
		spaceBetween: 30,
		speed: 1000,
		slidesPerView:3,
		navigation: {
			nextEl: '.pswiper-btn-next',
			prevEl: '.pswiper-btn-prev',
		},
		
	});

	var swiperProduct = new Swiper(".mySwiper", {
		spaceBetween: 10,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
	  });
	  var swiperProduct2 = new Swiper(".mySwiper2", {
		spaceBetween: 10,
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
		thumbs: {
		  swiper: swiper,
		},
	  });

	// ===== releted product slider: End =====
	

	
	
});

