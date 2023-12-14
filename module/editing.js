import { openModal } from "./modalControl.js";
import { getGood, editingGood } from "./data.js";
import createRow from "./createRow.js";


const editRow = async (table) => {
    table.addEventListener('click', async (e) => {
        const target = e.target;
        const editCart = target.closest('#edit-button');

        if (!editCart) {
            return;
        }
        const row = editCart.closest(".table__tr");
        const idRow = row.querySelector(".table__cell-td-first").textContent;
        const editingGood = await getGood(idRow);

        openModal(editingGood);
    });
};

export default editRow;