let student = {
    name: 'Amruta',
    awesome: true,
    degree: 'javascript',
    week: 1
    //properties : value
    //key = property
}

for(item in student){
    //console.log(item);
    console.log(student[item]);
}
//the for in loop iterates over a student object.
//each iteration returns a property(key/item)
//the key/property is used to access the value of the key/property
//the value of the key/property is student[item].

//for in loops are great for iterating over values in an object
//for in loops count the enumerable (countable) properties in an object.

//objects contain properties that are enumerable. properties in an object don't contain an index like array. but they can be counted.

//properties are keys. Keys go IN objects (lock) for it to correctly work and unlock.

/* BRONZE

    - Using a for in loop, console.log the name of each character from the 
    members key in the fellowshipOfTheRing object.

*/

let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

for (item in fellowshipOfTheRing.members){
    //console.log(fellowshipOfTheRing[item]);
    console.log(item);
}

/* SILVER
    - Add a conditional to the for in loop that checks if the characters name does NOT begin with a vowel. Then, using string interpolation, 
    console.log either '__'s name does not begin with a vowel' or '__'s 
    name does begin with a vowel'.
*/

//My Solution - SILVER
for (item in fellowshipOfTheRing.members){
    if (item == 'Aragorn') {
        console.log(item + `'s name does begin with a vowel`);
    } else {
        console.log(item + `'s name does NOT begin with a vowel`);
    }
}

//Taylor's Solution - SILVER
for (item in fellowshipOfTheRing.members){
    if (
        item[0] !== 'A' &&
        item[0] !== 'E' &&
        item[0] !== 'I' &&
        item[0] !== 'O' &&
        item[0] !== 'U'
    ) {
        console.log(`${item}'s name does begin with a vowel`);
    } else {
        console.log(`${item}'s name does NOT begin with a vowel`);
    }
}

//Jake Green's Solution
for (item in fellowshipOfTheRing.members){
    if (
        item[0] == 'A' ||
        item[0] == 'E' ||
        item[0] == 'I' ||
        item[0] == 'O' ||
        item[0] == 'U'
    ) {
        console.log(`${item}'s name does NOT begin with a vowel`);
    } else {
        console.log(`${item}'s name does begin with a vowel`);
    }
}
/* GOLD

    - Declare a globally scoped variable of arr that is initialized as 
    an empty array. If the characters name does not begin with a vowel, 
    add that character to the new array, and then console.log the array.

*/

let arr = [];
for(item in fellowshipOfTheRing.members){
    if (item !== 'Aragorn'){
        arr.push(item);
        console.log(arr);
    } else {
        console.log(`Aragorn is the only fellowship member that name begins with a vowel`);
    }
}

//Taylor's Solution
let arr2 = []
for (item in fellowshipOfTheRing.members){
    if (
        item[0] !== 'A' &&
        item[0] !== 'E' &&
        item[0] !== 'I' &&
        item[0] !== 'O' &&
        item[0] !== 'U'
    ) {
        arr2.push(item);
        console.log(`${item}'s name does NOT begin with a vowel`);
    } else {
        console.log(`${item}'s name does begin with a vowel`);
    }
}