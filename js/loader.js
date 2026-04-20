const loader = document.getElementById("loader");
const pageWrapper = document.getElementById("page-wrapper");

window.addEventListener(
	"load",
	() => {
		setTimeout(() => {
			loader.classList.add("opacity-0", "pointer-events-none", "inset-0");
			document.body.classList.remove("overflow-hidden");
		}, 2000);

		setTimeout(() => {
			loader.remove();
		}, 2500);
	},
	{ once: true },
);
