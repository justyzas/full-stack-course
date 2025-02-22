// var let const
// var
let number = 5;
let tekstas = "tekstas";
let boolean = true;
let neapibrezta; //undefined
let specialiaiNeapibrezta = null;
const masyvas = [4, null, true, "Tekstas", [1, 2, 3]];
const objektas = {
	name: "Petras",
	age: 70,
	hp: 100,
	level: 90,
	isEvolved: true,
	items: ["wooden sword"],
	money: {
		cooper: 0,
		silver: 7,
		gold: 1,
	},
};

objektas.money.cooper = "Jonas";

console.log(objektas);
