// Get elements
const menuToggle = document.querySelector('.menu-toggle');
const offcanvasMenu = document.querySelector('.offcanvas-menu');
const closeBtn = document.querySelector('.close-btn');

// Open menu
menuToggle.addEventListener('click', () => {
    offcanvasMenu.classList.add('active');
});

// Close menu
closeBtn.addEventListener('click', () => {
    offcanvasMenu.classList.remove('active');
});

// Optional: Close menu on clicking outside (if you want this behavior)
document.addEventListener('click', (event) => {
    if (!offcanvasMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        offcanvasMenu.classList.remove('active');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("[data-animate]");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});

let currentSlide = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.testimonial-slide');
  const totalSlides = slides.length;

  currentSlide = (currentSlide + step + totalSlides) % totalSlides;
  updateSlider();
}

function updateSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const offset = -currentSlide * (slides[0].offsetWidth + 40); // Adjust based on your margin/padding

  // Move the entire slider container
  document.querySelector('.testimonial-slider').style.transform = `translateX(${offset}px)`;
}


// const testimonials = document.querySelectorAll('.testimonial');
// let currentTestimonial = 0;

// function showNextTestimonial() {
//   testimonials[currentTestimonial].style.display = 'none';
//   currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//   testimonials[currentTestimonial].style.display = 'block';
// }

// setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds


document.querySelectorAll('.faq-title').forEach((item, index) => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';

        document.querySelectorAll('.faq-content').forEach(otherContent => {
            if (otherContent !== content) {
                otherContent.style.display = 'none';
            }
        });
    });
});
document.querySelectorAll('.faq-content').forEach(content => {
    content.style.display = 'none';
});


if (document.querySelectorAll('.faq-content').length > 0) {
    document.querySelectorAll('.faq-content')[0].style.display = 'block';
}