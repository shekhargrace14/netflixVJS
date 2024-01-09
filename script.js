
let faqrow = document.querySelectorAll(".faqrow")
let que =  document.querySelectorAll(".que")
let icon = document.querySelectorAll("ion-icon")
let ans = document.querySelectorAll(".ans")


// async function fetchData(){
//   const response = await fetch('faq.json')
//   const data = await response.json();

//   console.log(data)

//   return data;

// }

// fetchData();

// async function renderData(){ 
//   const data = await fetchData();
//   data.forEach((item)=>{
//     icon.innerHTML = item.ques
//     // console.log(item.ques)
//     // console.log(item.ans)

//   })
//   let card = "";
//   data.map((value)=>{
//     card+=`<div class="row faqrow" id="faq">
//           <div class="column que d-flex justify-between align-center">
//               <h3>${value.ques}</h3>
//               <div class="div">
//                   <ion-icon name="add-outline"></ion-icon>
//               </div>
//           </div>
//           <div class="column ans ">
//               <p>${value.ans}</p>
//           </div>
//       </div>`
//   })
//   document.querySelector('.faqrow').innerHTML = card;



// faqrow.forEach((faq, i)=>{
  
//   faq.addEventListener("click", function(){
//     let icon = document.querySelectorAll("ion-icon")
    
//     icon.classList.toggle("iconRotate")

//     for(let i=0; i < faqrow.length; i++){
//       if(faqrow[i] !=faq){
//         ans[i].classList.remove("active")
//       }else{
//         ans[i].classList.toggle("active")
//       }
//     }
//   })
// })


// }

// renderData()


// faq.json api call ends



faqrow.forEach((item, i)=>{
  
  item.addEventListener("click",function(){
    // icon[i-1].classList.toggle("iconRotate")
  
    
    // ans[i-1].classList.toggle("active");

    for(let j=0; j< faqrow.length; j++){
      if(faqrow[j+1] !=item){
        ans[j].classList.remove("active");
        icon[j].classList.remove("iconRotate")

      }else{
        ans[j].classList.toggle("active")
        icon[j].classList.toggle("iconRotate")

      }
    }

  console.log(icon)
    
  })
})


