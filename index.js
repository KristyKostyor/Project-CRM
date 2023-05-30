"use strict";
const goods = [
  {
    id: 253842678,
    title: "Смартфон Xiaomi 11T 8/128GB",
    category: "mobile-phone",
    units: "шт",
    count: 3,
    price: 27000,
    images: {
      small: "img/smrtxiaomi11t-m.jpg",
      big: "img/smrtxiaomi11t-b.jpg",
    },
  },
  {
    id: 296378448,
    title: "Радиоуправляемый автомобиль Cheetan",
    price: 4000,
    description:
      "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    category: "toys",
    discont: 5,
    count: 1,
    units: "шт",
    images: {
      small: "img/cheetancar-m.jpg",
      big: "img/cheetancar-b.jpg",
    },
  },
  {
    id: 215796548,
    title: "ТВ приставка MECOOL KI",
    price: 12400,
    description:
      "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    category: "tv-box",
    discont: 15,
    count: 4,
    units: "шт",
    images: {
      small: "img/tvboxmecool-m.jpg",
      big: "img/tvboxmecool-b.jpg",
    },
  },
  {
    id: 246258248,
    title: "Витая пара PROConnect 01-0043-3-25",
    price: 22,
    description:
      "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    category: "cables",
    discont: false,
    count: 420,
    units: "v",
    images: {
      small: "img/lan_proconnect43-3-25.jpg",
      big: "img/lan_proconnect43-3-25-b.jpg",
    },
  },
];



const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal__title");
const closeButton = document.querySelector(".modal__button-cancel");
const idInput = document.querySelector("#name");
const form = document.querySelector("#form-modal");
const checkbox = document.querySelector("#discount");
const discountSum = document.querySelector("#discount-sum");
const totalPrice = document.querySelector(".modal__price");
const overlay = document.querySelector(".overlay");
const addGood = document.querySelector(".product__search-form__button");
const delBtn = document.querySelector('#delBtn');


modal.style.display = "flex";

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});
overlay.addEventListener("click", e => {
  const target = e.target;
  if(target === overlay ){
    overlay.style.display = "none";
  }
 

});
addGood.addEventListener('click', () =>{
  modal.style.display = "flex";
  overlay.style.display = "flex";

});



const createRow = ({ id, title, price, category, count, units }) => {
  const newRow = document.createElement("tr");
  newRow.classList.add("table__tr");

  const idCell = document.createElement("td");
  idCell.classList.add("table__cell-td");
  idCell.textContent = id;
  const titleCell = document.createElement("td");
  titleCell.classList.add("table__cell-td");
  titleCell.textContent = title;
  const categoryCell = document.createElement("td");
  categoryCell.classList.add("table__cell-td");
  categoryCell.textContent = category;
  const priceCell = document.createElement("td");
  priceCell.classList.add("table__cell-td");
  priceCell.textContent = price;
  const countCell = document.createElement("td");
  countCell.classList.add("table__cell-td");
  countCell.textContent = count;
  const unitsCell = document.createElement("td");
  unitsCell.classList.add("table__cell-td");
  unitsCell.textContent = units;
  const costCell = document.createElement("td");
  costCell.classList.add("table__cell-td");
  costCell.textContent = `${count * price}`;

  const cellButtons = document.createElement("td");
  cellButtons.classList.add("table__cell-td");

  const imgBtn = document.createElement("button");
  imgBtn.classList.add("table__cell-btn");
  imgBtn.type = "button";
  imgBtn.title = "Изменить изображение";
  imgBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.7778 2.22223H2.22223C1.92754 2.22223 1.64493 2.33929 1.43655 2.54767C1.22818 2.75604 1.11111 3.03866 1.11111 3.33334V16.6667C1.11111 16.9614 1.22818 17.244 1.43655 17.4523C1.64493 17.6607 1.92754 17.7778 2.22223 17.7778H17.7778C18.0725 17.7778 18.3551 17.6607 18.5635 17.4523C18.7718 17.244 18.8889 16.9614 18.8889 16.6667V3.33334C18.8889 3.03866 18.7718 2.75604 18.5635 2.54767C18.3551 2.33929 18.0725 2.22223 17.7778 2.22223ZM2.22223 16.6667V3.33334H17.7778V16.6667H2.22223Z" fill="#6E6893" />
                                    <path d="M4.95555 7.77778C5.28518 7.77778 5.60741 7.68003 5.8815 7.49689C6.15558 7.31376 6.3692 7.05346 6.49535 6.74892C6.62149 6.44437 6.6545 6.10926 6.59019 5.78596C6.52588 5.46266 6.36715 5.16569 6.13406 4.9326C5.90097 4.69951 5.604 4.54078 5.2807 4.47647C4.9574 4.41216 4.62228 4.44516 4.31774 4.57131C4.0132 4.69746 3.7529 4.91108 3.56976 5.18516C3.38663 5.45924 3.28888 5.78147 3.28888 6.11111C3.28888 6.55314 3.46447 6.97706 3.77703 7.28962C4.0896 7.60218 4.51352 7.77778 4.95555 7.77778ZM4.95555 5.22222C5.13158 5.22112 5.30399 5.27232 5.45089 5.36932C5.5978 5.46632 5.71259 5.60476 5.78072 5.76708C5.84885 5.9294 5.86725 6.1083 5.83358 6.28109C5.79992 6.45389 5.7157 6.61279 5.59161 6.73766C5.46752 6.86253 5.30915 6.94774 5.13657 6.98249C4.96399 7.01724 4.78498 6.99997 4.62223 6.93285C4.45949 6.86574 4.32033 6.75182 4.22241 6.60552C4.12449 6.45923 4.07222 6.28715 4.07221 6.11111C4.07367 5.87729 4.1672 5.65345 4.33255 5.48811C4.49789 5.32277 4.72172 5.22923 4.95555 5.22778V5.22222Z" fill="#6E6893" />
                                    <path d="M12.6555 8.53889L9.65555 11.5389L7.43332 9.31666C7.32923 9.21319 7.18843 9.15511 7.04166 9.15511C6.89489 9.15511 6.75408 9.21319 6.64999 9.31666L3.28888 12.7222V14.2944L7.0611 10.5222L8.88888 12.3222L6.80555 14.4056H8.33332L13.0278 9.71111L16.6667 13.3333V11.7667L13.4389 8.53889C13.3348 8.43541 13.194 8.37733 13.0472 8.37733C12.9004 8.37733 12.7596 8.43541 12.6555 8.53889Z" fill="#6E6893" />
                                </svg>`;

  const editBtn = document.createElement("button");
  editBtn.classList.add("table__cell-btn");
  editBtn.type = "button";
  editBtn.title = "Редактировать товар";
  editBtn.innerHTML = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5629 3.86078L15.6394 5.93629L13.5629 3.86078ZM14.8982 2.03233L9.28343 7.64709C8.99332 7.9368 8.79546 8.3059 8.7148 8.70789L8.19617 11.304L10.7923 10.7844C11.1942 10.704 11.5629 10.5069 11.8531 10.2167L17.4678 4.60196C17.6366 4.43324 17.7704 4.23293 17.8617 4.01248C17.953 3.79203 18 3.55576 18 3.31714C18 3.07853 17.953 2.84225 17.8617 2.6218C17.7704 2.40136 17.6366 2.20105 17.4678 2.03233C17.2991 1.8636 17.0988 1.72976 16.8784 1.63845C16.6579 1.54714 16.4216 1.50014 16.183 1.50014C15.9444 1.50014 15.7081 1.54714 15.4877 1.63845C15.2672 1.72976 15.0669 1.8636 14.8982 2.03233V2.03233Z" stroke="#6E6893" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.0394 13.2648V16.206C16.0394 16.726 15.8328 17.2248 15.4651 17.5925C15.0973 17.9602 14.5986 18.1668 14.0786 18.1668H3.29415C2.77411 18.1668 2.27537 17.9602 1.90765 17.5925C1.53993 17.2248 1.33334 16.726 1.33334 16.206V5.42157C1.33334 4.90154 1.53993 4.4028 1.90765 4.03508C2.27537 3.66735 2.77411 3.46077 3.29415 3.46077H6.23535" stroke="#6E6893" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>`;

  const delBtn = document.createElement("button");
  delBtn.classList.add("delBtn");
  delBtn.type = "button";
  delBtn.title = "Удалить товар";
  delBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.03125 3.59375H6.875C6.96094 3.59375 7.03125 3.52344 7.03125 3.4375V3.59375H12.9688V3.4375C12.9688 3.52344 13.0391 3.59375 13.125 3.59375H12.9688V5H14.375V3.4375C14.375 2.74805 13.8145 2.1875 13.125 2.1875H6.875C6.18555 2.1875 5.625 2.74805 5.625 3.4375V5H7.03125V3.59375ZM16.875 5H3.125C2.7793 5 2.5 5.2793 2.5 5.625V6.25C2.5 6.33594 2.57031 6.40625 2.65625 6.40625H3.83594L4.31836 16.6211C4.34961 17.2871 4.90039 17.8125 5.56641 17.8125H14.4336C15.1016 17.8125 15.6504 17.2891 15.6816 16.6211L16.1641 6.40625H17.3438C17.4297 6.40625 17.5 6.33594 17.5 6.25V5.625C17.5 5.2793 17.2207 5 16.875 5ZM14.2832 16.4062H5.7168L5.24414 6.40625H14.7559L14.2832 16.4062Z" fill="#6E6893" />
                                </svg>`;
delBtn.addEventListener("click", () => {
  newRow.remove();
});
  cellButtons.append(imgBtn, editBtn, delBtn);
newRow.append(
  idCell,
  titleCell,
  categoryCell,
  unitsCell,
  countCell,
  priceCell,
  costCell,
  cellButtons
);

  return newRow;
};



const tableBody = document.querySelector("tbody");

const renderGoods = (goodsArray) => {
  const table = document.querySelector("table");
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  const rows = goodsArray.map(createRow);
  tableBody.append(...rows);
};

renderGoods(goods);

