const baseURL='https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');

const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace (e) {
    e.preventDefault(); //prevent page refresh
    console.log(e);

    fetch (baseURL)
        .then(result => (result.json))
        .then(json => {
            console.log(json);
            displayRockets(json);
        })
}

function displayRockets(rockets){
    rocket.forEach(r => {
        let rocket = document.createElement('li');
        rocket.innerText = r.name;
        spaceShips.appendChild(rocket);
    })
}