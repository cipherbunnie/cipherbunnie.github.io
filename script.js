function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  window.addEventListener('scroll', function() {
    var header = document.querySelector("header");
    var scrollPosition = window.scrollY;});
}