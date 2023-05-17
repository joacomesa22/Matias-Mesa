// Funcionalidad Barras
const btnMenu = document.querySelector(".btn");
const navMenu = document.querySelector(".nav");

btnMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__link").forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  })
);

// Animacion Barras
document.querySelector(".btn").addEventListener("click", animacionBarras);

let line1 = document.querySelector(".btn__line1");
let line2 = document.querySelector(".btn__line2");
let line3 = document.querySelector(".btn__line3");

function animacionBarras() {
  line1.classList.toggle("btn__line1-active");
  line2.classList.toggle("btn__line2-active");
  line3.classList.toggle("btn__line3-active");
}

// Navbar Scroll Bg
window.addEventListener("scroll", headerBg);
function headerBg() {
  const header = document.querySelector("#header");
  const scrollVal = window.scrollY;
  if (scrollVal > 700) {
    header.classList.add("header__bg");
  } else {
    header.classList.remove("header__bg");
  }
}
