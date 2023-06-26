export const submitForm = (
  form,
  goods,
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
    console.log(newRowData); // Логируем данные из формы

    goods.push(newRowData);
    console.log(goods); // Логируем обновленный массив goods

    const newRow = createRow(newRowData);
    console.log(newRow); // Логируем созданную строку

    tableBody.appendChild(newRow);
    updateTotalPriceTable();

    form.reset();
    modal.style.display = "none";
    overlay.style.display = "none";
  });
};
