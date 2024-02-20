const title = document.querySelector(".title")
const discription = document.querySelector(".discription")
const releaseData = document.querySelector(".releaseData")
const rating = document.querySelector(".rating")
const country = document.querySelector(".country")
const language = document.querySelector(".language")


// itemId = 

// if(imgAlt == itemId() ){
    
// }
// console.log(imgAlt, "imgAlt", "==", itemId() , "itemId()")

// async function itemId(){
//     let response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666");
//     let data =await response.json()
//     // console.log(data.results); 

//     data.results.map((item,index)=>{
//         // console.log(item.id)
//     })
// }

// itemId()

fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666")
.then(response=> response.json())
.then(data=>{
    imgAlt = localStorage.getItem("imgAlt")

    // console.log(data)
    const matchID = data.results.find((item)=>{
       item.id.toString() === imgAlt;
        
    })
    console.log(matchID)
    console.log(matchID,"=",imgAlt)
    if(matchID){
        const title = document.querySelector(".title")
        const description = document.querySelector(".description")
        const releaseData = document.querySelector(".releaseData")
        const rating = document.querySelector(".rating")
        const country = document.querySelector(".country")
        const language = document.querySelector(".language")
        
        title.innerHTML = matchID.name;
        overview.innerHTML = matchID.overview;
        releaseData.innerHTML= matchID.first_air_date;
        rating.innerHTML = matchID.voter_average;
        country.innerHTML = matchID.origin_country || "N/A";
        language.innerHTML = matchID.origin_language;
        poster.src= "https://image.tmdb.org/t/p/w500/" + matchingId.poster_path;

    }else{
        console.log("No match found");
    }
    

    // if(imgAlt == matchID ){
    
    // }
})


