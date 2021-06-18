/*
    ARROW FUNCTIONS
*/

function hello(){
    console.log('hello');
}

hello();

//arrow functions were introduced in ES6
//they are a more concise way of writing
//function expressions
//  (1)     (2)
let hi = () => {
    console.log('hi');
}

hi();

/*
    1. Set my arrow function to a variable.
    2. Use my arrow to signify that it is
        a function.

arrow functions are NOT declarations, hence
they cannot be hoisted

*/

//CONCISE BODY
let hi = () => console.log('hi');
hi();

//BLOCK BODY
let morningGreeting = () => {
    console.log('hi');
}

//CONCISE VS BODY
let apples = (x) => console.log(`There are ${x} apples.`);
apples(10);

//more than one parameter will require parentheses
let fruit = (x, y) => {
    console.log(`There are ${x} apples and ${y} oranges.`);
}
fruit(10, 15);