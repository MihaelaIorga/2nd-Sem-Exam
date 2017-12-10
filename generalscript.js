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

// homepage landing video

var vid = document.getElementById("bgvid");
// var pauseButton = document.querySelector("#polina button");

// if (window.matchMedia('(prefers-reduced-motion)').matches) {
//     vid.removeAttribute("autoplay");
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
// }

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function() {
  vid.pause();
  vidFade();
});


// pauseButton.addEventListener("click", function() {
//   vid.classList.toggle("stopfade");
//   if (vid.paused) {
//     vid.play();
//     pauseButton.innerHTML = "Pause";
//   } else {
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
//   }
// })

//equalizer

let equalizercontainer = document.querySelector('.equalizercontainer');
let equalizerbar = document.querySelector('.equalizerbar');

equalizercontainer.addEventListener('click', pauseAnimation);
equalizerbar.addEventListener('animationend', addBackground);

function pauseAnimation() {
  // vid.volume = 0;
  equalizercontainer.classList.toggle('pause');
  equalizercontainer.classList.remove('blue-background');
}

function addBackground() {
  equalizercontainer.classList.add('blue-background');
}
