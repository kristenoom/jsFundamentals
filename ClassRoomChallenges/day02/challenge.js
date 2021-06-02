/*
Challenge! 
BRONZE
Write two variables. One will store your name and another will store a friend's name. 
Find out what property you can use to check how long the names are. 
Console log how many letters are in each name.
SILVER
Expand on what you have already done and write a conditional to see who has 
the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
GOLD
In the console log include how many letters difference there are between the 
names.Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been 
mentioned so far. See if you can add that to your conditional!
*/

//BRONZE
var myName = "Kristen";
var friendName = "Megan";
console.log('My name,', myName, `is`, myName.length, 'characters long.');
console.log('My friends name,', friendName, `is`, friendName.length, 'characters long.');

//SILVER
if (myName.length > 6 && friendName.length < 6){   
    console.log("Congrats, your name is longer!");
} else {
    console.log("Sorry, your name is shorter.");
}


//GOLD
console.log("My name is longer by", myName.length - friendName.length, "letters.");
// 7 - 5 = 2


//INSTRUCTOR CODE
//Bronze
let myName = "Taylor";
let friend = "Tony";
console.log(myName.length);
console.log(friend.length);
//Silver
if(myName.length > friend.length) {
    console.log(`${myName}'s name is longer than ${friend}'s name.`)
} else {
    console.log(`${friend}'s name is longer than ${myName}'s name.`)
}
//Gold
let myName = "Jon";
let friend = "Ron";
if (myName.length > friend.length) {
    console.log(`My name is longer than ${friend}'s by ${myName.length - friend.length} letters`)
} else if (myName.length < friend.length){
    console.log(`${friend}'s name is longer than mine by ${friend.length - myName.length}`)
} else {
    console.log('Our names are the same length.')
}
//Platinum
let myName = "Taylor";
let friend = "Tony";
let nameDebate = (myName.length > friend.length) ? (`${myName} is bigger by ${myName.length - friend.length} letters`) : (friend.length > myName.length) ? (`${friend} is bigger by ${friend.length - myName.length} letters`) 
: ("Our names are the same length")
console.log(nameDebate);