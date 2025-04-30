const images = document.querySelectorAll('.popup-image');
let overlay;

images.forEach(image => {
image.addEventListener('click', function() {
    if (!this.classList.contains('popup')) {
    overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    this.classList.add('popup');

    overlay.addEventListener('click', () => {
        this.classList.remove('popup');
        overlay.remove();
    });
    }
});
});
