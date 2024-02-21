fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666")
.then(response=> response.json())
.then(data=>{
    const imgAlt = localStorage.getItem("imgAlt")
    console.log(imgAlt)


    // console.log(data)
    // console.log(data.results)
    // const matchID = data.results.find((item)=>{
    //     item.id.toString() == imgAlt;
    // });
    const matchID = data.results.find((item) => {
        return item.id.toString() === imgAlt;
    });
    
    // const matchID = data.results.find((item) => item.id.toString() === imgAlt);

    // const matchID = data.results.map((item) => {
    //     // console.log(item.id)
    // })
    console.log(matchID)
    // console.log(matchID, "matchID" )
    // console.log(matchID,"=",imgAlt)
    if(matchID){
        const title = document.querySelector(".title")
        const overview = document.querySelector(".overview")
        const release_date = document.querySelector(".releaseData")
        const rating = document.querySelector(".rating")
        const country = document.querySelector(".country")
        const language = document.querySelector(".language")
        const poster = document.querySelector(".poster")
        
        title.innerHTML = matchID.title;
        overview.innerHTML = matchID.overview;
        release_date.innerHTML= matchID.release_date;
        rating.innerHTML = matchID.vote_average;
        country.innerHTML = matchID.origin_country || "N/A";
        language.innerHTML = matchID.original_language;
    
        poster.src= "https://image.tmdb.org/t/p/w500/" + matchID.poster_path;

    }else{
        console.log("No match found");
    }
    

    // if(imgAlt == matchID ){
    
    // }
})






