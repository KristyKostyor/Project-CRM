export const createModalError = () => {
  const modal = document.querySelector(".modal");

  const modalError = document.createElement("div");
  modalError.classList.add("modal-error", "is-visible");

  modalError.innerHTML = `
    <div class="modal-error__overlay"></div>
    <div class="modal-error__content">
      <button class="modal-error__close" type="button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L22 22" stroke="#6E6893" stroke-width="3" stroke-linecap="round" />
          <path d="M2 22L22 2" stroke="#6E6893" stroke-width="3" stroke-linecap="round" />
        </svg>
      </button>
      <svg class="modal-error__img" width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L92 92" stroke="#D80101" stroke-width="3" stroke-linecap="round" />
        <path d="M2 92L92 2" stroke="#D80101" stroke-width="3" stroke-linecap="round" />
      </svg>
      <p class="modal-error__text">Что-то пошло не так</p>
    </div>
  `;

  const btnErrorClose = modalError.querySelector(".modal-error__close");
  const modalErronClose  = () => {
   modalError.style.display = "none";
  overlay.style.display = "none";
};

btnErrorClose.addEventListener("click",modalErronClose);


  modal.append(modalError);
};
