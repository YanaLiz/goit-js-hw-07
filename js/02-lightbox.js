import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


console.log(createGalleryItemMarkup(galleryItems));
function createGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
      `;

        
  })
    .join('');
 
}
const galleryContainer = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryItemMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryItemMarkup);


var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
