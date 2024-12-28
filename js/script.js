// script.js

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.nav-menu');

  burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle active class to show/hide menu
  });
});

//Hero section
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slider').style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  updateSlider();
});
