/**************************
FIZZ BUZZ (Conditionals Only)
**************************/

/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/


let number = 25;

//ifElse-if
if (number % 3 === 0 && number % 5 === 0) {
    console.log("Fizz Buzzzzz");
} else if (number % 3 === 0) {
    console.log("Fizz");
} else if (number % 5 === 0){
    console.log("Buzz");
} else {
    console.log("Number is not divisible by either 3 or 5");
}


//SWITCH
switch (true) {
    case (number % 3 === 0 && number % 5 === 0):
        console.log('Fizz Buzz!');
        break;
    case (number % 5 === 0):
        console.log('Buzzz!');
        break;
    case (number % 3 === 0):
        console.log('Fizzzz');
        break;
    
    default:
        console.log('Number is not divisible by either 3 or 5!');
}


//TERNARY
number % 3 === 0 && number % 5 === 0 ? console.log('Fizz Buzz') :
number % 3 === 0 ? console.log('Fizz') :
number % 5 === 0 ? console.log('Buzz') :
console.log('The number is not divisible by either 3 or 5');
