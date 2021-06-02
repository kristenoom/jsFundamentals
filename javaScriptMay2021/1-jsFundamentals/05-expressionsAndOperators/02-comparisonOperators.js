/*
COMPARISON OPERATORS
*/

//equality comparison operator ( == )
console.log('3' == 3);  //true
console.log(4 == 4);    //true
console.log(3 == '4');  //false

//strict equality comparison operator ( === )
console.log(3 === 3);   //true
console.log('3' === 3); //false

//not equal comparison operator
console.log('3' != 4);  //true
console.log('3' != 3);  //false

//strict not equal comparison operator
console.log('3' !== 3); //true
console.log(3 !== 3);   //false

//greater than
console.log(3 > 2);
console.log(2 > 3); //false

//less than
console.log(2 < 3);
console.log(3 < 2); //false

//grerater than or equal to
console.log(3 >= 2);
console.log(3 >= 3);

//less than or equal to
console.log(2<=3);
console.log(3<=2);

//And (both expressions on either side of the operator must be true for 'And' to return true)
console.log(1<2 && 3>0);
// both expressions are true so output is true
console.log(2<1 && 3>0);
// only one expression is true so output is false

//Or (either expression on one side of the operator must be true for 'Or" to return true)
console.log(1<2 || 3<0);
console.log(2<1 || 3<0);

let obj = {key: 'test'};
console.log(obj == {key: 'test'});
//even though these look the same they are not the same
console.log(obj == obj);
//this item is the exact same item

let arr = [1,2,3,4];
console.log(arr == [1,2,3,4]);  //false
console.log(arr == arr);        //true


//CONDITIONALS
/*
IF CONDITIONALS
*/

let isOn = true;
if (isOn == true){
    console.log('The light is on!');
}

//shorthand
if (isOn){
    console.log('The light is on, yay!');
}


let weather = 65;
if (weather < 70){
    console.log('Wear a jacket!');
}

let string = 'Kristen';
if (string === 'Kristen' || false){
    console.log('if statements and conditionals are powerful!')
}

/*
IF ELSE CONDITIONALS
*/

let warsawWeather = 75;
if (warsawWeather < 70){
    console.log('wear a jacket');
} else {
    console.log('no jacket necessary');
}

//you can blend complex conditionals and if-else statements based upon your needs
if (warsawWeather > 70 && typeof warsawWeather === 'number'){
    console.log('this weather is amazing');
} else {
    console.log('either the temperature is cool, the variable is not a string, or both');
}

//ELSE IF
//if-elseif statements can be chained
//let age = 30;
let age = 17;
if (age >= 25){
    console.log('yay! you can rent a car!');
} else if (age >= 21){
    console.log('yay! you can drink!');
} else if (age >= 18){
    console.log('yay! you can vote!');
} else {
    console.log("sorry, you're too young to do anything function. :(");
}

/*
SWITCH CONDITIONALS
*/


