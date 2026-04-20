const loader = document.getElementById("loader");

window.addEventListener(
	"load",
	() => {
		setTimeout(() => {
			loader.classList.add("opacity-0", "pointer-events-none", "inset-0");
			document.body.classList.remove("overflow-hidden");
		}, 1500);

		setTimeout(() => {
			loader.remove();
		}, 1750);
	},
	{ once: true },
);
