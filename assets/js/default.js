const nav = document.querySelector(".nav");
const btnHamburguer = document.querySelector(".menu-icon");

btnHamburguer.addEventListener("click", function () {
  btnHamburguer.classList.toggle("menu-icon--active");
  nav.classList.toggle("nav--active");
});
