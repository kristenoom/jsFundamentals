//var myName = "Kristen";
//keyword name = value;
//try to give your variable a decent/meaningful name
//name your variables with intention!!

let myName = "Kristen";
let person1 = 'John';
let person2 = `Brenda`;
let animal = "tiger";

const weather = "cloudy";
console.log("Weather", weather);

//weather = "rainy"; < produces an error when not commented out
//because weather is a const type variable it cannot be changed
//console.log("Weather changed:", weather); //error

console.log("My name is", myName);



// let myName = "Steve"; < not needed as let has already defined myName

//Reassigning a variable we do not need to reinitialize the bucket
myName = "Steve";
console.log("My name changed to", myName);

let phrase = "Good morning";
console.log(phrase,myName);     //works fine
console.log(phrase+" "+myName); //works fine
console.log(`${phrase}`+ ' ' +`${myName}`); //works fine

let example = "ThE FoX JUmpeD OveR the Turtle";
//function
console.log(example.toLowerCase());
console.log(example.toUpperCase());

let name1 = "Marco";
//let name2 = "marco";
//name2 = "Marco";
name2 = "MaRcO"

let match = name1.toLowerCase() === name2.toLowerCase();
console.log("Do Names Match:", match);

console.log('Does example have this word in it?:', example.includes('FoX'));
console.log('Does example have this word in it?:', example.toLowerCase().includes("fox"));
console.log("Length of Example:", example.length);