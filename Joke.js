let joke = document.querySelector('.container .joke');
let generateBtn = document.querySelector('.container button');

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let generateJoke =()=>{
fetch(url).then(res => res.json()).then(item =>{
   joke.innerHTML = item.joke;  
})
}

generateJoke();
generateBtn.addEventListener('click',generateJoke)
