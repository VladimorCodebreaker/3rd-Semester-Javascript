let count = 0;

let json = {
    images: [
        { "src": "image_01.jpg", "name": "Image 01" },
        { "src": "image_02.jpg", "name": "Image 2" },
        { "src": "image_03.jpg", "name": "Image 3" },
        { "src": "image_04.jpg", "name": "Image 4" },
        { "src": "image_05.jpg", "name": "Image 5" },
        { "src": "image_06.jpg", "name": "Image 6" },
        { "src": "image_07.jpg", "name": "Image 7" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    r();
    debugger;
});

function r() {
    let thumbCounter = 0;

    for (var i = count; i < count + 4; i++) {
        let thumb = document.getElementById("image0" + thumbCounter);
        thumb.src = "images/" + json.images[i].src;

        thumbCounter++;
    }

    let bigOne = document.getElementById("main-thumbnail");
    bigOne.src = "images/" + json.images[count].src;
}

function moveLeft() {
    if (count > 0) {
        count -= 2;
        r();
    }
}

function moveRight() {
    if (count < json.images.length - 4) {
        count += 2;
        r();
    }
}

function showImage(image) {
    document.getElementById("main-thumbnail").src = image.src;
}