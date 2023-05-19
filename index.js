'use strict';

const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal__title");
const closeButton = document.querySelector(".modal__button-cancel");
const idInput = document.querySelector("#name");
const form = document.querySelector("#form-modal");
const checkbox = document.querySelector("#discount");
const discountSum = document.querySelector("#discount-sum");
const totalPrice = document.querySelector(".modal__price");
const overlay = document.querySelector('.overlay');

modal.style.display = "flex";

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});


const createRow = (obj) => {
const newRow = document.createElement('tr');
newRow.className += "table__tr";
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const cell = document.createElement('td');
      cell.className += "table__cell-td";
      cell.textContent = obj[key];
      newRow.appendChild(cell);
    }
  } 
  return newRow;
};
const newRow = createRow(goods);
const tableBody = document.querySelector("tbody");


tableBody.appendChild(newRow);

const renderGoods=(goodsArray) =>{
  const table = document.querySelector("table");
  tableBody.innerHTML = "";

  const rows = goodsArray.map(createRow);

  rows.forEach(function (row) {
    table.appendChild(row);
  });
}


renderGoods(goods);
