fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666")
.then(response => response.json())
.then(data => {
    console.log(data.results , "contentRow data");
    const card = document.querySelector(".card-row")
    console.log(card)  
    
    data.results.map((value, index)=>{
        card.insertAdjacentHTML("beforeend",`
            <div class="column card">

                <img src="https://image.tmdb.org/t/p/w500${value.poster_path}" alt="">
            </div>
        `)
    })  
    console.log(card)  
})
