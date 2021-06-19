// All images should be named "img-1.jpg" and increasing.
// If you do not want a slideshow, use the filename "img-1.jpg" and remove this file and it's link.

// Function: switch image on click via an increasing counter.

let counter = 1;
let img = document.getElementById('main-photo');
img.addEventListener('click', function() {
    counter++;
    let imgBuild = `img/img-${counter}.jpg`;
    img.setAttribute('src', imgBuild);
    if (counter === 25 /* FINAL IMAGE + 1 */) {
        img.setAttribute('src', 'img/img-1.jpg')
        counter = 1;
    }
})