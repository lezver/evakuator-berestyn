const contactToggle = document.getElementById("contact-toggle");
const contactMenu = document.getElementById("contact-menu");
const contactIcon = contactToggle?.querySelector("i");

const openIconClass = "fa-comments";
const closeIconClass = "fa-circle-xmark";

contactToggle.addEventListener("click", () => {
	const isOpen = contactMenu.classList.contains("opacity-0");

	contactMenu.classList.toggle("opacity-0", !isOpen);
	contactMenu.classList.toggle("pointer-events-none", !isOpen);
	contactMenu.classList.toggle("opacity-100", isOpen);
	contactMenu.classList.toggle("pointer-events-auto", isOpen);
	contactToggle.classList.toggle("animate-pulse", !isOpen);

	if (contactIcon) {
		contactIcon.classList.toggle(openIconClass, !isOpen);
		contactIcon.classList.toggle(closeIconClass, isOpen);
	}
});

window.addEventListener("click", ({ target }) => {
	if (!contactToggle.contains(target) && !contactMenu.contains(target)) {
		if (contactMenu.classList.contains("opacity-100")) {
			contactMenu.classList.add("opacity-0", "pointer-events-none");
			contactMenu.classList.remove("opacity-100", "pointer-events-auto");
			contactToggle.classList.add("animate-pulse");
			if (contactIcon) {
				contactIcon.classList.remove(closeIconClass);
				contactIcon.classList.add(openIconClass);
			}
		}
	}
});
