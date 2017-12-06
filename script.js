function get3Musics() {
    fetch("http://artingineer.dk/wordpress/wp-json/wp/v2/new_release?_embed&per_page=3")
        .then(res => res.json())
        .then(showMusics);
}

function getAllEvents() {
    fetch("http://artingineer.dk/wordpress/wp-json/wp/v2/posts?_embed")
        .then(res => res.json())
        .then(showEvents);
}


function showMusics(data) {
    let list = document.querySelector("#list");

    let template = document.querySelector("#musicTemplate").content;


    data.forEach(function (theMusic) {
       console.log(theMusic);
        let clone = template.cloneNode(true);
        let title = clone.querySelector("h1");
        let date = clone.querySelector(".date span");
        let img = clone.querySelector("img");
        let audio = clone.querySelector("audio");
        let mcontainer = clone.querySelector("#mcontainer");
        let button = clone.querySelector("button");



        title.textContent = theMusic.title.rendered;
       date.textContent = theMusic.acf.publish_date;        img.setAttribute("src",theMusic._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
       // link.setAttribute("href", "event.html?id=" + theMusic.id);
mcontainer.innerHTML=theMusic.content.rendered;


        list.appendChild(clone);
    });
}

function showEvents(mydata) {
    let list = document.querySelector("#list");

    let template = document.querySelector("#eventTemplate").content;


    data.forEach(function (theEvent) {
       console.log(theEvent);
        let clone = template.cloneNode(true);
        let title = clone.querySelector("h1");
        let date = clone.querySelector(".date span");
        let place = clone.querySelector(".place span");
        let button = clone.querySelector("button");



        title.textContent = theEvent.title.rendered;
       date.textContent = theEvent.acf.event_date;
       place.textContent = theEvent.acf.place;
       // link.setAttribute("href", "event.html?id=" + theMusic.id);

        list.appendChild(clone);
    });
}


let searchParams = new URLSearchParams(window.location.search);
let posts = searchParams.get("posts");

if(posts){
getAllEvents();
}
else{
get3Musics();}
