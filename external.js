/*External JavaScript File */

let box = document.querySelectorAll(".box");

const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
    "img11.jpg",
    "img12.jpg",
    "img13.jpg",
    "img14.jpg",
    "img15.jpg",
    "img16.jpg",
    "img17.jpg",
     "img18.jpg",
    "img19.jpg",
    "img20.jpg",
    "img21.jpg",
    "img22.jpg",
    "img23.jpg",
    "img24.jpg",
      "img25.jpg",
     "img26.jpg",
    "img27.jpg",
    "img28.jpg",
    "img29.jpg",
    "img30.jpg",
    "img31.jpg",
    "img32.jpg",
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

