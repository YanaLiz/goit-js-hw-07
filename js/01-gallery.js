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

// function onGalleryContainerClick(evt) {
//   evt.preventDefault();
// const isGalleryEl =!evt.target.classList.contains('gallery__image')
//   if (!isGalleryEl) {
//     return;
//   } else {
//      const instance = basicLightbox.create(`
//     <img src="${imgUrl}">`);
//     instance.show();
//     document.addEventListener('keydown', OnModalClose);
//     instance.close()
//     // const galleryEl = evt.target;
//     // galleryEl.classList.add('.gallery__image')
//     // console.log(evt.target.dataset.alt);
//   }

// }

function onGalleryContainerClick(evt) {
  evt.preventDefault();
const isGalleryEl = evt.target.classList.contains('.gallery__image')
  if (!isGalleryEl) {
    return;
  }
     const instance = basicLightbox.create(`
    <img src="${imgUrl}">`);
    instance.show();
};














// function onOpenModal(evt) {
//     // const instance = basicLightbox.create(`
//     <img src="${imgUrl}">`);
//     instance.show();
//     document.addEventListener('keydown', OnModalClose);
//     instance.close()
// }
 






















