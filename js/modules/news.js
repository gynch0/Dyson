export function initNews() {
	const newsButton = document.querySelector(".news__button");
	const newsSection = document.querySelector(".news");

	if (!newsButton || !newsSection) return;

	let newsExpanded = false;

	const extraNewsHTML = `
	<div class="news__wrapper news__wrapper-extra">
		<div class="news__wrapper-info">
			<img class="news__wrapper-info-img" src="./images/news-img.webp" alt="" loading="lazy" decoding="async" />
			<a href="" class="news__wrapper-info-date">15 января 2023</a>
			<h3 class="news__wrapper-info-title">Как правильно сушить волосы феном</h3>
			<p class="news__wrapper-info-text">Узнайте главные правила сушки волос, которые помогут сохранить здоровье и блеск вашей шевелюры надолго.</p>
			<button class="news__wrapper-info-button">Читать далее</button>
		</div>
		<div class="news__wrapper-info">
			<img class="news__wrapper-info-img" src="./images/news-img.webp" alt="" loading="lazy" decoding="async" />
			<a href="" class="news__wrapper-info-date">3 февраля 2023</a>
			<h3 class="news__wrapper-info-title">Топ-5 насадок для укладки волос</h3>
			<p class="news__wrapper-info-text">Сравниваем самые популярные насадки и рассказываем, какая из них подойдёт именно вам.</p>
			<button class="news__wrapper-info-button">Читать далее</button>
		</div>
		<div class="news__wrapper-info news__wrapper-info-none">
			<img class="news__wrapper-info-img" src="./images/news-img.webp" alt="" loading="lazy" decoding="async" />
			<a href="" class="news__wrapper-info-date">20 февраля 2023</a>
			<h3 class="news__wrapper-info-title">Уход за феном: советы экспертов</h3>
			<p class="news__wrapper-info-text">Простые рекомендации по уходу за прибором, которые продлят срок его службы.</p>
			<button class="news__wrapper-info-button">Читать далее</button>
		</div>
	</div>`;

	const buttonFlex = newsSection.querySelector(".button-flex");

	newsButton.addEventListener("click", function (e) {
		e.preventDefault();

		if (!newsExpanded) {
			buttonFlex.insertAdjacentHTML("beforebegin", extraNewsHTML);
			newsButton.textContent = "Скрыть";
			newsExpanded = true;
		} else {
			newsSection.querySelector(".news__wrapper-extra")?.remove();
			newsButton.textContent = "Показать еще";
			newsExpanded = false;
		}
	});
}
