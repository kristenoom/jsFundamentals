/*
FUNCTIONS
*/

//General Ideas: at their broadest level, functions do the following:
// 1) they take some input which the function will handle/process
// 2) they process the input given to them
// 3) they usually, but not always, return some value
// 4) they can be invoked (used) as many times as we want, cutting down on code repitition

//Example 1
function newFunc(num){
    return num + 1;
}

newFunc(7); //doesn't do anything, need to console.log
console.log(newFunc(7)); // output 8
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

//example 2A
function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}.`;
}

console.log(sentence('Kristen', 'Dahlberg'));
console.log(sentence('Kristen', 'Oom'));

//example 2B
function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}.`;
}

let superImportantSentence = sentence('Nicky','Disborough');
console.log(superImportantSentence);

//let's build a function that takes a complex type -- an array in this case,
//and console.log each item in the input array
//example 3
let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5,6,7,8,9,10];
function interatorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}
interatorFunc(arr);
interatorFunc(arr2);