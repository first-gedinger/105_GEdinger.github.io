const categories = document.querySelectorAll('.category');
const photos = document.querySelectorAll('.photo');
const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const fullscreenToggle = document.getElementById('fullscreen-toggle');

let currentCategory = 'all';
let currentImageIndex = 0;

categories.forEach((category) => {
    category.addEventListener('click', () => {
        currentCategory = category.getAttribute('data-filter');
        filterImages();
    });
});

photos.forEach((photo, index) => {
    photo.addEventListener('click', () => {
        toggleFullScreen(index);
    });
});

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + photos.length) % photos.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % photos.length;
    updateCarousel();
});

fullscreenToggle.addEventListener('click', () => {
    toggleFullScreen(currentImageIndex);
});

function filterImages() {
    photos.forEach((photo) => {
        const tags = photo.getAttribute('data-tags');
        if (currentCategory === 'all' || tags.includes(currentCategory)) {
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    });
    currentImageIndex = 0;
    updateCarousel();
}

function updateCarousel() {
    const visiblePhotos = Array.from(photos).filter((photo) => photo.style.display !== 'none');
    carousel.innerHTML = '';

    visiblePhotos.forEach((photo, index) => {
        const img = photo.querySelector('img').cloneNode();
        img.addEventListener('click', () => {
            toggleFullScreen(index);
        });
        carousel.appendChild(img);
        if (index === currentImageIndex) {
            img.classList.add('active');
        }
    });
}

function toggleFullScreen(index) {
    const img = photos[index].querySelector('img');
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.classList.add('fullscreen-container');

    const fullscreenImg = img.cloneNode();
    fullscreenImg.classList.add('fullscreen');
    fullscreenContainer.appendChild(fullscreenImg);

    fullscreenContainer.addEventListener('click', () => {
        document.body.removeChild(fullscreenContainer);
    });

    document.body.appendChild(fullscreenContainer);
}

filterImages();
