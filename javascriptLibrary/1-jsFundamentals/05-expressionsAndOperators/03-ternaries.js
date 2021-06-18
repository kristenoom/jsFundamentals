/*

TERNARIES

*/

//example of ternary vs if/else statement
let x = 6;
//ternary
x > 0 ? console.log('x is positive') : console.log('x is negative');

//if/else comparison
if (x > 0){
    console.log('x is positive');
} else {
    console.log('x is negative');
}


let greeting = 'salutions!';

//long version
if (greeting.length > 10) {
    console.log('that is a long greeting!');
} else if (greeting.length == 10) {
    console.log('your greeting is exactly 10 characters!');
} else {
    console.log('what is a normal greeting');
}

//shorter version
greeting.length > 10 ? console.log('that is a long greeting!') :
greeting.length == 10 ? console.log('your greeting is exactly 10 characters') :
console.log('what is a normal greeting?');