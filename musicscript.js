function getAllMusics() {
    fetch("http://artingineer.dk/wordpress/wp-json/wp/v2/new_release?_embed")
        .then(res => res.json())
        .then(showMusics);
}

function showMusics(data) {
    let list = document.querySelector("#list");

    let template = document.querySelector("#musicTemplate").content;


    data.forEach(function (theMusic) {
        console.log(theMusic);
        let clone = template.cloneNode(true);
        let title = clone.querySelector("h2");
        let date = clone.querySelector(".date span");
        let img = clone.querySelector("img");
        let mcontainer = clone.querySelector("#mcontainer");
        let button = clone.querySelector("button");



        title.textContent = theMusic.title.rendered;
        date.textContent = theMusic.acf.publish_date;
        img.setAttribute("src", theMusic._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
        mcontainer.innerHTML = theMusic.content.rendered;
        clone.querySelector(".dBookNow").setAttribute("href", theMusic.acf.buy);


        list.appendChild(clone);
    });
}

    getAllMusics();
