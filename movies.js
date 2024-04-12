
let apiEndPoints = [
    "https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62",
    "https://api.themoviedb.org/3/trending/movie/day?api_key=d7667b78097516f5e82e6955576dcf62",
    "https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62",
    "https://api.themoviedb.org/3/trending/movie/day?api_key=d7667b78097516f5e82e6955576dcf62",
]

let carousel = [
    ".carousel1",
    ".carousel2",
    ".carousel3",
    ".carousel4"

]

apiEndPoints.forEach((apiEndPoint, index) => {
    const insertPosition = index == 1 || index == 3 ? "afterbegin": "beforeend";
    fetchAndDisplay(apiEndPoint, carousel[index],insertPosition , handelImageClick);
});

function fetchAndDisplay(apiEndPoint, carousel, insertPosition ="beforeend",handelImageClick) {
    fetch(apiEndPoint)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            let box = document.querySelector(carousel)
            data.results.map((value) => {
                box.insertAdjacentHTML(insertPosition, `
            <div class="column cardMain">
            <a href="./singleMoviePage.html">    
                <div class="card">
            
                    <img src="https://image.tmdb.org/t/p/w500${value.backdrop_path}" alt="${value.id}" data-author="${apiEndPoint}"/>
                    <div class="details">
                        <h5>${value.title}</h5>
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
            let images = box.querySelectorAll("img")
            images.forEach(image=>{
                console.log(image)
                image.addEventListener("click",handelImageClick)
            })
        })
}

fetchAndDisplay()

function handelImageClick(event) {
    let imageId = event.target.getAttribute("alt"); 
    let targetedApi = event.target.getAttribute("data-author"); 
    console.log(imageId,"image clicked")
    console.log(targetedApi,"targetedApi clicked")
    localStorage.setItem("imageId", imageId)
    localStorage.setItem("targetedApi", targetedApi)



}
// slider starts here 

let sliders = document.querySelectorAll(".slider")
console.log(sliders)

sliders.forEach((slider, index)=>{
    let carousel = slider.querySelector(".carousel")
    console.log(slider)
    let switchLeft = slider.querySelector("#left")
    let switchRight = slider.querySelector("#right")
    console.log(switchLeft)
    console.log(switchRight)
    switchLeft.addEventListener("click",()=>{
        console.log( index,  "left")
        carousel.scrollLeft -= slider.clientWidth
    })
    switchRight.addEventListener("click",()=>{
        console.log(index,"right")
        carousel.scrollLeft += slider.clientWidth

    })
})

// slider ends here 


