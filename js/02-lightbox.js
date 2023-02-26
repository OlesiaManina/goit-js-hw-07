import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');


function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li>
        <a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}"
         />
    </a>
    </li>
        `
    }).join('');
}

galleryRef.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

