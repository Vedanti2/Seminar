document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlide();
    }
  
    function updateSlide() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[currentSlide].style.display = 'block';
    }
  
    // Start the background image slider
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  });
  