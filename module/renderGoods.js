import createRow from "./createRow.js";
import updateTotalPriceTable from "./updateTotalPriceTable.js";
import { getData } from "./data.js";

export const renderGoods = (goodsData) => {
  const table = document.querySelector("table");
  const tableBody = table.querySelector("tbody");
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  if (Array.isArray(goodsData)) {
    const rows = goodsData.map(createRow);
    tableBody.append(...rows);
    updateTotalPriceTable();
  } else {
    console.error("Данные товаров не являются массивом.");
  }
};

getData()
  .then((data) => {
    if (data && data.goods) {
      renderGoods(data.goods); // Отображаем товары в таблице
    } else {
      console.error("Данные, полученные из API, не содержат массива товаров.");
    }
  })
  .catch((error) => {
    console.error("Ошибка при получении списка товаров:", error);
  });
