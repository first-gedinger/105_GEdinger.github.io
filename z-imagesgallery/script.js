const galleryItems = document.querySelectorAll('.gallery-item');
const fullScreenView = document.querySelector('.full-screen-view');
const fullScreenImage = document.querySelector('.full-screen-image');
const closeBtn = document.querySelector('.close-button');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
let currentIndex = -1;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        showFullScreenView(index);
    });
});

function showFullScreenView(index) {
    currentIndex = index;
    fullScreenImage.src = galleryItems[index].querySelector('img').src;
    fullScreenView.style.display = 'flex';
}

function closeFullScreenView() {
    fullScreenView.style.display = 'none';
}

function navigateFullScreen(offset) {
    currentIndex += offset;

    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    } else if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }

    fullScreenImage.src = galleryItems[currentIndex].querySelector('img').src;
}

closeBtn.addEventListener('click', () => {
    closeFullScreenView();
});

document.addEventListener('DOMContentLoaded', () => {
    fullScreenView.style.display = 'none';
});
