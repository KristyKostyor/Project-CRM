import {createRow} from "./createElement.js"
import {renderTotalSum} from "./renderTotalSum.js";
import getDocumentElements from "./documentElements.js";
import {getItems} from "./data.js";
import {loader} from "./createVideo.js";
const elements = getDocumentElements();

export const renderGoods = async () => {
    loader.show();
    const data = await getItems();
    const outputTable = elements.list;
    outputTable.textContent = '';
    elements.searchInput.value = '';
    for (const item of data) {
        outputTable.append(
            createRow(item),
        );
        loader.remove()
    }
    renderTotalSum(data,elements);
}
