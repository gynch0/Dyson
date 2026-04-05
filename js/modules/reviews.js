export function initReviews() {
	// Показать/скрыть фото в отзыве
	document.querySelectorAll(".reviews__scores-info-link").forEach(link => {
		let expanded = false;

		link.addEventListener("click", function (e) {
			e.preventDefault();

			const reviewBlock = this.closest(".reviews__scores-info");
			const imageContainer = reviewBlock.querySelector(".reviews__scores-flex-img");

			if (!imageContainer) return;

			if (!expanded) {
				[1, 2].forEach(() => {
					const img = document.createElement("img");
					img.src = "./images/reviews/reviews__scores-info-img.webp";
					img.width = 95;
					img.height = 95;
					img.alt = "";
					img.className = "reviews__scores-info-img reviews__scores-info-img-extra";
					imageContainer.appendChild(img);
				});
				this.textContent = "Скрыть фото";
				expanded = true;
			} else {
				imageContainer
					.querySelectorAll(".reviews__scores-info-img-extra")
					.forEach(img => img.remove());
				this.textContent = "Смотреть все фото";
				expanded = false;
			}
		});
	});

	// Кнопка "Показать еще" в отзывах
	const reviewsButton = document.querySelector(".reviews__scores-button");
	const reviewsWrapper = document.querySelector(".reviews__wrapper-info");
	const buttonContainer = document.querySelector(".button-flex");

	if (!reviewsButton || !reviewsWrapper || !buttonContainer) return;

	let reviewsAdded = false;
	let addedReviews = [];

	reviewsButton.addEventListener("click", function (e) {
		e.preventDefault();

		if (!reviewsAdded) {
			for (let i = 0; i < 2; i++) {
				const newReview = document.createElement("div");
				newReview.className = "reviews__stars reviews__stars-extra";
				newReview.innerHTML = `
					<div class="reviews__stars-icon">
						<p class="reviews__scores-name reviews__scores-name-top">Новый пользователь</p>
						<div style="display:flex; gap:4px;">
							${Array(5).fill(`<svg class="star-svg" width="25" height="24" viewBox="0 0 25 24"><use href="./icons/sprite.svg#grey-star"></use></svg>`).join("")}
						</div>
					</div>
					<div class="reviews__scores-info">
						<h3 class="reviews__scores-info-title">Отличный товар</h3>
						<p class="reviews__scores-info-text">Очень понравилось качество и дизайн. Рекомендую!</p>
					</div>
				`;
				reviewsWrapper.insertBefore(newReview, buttonContainer);
				addedReviews.push(newReview);
			}
			reviewsAdded = true;
			reviewsButton.textContent = "Скрыть отзывы";
		} else {
			addedReviews.forEach(r => r.remove());
			addedReviews = [];
			reviewsAdded = false;
			reviewsButton.textContent = "Показать еще";
		}
	});
}
