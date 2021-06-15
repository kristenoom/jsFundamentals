/*
HOISTING
Hoisting is used to store data to memory so that it can be referenced later.
*/

//console.log(firstName);
//let firstName = "Taylor";

console.log(firstName); //undefined
var firstName = "Taylor";
console.log(firstName); //Taylor

example();

function example() {
    console.log("I have been hoisted!");
}

function petName(name1) {
    console.log(`My cat's name is ${name1}`);
}

petName("Connor");

petName("Connor"); //hoisting context execution

function petName(name1) {
    console.log(`My cat's name is ${name1}`);
}

/* ONLY DECLARATIONS ARE HOISTED */

console.log(hello);
hello = "hi"; //errors because we are initializing it.

console.log(pet1 + " and " + pet2);

var pet2 = "Chloe";
pet1 = "Connor";