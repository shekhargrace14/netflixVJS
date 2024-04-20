fetch("./components/header.html")
.then(response=>response.text())
.then(data=>
    document.querySelector("header").innerHTML= data    
)

export let search = document.querySelector("[search]")
export let submit = document.querySelector("[submit]")
