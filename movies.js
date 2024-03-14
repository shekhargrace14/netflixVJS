fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666")
.then(resolve=> resolve.json())
.then(data =>{
    let movieHero = document.querySelector(".movieHero")
    console.log(movieHero)
    data.results.map((element)=>{
        console.log(element)
        movieHero.insertAdjacentHTML("beforeend",`
      
        `)
    })

    const track = document.querySelector('')
})



