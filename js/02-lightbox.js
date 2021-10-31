import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector(`.gallery`);
console.log(containerGallery);

const addImgMarkup = createElementsMarkup(galleryItems);

containerGallery.insertAdjacentHTML(`beforeend`, addImgMarkup)
containerGallery.addEventListener(`click`, makeUrlClick)

function createElementsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
        })
        .join(``)
    
}
// console.log(addImgMarkup)

function makeUrlClick(evt) {
    evt.preventDefault()
    if (!evt.target.classList.contains(`gallery__image`)) {
        return;
    }
   
    const image = evt.target.parentNode;
    console.log(image);

}
const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 0,
    });
    lightbox.on(`show.simplelightbox`);