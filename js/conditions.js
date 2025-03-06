let prekesKaina = 80;
let money = 79.5;
let discount = 0;

// Arba ||
// IR &&

// Ternary operator
// kintamasis = salyga ? reiksmeJeiTrue : reiksmeJeiFalse;
// prekesKaina = discount ? prekesKaina * ((100 - discount) / 100) : prekesKaina;
prekesKaina = prekesKaina * ((100 - (discount || 0)) / 100);
console.log(prekesKaina);

// for (i = 4; i <= 10; i++) {
// 	console.log(i);
// }

const masyvas = [1, 2, 3, 4, 5, 6];

// of (elementas)
for (const elementas of masyvas) {
	console.log(elementas);
}
// in (index)
for (const index in masyvas) {
	console.log(index);
}
//.forEach(callbackFunction)
masyvas.forEach((value, index) => {
	console.log(index);
});

//.map()

const sugeneruotasHtml = masyvas
	.map((value) => {
		return `<li>${value + 100}</li>`;
	})
	.join("\n");
console.log(sugeneruotasHtml);

document.body.innerHTML = "<ul>" + sugeneruotasHtml + "</ul>";
