/* 
    - Use the provided HTML, CSS, and JS files to fetch images of two separate characters from the Rick and Morty API. You will not need to edit/change anything in the HTML file, everything you need is already there.
    - Your fetch call to the specified endpoint is also already defined in the script.js file. You will need to complete the fetch call by including the .then() statements.
    - Define a function named displayResults in the global scope of your document. This function will be passed the jsonified data from the fetch.
    		Inside the display function you will need to:
    				1. Declare two variables named imgOne and imgTwo, and use those variables to store two images from the API data that was fetched and passed to the displayResults funciton.
    				2. Acces each image element from the index.html file, and set the src to be the image link you stored in a variable during step 1.
    
    After you are seeing images of two different characters, use the attached style.css file to style each image with the following properties:
    1. Each image must have a border-radius
    2. Each image must have a border
    3. Each image must be centered
*/

function getImage() {
    let apiURL = `https://rickandmortyapi.com/api/character`;
    fetch(apiURL)
        .then((response) => response.json())
        .then((result) => console.log(result.results[i].image))
    //    .then((result) => displayImage1(result.results[i].image))
    //    .then((result) => displayImage2(result.results[i].image))
        .catch((error) => console.log(error));
    console.log('hey there from getImage() function');
}

getImage();

function displayImage1(img1) {
    console.log(img1);
    let displayImage1 = document.getElementById('imageOne');
    displayImage1.innerText = '';
    let imgSrc1 = document.createElement('p');
    imgSrc1.innerText = img1;
    displayImage1.appendChild(imgSrc1);
}
function displayImage2(img2) {
    console.log(img2);
    let displayImage2 = document.getElementById('imageTwo');
    displayImage2.innerText = '';
    let imgSrc2 = document.createElement('p');
    imgSrc2.innerText = img1;
    displayImage2.appendChild(imgSrc2);
}

/*function handleClick() {
    //alert('hey');
    getJoke();
}*/