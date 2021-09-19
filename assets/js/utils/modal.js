"use strict";

// Elements
const initiativesParent = document.querySelector(".initiatives-container");
const modal = document.querySelector(".modal");
const buttonClose = document.querySelector(".modal-button--close");
const overlay = document.querySelector(".modal-overlay");

const openModal = () => {
  modal.classList.remove("modal-hidden");
  overlay.classList.remove("modal-overlay-hidden");
};

const closeModal = () => {
  modal.classList.add("modal-hidden");
  overlay.classList.add("modal-overlay-hidden");
};

initiativesParent.addEventListener("click", function (e) {
  const childElement = e.target.closest(".modal-button--open");
  if (!childElement) return;

  // show data per index json
  const id = childElement.getAttribute("data-id");
  openModal();
});

buttonClose.addEventListener("click", closeModal);

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !overlay.classList.contains("modal-overlay-hidden"))
    closeModal();
});

overlay.addEventListener("click", closeModal);
