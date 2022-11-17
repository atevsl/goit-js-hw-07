import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryItemMarkup = creatGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryItemMarkup);

function creatGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
         <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>
       </li>`;
    })
    .join("");
}

galleryEl.addEventListener("click", onModalOpen);

function onModalOpen(e) {
  e.preventDefault();
  // console.log(e.target);

  let gallery = new SimpleLightbox(".gallery a");
  // gallery.on("shown.simplelightbox", function () {

  //  gallery.captionDelay= 250ms;
  // });
}
