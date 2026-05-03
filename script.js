let menuBtn = document.querySelector("#menuIcon i");
let navElement = document.querySelector("nav");
menuBtn.addEventListener("click" , () => {
    menuBtn.classList.toggle("fa-xmark");
    menuBtn.classList.toggle("fa-bars");
    navElement.classList.toggle("left-0");
})