let isTicking = false;

document.addEventListener("scroll", () => {
	if (!isTicking) {
		window.requestAnimationFrame(() => {
			const header = document.getElementById("header");

			if (!header) return;

			if (window.scrollY > 0) {
				header.classList.add("bg-gray-200", "shadow-md");
			} else {
				header.classList.remove("bg-gray-200", "shadow-md");
			}

			isTicking = false;
		});

		isTicking = true;
	}
});
