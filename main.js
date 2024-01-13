
fetch("faq.json")
.then((res) => res.json())
.then((data) => {
    data.map((faq) => {
        console.log(faq.ques);

        const faqrow1 = document.querySelector(".faqrow1");
        faqrow1.insertAdjacentHTML("beforebegin", `<div class="row faqrow" id="faq">
        <div class="column que d-flex justify-between align-center">
            <h3>${faq.ques}</h3>
            <div class="div">
                <ion-icon name="add-outline"></ion-icon>
            </div>
        </div>
        <div class="column ans">
            <p>${faq.ans}</p>
        </div>
    </div>`)
    })
    const faqrow = document.querySelectorAll(".faqrow");
    faqrow.forEach((f) => {
        const ans = f.lastElementChild;
        const icon = f.firstElementChild.lastElementChild.firstElementChild;
        f.addEventListener("click", () => {
            ans.classList.toggle("active");
            icon.classList.toggle("iconRotate");
        })
    }) 
})