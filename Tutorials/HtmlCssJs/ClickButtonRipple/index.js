const rippleButton = document.querySelector(".ripple-button");

function mousePositionToCustomProp(event, element) {
	element.style.setProperty("--x", event.offsetX + "px");
	element.style.setProperty("--y", event.offsetY + "px");
}

rippleButton.addEventListener("click", (ev) => {
	mousePositionToCustomProp(ev, rippleButton);
	rippleButton.classList.add("pulse");
	rippleButton.addEventListener("animationend", () => {
		rippleButton.classList.remove("pulse");
	});
});