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


//Gallery section
document.querySelectorAll('.filter-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.filter-item.active').classList.remove('active');
    item.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const backdrop = document.createElement("div");
  backdrop.classList.add("modal-backdrop");
  document.body.appendChild(backdrop);

  const buyNowButtons = document.querySelectorAll(".buy-now-button");
  const closeModalButton = document.querySelector(".close-button");
  const checkboxes = modal.querySelectorAll(".form-item input[type='checkbox']");
  const buyButtonPrice = modal.querySelector(".buy-button h4");

  // Open modal
  buyNowButtons.forEach(button => {
      button.addEventListener("click", () => {
          modal.style.display = "block";
          backdrop.style.display = "block";
      });
  });

  // Close modal
  closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
      backdrop.style.display = "none";
  });

  backdrop.addEventListener("click", () => {
      modal.style.display = "none";
      backdrop.style.display = "none";
  });

  // Update price
  const updatePrice = () => {
      let total = 39999; // Base price
      checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
              total += parseFloat(checkbox.value || 0);
          }
      });
      buyButtonPrice.textContent = `${total.toFixed(2)} €`;
  };

  checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", updatePrice);
  });
});
