import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');


gallery.addEventListener('click', event => {
  if (event.target.tagName === 'IMG') {
    event.preventDefault();
    const largeImageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${largeImageUrl}" alt="${event.target.alt}">
    `);

    instance.show();
  }
});

const galleryList = galleryItems.map(item => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>
`).join('');

gallery.insertAdjacentHTML('beforeend', galleryList);
