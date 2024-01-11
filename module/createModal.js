
const createModal = () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const modal = document.createElement("div");
  modal.classList.add("modal");

 
  modal.insertAdjacentHTML(
    "beforeend",
    `
            <div class="modal__form">
            <div class="modal__wrapper">
                <h1 class="modal__title">Добавить товар</h1>
                <button class="modal__button-cancel">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L22 22" stroke="#6E6893" stroke-width="3" stroke-linecap="round" />
                        <path d="M2 22L22 2" stroke="#6E6893" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
                <form id="form-modal" class="form-modal" action="https://jsonplaceholder.typicode.com/posts" method="POST">
                    <fieldset class="form__size">
                        <label class="form__name form__label__style" for="name">Наименование</label>
                        <input class="form__style__input" type="text" name="name" id="name" required>
                        <label class="form__category form__label__style" for="scale" id="category">Категория</label>
                        <input class="form__style__input" type="text" name="category" id="scale-input" required>
                        <label class="form__scale form__label__style" for="scale">Единицы измерения</label>
                        <input class="form__style__input" type="text" name="scale" id="scale" required>
                        <label class="form__discount form__label__style" for="discount-sum" id="discount-price">Дисконт</label>
                        <div class="form__discount-block">
                            <input class="form__style__check" type="checkbox" name="discount" id="discount">
                            <input class="form__style__discount" type="text" name="discount-sum" id="discount-sum">
                        </div>
                    </fieldset>

                    <fieldset class="form__size">
                        <label class="form__label__style" for="discription" id="describe">Описание</label>
                        <textarea class="form__description" name="discription" id="discription" cols="30" rows="10"></textarea>
                        <label class="form__amount form__label__style" for="amount">Количество</label>
                        <input class="form__style__input" type="text" name="amount" id="amount" required>
                        <label class="form__price form__label__style" for="price">Цена</label>
                        <input class="form__style__input" type="number" name="price" id="price" required>

                       <div class="form__add-block">
  <label for="file" class="form__add-img">Добавить изображение</label>
  <input type="file" id="file" accept=".jpg, .jpeg, .png" size="1000000" class="file-input">
</div>
<img id="image-preview" src="" alt="Preview" class="image-preview">
<p id="error-message" class="error-message"></p>
                    </fieldset>
                </form>
                <div class="modal__add-block">
                    <p>Итоговая стоимость: <span class="modal__price">$ 900.00</span> </p>
                    <button class="form__button" type="submit">Добавить товар</button>

                </div>`
  );
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  return overlay; 
};
   

const modalElement = createModal();
export default createModal;


const fileInput = document.getElementById("file");
const imagePreview = document.getElementById("image-preview");
const errorMessage = document.getElementById("error-message");


fileInput.addEventListener("change", (event) => {
  const selectedFile = event.target.files[0];

  if (selectedFile) {

    if (selectedFile.size <= 1000000) {

      const imageURL = URL.createObjectURL(selectedFile);
      imagePreview.src = imageURL;
      errorMessage.textContent = "";
    } else {
   
      imagePreview.src = ""; 
      errorMessage.textContent = "Изображение не должно превышать размер 1 Мб";
    }
  }
});
   const nameInput = document.getElementById("name");
   const category = document.getElementById("scale-input");
   const description = document.getElementById("discription");
   const scale = document.getElementById("scale");
   const discountSum = document.getElementById("discount-sum");
   const modalAmount = document.getElementById("amount");
   const modalPrice = document.getElementById("price");

   nameInput.addEventListener("input", () => {
     nameInput.value = nameInput.value.replace(/[^А-Яа-я\s]/g, "");
   });
     category.addEventListener("input", () => {
       category.value = category.value.replace(/[^А-Яа-я\s]/g, "");
     });
       description.addEventListener("input", () => {
         description.value = description.value.replace(/[^А-Яа-я\s]/g, "");
       });
         scale.addEventListener("input", () => {
           scale.value = scale.value.replace(/[^А-Яа-я]/g, "");
         });
          discountSum.addEventListener("input", () => {
            discountSum.value = discountSum.value.replace(/\D/g, "");
          });
             modalAmount.addEventListener("input", () => {
               modalAmount.value = modalAmount.value.replace(/\D/g, "");
             });
               modalPrice.addEventListener("input", () => {
                 modalPrice.value = modalPrice.value.replace(/\D/g, "");
               });

          