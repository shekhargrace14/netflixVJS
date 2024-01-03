alert("hello")

var que = document.querySelector(".que")
var ans = document.querySelector(".ans")
var icon = document.querySelector("ion-icon")

var flag = 1;
que.addEventListener("click",function(){
if(flag ===1 ){
  icon.style.backgroundColor = "red";
  flag = 0
  icon.style.transform = "rotate(135deg)";
}else{
  icon.style.transform = "rotate(0)";
  flag = 1
}
  // ans.classList.toggle("active")
})




// console.log(flag)