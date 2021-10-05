const hamburger = document.getElementById("hamburger");
const navUnique = document.getElementById("nav-unique");

hamburger.addEventListener('click', () => {
  navUnique.classList.toggle('show');
});