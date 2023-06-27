import goods from "./goods.js";

export const submitForm = (
  form,
  createRow,
  tableBody,
  updateTotalPriceTable,
  modal,
  overlay
) => {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newRowData = Object.fromEntries(formData.entries());
    goods.push(newRowData);
    const newRow = createRow(newRowData);
    tableBody.append(newRow);
    updateTotalPriceTable();

    form.reset();
    modal.style.display = "none";
    overlay.style.display = "none";
  });
};
