const navMenu = document.querySelector(".menu");
const navList = document.querySelector(".nav__list");

navMenu.addEventListener("click", () => {
    navList.classList.toggle("nav__list--visible");
})
