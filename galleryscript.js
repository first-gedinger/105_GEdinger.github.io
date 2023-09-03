document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxContent = document.querySelector(".lightbox-content");
    const lightboxImage = document.querySelector(".lightbox img");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const closeButton = document.querySelector(".close-button");
    const tagButtons = document.querySelectorAll(".tag-button");

    let currentImageIndex = 0;
    let currentCategory = "all";
    let interval;

// Function to open the lightbox
function openLightbox(index) {
    lightbox.style.display = "flex";
    currentImageIndex = index;
    updateLightboxImage();
    startSlideshow();
    centerControls(); // Center the controls when opening the lightbox
}
// Function to center the lightbox controls
function centerControls() {
    const lightboxControls = document.querySelector(".controls");
    lightboxControls.style.top = "50%";
    lightboxControls.style.transform = "translateY(-50%)";
}
    // Function to close the lightbox
    function closeLightbox() {
        lightbox.style.display = "none";
        clearInterval(interval);
    }

    // Function to update the lightbox image
    function updateLightboxImage() {
        const currentImage = galleryItems[currentImageIndex].querySelector("img");
        lightboxImage.src = currentImage.src;
    }

    // Function to start the slideshow
    function startSlideshow() {
        clearInterval(interval);
        interval = setInterval(nextImage, 3000);
    }

    // Function to go to the previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightboxImage();
    }

    // Function to go to the next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        updateLightboxImage();
    }

// Event listener for opening the lightbox
galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        openLightbox(index);
    });
});

    // Event listener for closing the lightbox
    closeButton.addEventListener("click", closeLightbox);

    // Event listener for previous button
    prevButton.addEventListener("click", prevImage);

    // Event listener for next button
    nextButton.addEventListener("click", nextImage);

    // Event listeners for category buttons
    tagButtons.forEach((button) => {
        button.addEventListener("click", () => {
            currentCategory = button.getAttribute("data-category");
            filterImages();
        });
    });

    // Function to filter images by category
    function filterImages() {
        galleryItems.forEach((item) => {
            const category = item.getAttribute("data-category");
            if (currentCategory === "all" || category === currentCategory) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    // Initial filtering
    filterImages();
});
