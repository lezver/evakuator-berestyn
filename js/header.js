let isTicking = false;

const header = document.getElementById("header");
const heroSection = document.getElementById("hero");

document.addEventListener("scroll", () => {
	if (!isTicking) {
		window.requestAnimationFrame(() => {
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

heroSection.style.minHeight = `calc(100vh - ${header.offsetHeight}px)`;
