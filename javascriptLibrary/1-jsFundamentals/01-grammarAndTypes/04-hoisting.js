/*

HOISTING


*/

//EXAMPLE 1:
console.log(scissors);
var scissors = 'blue';

//EXAMPLE 1 breakdown:
var scissors;
console.log(scissors);
scissors = 'blue';

//EXAMPLE 2
function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

//EXAMPLE 2 breakdown:
function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest();