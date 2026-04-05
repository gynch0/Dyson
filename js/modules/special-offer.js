export function initSpecialOffer() {
	const specialLinksContainer = document.querySelector(".special-offer__links");
	const specialToggleButton = document.querySelector(".special-offer__button");

	if (!specialLinksContainer || !specialToggleButton) return;

	let specialsExpanded = false;

	specialLinksContainer.addEventListener("click", event => {
		if (event.target.classList.contains("special-offer__link")) {
			event.preventDefault();
		}
	});

	specialToggleButton.addEventListener("click", event => {
		event.preventDefault();

		if (!specialsExpanded) {
			const extraLink1 = document.createElement("a");
			extraLink1.href = "javascript:void(0)";
			extraLink1.className = "special-offer__link special-offer__link-extra";
			extraLink1.textContent = "dyson фен для окрашенных волос";

			const extraLink2 = document.createElement("a");
			extraLink2.href = "javascript:void(0)";
			extraLink2.className = "special-offer__link special-offer__link-extra";
			extraLink2.textContent = "dyson фен дорожный компактный";

			specialLinksContainer.insertBefore(extraLink1, specialToggleButton);
			specialLinksContainer.insertBefore(extraLink2, specialToggleButton);

			specialsExpanded = true;
		} else {
			specialLinksContainer
				.querySelectorAll(".special-offer__link-extra")
				.forEach(link => link.remove());

			specialsExpanded = false;
		}
	});
}
