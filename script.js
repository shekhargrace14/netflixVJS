
let faqrow = document.querySelectorAll(".faqrow")
let que =  document.querySelectorAll(".que")
let icon = document.querySelectorAll("ion-icon")
let ans = document.querySelectorAll(".ans")







fetch('faq.json')
.then((response)=>{return response.json()})
.then((data)=>{console.log(data)
  // return data;
  
  let dd=""
  data.map((value)=>{
    // console.log(value.ques)
    // console.log(value.ans)

    dd+=` 
            <div class="column que d-flex justify-between align-center">
                <h3>${value.ques}</h3>
                <div class="div">
                    <ion-icon name="add-outline"></ion-icon>
                </div>
            </div>
            <div class="column ans ">
                <p>${value.ans}</p>
            </div>
            </div>`


  })
  document.getElementById("faq").innerHTML=dd;

  faqrow.forEach((faq, i)=>{
  
    faq.addEventListener("click", function(){
      
      icon[i].classList.toggle("iconRotate")

      for(let i=0; i < faqrow.length; i++){
        if(faqrow[i] !=faq){
          ans[i].classList.remove("active")
        }else{
          ans[i].classList.toggle("active")
        }
      }
    })
  })

})



// faq.json api call ends


