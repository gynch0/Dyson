function escapeHTML(str) {
	return String(str)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

export function initCart() {
	let cart = [];

	const cartSidebar = document.querySelector(".cart");
	const cartOverlay = document.querySelector(".cart-overlay");
	const cartItemsContainer = document.querySelector(".cart__items");
	const cartTotalPrice = document.querySelector(".cart__total-price");
	const cartBadge = document.querySelector(".cart__badge");
	const cartCloseBtn = document.querySelector(".cart__close");
	const cartBtn = document.querySelector(".header__actions-button");

	function openCart() {
		cartSidebar.classList.add("is-open");
		cartOverlay.classList.add("is-open");
		document.body.style.overflow = "hidden";
	}

	function closeCart() {
		cartSidebar.classList.remove("is-open");
		cartOverlay.classList.remove("is-open");
		document.body.style.overflow = "";
	}

	function renderCart() {
		cartItemsContainer.innerHTML = "";

		if (cart.length === 0) {
			cartItemsContainer.innerHTML = '<p class="cart__empty">Корзина пуста</p>';
			cartTotalPrice.textContent = "0 Р";
			cartBadge.hidden = true;
			cartBadge.textContent = "";
			return;
		}

		let total = 0;
		let totalQty = 0;

		cart.forEach((item, index) => {
			total += item.priceNum * item.qty;
			totalQty += item.qty;

			const el = document.createElement("div");
			el.className = "cart__item";
			el.innerHTML = `
				<img class="cart__item-img" src="${escapeHTML(item.img)}" alt="${escapeHTML(item.name)}" loading="lazy" />
				<div class="cart__item-info">
					<p class="cart__item-name">${escapeHTML(item.name)}</p>
					<p class="cart__item-price">${escapeHTML(item.price)}</p>
					<div class="cart__item-qty">
						<button class="cart__item-minus" data-index="${index}">&#8722;</button>
						<span>${escapeHTML(String(item.qty))}</span>
						<button class="cart__item-plus" data-index="${index}">&#43;</button>
					</div>
				</div>
				<button class="cart__item-remove" data-index="${index}">&#10005;</button>
			`;
			cartItemsContainer.appendChild(el);
		});

		cartTotalPrice.textContent = total.toLocaleString("ru-RU") + " Р";
		cartBadge.textContent = totalQty;
		cartBadge.hidden = false;
	}

	cartItemsContainer.addEventListener("click", function (e) {
		const idx = parseInt(e.target.dataset.index);
		if (isNaN(idx) || idx < 0 || idx >= cart.length) return;

		if (e.target.classList.contains("cart__item-remove")) {
			cart.splice(idx, 1);
		} else if (e.target.classList.contains("cart__item-plus")) {
			cart[idx].qty++;
		} else if (e.target.classList.contains("cart__item-minus")) {
			cart[idx].qty--;
			if (cart[idx].qty <= 0) cart.splice(idx, 1);
		}
		renderCart();
	});

	document.querySelectorAll(".info-block__basket-button").forEach(btn => {
		btn.addEventListener("click", function () {
			const article = this.closest(".special-offer__wrapper-info");
			const name = article.querySelector(".special-offer__wrapper-info-text").textContent.trim();
			const img = article.querySelector(".special-offer__wrapper-info-img").src;
			const price = article.querySelector(".new-price").textContent.trim();
			const priceNum = parseInt(price.replace(/\D/g, "")) || 0;
			const qtyEl = article.querySelector(".info-block__basket-counter-page");
			const qty = qtyEl ? parseInt(qtyEl.textContent) || 1 : 1;

			const existing = cart.find(i => i.name === name);
			if (existing) {
				existing.qty += qty;
			} else {
				cart.push({ name, img, price, priceNum, qty });
			}

			renderCart();
			openCart();
		});
	});

	cartBtn.addEventListener("click", () => {
		cartSidebar.classList.contains("is-open") ? closeCart() : openCart();
	});

	cartCloseBtn.addEventListener("click", closeCart);
	cartOverlay.addEventListener("click", closeCart);

	renderCart();
}
