
const navSlider = function() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-unique');
  const navLinks = document.querySelectorAll('.nav-unique li')

  burger.addEventListener('click', function() {

    nav.classList.toggle('nav-active');
  

    navLinks.forEach((link, index) => {

      if(link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = `navFade 0.5s ease forwards ${index / 10 + 0.5}s`;
      }
    });

    burger.classList.toggle('toggle');
  });

}

navSlider();


