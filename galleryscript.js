const categories = document.querySelectorAll('.category');
const photos = document.querySelectorAll('.photo');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentCategory = 'all';

categories.forEach((category) => {
    category.addEventListener('click', () => {
        currentCategory = category.getAttribute('data-filter');
        filterImages();
    });
});

photos.forEach((photo) => {
    photo.addEventListener('click', () => {
        enlargeImage(photo.querySelector('img').src);
    });
});

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        const tag = thumbnail.getAttribute('data-tags');
        currentCategory = tag;
        filterImages();
    });
});

function filterImages() {
    photos.forEach((photo) => {
        const tags = photo.classList[1]; // Assuming the tag is the second class
        if (currentCategory === 'all' || tags.includes(currentCategory)) {
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    });
}

function enlargeImage(src) {
    const enlargedContainer = document.createElement('div');
    enlargedContainer.className = 'enlarged-image-container';

    const enlargedImage = document.createElement('img');
    enlargedImage.className = 'enlarged-image';
    enlargedImage.src = src;

    enlargedImage.addEventListener('click', () => {
        document.body.removeChild(enlargedContainer);
    });

    enlargedContainer.appendChild(enlargedImage);
    document.body.appendChild(enlargedContainer);
}
