export const updateTotalPrice = (modalAmountInput, modalPriceInput, totalPrice) => {
  const amount = parseInt(modalAmountInput.value);
  const price = parseFloat(modalPriceInput.value);

  if (!isNaN(amount) && !isNaN(price)) {
    const total = amount * price;
    totalPrice.textContent = total.toFixed(2);
  }
};


const modalAmountInput = document.getElementById("amount");
const modalPriceInput = document.getElementById("price");
const totalPrice = document.querySelector(".modal__price");
const updateTotalPriceHandler = () => {
  updateTotalPrice(modalAmountInput, modalPriceInput, totalPrice);
};
modalAmountInput.addEventListener("input", updateTotalPriceHandler);
modalPriceInput.addEventListener("input", updateTotalPriceHandler);