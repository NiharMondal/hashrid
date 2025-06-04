document.addEventListener("DOMContentLoaded", () => {
	const accordionItems = document.querySelectorAll(".accordion-item");

	accordionItems.forEach((item) => {
		const header = item.querySelector(".accordion-header");
		const content = item.querySelector(".accordion-content");
		const icon = item.querySelector(".icon");

		header.addEventListener("click", () => {
			const isOpen = content.classList.contains("open");

			// Close all accordions first
			document
				.querySelectorAll(".accordion-content")
				.forEach((c) => c.classList.remove("open"));
			document
				.querySelectorAll(".accordion-header")
				.forEach((h) => h.classList.remove("active"));
			document
				.querySelectorAll(".icon")
				.forEach((i) => (i.textContent = "+"));

			// Open clicked one if it was previously closed
			if (!isOpen) {
				content.classList.add("open");
				header.classList.add("active");
				icon.textContent = "–";
			}
		});
	});
});
