let faqQue = document.getElementById("faqQue") 
let faqAns = document.getElementById("faqAns") 


fetch("faq.json")
  .then(response=> response.json())
  .then(data=>{ 
    // console.log(data.que); 
    // for(let i in data){
    //     console.log(i)
    // }
    data.map((value)=>{
      // console.log(value.que)
      // console.log(value.ans)



      faqQue.innerHTML = value.que
      faqAns.innerHTML = value.ans


    })


})      