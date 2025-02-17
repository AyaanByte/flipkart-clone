let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function moveSlide(n) {
    currentIndex = (currentIndex + n + slides.length) % slides.length;
    updateSlider();
}

function currentSlide(n) {
    currentIndex = n;
    updateSlider();
}

setInterval(() => moveSlide(1), 3000); // Auto-slide every 3 seconds

updateSlider();