const images = document.querySelectorAll(".slider-img");

images.forEach((img, index) => {
    img.addEventListener("click", () => bringToFront(index));
    img.addEventListener("mouseover", () => bringToFront(index));
});

function bringToFront(index) {
    images.forEach((img, i) => {
        img.classList.remove("active", "left", "right", "hidden-left", "hidden-right");

        if (i === index) {
            img.classList.add("active");
        } else if (i === index - 1) {
            img.classList.add("left");
        } else if (i === index + 1) {
            img.classList.add("right");
        } else if (i < index - 1) {
            img.classList.add("hidden-left");
        } else {
            img.classList.add("hidden-right");
        }
    });
}

// Initial setup
bringToFront(2); // Set middle image as default

