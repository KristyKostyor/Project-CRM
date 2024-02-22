import getDocumentElements from "./documentElements.js";
import showModal from "./showModal.js";
import {debounce} from "./debounce.js";
import {searchRenderGoods} from "./createElement.js";
const elements = getDocumentElements();
export const pageControls = () => {
    const debouncedSearch = debounce((searchRenderGoods), 500);

    elements.addNewProductBtn.addEventListener('click', async () => {
        await showModal(elements);
    });
    elements.searchInput.addEventListener('input', debouncedSearch)

}