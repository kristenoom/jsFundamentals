/*
ARRAYS
*/

//what is an array?
//has [] brackets
//can hold multiple datatypes
//arrays can list datatypes in an ordered, numbered way

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
console.log(typeof students);// typeof doesn't tell me my variable is an array -> object
// an array is a specialized object
// hidden keys: each array value equals a number

console.log(students instanceof Array); //instanceof tells me my array is an array

console.log(students[2]); //Rhys
console.log(students[1]); // Marshall
console.log(students[6]); // ['Ryan', 'Iesha']

let name1 = students[6];
console.log(name1);

let name2 = students[6][1];
console.log(name2);
console.log(`Hello ${name2}, you look nice today. `);

//recall for-Of Loop
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (f of food) {
    console.log(f);
}

//Array Methods
food.push('Pizza'); //adds element to end of array

//methods are built-in functions to JS to use when we have appropriate type

console.log(food);

food.splice(1, 1, 'Bananas'); //asks for an insertion point, how many things to remove, then the item or items to add
//removes element and replace
//takes 3 arguments
console.log(food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log(food);

food.pop(); //removes last element of an array
console.log(food);