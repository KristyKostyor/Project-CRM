 import goods from "./goods.js";
 import createRow from "./createRow.js";
 import updateTotalPriceTable  from "./updateTotalPriceTable.js";
 import { getData } from "./data.js";



 export const renderGoods = (goods) => {
  const table = document.querySelector("table");
  const tableBody = table.querySelector("tbody");
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  const rows = goods.map(createRow);
  tableBody.append(...rows);
  updateTotalPriceTable();
};


getData()
  .then((data) => {
    if (data && data.goods) {
      const goods = Array.isArray(data.goods) ? data.goods : [data.goods]; // Преобразуем данные в массив, если они не являются массивом
      renderGoods(goods); // Отображаем товары в таблице
    } else {
      console.error("Данные, полученные из API, не содержат массива товаров.");
    }
  })
  .catch((error) => {
    console.error("Ошибка при получении списка товаров:", error);
  });


  