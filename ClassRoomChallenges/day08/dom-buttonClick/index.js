//alert('Hello!');
//used to test script link in html

// prompt('How old are you?');
// pop-up that has a field to fill out

/*let team1Points = document.getElementById('team1points');
let team2Points = document.getElementById('team2points');

console.log(team1Points.innerText);
console.log(typeof team1Points.innerText);

console.log(team2Points.innerText);
console.log(typeof team2Points.innerText);
*/
function initializePoints(){
    team1Points.innerText = '0';
    team2Points.innerText = '0';
}

function team1Add(){
    //alert('Hello from Team1Add');
    let points = team1Points.innerText;
    points = Number(points) + 1;
    team1Points.innerText = points;
}

function team1Sub(){
    let points = team1Points.innerText;
    if (points !== '0'){
        points = Number(points) - 1;
        team1Points.innerText = points;
    } else {
        alert('0 is the lowest score');
    }
}

function team2Add(){
    //alert('Hello from Team1Add');
    let points = team2Points.innerText;
    points = Number(points) + 1;
    team2Points.innerText = points;
}

function team2Sub(){
    //alert('Hello from Team1Add');
    let points = team2Points.innerText;
    if (points !== '0'){
    points = Number(points) - 1;
    team2Points.innerText = points;
    } else {
        alert('0 is the lowest score');
    }
}


/*
see if you can create a new function: function calculatePoints takes 2 parameters teamName and points...
inside the function you need to be able to add or subtract points to the correct team
*/
/*
let teamName = document.querySelectorAll('.teamName');

function calculatePoints(teamName, points){   
    console.log(teamName, points);
    if (teamName == 'team1' && )
}

initializePoints();*/