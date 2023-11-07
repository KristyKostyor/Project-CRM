import goods  from "./module/goods.js";
import { renderGoods } from "./module/renderGoods.js";
import addNewGoodFunction from './module/addNewGood.js';
import createRow from "./module/createRow.js";
import updateTotalPriceTable  from "./module/updateTotalPriceTable.js";
import { submitForm } from "./module/submitForm.js";
import {  modal, openModal, closeModal, addGood } from "./module/modalControl.js";
import { updateTotalPrice } from "./module/updateTotalPrice.js";
import { discountCheck } from "./module/discountCheck.js";
import { addGoodPage, getData } from "./module/data.js";
import { createModalError } from "./module/modalError.js";


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

const init = () =>{
discountCheck();
getData();
gt
}

init();