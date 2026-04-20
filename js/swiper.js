const swiper = new Swiper(".swiper", {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	// ефект переходу (можна змінити на 'fade', 'cube', 'cards', 'slide')
	effect: "cube",
	speed: 500,
});
