

let animals = ['pig','cow','duck','horse'];

for (animal of animals) {//first callout/bucket is the singular version of the array, second callout is the array
    //code that gets executed
    console.log(animal);
}

let numbers = [4, 5, 10, 20];
let sumOfAllNumbers = 0;

for (number of numbers){
    //console.log(number);
    sumOfAllNumbers = sumOfAllNumbers + number;
    console.log(sumOfAllNumbers);
}

let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd'];

/* BRONZE

    - Using a for of loop, console.log the name of each pie from the 
    pies array.

*/

for (pie of pies) {
    console.log(pie);
}

/* SILVER
    - Have the conditional check if EACH pie from the pies array is of the type 'apple'.
    - If it is of type apple console log ____ pie is of type apple otherwise
     console log  _____ pie is not of type apple

    - Use google to search for an array method that checks if an array includes a certain value

*/

for (pie of pies) {
    if (pie.includes('apple')){
        console.log(`${pie} pie is a type of apple pie.`);
    } else {
        console.log(`${pie} pie is NOT a type of apple pie.`);
    }
}

/* GOLD

 - Nest a conditonal inside of the for of loop that checks if a single pie from the pies array is of the type 'fruit pie' - ie. 
    apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. 
    Then, using string interpolation, console.log either 'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('
   
*/

for (pie of pies) {
    if (
        pie.includes('apple') ||
        pie.includes('blueberry') || 
        pie.includes('cherry') || 
        pie.includes('peach')
    ){
        console.log(`the ${pie} pie is a type of fruit pie.`);
    } else {
        console.log(`the ${pie} pie is NOT a type of fruit pie.`);
    }
}