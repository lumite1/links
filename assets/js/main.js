document.addEventListener("DOMContentLoaded", function () {
	const toggleButton = document.getElementById("themeToggle");
	toggleButton.addEventListener("click", function (e) {
		e.preventDefault();

		const root = document.documentElement;
		const body = document.body;

		// Swap bg and fg variables
		const currentFg = getComputedStyle(root).getPropertyValue('--fg').trim();
		const currentBg = getComputedStyle(root).getPropertyValue('--bg').trim();

		root.style.setProperty('--fg', currentBg);
		root.style.setProperty('--bg', currentFg);

		// Toggle a class on body to signal outline mode
		body.classList.toggle("outlined");
	});
});