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


//Modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalPerks = document.getElementById('modal-perks');
  const closeButton = document.querySelector('.close-button');

  // Open modal and populate data
  document.querySelectorAll('.buy-button').forEach((button) => {
    button.addEventListener('click', (event) => {
      const card = event.target.closest('.car-card'); // Get the card
      const title = card.dataset.title; // Extract data attributes
      const price = card.dataset.price;
      const perks = card.dataset.perks.split(','); // Convert perks to an array

      // Populate modal
      modalTitle.textContent = title;
      modalPrice.textContent = `Price: ${price}`;
      modalPerks.innerHTML = '';
      perks.forEach((perk) => {
        const li = document.createElement('li');
        li.textContent = perk.trim();
        modalPerks.appendChild(li);
      });

      // Show modal
      modal.style.display = 'block';
    });
  });

  // Close modal
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal on outside click
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
