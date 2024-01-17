// 185c7d1fa7ff15b5023522fae491e666

// const URL = "https://api.themoviedb.org/3/movie/";
// const API = "185c7d1fa7ff15b5023522fae491e666";





// async function apiData(query="money"){
//     const resolve = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=185c7d1fa7ff15b5023522fae491e666`);
//     const data = await  resolve.json();
//     console.log(data)
//     return data; 
// }
// apiData();
// var newValue = '';

// submitInput.addEventListener('click', function(){
//     var value = input.value   
//     newValue = value;
//     console.log("hello", value)   
// })

// console.log("newValue", newValue)





// async function rowdata() {
//     const data = await apiData();
//     // console.log(data)

  
//     const latestRow = document.querySelector(".latestRow")

//     data.results.map((value)=>{
//     latestRow.insertAdjacentHTML(
//         "beforebegin",
//         `<div class="row">
//         <div class="column">
//         <div class="poster">
//             <h3>${value.title}</h3>
//         <img src=${value.poster_path} alt="">
//         </div>
//         </div>
//         </div>`
//         )
//     })


// }
// rowdata()

let input = document.querySelector("#input");
let submitInput = document.querySelector("#submit");

submitInput.addEventListener('click', function(){
    var value = input.value;   
    fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=185c7d1fa7ff15b5023522fae491e666`)
    .then((resolve)=>resolve.json())
    .then((data)=>{
    console.log(data)
    
        const latestRow = document.querySelector(".latestRow");
        data.results.map((value)=>{
            latestRow.insertAdjacentHTML("beforebegin",`
                <div class="row">
                <div class="column">
                <div class="poster">
                <h3>${value.title}</h3>
                <img src=${value.poster_path} alt="">
                </div>
                </div>
                </div>
            `)
        })
    })
})





