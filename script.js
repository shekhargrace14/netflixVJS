
let faqrow = document.querySelectorAll(".faqrow")
let que =  document.querySelectorAll(".que")
let icon = document.querySelectorAll("ion-icon")
// let ans = document.querySelectorAll(".ans")


// flag = 0;

faqrow.forEach((faq, i)=>{


  faq.addEventListener("click", function(){
    console.log("hello")
    let ans = faq.firstElementChild.nextElementSibling;
    console.log(ans);
    icon[i].classList.toggle("iconRotate");

    ans.classList.toggle("active")
  })
})
