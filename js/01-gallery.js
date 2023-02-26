import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>
        `
    }).join('');
}

galleryRef.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

galleryRef.addEventListener('click', onImgClicked);

function onImgClicked(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
      }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`, {
    onShow: (instance) => {galleryRef.addEventListener('keydown', onEscClose);},
	
	onClose: (instance) => {galleryRef.removeEventListener('keydown', onEscClose);}
})

    instance.show();

    function onEscClose(event) {
    if (event.code === 'Escape') {
        instance.close();
    }
}
}






 







