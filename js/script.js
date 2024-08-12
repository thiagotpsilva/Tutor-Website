const mobileBtn = document.querySelector('.mobile-menu-toggle i');
const mobileMenuItems = document.querySelector('.mobile-menu-items');

function showMenu() {
  mobileMenuItems.classList.toggle('active');
}
mobileBtn.addEventListener('click', showMenu);
