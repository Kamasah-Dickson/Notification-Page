const mark = document.querySelector(".mark");
const count = document.querySelector(".count");
const redActive = document.querySelectorAll(".indicator");
const activeMessage = document.querySelectorAll("[data-bg]");

mark.addEventListener("click", () => {
	activeMessage.forEach((message) => {
		message.style.backgroundColor = "#fff";
		count.innerText = 0;
		redActive.forEach((active) => {
			active.style.display = "none";
		});
		mark.classList.remove("hover");
		mark.style.cursor = "default";
		mark.innerText = "Marked as read";
	});
});
//
