
/*slider gallery*/
let currentIndex = 0;
  const slides = document.querySelectorAll('.gallery-item');

  function showSlide(index) {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }

    currentIndex = index;
    const offset = -currentIndex * (100 / slides.length);
    document.querySelector('.gallery').style.transform = `translateX(${offset}%)`;
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }