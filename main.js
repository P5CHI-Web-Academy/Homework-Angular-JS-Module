'use strict';

var garage = require("./garage");

var a = garage();


a.pushCar("Maserati");
a.pushCar("BMW");
a.pushCar("Toyota");
a.pushCar("Dacia");
a.pushCar("Opel");

console.log("\n==================================================");
console.log("  My cars: ");
console.log("==================================================");

for (var i = 0; i < a.length(); i++)
    console.log(" " + a.getCar(i));

console.log("\n==================================================");
console.log("  Sort my cars: ");
console.log("==================================================");

a.sortCars();
for (var i = 0; i < a.length(); i++)
    console.log(" " + a.getCar(i));

console.log("\n==================================================");
console.log("  Iterator: ");
console.log("==================================================");
const iterat = a.iterate();

console.log(iterat());
console.log(iterat());
console.log(iterat());
console.log(iterat());
console.log(iterat());
console.log(iterat());


console.log("\n==================================================");
console.log("  Filter (show elements with length > 4): ");
console.log("==================================================");
const filtr = a.filter();
console.log(filtr);