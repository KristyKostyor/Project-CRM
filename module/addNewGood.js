

export const addNewGoodFunction = () => {
  const addNewGood = document.querySelector(".form__button");
  const table = document.querySelector("table");
  const tableBody = table.querySelector("tbody");
  addNewGood.addEventListener("click", () => {
    const getRandomInt = (min, max) => {
      min = min < max ? min : max;
      max = min > max ? min : max;
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const generateId = () => {
      return getRandomInt(100000000, 999999999);
    };

    const name = document.getElementById("name").value;
    const category = document.getElementById("scale-input").value;
    const scale = document.getElementById("scale").value;
    const discount = document.getElementById("discount").checked;
    const discountSum = document.getElementById("discount-sum").value;
    const modalAmount = document.getElementById("amount").value;
    const modalPrice = document.getElementById("price").value;
    const total = modalAmount * modalPrice;
    const newRow = document.createElement("tr");

    newRow.classList.add("table__tr");
    const productId = generateId();

    newRow.innerHTML = `
      <td class="table__cell-td">${productId}</td>
      <td class="table__cell-td">${name}</td>
      <td class="table__cell-td">${category}</td>
      <td class="table__cell-td">${scale}</td>
      <td class="table__cell-td">${modalAmount}</td>
      <td class="table__cell-td">${modalPrice}</td>
      <td class="table__cell-td">${total.toFixed(2)}</td>
    `;
    tableBody.appendChild(newRow);
    // Сброс значений полей формы
    updateTotalPriceTable();
    form.reset();
    modal.style.display = "none";
    overlay.style.display = "none";
  });
};

addNewGoodFunction();
