const slideItems = document.querySelectorAll(".slider-box .slide");
let currentIndex = 0;
let interval;

function showSlide(index) {
    const previousIndex = (index - 1 + slideItems.length) % slideItems.length;

    slideItems.forEach(slide => {
        slide.classList.remove("slideIn", "slideOut", "active");
    });

    slideItems[previousIndex].classList.add("slideOut");
    slideItems[index].classList.add("slideIn", "active");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
    showSlide(currentIndex);
}

function startSlider() {
    interval = setInterval(nextSlide, 5000);
}

function stopSlider() {
    clearInterval(interval);
}

// Initial
showSlide(currentIndex);
startSlider();

// Buttons
document.getElementById("nextBtn").addEventListener("click", () => {
    nextSlide();
    stopSlider();
    startSlider();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    prevSlide();
    stopSlider();
    startSlider();
});

// Contact hamburger
const hamburger = document.querySelector('.hamburger');
const navBox = document.querySelector('header nav')

hamburger.addEventListener('click', () => {
    navBox.classList.toggle('active');
    setTimeout(() => {
        if (navBox.classList.contains('active')) {
            navBox.style.zIndex = '1';
        } else {
            navBox.style.zIndex = '-1';
        }
    }, 1050);
});


function scrollFunction() {
    window.addEventListener("scroll", () => {
        if (navBox.classList.contains('active')) {
            navBox.classList.remove('active');
        }
    });
}

scrollFunction();

const screenTopBtn = document.getElementById("screen-top");

// Show/hide on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    screenTopBtn.classList.add("show");
  } else {
    screenTopBtn.classList.remove("show");
  }
});

// Scroll to top on click
screenTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

