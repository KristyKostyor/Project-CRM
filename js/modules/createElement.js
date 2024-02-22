import {deleteItem, getCurrentItem, getSearch} from "./data.js";
import getDocumentElements from "./documentElements.js";
import {loader} from "./createVideo.js";
import loadStyle from "./loader.js";
const elements = getDocumentElements();

export const createElem = (tag, attr = {}, text) => {
    const elem = document.createElement(tag);
    Object.assign(elem, attr);
    if (text) {
        elem.textContent = text;
    }
    return elem;
};

export const createRow = (item) => {
    let {id, title, price, category, count, units, discount, image} = item;
    if (discount === false) {
        discount = 0;
    }
    let sum = price * count;
    sum -= (sum * discount) / 100;
    const row = createElem('tr',{className:'table__row product'});
    row.id = id;
    row.dataset.image = image;
    const cellId = createElem('td',{className: 'table__cell-value id'},id);
    const cellTitle = createElem('td',{className:'table__cell-value name'},title);
    const discontMarker = createElem('span',{className:'name_discount', title:'Есть скидка'});
    if (discount > 0) {
        cellTitle.append(discontMarker)
    }
    const cellCategory = createElem('td',{className:'table__cell-value categoty'},category);
    const cellUnits = createElem('td',{className:'table__cell-value unit'},units);
    const cellQuantity = createElem('td',{className:'table__cell-value quantity'},count);
    const cellPrice = createElem('td',{className:'table__cell-value price'});
    cellPrice.innerHTML = `$${price}`;
    const cellCost = createElem('td',{className:'table__cell-value cost'});
    cellCost.innerHTML = `$${sum}`;

    const cellControls = createElem('td',{className:'table__cell-value controls'});
    const imgBtn = createElem('button',{className:'btn controls__btn', type:'button',
        title:'Изображение'});
       
    if (item.image === 'image/notimage.jpg') {
        imgBtn.classList.add('controls__btn_img_bad');
        imgBtn.removeEventListener('click', () => {
            return
        })
        imgBtn.style.cssText = 'cursor: auto';
        imgBtn.title = 'Нет изображения';
    } else {
        imgBtn.classList.add('controls__btn_img_ok');
    }
    const editBtn = createElem('button',{className:'btn controls__btn controls__btn_change',type: 'button',
        title:'Редактировать товар'});
    editBtn.innerHTML = `<svg class="icon change-icon" width="20" height="20">
                                        <use href="#change-icon"></use>
                                    </svg>`
    const delBtn = createElem('button',{className:'btn controls__btn controls__btn_delete',
        type:'button',title:'Удалить товар'});
    delBtn.innerHTML = `<svg class="icon delete-icon" width="20" height="20">
                                        <use href="#delete-icon"></use>
                                    </svg>`;
    cellControls.append(imgBtn, editBtn, delBtn);
    row.append(
        cellId,
        cellTitle,
        cellCategory,
        cellUnits,
        cellQuantity,
        cellPrice,
        cellCost,
        cellControls
    );
    row.addEventListener('click', async (e) => {
        const target = e.target;
        if (target.closest('.controls__btn_change')) {
            const itemId = target.closest('tr').id;
            getCurrentItem(itemId);

        }
        if (target.closest('.controls__btn_delete')) {
            let productId = target.closest('.product').id;
            // target.closest('.product').remove();
            // deleteItem(productId, elements);
            const delTarget = target.closest('.product');
            await createConfirmMessage(productId, elements, delTarget);

        }
        if (target.closest('.controls__btn_img_ok')) {
            let imgPath = target.closest('.product').attributes[2].textContent;
            createImagePopup(imgPath);
        }
    })
    return row;
}

export const createImagePopup = (imgPath) => {
    let top = window.screen.height / 2 - 300;
    let left = window.screen.width / 2 - 300;
    const imgPopup = open(`https://pastoral-suave-minnow.glitch.me/${imgPath}`, 'blank','width=600,height=600');
    imgPopup.moveTo(left,top);
}

export const searchRenderGoods = async (e) => {
    loader.show();
    const arr = await getSearch(e);
    if (arr.length === 0) { 
        loader.remove();
        elements.list.textContent = 'Ничего  нет'
    } else {
        const outputTable = elements.list;
        outputTable.textContent = '';
        for (const item of arr) {
            outputTable.append(
                createRow(item),
            );
        }
    loader.remove()
    }
};

export const createDataListOption = (item) => {
    const dataListOption = createElem('option', {
        value: item,
        textContent: item,
    })
    return dataListOption

}

export const createConfirmMessage = async(productId, elements, delTarget) => {
    await loadStyle('css/blocks/confirmMessage.css');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const modal = document.createElement('div');
    modal.className = 'confirmModal';

    const modalHeader = document.createElement('div');
    modalHeader.className = 'confirmModal__header';

    const modalTitle = document.createElement('h2');
    modalTitle.className = 'confirmModal__title';
    modalTitle.textContent = 'Удалить товар ?';

    const confirmBtn = document.createElement('button');
        confirmBtn.className = 'btn confirm-btn';
        confirmBtn.type = 'button';
        confirmBtn.textContent = 'Удалить';
    
    const cancelBtn = document.createElement('button');
        cancelBtn.className = 'btn confirm-btn js_hide-overlay';
        cancelBtn.type = 'button';
        cancelBtn.textContent = 'Отмена';

    const btnRow = document.createElement('div');
    btnRow.className = 'btn-row row row__al-i-c'; 

    btnRow.append(confirmBtn, cancelBtn)

    modalHeader.append(modalTitle);
    modal.append(modalHeader, btnRow);
    overlay.append(modal);
    overlay.classList.add('overlay_active')
    document.body.append(overlay);

    overlay.addEventListener('click', ({target}) => {
        if (target.closest('.js_hide-overlay') || target === overlay) {
            overlay.remove();
        }
     })
     confirmBtn.addEventListener('click', () => {
        deleteItem(productId, elements);
        overlay.remove();
        delTarget.remove();
     })
}
