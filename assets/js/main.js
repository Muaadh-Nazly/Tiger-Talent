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

// JavaScript Animations and Interactions
document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll("[data-animate]");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animation = entry.target.getAttribute("data-animate");
          entry.target.classList.add(animation);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
    });
  
    animateElements.forEach((el) => {
      observer.observe(el);
    });
  
    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item h3");
    faqItems.forEach((item) => {
      item.addEventListener("click", () => {
        const content = item.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    // Get references to the overlay and form container
    const overlay = document.getElementById("overlay");
    const formContainer = document.getElementById("form-container");
    const closeFormButton = document.getElementById("close-form");

    // Get all "Apply Now" buttons
    const applyButtons = document.querySelectorAll(".apply-btn");

    // Function to open the form
    const openForm = () => {
      // Remove the 'hidden' class to show overlay and form container
      formContainer.classList.remove("hidden");
      overlay.classList.remove("hidden");
    };

    // Function to close the form
    const closeForm = () => {
      // Add the 'hidden' class to hide overlay and form container
      overlay.classList.add("hidden");
      formContainer.classList.add("hidden");
    };

    // Add event listeners to all "Apply Now" buttons
    applyButtons.forEach(button => {
      button.addEventListener("click", openForm);
    });

    // Add event listener to close button
    closeFormButton.addEventListener("click", closeForm);

    // Add event listener to overlay to close form when clicked
    overlay.addEventListener("click", closeForm);
});
document.getElementById('cv').addEventListener('change', function(event) {
  const fileName = event.target.files[0] ? event.target.files[0].name : 'No file chosen';
  const fileNameDisplay = document.getElementById('file-name');
  fileNameDisplay.textContent = fileName;
});