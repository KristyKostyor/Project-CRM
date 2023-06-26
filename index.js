import goods from "./module/goods.js";
import createRow from "./module/createRow.js";
import updateTotalPriceTable  from "./module/priceTable.js";
import { submitForm } from "./module/submitForm.js";
import {  modal } from "./module/modalControl.js";
import { updateTotalPrice } from "./module/updateTotalPrice.js";
import { discountCheck } from "./module/discountCheck.js";


const modalAmountInput = document.getElementById("amount");
const modalPriceInput = document.getElementById("price");
const totalPrice = document.querySelector(".modal__price");
const updateTotalPriceHandler = () => {
  updateTotalPrice(modalAmountInput, modalPriceInput, totalPrice);
};
modalAmountInput.addEventListener("input", updateTotalPriceHandler);
modalPriceInput.addEventListener("input", updateTotalPriceHandler);

const form = document.querySelector("#form-modal");
const modalTitle = document.querySelector(".modal__title");
const idInput = document.querySelector("#name");
const discountSum = document.querySelector("#discount-sum");
const overlay = document.querySelector(".overlay");
const delBtn = document.querySelector("#delBtn");
const tableBody = document.querySelector("tbody");


submitForm(
  form,
  goods,
  createRow,
  tableBody,
  updateTotalPriceTable,
  modal,
  overlay
);

discountCheck();