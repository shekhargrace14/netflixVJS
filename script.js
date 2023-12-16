let faqQue = document.getElementById("faqQue") 
let faqAns = document.getElementById("faqAns") 


fetch("faq.json")
  .then(response=> response.json())
  .then(data=>{ 
    console.log(data); 
    for(let i in data){
        console.log(i)
    }
})      