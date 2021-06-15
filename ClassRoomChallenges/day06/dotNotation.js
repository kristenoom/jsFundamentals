/****
First create an object about themselves call the variable myInformation. 
It will have the following properties: 
Name: String
Age: Number
numberOfSiblings: Number
Pets: Boolean
PetNames: Array
mostRecentMovieWatched: String
carsOwned: Array {make: String, model: String}
favoriteSinger: String
***/

/***
Next Challenge is to go into a group and have everyone share their object by sharing their screen. Anyone not currently sharing the screen will create a new variable called studentInformation1 and copy their object. Then so on and so forth, creating an object for each student in your group (studentInformation2, studentInformation3, etc.). You should have an object for each person in your group. Create a new array with the variables that you created with your group.
***/

/***
For the final part -  console log a few sentences from the newly created array with the information you've all shared. Example. "In our group we have Taylor, Tony, and Marco. Marco has a Honda Civic and 2 siblings. Taylor's favorite singer is Hozier and they watched "The Woman in the Window" recently. Tony is 24 years old has a dog named Bo. 
***/

let myInformation = {
    Name: 'Kristen',
    Age: 32,
    numberOfSiblings: 1,
    Pets: false,
    PetNames: [],
    mostRecentMovieWatched: 'Pretty Guardian Sailor Moon Eternal The Movie Parts 1 and 2',
    carsOwned:         [    {make: 'Ford', model: 'Escape'},
                            {make: 'Ford', model: 'Mustang'},
                            {make: 'Toyota', model: 'RAV4 Sport'}    ],
    favoriteSinger: 'Colbie Caillat'
}
//console.log(myInformation);

let studentInformation1 = {
    Name: 'Joe',
    Age: 29,
    numberOfSiblings: 2,
    pets: true,
    petNames: ['Pryna', 'Umbra'],
    mostRecentMovieWatched: 'Mortal Kombat',
    carsOwned: [{make: 'Ford', model: 'Fiesta'}],
    favoriteSinger: 'none'
}
//console.log(studentInformation1);

let studentInformation2 = {
    Name: 'Julia',
    age: 44,
    numberOfSibling: 2,
    pets: true,
    petNames: ['Zed', 'Penelope', 'Lucy', 'Ony', 'Baby', 'Nugget', 'Pancake'],
    mostRecentMovieWatched: 'Dolittle',
    carsOwned: [{make: 'Scion', model: 'xD'}],
    favoriteSinger: 'Andy Bell'
}
//console.log(studentInformation2);

console.log(studentInformation1.Name + ` and ` + studentInformation2.Name + ` have ` + studentInformation1.numberOfSiblings + ' siblings each. While ' + myInformation.Name + ` has only ` + myInformation.numberOfSiblings + ` sibling. ` + myInformation.Name + ` recently watched ` + myInformation.mostRecentMovieWatched + `. `);
console.log(studentInformation2.Name + ` has a lot of pets, named: ` + studentInformation2.petNames[0] + ', ' + studentInformation2.petNames[1] + ', ' + studentInformation2.petNames[2] + ', ' + studentInformation2.petNames[3] + ', ' + studentInformation2.petNames[4] + ', ' + studentInformation2.petNames[5] + ', and ' + studentInformation2.petNames[6] + '.');
console.log(studentInformation1.Name + ` drives a ` + studentInformation1.carsOwned[0].make);
console.log(myInformation.Name + ` drives a ` + myInformation.carsOwned[2].make);