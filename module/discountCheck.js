export const discountCheck = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.querySelector(".form__style__check");
    const discountField = document.querySelector("#discount-sum");

    // Проверяем состояние чекбокса при загрузке страницы
    discountField.disabled = !checkbox.checked;

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        // Если чекбокс выбран, поле разблокировано
        discountField.disabled = false;
      } else {
        // Если чекбокс не выбран, поле блокируется и очищается
        discountField.disabled = true;
        discountField.value = "";
      }
    });
  });
};
