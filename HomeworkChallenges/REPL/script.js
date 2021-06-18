const display = () => {
  
}
document.getElementById('imageOne').addEventListener('load', imageOne);
document.getElementById('imageTwo').addEventListener('load', imageTwo);
function getUsers(){
    fetch('https://rickandmortyapi.com/api/character/')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            //data.forEach(function(user){
                //output += `
                
                //`;
            })
            console.log(data);
        }

// body.addEventListener('load', function(){
// fetch('https://rickandmortyapi.com/api/character/')
//     .then(res => res.json())
//     .then(result => {
//         console.log(result)
//         Image.src = result.message
//     })
//     .catch(err => console.log(err))
// })

/* arrayList.forEach((item) => {
    console.log(results.image[0]);
    console.log(results.image[1]);
});
*/
