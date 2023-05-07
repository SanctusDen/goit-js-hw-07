import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

const createGallery = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
  </a>
    </li>`).join("");
list.insertAdjacentHTML("afterbegin", createGallery);
list.addEventListener("click", onAddImg);

function onAddImg(evt) {
    evt.preventDefault();
    if (evt.target.nodeName === 'IMG') {
        const addImg = evt.target.dataset.source;
        const instance = basicLightbox.create(`<img src="${addImg}" 
         alt="${evt.target.alt}"> `,
            {
                onClose: function () {
                    document.removeEventListener("keydown", closeByEscape);
                },
            }
        );
    instance.show();
    document.addEventListener("keydown", closeByEscape);
    function closeByEscape(evt) {
      if (evt.code === "Escape") {
        instance.close();
      }
    }
    }
    else {
    return;
    }
}