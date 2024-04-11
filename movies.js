
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
    ".carousel4",
    // ".carouselBox3",
    // ".carouselBox4",
    // ".carouselBox5"
]

apiEndPoints.forEach((apiEndPoint, index) => {
    const insertPosition = index == 1 || index == 3 ? "afterbegin": "beforeend";
    fetchAndDisplay(apiEndPoint, carousel[index],insertPosition , handelImageClick);
});

function fetchAndDisplay(apiEndPoint, carousel, insertPosition ="beforeend") {
    fetch(apiEndPoint)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let box = document.querySelector(carousel)
            data.results.map((value) => {
                box.insertAdjacentHTML(insertPosition, `
            <div class="column cardMain">
            <a href="./singleMoviePage.html">    
                <div class="card">
            
                    <img src="https://image.tmdb.org/t/p/w500${value.backdrop_path}" alt="${value.id}">
                    <div class="details">
                        <h4>${value.title}</h4>
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

}
fetchAndDisplay()

function handelImageClick() {

}
// slider starts here 
// slider ends here 
