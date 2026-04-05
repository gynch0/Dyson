export function initCounter() {
	document.querySelectorAll(".info-block__basket-plus").forEach(btn => {
		btn.addEventListener("click", function () {
			const counter = this.closest(".info-block__basket-counter").querySelector(
				".info-block__basket-counter-page",
			);
			counter.textContent = parseInt(counter.textContent) + 1;
		});
	});

	document.querySelectorAll(".info-block__basket-minus").forEach(btn => {
		btn.addEventListener("click", function () {
			const counter = this.closest(".info-block__basket-counter").querySelector(
				".info-block__basket-counter-page",
			);
			const value = parseInt(counter.textContent);
			if (value > 1) counter.textContent = value - 1;
		});
	});
}
