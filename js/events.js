let sk = 0;
const button = document.querySelector("button"); // DOMElement

document.addEventListener("load", (event) => {
	if (event.repeat) return;
	sk++;
	console.log(event);
});
