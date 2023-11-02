import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const arrImg = galleryItems.map((item) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
  </li>`
})
gallery.insertAdjacentHTML('beforeend', arrImg.join(""))
console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData:"alt", 
    captionDelay: 250,
 });