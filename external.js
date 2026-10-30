/*External JavaScript File */

let box = document.querySelectorAll(".box");

const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.jpg",
    "images/img8.jpg",
    "images/img9.jpg",
    "images/img10.jpg",
    "images/img11.jpg",
    "images/img12.jpg",
    "images/img13.jpg",
    "images/img14.jpg",
    "images/img15.jpg",
    "images/img16.jpg",
    "images/img17.jpg",
     "images/img18.jpg",
    "images/img19.jpg",
    "images/img20.jpg",
    "images/img21.jpg",
    "images/img22.jpg",
    "images/img23.jpg",
    "images/img24.jpg",
];

box.forEach(function(box) {

    box.addEventListener("click", function() {

        let randomIndex = Math.floor(Math.random() *images.length);

        let img = document.createElement("img");

        img.src = images[randomIndex];

        box.innerHTML = "";

       box.appendChild(img);

    });

});

let button = document.querySelector("#button");

button.addEventListener("click", function() {
    box.forEach(function(box) {
        box.innerHTML = "";
    });
});

