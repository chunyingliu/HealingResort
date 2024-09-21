//Declares the variables
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");

//Toggle active when hamburger be clicked
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//Remove active when hamburger be clicked again
document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click", () => {
    hambergur.classList.remove("active");
    navMenu.classList.remove("active");
}))