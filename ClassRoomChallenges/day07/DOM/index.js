//const header = document.getElementById('header');

//console.log(header);

//header.style.color='green';
//header.innerText = 'Hello World';

// const errorList = document.getElementsByClassName('error-list');
// console.log(errorList);

// errorList[1].innerText = 'I changed error 2';
//example 1
// for (i=0; i<errorList.length; i++){
//     errorList[i].style.color='red';
// }
//example 2
// for(error of errorList) {
//     error.style.color = 'green';
// }

//example 3 looping forEach //CANNOT DO
//errorList.forEach((error) => (error.style.color = 'purple'));

// const tags = document.getElementsByTagName('p');
// console.log(tags);
// tags[0].innerText = 'I changed paragraph';

// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

//listItems[0].style.fontStyle='italic';
//listItems[1].style.fontStyle='italic';

// for (let i = 0; i < listItems.length; i++){
//     listItems[i].style.fontStyle='italic';
// }

//const header = document.querySelector('#header');
//const header = document.querySelector('h1');
//use id or tag or class

// const errorList = document.querySelector('.error-list');
// console.log(errorList);

// const errorList2 = document.querySelector('body > div > ul > li:nth-child(2)');
// console.log(errorList2);

const headerTags = document.querySelectorAll('h1');
console.log(headerTags);
console.log(headerTags[1]);

headerTags.forEach((h) => {
    h.style.color = "blue";
});

const listItems = document.querySelectorAll('.error-list');

listItems.forEach((li) => {
    li.style.fontStyle = "italic";
});