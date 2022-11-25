import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const imagesGallery = document.querySelector(".gallery");
const getItemGallery = ({ preview, original, description }) => `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
const getElementsGallery = galleryItems.map(getItemGallery).join("");
imagesGallery.insertAdjacentHTML("beforeend", getElementsGallery);
imagesGallery.addEventListener("click", onVideoClick);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
function onVideoClick(e) {
  e.preventDefault();
}
