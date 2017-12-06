function getAllEvents() {
    fetch("http://artingineer.dk/wordpress/wp-json/wp/v2/posts?_embed")
        .then(res => res.json())
        .then(showEvents);
}



function showEvents(data) {
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


getAllEvents();
