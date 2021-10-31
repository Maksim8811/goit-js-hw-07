import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector(`.gallery`);

const addImgMarkup = createElementsMarkup(galleryItems);

containerGallery.insertAdjacentHTML(`beforeend`, addImgMarkup);

containerGallery.addEventListener(`click`, makeUrlClick)

function createElementsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    })
    .join(``)
    
}

function makeUrlClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains(`gallery__image`)) {
        return;
    }
    const image = evt.target.dataset.source;
    console.log(image);

    const instance = basicLightbox.create(`
    <img src="${image}" width="800" height="600">
`)

instance.show()
 }