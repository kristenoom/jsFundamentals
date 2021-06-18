/*

FOR IN LOOPS

*/

//in does not require that the thing you loop through be numbered

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student) {
    console.log(item); //grabs the items
    console.log(student[item]); //grabs both the item and the value
}

let catArray = ['tabby' , 'british shorthair', 'burmese', 'maine coon' , 'rag doll'];

for (cat in catArray) {
    console.log(cat); //outputs the array # of each value
    console.log(catArray[cat]); //outputs the value of the array
}

//let's write a for-in loop that capitalizes the first letter of a name
let instructor = 'pAuL';
let capName;
for (n in instructor){
    if (n == 0){ // 0 is calling out the first letter
        capName = instructor[n].toUpperCase(); // this will capitalize the first letter
    } else { // if not 0 then lowercase the letters
        capName += instructor[n].toLowerCase();
    }
}
console.log(capName);