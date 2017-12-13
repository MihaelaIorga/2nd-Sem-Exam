// burger menu
let navmenu = document.querySelector('.desktopmenu');
let body = document.querySelector('body');
let menu = document.querySelector('#burger-menu');
let logo = document.querySelector('#logo');
let opened = document.querySelector('#opened');

let isMenuOpened = false;

enableMenu();

function openMenu() {
  body.classList.toggle('overflow');

  menu.removeEventListener('click', openMenu, false);
  navmenu.addEventListener('animationend', enableMenu);

  if (isMenuOpened == false) {
    isMenuOpened = true;
    navmenu.classList.add('active');
    menu.classList.add('open');
  } else {
    isMenuOpened = false;
    navmenu.classList.add('close');
    menu.classList.remove('open');
    navmenu.addEventListener('animationend', navMenuAnimationListener);
  }
}

function navMenuAnimationListener() {
  navmenu.classList.remove('active');
  navmenu.classList.remove('close');
  navmenu.removeEventListener('animationend', navMenuAnimationListener, false);
}

function enableMenu() {
  menu.addEventListener('click', openMenu);
}

// equalizer

let equalizercontainer = document.querySelector('.equalizercontainer');
let equalizerbar = document.querySelector('.equalizerbar');

equalizercontainer.addEventListener('click', pauseAnimation);
equalizerbar.addEventListener('animationend', addBackground);

function pauseAnimation() {
  equalizercontainer.classList.toggle('pause');
  equalizercontainer.classList.remove('blue-background');

  if (audioThemesong.paused) {
      audioThemesong.play();
  } else {
      audioThemesong.pause();
  }
}

function addBackground() {
  equalizercontainer.classList.add('blue-background');
}
