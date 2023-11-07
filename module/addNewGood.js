import { modal, overlay } from "./modalControl.js";
import updateTotalPriceTable from "./updateTotalPriceTable.js";
import { addGoodPage, postGood } from "./data.js";
import { createModalError } from "./modalError.js";

const addNewGoodFunction = () => {
  const addNewGood = document.querySelector(".form__button");
  const table = document.querySelector("table");
  const tableBody = table.querySelector("tbody");

  addNewGood.addEventListener("click", async () => {
    // Получение данных из формы
    const name = document.getElementById("name").value;
    const category = document.getElementById("scale-input").value;
    const scale = document.getElementById("scale").value;
    const discount = document.getElementById("discount").checked;
    const discountSum = document.getElementById("discount-sum").value;
    const modalAmount = document.getElementById("amount").value;
    const modalPrice = document.getElementById("price").value;

    // Вычисление общей стоимости
    const total = modalAmount * modalPrice;

    // Создание объекта с данными товара
    const newGoodData = {
      name,
      category,
      scale,
      discount,
      discountSum,
      modalAmount,
      modalPrice,
      total,
    };

    try {
      // Отправка данных на сервер
      const response = await postGood(newGoodData);

      if (response) {
        // Если запрос выполнен успешно, добавляем данные товара в таблицу
        addGoodPage(response, table);

        const newRow = document.createElement("tr");
        newRow.classList.add("table__tr");

        const generateId = () => {
          return getRandomInt(100000000, 999999999);
        };

        newRow.innerHTML = `
          <td class="table__cell-td">${productId}</td>
          <td class="table__cell-td">${name}</td>
          <td class="table__cell-td">${category}</td>
          <td class="table__cell-td">${scale}</td>
          <td class="table__cell-td">${modalAmount}</td>
          <td class="table__cell-td">${modalPrice}</td>
          <td class="table__cell-td">${total.toFixed(2)}</td>
          <td class="table__cell-td">
            <button class="table__cell-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- SVG-код вашей кнопки -->
              </svg>
            </button>
            <button class="table__cell-btn">
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- SVG-код вашей кнопки -->
              </svg>
            </button>
            <button class="delBtn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- SVG-код вашей кнопки -->
              </svg>
            </button>
          </td>
        `;

        const delBtn = newRow.querySelector(".delBtn");
        delBtn.addEventListener("click", () => {
          newRow.remove();
        });

        tableBody.appendChild(newRow);

        // Сброс значений полей формы
        updateTotalPriceTable();

        const form = document.querySelector("#form-modal");
        form.reset();
        modal.style.display = "none";
        overlay.style.display = "none";
      } else {
        console.error("Ошибка при добавлении товара на сервер.");
        createModalError(overlay); // Передаем overlay в функцию
      }
    } catch (error) {
      console.error("Ошибка при отправке данных на сервер:", error);
      createModalError(overlay); // Передаем overlay в функцию
    }
  });
};

addNewGoodFunction();
export default addNewGoodFunction;
