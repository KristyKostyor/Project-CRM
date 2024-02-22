const productCost =(modalElements) => {
    const {currentProductCost, productPrice, productCount, discountCheckbox, discountInput} = modalElements;
    let totalCost = 0;
    totalCost = parseInt(productPrice.value) * parseInt(productCount.value);
    if (discountCheckbox.checked === true) {
        totalCost -= totalCost * (parseInt(discountInput.value)) / 100;
    }
    currentProductCost.innerHTML = totalCost ? totalCost : 0;
    return Math.floor(totalCost);
};
export default productCost;