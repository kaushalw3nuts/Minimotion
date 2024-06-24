
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
});