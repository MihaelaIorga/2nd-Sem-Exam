// music in a background
var audioThemesong = document.querySelector("audio#themesong");
audioThemesong.play();
audioThemesong.volume = 0.5;

// homepage landing video
var vid = document.getElementById("bgvid");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function() {
  vid.pause();
  vidFade();
});
