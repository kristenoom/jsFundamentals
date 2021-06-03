/* SCOPE

*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope

*/

//EXAMPLE 1A
let x = 12;

function scope(){
    let x = 33;
    let y = 10;
    console.log(x);
}

scope(); //produces log 33
//console.log(y); //undefined because y is not declared outside of the function
console.log(x); //produces log 12

//when you are inside a function, variables inside of function only exist within that function

//EXAMPLE 1B
//if we comment out x inside the function
let x = 12;

function scope(){
    //let x = 33;
    console.log(x);
}

scope(); //produces log 12
console.log(x); //produces log 12


//EXAMPLE 2
let x = 12; //globally scoped variable x

function scope(){
    x = 33;
    console.log(x);
}

scope(); //produces 33
console.log(x); //produces 33


//EXAMPLE 3
var x = 1;
function scope(){
    var x = 2;
    function scope() {
        var x = 3;
        console.log(x); //first console.log that runs, output is 3
    }
    scope();
    console.log(x); //second console.log that runs, output is 2
}
scope();
console.log(x); //third console.log that runs, output is 1

//EXAMPLE 4 - contrasts with 5
var x = 12; //global vqriable

function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x); //45
    }
    console.log(x); //33
}

scope();
console.log(x); //12

//EXAMPLE 5 - contrast with 4
var x = 12;

function scope(){
    var x = 33;
    if (true){ //block scope
        var x =45;
        console.log(x); //45
    }
    console.log(x); // 45 -> var doesn't object 'block' scope
}

scope();
console.log(x); //12