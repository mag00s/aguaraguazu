let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

// Initial display
showImage(currentIndex);

// Zoom functionality
document.querySelectorAll('.carousel-img').forEach(img => {
    img.addEventListener('click', () => {
        if (img.style.transform === 'scale(2)') {
            img.style.transform = 'scale(1)';
        } else {
            img.style.transform = 'scale(2)';
        }
    });
});
