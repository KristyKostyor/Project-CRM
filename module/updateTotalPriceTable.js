const updateTotalPriceTable = () => {
  let total = 0;
  const tableBody = document.querySelector("tbody");
  const rows = Array.from(tableBody.querySelectorAll("tr"));
  const totalPriceTable = document.querySelector(".header__price");

  rows.forEach((row) => {
    const priceCell = row.querySelector(".table__cell-td:nth-child(7)");
    const cost = parseFloat(priceCell.textContent);
    if (!isNaN(cost)) {
      total += cost;
    }
  });

  totalPriceTable.textContent = total.toFixed(2);
};
updateTotalPriceTable();

export default updateTotalPriceTable;
