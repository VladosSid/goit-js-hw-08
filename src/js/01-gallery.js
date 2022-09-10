// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

const newEl = galleryItems
  .map(
    el =>
      `<a class="gallery__item" href="${el.original}">
    <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
  </a>`
  )
  .join('');

listEl.innerHTML = newEl;

const gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function (el) {
  gallery.options.captionsData = 'alt';
  gallery.options.captionDelay = '250ms';
});
