
export const modal = document.querySelector(".modal");
export const overlay = document.querySelector(".overlay");
export const closeButton = document.querySelector(".modal__button-cancel");
export const addGood = document.querySelector(".product__search-form__button");

export const openModal = () => {
  modal.style.display = "flex";
  overlay.style.display = "flex";
};

export const closeModal = () => {
  modal.style.display = "none";
  overlay.style.display = "none";
};

export const overlayClick = (e) => {
  const target = e.target;
  if (target === overlay) {
    overlay.style.display = "none";
  }
};

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", overlayClick);
addGood.addEventListener("click", openModal);

modal.style.display = "flex";