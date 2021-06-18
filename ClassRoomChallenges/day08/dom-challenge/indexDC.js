/* 
BRONZE - 
Connect your js file to your html file.
In your html file, create an h1 element with an id of "title".
In your js file, grab your h1 element by its id. 
In your js file, use a property to add text to your h1 element
that says, "This is my Todo List:".
Still in your js file, use a property to style your h1 element and
make it the hex color: "#A9A9A9".
*/


let title = document.getElementById('title');

title.innerText = 'This is my Todo List:';

title.style.color = '#A9A9A9'


/* SILVER

In your html file, create a div element underneath your h1 element
with an id of "div".
In your js file, grab your div element by its id. Still in your js
file, create a new paragraph element. Inside the paragraph element
put in a dummy text (Lorem ipsum). Change the color of the paragraph
text to: "#6495ED". Nest the paragraph element inside the div
element.
*/

let div = document.getElementById('div');
div.innerHTML = `<p>Annoy the old grumpy cat, start a fight and then retreat to wash when i lose just going to dip my paw in your coffee and do a taste test - oh never mind i forgot i don't like coffee - you can have that back now lick sellotape, so ask to be pet then attack owners hand. Ask to be pet then attack owners hand make plans to dominate world and then take a nap find empty spot in cupboard and sleep all day so good now the other hand, too.</p>`;

div.style.color = '#6495ED';

/* OPTION 2 for SILVER 

let div = document.getElementById('div');
let para = document.createElement('p');
para.innerText = 'Lorem ipsum';
para.style.color = '#6495ED';
div.append(para);

*/

/* 
GOLD - 
In your html file underneath your div element, create an unorganized list
element with an id of "list".
In your js file, grab your ul element by its id. 
Create an array in your js file with 4 different items for your to-do
list. 
Now use a method to go over all the array items. For each item, 
create an li element and put the value of that item into your li element. Append 
the li element to the ul element of "list".
*/

let list = document.getElementById('list');
let arrayList = [
    'Dust', 
    'Pick up & re-home objects', 
    'Vacuum', 
    'Clean windows'];

arrayList.forEach((item) => {
    let li = document.createElement('li');
    li.innerText = item;
    list.append(li);
});

// for (let i = 0; i < listItems.length; i++){
//     listItems[i].style.fontStyle='italic';
// }