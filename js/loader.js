const loader = document.getElementById("loader");

window.addEventListener(
	"load",
	() => {
		setTimeout(() => {
			loader.classList.add("opacity-0", "pointer-events-none", "inset-0");
			document.body.classList.remove("overflow-hidden");
		}, 1000);

		setTimeout(() => {
			loader.remove();
		}, 1300);
	},
	{ once: true },
);
