import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const listEl = document.querySelector(".gallery");

const arrayImg = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`;
  })
  .join("");

listEl.insertAdjacentHTML("afterbegin", arrayImg);

const gallery = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
});
 
