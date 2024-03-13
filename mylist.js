
fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666")

.then(response=>response.json())
.then(data=>{
    console.log(data.results)
    // data.map((items)=>{
    // })

    let myListItemsArray = JSON.parse(localStorage.getItem("myListItemsArray"))

    console.log(myListItemsArray, "myListItemsArray")
    let myListMatchedItems = data.results.filter((element)=>{
        // console.log(element.id, "element.id")
        return myListItemsArray.includes(element.id.toString())

    })
    let myListCarousel = document.querySelector(".myListCarousel")
    console.log(myListCarousel, "myListCarousel");
    myListMatchedItems.map((items)=>{
        myListCarousel.insertAdjacentHTML("beforeend",`
        
        <div class="column cardMain">
        <a href="./singleMoviePage.html">    
            <div class="card">
        
            <img src="https://image.tmdb.org/t/p/w500${items.backdrop_path}" alt="${items.id}">
            <div class="details">
                <h4>${items.title}</h4>
                <div class="d-flex justify-between">
                    <i class="fa-solid fa-circle-play"></i>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <i class="fa-solid fa-thumbs-down"></i>
        
                    <i class="fa-solid fa-plus" onclick="addToMyList()"></i>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul class="d-flex justify-between">
                    <li>Action</li>
                    <li>Drama</li>
                    <li>Adventure</li>
                </ul>
            </div>
            </div>
        </a>
    </div>
        `)

        
    })
    

})