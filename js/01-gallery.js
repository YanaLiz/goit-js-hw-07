import { galleryItems } from './gallery-items.js';
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
galleryContainer.addEventListener('click', onGalleryContainerClick);



function onGalleryContainerClick(evt) {
  evt.preventDefault();
const isGalleryEl = evt.target.classList.contains('gallery__image')
  if (!isGalleryEl) {
    return;
  }
     const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">`);
  instance.show();
  
};




