import { galleryItems } from './gallery-items.js';

const galleryAll = document.querySelector(".gallery");
const galleryEl = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
galleryAll.insertAdjacentHTML("afterbegin", galleryEl);

new SimpleLightbox(".gallery__link", {
  captionDelay: 250,
  captionsData: "alt",
});