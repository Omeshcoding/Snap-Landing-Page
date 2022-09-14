let navBtn = document.querySelectorAll('.nav-btn');
const feature = document.getElementById('feature');
const company = document.getElementById('company');
const navBar = document.getElementById('navbar');

const openNav = document.getElementById('menu-bars');
const body = document.getElementById('body');

let subMenu = document.getElementsByClassName('sub-menu');

navBtn[0].addEventListener('click', () => {
  feature.classList.toggle('show');
});
navBtn[1].addEventListener('click', () => {
  company.classList.toggle('show');
});

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  openNav.classList.toggle('change');
  // Toggle: Menu Active
  navBar.classList.toggle('overlay-active');
  if (navBar.classList.contains('overlay-active')) {
    navBar.classList.replace('overlay-slide-left', 'overlay-slide-right');

    body.style.backgroundColor = 'rgba(0,0,0,0.6)';

    // Animate-In - Nav Items
  } else {
    navBar.classList.replace('overlay-slide-right', 'overlay-slide-left');

    body.style.backgroundColor = '#fff';
  }
}
// Submenu hide and show
window.onclick = function (event) {
  if (!event.target.matches('.nav-btn')) {
    for (let i = 0; i < subMenu.length; i++) {
      // let openMenu = subMenu[i];
      if (subMenu[i].classList.contains('show')) {
        subMenu[i].classList.remove('show');
      }
    }
  }
};
window.addEventListener('resize', () => {
  if (window.innerWidth >= '900') {
    console.log('hello');
    body.style.backgroundColor = '#fff';
  }
});
// Event Listeners
openNav.addEventListener('click', toggleNav);
