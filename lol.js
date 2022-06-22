const jokeE1 = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',()=>{
   generateJoke()
   
} )



async function generateJoke() {
 

 const res = await fetch('https://icanhazdadjoke.com', {
    headers: {
        'Accept': 'application/json'
    }
 })
 console.log(res)
 let data = await res.json()
 console.log(data);
 jokeE1.innerHTML = data.joke  

}


