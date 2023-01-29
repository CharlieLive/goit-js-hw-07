import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGallery(items) {
  return items
    .map(
      (item) =>
        `<div class="gallery_item"> <a class="gallery__link" href="${item.original}"> <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" /> </a> </div>`
    )
    .join("");
}

const addGallery = createGallery(galleryItems);

gallery.innerHTML = addGallery;

gallery.addEventListener(`click`, onImageClick);

function onImageClick(e) {
  blockStandartAction(e);
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
function blockStandartAction(e) {
  e.preventDefault();
}
