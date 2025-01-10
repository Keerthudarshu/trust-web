document.addEventListener("DOMContentLoaded", () => {
    // Highlight the active menu item
    const menuLinks = document.querySelectorAll(".menu a");
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
      });
    });
  });
  let currentSlide = 0;

function showSlides(index) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  // Reset all slides and dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Adjust index
  currentSlide = (index + slides.length) % slides.length;

  // Display the current slide and activate the corresponding dot
  slides[currentSlide].style.display = "block";
  dots[currentSlide].className += " active";
}

function changeSlide(step) {
  showSlides(currentSlide + step);
}

// Initialize slideshow
function initSlideshow() {
  const slides = document.getElementsByClassName("slide");
  const dotsContainer = document.getElementById("dots");

  // Create dot indicators dynamically
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", () => showSlides(i));
    dotsContainer.appendChild(dot);
  }

  // Show the first slide
  showSlides(0);

  // Auto slideshow (optional)
  setInterval(() => {
    changeSlide(1);
  }, 5000); // Change slide every 5 seconds
}

// Call initSlideshow when DOM is loaded
document.addEventListener("DOMContentLoaded", initSlideshow);
