import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGallery(items) {
  return items
    .map(
      (item) =>
        `<div class="gallery__item">
<a class="gallery__item" href="${item.original}">
<img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>

</div>`
    )
    .join("");
}
const addGallery = createGallery(galleryItems);

gallery.innerHTML = addGallery;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});



// lightbox.on("shown.simplelightbox", function () {
//   const caption = document.querySelector(".sl-caption");
//   caption.style.cssText =
//     "position: absolute; bottom: 0; opacity: 0; transition: opacity 0.25;";
//   setTimeout(function () {
//     caption.style.opacity = 1;
//   }, 250);
// });
