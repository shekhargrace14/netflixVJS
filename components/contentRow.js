fetch("./components/contentRow.html")
.then(response=>response.text())
.then(pageData=>{document.querySelector("contentRow").innerHTML = pageData ;})





