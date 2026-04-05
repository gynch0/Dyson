import { initBurger } from './modules/burger.js';
import { initSlider } from './modules/slider.js';
import { initSpecialOffer } from './modules/special-offer.js';
import { initCounter } from './modules/counter.js';
import { initReviews } from './modules/reviews.js';
import { initNews } from './modules/news.js';
import { initCart } from './modules/cart.js';

document.addEventListener("DOMContentLoaded", () => {
	initBurger();
	initSlider();
	initSpecialOffer();
	initCounter();
	initReviews();
	initNews();
	initCart();
});
