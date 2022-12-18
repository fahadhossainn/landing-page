"use strict";
const header = document.querySelector(".header");
const features = document.querySelector(".features");
const testimonials = document.querySelector(".testimonials");
const previews = document.querySelector(".previews");
const footer = document.querySelector(".footer");
const navbar = document.querySelector(".navbar");
const navigation = document.querySelector(".navbar__items");
const toggle = document.querySelector(".navbar__toggle");
const links = document.querySelectorAll(".navbar__link");
const initialPos = header.getBoundingClientRect().top;

//Changing Navigation Background
window.addEventListener("scroll", (e) => {
  const currPos = header.getBoundingClientRect().top;
  if (currPos < initialPos) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// Toggling Mobile Navigation
toggle.addEventListener("click", (e) => {
  toggle.classList.toggle("hamburger");
  navigation.classList.toggle("mobile__menu");
});

links.forEach((item) => {
  item.addEventListener("click", () => {
    if (toggle.classList.contains("hamburger"))
      toggle.classList.remove("hamburger");
    navigation.classList.remove("mobile__menu");
  });
});

// Revealing Sections
const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entry.target);
  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

[features, testimonials, previews, footer].forEach((sec) => {
  observer.observe(sec);
  sec.classList.add("section__hidden");
});
