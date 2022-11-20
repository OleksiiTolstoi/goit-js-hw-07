import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imagesContainer = document.querySelector(".gallery");

console.log(galleryItems);

const getItemMarkup = ({ preview, original, description }) => `
  <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">>
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
`;
const getBigImgMarkup = ({ url, description }) => `
  <img
    class="gallery__image"
    src="${url}"
    width="1280"
    alt="${description}"/>
// `;
const getImagesMarkup = (images) =>
  images.map((it) => getItemMarkup(it)).join("");
imagesContainer.innerHTML = getImagesMarkup(galleryItems);
imagesContainer.addEventListener("click", onClickGallery);

function onClickGallery(e) {
  e.preventDefault();
  const link = e.target.closest(".gallery__link");
  const img = link?.querySelector(".gallery__image");

  if (!(link && img)) return;
  const {
    alt: description,
    dataset: { source: url },
  } = img;

  showBigImg(getBigImgMarkup({ url, description }));
}

function showBigImg(markup) {
  const instance = window.basicLightbox.create(markup);
  instance.show();

  window.addEventListener("keydown", onKeyDownEsc.bind(instance), {
    once: true,
  });
}

function onKeyDownEsc(e) {
  if (e.key !== "Escape") return;
  this.close();
  console.log(e.key);
}
