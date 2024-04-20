

fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        const heroSlider = document.querySelector(".heroSlider");
        data.results.map((value) => {
            heroSlider.insertAdjacentHTML("beforeend", `
        <div class="column ">
            <div class=" container info d-flex align-center" >
                <div class="info-box ">
                    <h1>${value.original_title}</h1>
                    <p>${value.overview}</p>
                    
                    <div class="buttons">
                        <button> <i class="fa-solid fa-play"></i> Play </button>
                        <a href="./singleMoviePage.html">
                            <button class="gray infoBtn" id=${value.id}> <i class="fa-solid fa-circle-info"></i> Movie Info</button>
                        </a>
               
                    </div>
                </div>
            </div>
            <div class="bg" >

                <img src="https://image.tmdb.org/t/p/w500${value.backdrop_path}"   alt="">

            </div>
        </div>
        `)
            let infoBtn = document.querySelectorAll(".infoBtn");
            infoBtn.forEach((item) => {
                item.addEventListener("click", () => {

                    let imgAlt = item.id
                    localStorage.setItem("imgAlt", imgAlt)
                    console.log(item.id, " =", imgAlt)
                    // console.log(imgAlt)


                })
            })



            // console.log(infoBtn);


        })

        const track = document.querySelector('.heroSlider');
        const slides = Array.from(track.children)
        // console.log(slides)
        const firstSlide = slides[0]
        // const nextButton = document.querySelector('.next')
        // const prevButton = document.querySelector('.prev')
        const slideWidth = slides[0].getBoundingClientRect().width;

        // console.log(firstSlide, 'this is first slide')

        window.addEventListener("load", () => {
            firstSlide.classList.add('current-slide');

        });

        // arrange slides next to each other 

        // slides[0].style.left = slideWidth * 0 + 'px';
        // slides[1].style.left = slideWidth * 1 + 'px';
        // slides[2].style.left = slideWidth * 2 + 'px';

        slides.forEach((slide, index) => {
            slide.style.left = slideWidth * index + 'px';

        })

        function autoSlide() {

            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;
            const amountToMove = nextSlide.style.left
            // console.log(amountToMove, "hello form prev")

            track.style.transform = 'translateX(-' + amountToMove + ')';
            currentSlide.classList.remove('current-slide')
            nextSlide.classList.add('current-slide')

        }

        setInterval(autoSlide, 2500)

    })

// treanding starts here 

fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666")
    .then(response => response.json())
    .then(data => {
        // console.log(data.results , "contentRow data");
        const carousel1 = document.querySelector(".carousel1")
        // console.log(card)  

        data.results.map((value, index) => {

            carousel1.insertAdjacentHTML("beforeend", `
        
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
        // function addToMyList() {
        //     // console.log("add to my list!")
        //     alert("add to my list!")
        // }
        // addToMyList()
        const carousel = document.querySelector(".carousel")
        const cardWidth = document.querySelector(".card").getBoundingClientRect().width
        // console.log(cardWidth, "cardWidth") 
        const arrow = document.querySelectorAll(".arrow")
        arrow.forEach((btn) => {
            btn.addEventListener("click", () => {
                // console.log(btn.id)
                carousel.scrollLeft = carousel.scrollLeft + (btn.id === "left" ? -cardWidth * 3 + 8 : + +cardWidth * 3 + 8)
                // carousel.scrollLeft = carousel.scrollLeft + cardWidth 
                // console.log(carousel.scrollLeft, "carousel.scrollLeft")

                const leftArrow = document.querySelector("#left")
                const rightArrow = document.querySelector("#right")
                // console.log(leftArrow, "leftArrow")
                // console.log(rightArrow, "rightArrow")
                if (carousel.scrollLeft == 0) {

                    leftArrow.style.display = "none";

                } else {
                    // leftArrow.style.backgroundColor = "green";         

                    leftArrow.style.display = "block";
                }
                // if(carousel.scrollLeft + carousel.offsetWidth == carousel.scrollWidth)
                if (carousel.scrollLeft + carousel.offsetWidth + 1 > carousel.scrollWidth) {
                    rightArrow.classList.add("hideArrow")
                    // rightArrow.style.backgroundColor = "green";         
                } else {
                    rightArrow.classList.remove("hideArrow")

                }
                // console.log(carousel.scrollLeft, "+", carousel.offsetWidth , "+ 1", "==", carousel.scrollLeft + carousel.offsetWidth +1, ">", carousel.scrollWidth)
            })

        })
        // console.log(carousel)  


        // GET ID FROM IMAGE AND SHOW CONTENT IN NEXT PAGE START
        let card = document.querySelectorAll(".card")
        // console.log(card)
        card.forEach((item, index) => {
            item.addEventListener("click", () => {
                let imgAlt = item.firstElementChild.alt;
                // alert("card")

                localStorage.setItem("imgAlt", imgAlt)
                console.log(imgAlt, "imgAlt is here")
            })
        })

        // GET ID FROM IMAGE AND SHOW CONTENT IN NEXT PAGE END

    })

// treanding ends here 

// =========================x===============================

// search starts here 
import { submit, search } from "../components/header.js";

console.log(search)
console.log(submit)
// search ends here 