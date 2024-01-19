// 185c7d1fa7ff15b5023522fae491e666

// const URL = "https://api.themoviedb.org/3/search/movie";
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

// let input = document.querySelector("#input");
// let submitInput = document.querySelector("#submit");

// submitInput.addEventListener('click', function(){
//     var value = input.value;   
//     console.log(value)


//     fetch(`${URL}?query=${value}&api_key=${API}`)
//     .then((resolve)=>resolve.json())
//     .then((data)=>{
//     console.log(data)
    
//         const latestRow = document.querySelector(".latestRow");
//         data.results.map((value)=>{
//             latestRow.insertAdjacentHTML("beforebegin",`
//                 <div class="row">
//                 <div class="column">
//                 <div class="poster">
//                 <h3>${value.title}</h3>
//                 <img src=${value.poster_path} alt="">
//                 </div>
//                 </div>
//                 </div>
//             `)
//         })
//     })
//     value = " ";
//     console.log(value)
// })





fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666")
.then((response)=>response.json()).then((data)=> {
    console.log(data)
    const heroCarousel = document.querySelector(".heroCarousel");
    data.results.map((value)=>{        
        heroCarousel.insertAdjacentHTML("beforeend",`
        <div class="row">
            <div class="innerRow d-flex content-Box">
                <div class="column info" >
                    <h4>${value.original_title}</h4>
                    <p>${value.overview}</p>
                </div>
                <div class="column " >
        
                </div>
            </div>
            <div class="innerRow homeHeroBG">
                <div class="">
                    <img src="https://image.tmdb.org/t/p/w500${value.backdrop_path}"   alt="">
                </div>
            </div>
        </div>
        
    `)
    })
    console.log(heroCarousel)

})