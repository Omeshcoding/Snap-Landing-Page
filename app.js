let dropBtn = document.querySelectorAll('.nav-btn');
const feature = document.getElementById('feature');
const company = document.getElementById('company');
const navBar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');
const openNav = document.getElementById('open-nav');

let subMenu = document.getElementsByClassName('sub-menu');

dropBtn[0].addEventListener('click', () => {
  feature.classList.toggle('show');
});
dropBtn[1].addEventListener('click', () => {
  company.classList.toggle('show');
});

window.onclick = function (event) {
  if (!event.target.matches('.nav-btn')) {
    for (let i = 0; i < subMenu.length; i++) {
      let openMenu = subMenu[i];
      if (openMenu.classList.contains('show')) {
        openMenu.classList.remove('show');
      }
    }
  }
};

openNav.addEventListener('click', () => {
  navBar.style.width = '250px';
  document.body.style.backgroundColor = 'rgba(0,0,0,0.6)';
});
let closeNavbar = () => {
  document.getElementById('navbar').style.width = '0';
  document.body.style.backgroundColor = '#fff';
};
closeBtn.addEventListener('click', closeNavbar);
window.addEventListener('resize', () => {
  if (window.innerWidth >= '900') {
    console.log('hello');
    closeNavbar();
  }
});
