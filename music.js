// albums script
function getAllAlbums() {
  fetch("http://artingineer.dk/wordpress/wp-json/wp/v2/album?_embed")
    .then(res => res.json())
    .then(showAlbums);
}

function showAlbums(data) {
  let list = document.querySelector("#list1");

  let template = document.querySelector("#albumTemplate").content;


  data.forEach(function(theAlbum) {
    console.log(theAlbum);
    let clone = template.cloneNode(true);
    let title = clone.querySelector("h2");
    let date = clone.querySelector(".date span");
    let img = clone.querySelector("img");
    let mcontainer = clone.querySelector("#mcontainer");



    title.textContent = theAlbum.title.rendered;
    date.textContent = theAlbum.acf.publish_date;
    img.setAttribute("src", theAlbum._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
    mcontainer.innerHTML = theAlbum.content.rendered;
    clone.querySelector(".dBookNow").setAttribute("href", theAlbum.acf.listen_link);



    list.appendChild(clone);
  });
}

getAllAlbums();

// music script

function getAllMusics() {
  fetch("http://artingineer.dk/wordpress/wp-json/wp/v2/new_release?_embed")
    .then(res => res.json())
    .then(showMusics);
}

function showMusics(data) {
  let list = document.querySelector("#list");

  let template = document.querySelector("#musicTemplate").content;


  data.forEach(function(theMusic) {
    console.log(theMusic);
    let clone = template.cloneNode(true);
    let title = clone.querySelector("h2");
    let date = clone.querySelector(".date span");
    let img = clone.querySelector("img");
    let mcontainer = clone.querySelector("#mcontainer");
    let button = clone.querySelector("button");
    let playButton = clone.querySelector(".playbtn");



    title.textContent = theMusic.title.rendered;
    date.textContent = theMusic.acf.publish_date;
    img.setAttribute("src", theMusic._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
    mcontainer.innerHTML = theMusic.content.rendered;
    clone.querySelector(".dBookNow").setAttribute("href", theMusic.acf.buy);

    // button play
    playButton.addEventListener('click', function(evt) {
      let audioElem = evt.target.parentElement.parentElement.querySelector('audio');
      // let audios = document.querySelectorAll('audio');
      // audios.forEach(function(elem){
      //   if(audioElem != elem){
      //       elem.pause()
      //       elem.parentElement.parentElement.querySelector('.playBtn').src="img/pausebtn.png";
      //   }
      //
      // })
      if (audioElem.paused) {
        audioElem.play();
        playButton.src = "img/pausebtn.png";
      } else {
        audioElem.pause();
        playButton.src = "img/playbtn.png";
      }
    })


    list.appendChild(clone);
  });
}

getAllMusics();
