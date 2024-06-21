
$(document).ready(function() {

	// ===== Niceselect: Start =====

	$('select').niceSelect();
	
	// ===== Niceselect: End =====

	// ===== Review slider: Start =====

	let productCarousel = new Swiper('.review_slider', {
		direction: 'horizontal',
		slidesPerView: 2,
		// loop: true,
		spaceBetween: 30,
		speed: 1000,
		navigation: {
			nextEl: '.swiper-btn-next',
			prevEl: '.swiper-btn-prev'
		},
	});

	// ===== Review slider: End =====
});