
let faqrow = document.querySelectorAll(".faqrow")
let que =  document.querySelectorAll(".que")
let icon = document.querySelectorAll("ion-icon")
let ans = document.querySelectorAll(".ans")


async function fetchData(){
  const response = await fetch('faq.json')
  const data = await response.json();

  console.log(data)

  return data;

}

fetchData();

async function renderData(){ 
  const data = await fetchData();
  data.forEach((item)=>{
    icon.innerHTML = item.ques
    // console.log(item.ques)
    // console.log(item.ans)

  })
  let card = "";
  data.map((value)=>{
    card+=`<div class="row faqrow" id="faq">
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
  document.querySelector('.faqrow').innerHTML = card;

faqrow.forEach((faq, i)=>{
  
  faq.addEventListener("click", function(){
    let icon = document.querySelectorAll("ion-icon")
    
    icon.classList.toggle("iconRotate")

    for(let i=0; i < faqrow.length; i++){
      if(faqrow[i] !=faq){
        ans[i].classList.remove("active")
      }else{
        ans[i].classList.toggle("active")
      }
    }
  })
})
}

renderData()

// fetch('faq.json')
// .then((response)=>{return response.json()})
// .then((data)=>{console.log(data)
  // return data;
  
  // let dd=""
  // data.map((value)=>{
    // console.log(value.ques)
    // console.log(value.ans)
  //   dd+=` 
  //           <div class="column que d-flex justify-between align-center">
  //               <h3>${value.ques}</h3>
  //               <div class="div">
  //                   <ion-icon name="add-outline"></ion-icon>
  //               </div>
  //           </div>
  //           <div class="column ans ">
  //               <p>${value.ans}</p>
  //           </div>
  //           </div>`
  // })
  // document.getElementById("faq").innerHTML=dd;
// })

// faqrow.forEach((faq, i)=>{
  
//   faq.addEventListener("click", function(){
    
//     icon[i].classList.toggle("iconRotate")

//     for(let i=0; i < faqrow.length; i++){
//       if(faqrow[i] !=faq){
//         ans[i].classList.remove("active")
//       }else{
//         ans[i].classList.toggle("active")
//       }
//     }
//   })
// })


// faq.json api call ends


