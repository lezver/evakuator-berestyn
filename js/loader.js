(() => {
	const loader = document.getElementById("loader");

	const pageWrapper = document.getElementById("page-wrapper");

	window.addEventListener(
		"load",
		() => {
			setTimeout(() => {
				loader.classList.add("opacity-0");
				pageWrapper.classList.remove("opacity-0", "pointer-events-none");
			}, 2000);

			setTimeout(() => {
				loader.remove();
			}, 2500);
		},
		{ once: true },
	);
})();
