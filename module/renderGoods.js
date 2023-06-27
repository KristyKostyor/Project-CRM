 import goods from "./goods.js";
 import createRow from "./createRow.js";
 import updateTotalPriceTable  from "./updateTotalPriceTable.js";

 
 export const renderGoods = (goodsArray) => {
  const table = document.querySelector("table");
  const tableBody = table.querySelector("tbody");
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  const rows = goodsArray.map(createRow);
  tableBody.append(...rows);
  updateTotalPriceTable();
};
  renderGoods(goods);