/*

FOR OF LOOPS

*/

//of requires that your 'thing' you are looping through be iterable -- that means it needs to be numbered

let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

/*for (item of student) { //does not work
    console.log(item);
}*/

let catArray = ['tabby' , 'british shorthair', 'burmese', 'maine coon' , 'rag doll'];

for (cat of catArray) {
    console.log(cat, 'says meow');
    //grabs the value of the array + says meow and repeats until all values of array are logged
}

//works best with arrays
