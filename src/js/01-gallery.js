import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const listEl = document.querySelector(".gallery");
console.log(listEl);
const arrayImg = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
  })
  .join("");

listEl.insertAdjacentHTML("afterbegin", arrayImg);

let gallery = new SimpleLightbox(".gallery a", {
  captionData: 'alt',
  captionDelay: 250,
});
