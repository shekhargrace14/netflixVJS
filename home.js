// 185c7d1fa7ff15b5023522fae491e666

// const URL = "https://api.themoviedb.org/3/movie/";
// const API = "185c7d1fa7ff15b5023522fae491e666";

async function apiData(query="love"){
    const resolve = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=185c7d1fa7ff15b5023522fae491e666`);
    const data = await  resolve.json();
    console.log(data)
    return data; 
}
apiData();

let input = document.querySelector("#input");
let submitInput = document.querySelector("#submit");

submitInput.addEventListener('click', function(){
    const value = input.value
    apiData(value);
    console.log("hello", value)
     
})

async function rowdata() {
    const data = await apiData();
    console.log(data,"rowdata")
    let card = "";
    data.map((value)=>{
    
    card+=`<div class="row">
                <div class="column">
                    <div class="poster">
                        <img src=${value.poster_path} alt="">
                    </div>
                </div>
                <div class="column">

                </div>
            </div>
        `

    })
    document.querySelector('.latestRow').innerHTML = card;
}
rowdata()



