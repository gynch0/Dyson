import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initSlider() {
	new Swiper(".product-swiper", {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: ".product-swiper .swiper-button-next",
			prevEl: ".product-swiper .swiper-button-prev",
		},
		pagination: {
			el: ".product-swiper .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			320: { slidesPerView: 1 },
			480: { slidesPerView: 2 },
			780: { slidesPerView: 3 },
			1024: { slidesPerView: 4 },
		},
	});
}
