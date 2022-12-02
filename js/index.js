"use strict";
const target = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const navigation = document.querySelector(".navbar__items");
const toggle = document.querySelector(".navbar__toggle--label");

//Changing Navigation Background
const initialPos = features.getBoundingClientRect().top;
window.addEventListener("scroll", (e) => {
  const currPos = features.getBoundingClientRect().top;
  if (currPos < initialPos) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

//Toggling Mobile Navigation
toggle.addEventListener("click", (e) => {
  if (navigation.classList.contains("mobile__menu")) {
    navigation.classList.remove("mobile__menu");
  } else {
    navigation.classList.add("mobile__menu");
  }
});
