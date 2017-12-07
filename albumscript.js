function getAllAlbums() {
    fetch("http://artingineer.dk/wordpress/wp-json/wp/v2/album?_embed")
        .then(res => res.json())
        .then(showAlbums);
}

function showAlbums(data) {
    let list = document.querySelector("#list1");

    let template = document.querySelector("#albumTemplate").content;


    data.forEach(function (theAlbum) {
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
