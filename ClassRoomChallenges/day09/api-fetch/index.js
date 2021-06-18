let button1 = document.getElementById('button-fetch');
console.log(button1);
button1.addEventListener('click', handleClick);

function getJoke() {
    let apiURL = `https://api.chucknorris.io/jokes/random`;
    fetch(apiURL)
        .then((response) => response.json())// converting to obj literal
        //response.json = promise
        .then((result) => displayJoke(result.value))
        .catch((error) => console.log(error));
    console.log('HEY THERE FROM getJoke() function');
}

getJoke();

function displayJoke(joke) {
    console.log(joke);
    let displayFetch = document.getElementById('display-fetch');
    displayFetch.innerText = '';
    let para = document.createElement('p'); para.innerText = joke;
    displayFetch.appendChild(para);
}

function handleClick() {
    //alert('hey');
    getJoke();
}
    //What are we attaching to inorder to display the fetched results?
    //Create a P tag
    //Set the Inner-text
    //Append the P tag that was just created in 3 lines above



// async function getJokeAsync(){
//     let apiURL = `https://api.chucknorris.io/jokes/random`;
//     try {
//         const response = await fetch(apiURL); // JSON format
//         const result = await response.json();// converts JSON to OBJECT Literal
//         console.log(result);
//     } catch(error) {
//         console.log(error);
//     }
//     console.log('HEY THERE FROM getJokeAsync() function');
// }

// getJokeAsync();
// console.log(getJokeAsync.value);