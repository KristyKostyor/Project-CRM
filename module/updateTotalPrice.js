const updateTotalPrice = (modalAmountInput, modalPriceInput, totalPrice) => {
  const amount = parseInt(modalAmountInput.value);
  const price = parseFloat(modalPriceInput.value);

  if (!isNaN(amount) && !isNaN(price)) {
    const total = amount * price;
    totalPrice.textContent = total.toFixed(2);
  }
};

export { updateTotalPrice };
