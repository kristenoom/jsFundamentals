/*
SCOPES

-locally - think Indianapolis as our local scope
-globally - think planet earth as our global scope

*/

//example 1
let x = "declared OUTSIDE of the scope"; // globally scoped

function exampleScope() {
    let x = "declared INSIDE the function";
    console.log('We are inside the function exampleScope');
    //console.log(x);
}

exampleScope();
console.log(x);

//example 2

let color = "blue";

function skyColor(){
    color = 'pink';
    console.log(color);
}

skyColor(); //outputs pink
console.log(color); //outputs blue
skyColor(); //outputs blue, because it is called after console.log(color);

/* var VS let
    CONST - cannot be reinitialized
    VAR - scoped to the nearest FUNCTION block
    LET - scoped to the nearest ENCLOSING block
*/

var color = 'blue';

function skyColor() {
    var color = 'pink';
    if(1 == 1){
        var color = 'purple';
        console.log(color); //purple
    }
    console.log(color); //purple
}

skyColor(); //prints purple, purple
console.log(color); //prints blue
//Remember that VAR is scoped to the the nearest function block, not the nearest enclosing block like LET. That is why our first declaration of color gets reinitialized as purple.

//LET
//example 2B - use let instead of var
let color = 'blue';

function skyColor() {
    let color = 'pink';
    if(1 == 1){
        let color = 'purple';
        console.log(color);
    }
    console.log(color);
}

skyColor(); //prints purple, pink
console.log(color); //prints blue
//with let we don't have to worry about any
//bleeding/scope creeping into our 
//functions/conditionals