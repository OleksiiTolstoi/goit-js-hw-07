import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesContainer = document.querySelector(".gallery");
const getItemMarkup = ({ preview, original, description }) => `
  <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
`;
const getElementsMarkup = galleryItems.map(getItemMarkup).join("");
imagesContainer.insertAdjacentHTML("beforeend", getElementsMarkup);
imagesContainer.addEventListener("click", onTopClick);

function onTopClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscapeButton);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscapeButton);
      },
    }
  );

  instance.show();
  function onEscapeButton(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
}
console.log(galleryItems);
