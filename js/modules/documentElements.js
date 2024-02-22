const getDocumentElements = () => {

const addNewProductBtn = document.querySelector('.form__btn_add-product');
const list = document.querySelector('.table-body');
const allProductsCost = document.querySelector('.total');
const searchInput = document.querySelector('.search__input');
const filterBtn = document.querySelector('.filter-btn');

return {
    addNewProductBtn,
    allProductsCost,
    list,
    filterBtn,
    searchInput,
}
}
export default getDocumentElements;