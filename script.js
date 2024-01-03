
let faqrow = document.querySelector(".faqrow")
let que =  document.querySelector(".que")
let icon = document.querySelector("ion-icon")
let ans = document.querySelector(".ans")


flag = 0;
faqrow.addEventListener("click", function(){
  console.log("hello")
  if(flag === 0 ){
    ans.style.backgroundColor = "red !important";
    flag = 1
    icon.style.transform = "rotate(135deg)";
  }else{
    icon.style.transform = "rotate(0)";
    flag = 0
  }
    ans.classList.toggle("active")
})
