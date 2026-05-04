let menuBtn = document.querySelector("#menuIcon i");
let navElement = document.querySelector("nav");
let navListElement = document.querySelectorAll("nav ul li a");

menuBtn.addEventListener("click" , () => {
    menuBtn.classList.toggle("fa-xmark");
    menuBtn.classList.toggle("fa-bars");
    navElement.classList.toggle("left-0");
})

navListElement.forEach((list, index) => {
    list.addEventListener("click" , () => {
    navElement.classList.toggle("left-0");
})
})

