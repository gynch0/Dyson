export function initBurger() {
	const burger = document.querySelector(".header__burger");
	const menu = document.querySelector("#header__menu");

	if (!burger || !menu) return;

	burger.addEventListener("click", e => {
		e.preventDefault();
		e.stopPropagation();
		burger.classList.toggle("is-active");
		menu.classList.toggle("is-open");
	});

	document.querySelectorAll(".header__menu-item").forEach(item => {
		item.addEventListener("click", () => {
			burger.classList.remove("is-active");
			menu.classList.remove("is-open");
		});
	});

	document.addEventListener("click", e => {
		if (menu.classList.contains("is-open")) {
			if (!burger.contains(e.target) && !menu.contains(e.target)) {
				burger.classList.remove("is-active");
				menu.classList.remove("is-open");
			}
		}
	});
}
