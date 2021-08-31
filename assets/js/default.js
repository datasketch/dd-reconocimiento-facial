const nav = document.querySelector(".nav");
const btnHamburguer = document.querySelector(".menu-icon");
const overlay = document.querySelector(".overlay");

const menu = () => {
  btnHamburguer.classList.toggle("menu-icon--active");
  nav.classList.toggle("nav--active");
  overlay.classList.toggle("hidde");
};

btnHamburguer.addEventListener("click", menu);

overlay.addEventListener("click", menu);

window.addEventListener("scroll", function (e) {
  if (e.isTrusted && !overlay.classList.contains("hidde")) menu();
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !overlay.classList.contains("hidde")) menu();
});
