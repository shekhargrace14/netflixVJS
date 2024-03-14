
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
    
    function cardRowCreation(){

  
    let cardRow = document.querySelector(".cardRow")
    // console.log(cardRow, "cardRow");
    myListMatchedItems.map((items)=>{
        cardRow.insertAdjacentHTML("beforeend",`
        
        <div class="column cardMain">
            
                <div class="card d-flex">
                    <div class="image">

                        <img src="https://image.tmdb.org/t/p/w500${items.poster_path}" alt="${items.id}">
                    </div>

                    <div class="details">
                        <h3>${items.title}</h3>
                        <p class="overview">${items.overview}</p>
                        <p class="release_date">${items.release_date}</p>
                        <p class="vote_average">${items.vote_average}</p>
                        <p class="origin_country">${items.origin_country}</p>
                        <p class="original_language">${items.original_language}</p>
                        <p class="vote_average">${items.vote_average}</p>
                        <p class="vote_count">${items.vote_count}</p>
                        <button class="removeFromMyListBtn" id=${items.id}>Remove from My List</button>
                    </div>
                </div>
         
        </div>`)
       
    })
    }
    cardRowCreation()
    let removeFromMyListBtn =  document.querySelectorAll(".removeFromMyListBtn")
    // console.log(removeFromMyListBtn, "removeFromMyListBtn")
    removeFromMyListBtn.forEach((item)=>{
        item.addEventListener("click",()=>{
            console.log(item.id, "item")
            let myListBeforeDeleting = JSON.parse(localStorage.getItem("myListItemsArray"));
            console.log(myListBeforeDeleting, "myListBeforeDeleting")
            let itemToRemoveFromMyList = item.id
            console.log(itemToRemoveFromMyList, "itemToRemoveFromMyList")

            let myListAfterDeletingItem = []
            myListAfterDeletingItem = myListBeforeDeleting.filter(item=>item !== itemToRemoveFromMyList)
            console.log(myListAfterDeletingItem, "myListAfterDeletingItem")

            localStorage.setItem("myListItemsArray", JSON.stringify(myListAfterDeletingItem))

            
            let cardRow = document.querySelector(".cardRow")
            cardRow.innerHTML = ' ';
            
            cardRowCreation()

            // myListItemsArray = 
            // myListItemsArray.reomve(item.id)
            // console.log(localStorage.setItem("myListItemsArray", JSON.stringify(myListAfterDeletingItem)))
        })
    })

})