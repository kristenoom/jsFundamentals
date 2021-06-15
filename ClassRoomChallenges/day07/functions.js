/*
Functions do the following
- they can take some input that the function can handle or process
- they process the input that is given to them
- sometimes they return a value
- they can be used multiple times

*/

function greeting(){
    //code inside will be executed when the function is called
    console.log("Hello from greetings!");
}

greeting(); //call the function

//expression function - order matters
//expressionGreeting();

let expressionGreeting = function(){
    console.log("Hello from expression greeting_");
}

expressionGreeting();


//hoisting function
greeting(); 
function greeting(){
    //code inside will be executed when the function is called
    console.log("Hello from greetings!");
}

//the key difference between a function and a function expression
// - declaration gets hoisted
// - expressions do not get hoisted

//CHALLENGE
//Create a function that, when invoked, lists out the number 1-10
//using a for loop

function addition(){
    for (let i=1; i < 11; i++){
        console.log(i)    
    }    //console.log(addition[i]);
}

addition();

//Parameters
//function parameters are placeholders for data that we pass into a function when invoking

function studentGreeting(studentName){
    console.log(`Good morning ${studentName}!`)
}

studentGreeting("Kristen");

/* Write a function that takes 2 parameters:
- one parameter is for a first name,
- the other parameter is for a last name;
- have them come together in a variable inside the function
- console.log 'Hello, my name is <your name>'
- call (or invoke) your function
*/
function studentGreeting(firstName, lastName){
    let fullName = firstName + ' ' + lastName;
    console.log(`Good morning ${fullName}!`)
}

studentGreeting('Kristen','Oom');

function area(length,width){
    let areaCalc = length * width;
    return areaCalc;
}

let area1 = area(3, 4);
let area2 = area(5, 3);
console.log(area1, area2);

//CHALLENGE 2
/*
Write a function that gives the length, width, and height returns the volume of that cuboid.
console.log the returned value
*/

function volume(length, width, height){
    let volCalc = length * width * height;
    return volCalc;
}
let vol1 = volume(3,4,5);
let vol2 = volume(2,2,2);
console.log(vol1, vol2);

//CHALLENGE 3
/* Write a function that accepts a dog's age and returns a human age
Console.log the returned value
formula to use: humanAge = (DogAge - 2) x 4 / 21
*/

function humanAge(dogAge){
    let humanAge = (dogAge-2)*4/21;
    return humanAge;
}
let dog1 = humanAge(32);
let dog2 = humanAge(15);
console.log(dog1, dog2);