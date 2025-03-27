document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const images = ["art1.jpg", "art2.jpg","art1.jpg", "art2.jpg","art1.jpg", "art2.jpg","art1.jpg", "art2.jpg"];

    images.forEach(img => {
        const imageElement = document.createElement("img");
        imageElement.src = `images/${img}`;
        gallery.appendChild(imageElement);
    });
});
