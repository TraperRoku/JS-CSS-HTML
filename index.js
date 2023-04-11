const containerEl = document.querySelector(".container");
const buttonEl= document.getElementById("submit");
const containerSecondEl = document.querySelector(".secondContainer")
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn")

buttonEl.addEventListener("click", ()=> {
containerSecondEl.classList.remove("hidden")
containerEl.style.display = "none"
    })

rates.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        rating.innerHTML=rate.innerHTML 
    })
 
})


