let navmenu = document.querySelector('.desktopmenu');
let body = document.querySelector('body');
let menu = document.querySelector('#burger-menu');
let logo = document.querySelector('#logo');

menu.addEventListener('click', openMenu);

function openMenu() {
  console.log('click');
  menu.classList.toggle('open');
  navmenu.classList.toggle('active');
  body.classList.toggle('overflow');

  if (logo.style.display == 'none') {
    logo.style.display = 'block';
  } else {
    logo.style.display = 'none';
  }
}
