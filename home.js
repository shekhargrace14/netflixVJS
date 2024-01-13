// 185c7d1fa7ff15b5023522fae491e666

// const URL = "https://api.themoviedb.org/3/movie/";
// const API = "185c7d1fa7ff15b5023522fae491e666";

async function apiData(query){
    const resolve = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=185c7d1fa7ff15b5023522fae491e666`);
    const data = await  resolve.json();
    console.log(data)
    return data; 
}
apiData("race");


    
// })


let input = document.querySelector("#input");
let submitInput = document.querySelector("#submit");


submitInput.addEventListener('click', function(){
    const value = input.value
    apiData(value);
     
})




