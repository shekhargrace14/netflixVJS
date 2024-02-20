
fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666")
.then((response)=>response.json())
.then((data)=> {
    // console.log(data)
    const heroSlider = document.querySelector(".heroSlider");
    data.results.map((value)=>{        
        heroSlider.insertAdjacentHTML("beforeend",`
        <div class="column ">
            <div class="info d-flex align-center" >
                <div class="info-box">
                    <h1>${value.original_title}</h1>
                    <p>${value.overview}</p>
                    
                    <div class="buttons">
                        <button> <i class="fa-solid fa-play"></i> Play </button>
                        <button class="gray"> <i class="fa-solid fa-circle-info"></i> Movie Info</button>
               
                    </div>
                </div>
            </div>
            <div class="bg" >

                <img src="https://image.tmdb.org/t/p/w500${value.backdrop_path}"   alt="">

            </div>
        </div>
    `)
    })
    // console.log(heroCarousel)

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

slides.forEach((slide, index)=>{
    slide.style.left = slideWidth * index + 'px';

}) 



function autoSlide(){

    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left
    // console.log(amountToMove, "hello form prev")
    
    track.style.transform = 'translateX(-'+amountToMove+')';
    currentSlide.classList.remove('current-slide')
    nextSlide.classList.add('current-slide')
    
}

setInterval(autoSlide ,2500)



})

// treanding starts here 

fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=185c7d1fa7ff15b5023522fae491e666")
.then(response => response.json())
.then(data => {
    // console.log(data.results , "contentRow data");
    const cardRow = document.querySelector(".card-row")
    // console.log(card)  
    
    data.results.map((value, index)=>{
        cardRow.insertAdjacentHTML("beforeend",`
            <div class="column card">
                <img src="https://image.tmdb.org/t/p/w500${value.backdrop_path}" alt="${value.id}">
            </div>
        `)
    })  
    const carousel = document.querySelector(".carousel")
    const cardWidth = document.querySelector(".card").getBoundingClientRect().width
    // console.log(cardWidth, "cardWidth") 
    const arrow = document.querySelectorAll(".arrow")
    arrow.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            // console.log(btn.id)
            carousel.scrollLeft = carousel.scrollLeft + (btn.id === "left" ? -cardWidth*3+8 : + +cardWidth*3 +8)
            // carousel.scrollLeft = carousel.scrollLeft + cardWidth 
            // console.log(carousel.scrollLeft, "carousel.scrollLeft")
  
        const leftArrow = document.querySelector("#left")
        const rightArrow = document.querySelector("#right")
        // console.log(leftArrow, "leftArrow")
        // console.log(rightArrow, "rightArrow")
        if(carousel.scrollLeft == 0 ){
       
            leftArrow.style.display = "none";          

        }else{
            // leftArrow.style.backgroundColor = "green";         

            leftArrow.style.display = "block";          


        }
        // if(carousel.scrollLeft + carousel.offsetWidth == carousel.scrollWidth)
        if(carousel.scrollLeft + carousel.offsetWidth +1 > carousel.scrollWidth){
            rightArrow.classList.add("hideArrow")
            // rightArrow.style.backgroundColor = "green";         
        }else{
            rightArrow.classList.remove("hideArrow")

        }
        // console.log(carousel.scrollLeft, "+", carousel.offsetWidth , "+ 1", "==", carousel.scrollLeft + carousel.offsetWidth +1, ">", carousel.scrollWidth)


    })
        
    })
    // console.log(carousel)  

    let card = document.querySelectorAll(".card")
    card.forEach((item, index)=>{
        item.addEventListener("click",()=>{
            
        })
    })
    console.log(card, "cardSingle is here")
    // console.log(carousel, "carousel is here")



})

// treanding ends here 

