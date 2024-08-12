// Toggle Mobile menu

const mobileBtn = document.querySelector('.mobile-menu-toggle i');
const mobileMenuItems = document.querySelector('.mobile-menu-items');

function showMenu() {
  mobileMenuItems.classList.toggle('active');
}
mobileBtn.addEventListener('click', showMenu);

// Change Navbar background on scroll
const navbar = document.querySelector('.navbar');
function menuScroll() {
  if (scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
}
window.addEventListener('scroll', menuScroll);
