/*
ARROW FUNCTIONS
*/

//normal function declaration
function coffee() {
    return 'coffee is good';
}

//normal function expression - is for unnamed functions
    //let tea = `oh yeah! tea is the greatest`;
let tea = function (){ //anonymous function
    return 'tea is healthy';
}

coffee();
tea();

console.log(coffee());
console.log(tea());

//arrow functions are *ALWAYS* anonymous
//arrow function expression
let hotChocolate = () => {
    return 'hot chocolate is king.';
}

hotChocolate();
console.log(hotChocolate());

//concise
let animals = (kittens, puppies) => {
    return `I have ${kittens} cat(s) and ${puppies} dog(s).`;
}

console.log(animals(3,2));
console.log(animals(0,0));

//Arrow functions cannot be hoisted

//concise vs block body
//concise body
let apples = x => `There are ${x} apples.`; // this is an entire function without all the syntax clutter

//block body
let bananas = x => {
    return `There are ${x} bananas.`;
}
console.log(bananas(5));

//return must be explicitly written in a block-body arrow function

//be mindful of line spacing
let func = () => 'hi';

console.log(func());

let secondFunc = () => 'hi';
//=> cannot be on its own line, it will throw syntax error


console.log(secondFunc());