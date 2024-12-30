// Modal Functionality
const modal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const loginLink = document.querySelector('nav ul li a[href="#"]');

// Open Modal
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

// Close Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close Modal on Outside Click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Carousel Functionality
const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    slides.style.transform = translateX(-${currentIndex * 100}%);
};

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        document.getElementById('formMessage').textContent = 'Thank you! We will get back to you soon.';
        document.getElementById('formMessage').style.color = 'green';
        document.getElementById('contactForm').reset();