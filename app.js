let dropBtn = document.querySelectorAll('.dropbtn');
const feature = document.getElementById('feature');
const company = document.getElementById('company');

let subMenu = document.getElementsByClassName('sub-menu');

dropBtn[0].addEventListener('click', () => {
  feature.classList.toggle('show');
});
dropBtn[1].addEventListener('click', () => {
  company.classList.toggle('show');
});

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    for (let i = 0; i < subMenu.length; i++) {
      let openMenu = subMenu[i];
      if (openMenu.classList.contains('show')) {
        openMenu.classList.remove('show');
      }
    }
  }
};
