import {createDataListOption, createElem} from "./createElement.js";
import {addItem, changeItem, getCategories, getItems} from "./data.js";
import loadStyle from "./loader.js";
import productCost from "./productCost.js";
const showModal = async (elements, data) => {
    await loadStyle('css/blocks/modal.css');

        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        const modal = document.createElement('div');
        modal.className = 'modal';

        const modalHeader = document.createElement('div');
        modalHeader.className = 'modal__header';

        // Название меняется в зависимости от действия
        const modalTitle = document.createElement('h2');
        modalTitle.className = 'modal__title';

        modalTitle.textContent = 'Добавить товар';

        // ID товара получаем с бэка
        const productId = document.createElement('div');
        productId.className = 'product-id';

        const productIdText = document.createElement('span');
        productIdText.textContent = 'ID ';
        const idNumber = document.createElement('span');
        idNumber.className = 'product-id__number';
        idNumber.textContent = 'Появится после добавления';


        productId.append(productIdText, idNumber);

        modalHeader.append(modalTitle, productId)

        // Главная форма модалки
        const modalForm = document.createElement('form');
        modalForm.action = '';
        modalForm.id = 'product-form';
        modalForm.className = 'form';

        // Обертка всех полей формы
        const mainFormFieldset = document.createElement('fieldset');
        mainFormFieldset.className = 'form__fieldset';

        // Блоки формы 1 и 2 , в них ставим  инпуты

        const firstFieldset = document.createElement('fieldset');
        firstFieldset.className = 'inner-fieldset';

        const secFieldset = document.createElement('fieldset');
        secFieldset.className = 'inner-fieldset';

        // Инпуты и лэйблы

        const nameLabel = createElem('label', {className:'form__label'},'Наименование');
        const nameInput = createElem('input', {
            type: 'text',
            name: 'name',
            className: 'form__input js-form-name',
            required:'required'});

        const categoryLabel = createElem('label', {className:'form__label'},'Категория');
        const categoryInput = createElem('input', {
            type: 'text',
            name: 'category',
            className: 'form__input js-form-category',

            required:'required'});
        categoryInput.setAttribute('list','category-list');
        const dataList = createElem('datalist', {
            id: 'category-list',
        })
        const categories = await getCategories();
        for (const item of categories) {
            dataList.append(
            createDataListOption(item)
        )}

        const unitsLabel = createElem('label', {className:'form__label'},'Единицы измерения');
        const unitsInput = createElem('input', {
            type: 'text',
            name: 'units',
            className: 'form__input js-form-units',
            required:'required'});

        const discountLabel = createElem('label', {className:'form__label'},'Дисконт');

        const formRow = document.createElement('div');
        formRow.className = 'form__row';

        const discountCheckbox = createElem('input', {
            type: 'checkbox',
            name: 'discont',
            className: 'form__checkbox_custom discont-checkbox',
        });

        const discountInput = document.createElement('input');
        discountInput.className = 'form__input form__input_checkbox';
        discountInput.type = 'number';
        discountInput.name = 'discontValue';
        discountInput.setAttribute("disabled", "disabled");
        discountInput.value = '';

        formRow.append(discountCheckbox, discountInput);

        const descriptionLabel = createElem('label', {className:'form__label'},'Описание');
        const descriptionInput = createElem('textarea', {
            name: 'description',
            className: 'form__input form__input_noresize js-form-desc',
            required:'required',
            minLength: 80});

        const amountLabel = createElem('label', {className:'form__label'},'Количество');
        const productCount = createElem('input', {
            type: 'number',
            name: 'count',
            className: 'form__input js-form-count',
            required:'required'});

        const priceLabel = createElem('label', {className:'form__label'},'Цена');
        const productPrice = createElem('input', {
            type: 'number',
            name: 'price',
            className: 'form__input js-form-price',
            required:'required'});

        // Матрешка первого филдсета

        firstFieldset.append(
            nameLabel,
            nameInput,
            categoryLabel,
            categoryInput,
            dataList,
            unitsLabel,
            unitsInput,
            discountLabel,
            formRow);

        // Матрешка второго филдсета

        secFieldset.append(
            descriptionLabel,
            descriptionInput,
            amountLabel,
            productCount,
            priceLabel,
            productPrice);

        // Блок с ошибкой картинки товара

        const special = createElem('div', {className: 'special'});
        const imgErrorText = createElem('p', {className: 'special__img-error'}, 'Изображение не должно превышать размер 1 Мб');
        special.append(imgErrorText);
        //Добавление картинки товара

        const fileLabel = document.createElement('label');
        fileLabel.className = 'file-btn file-add-btn';
        fileLabel.textContent = 'Добавить изображение';
        fileLabel.setAttribute('for', 'file');

        const fileInput = document.createElement('input');
        fileInput.className = 'file-input';
        fileInput.type = 'file';
        fileInput.id = 'file';
        fileInput.accept = '.jpg, .jpeg, .png';
        fileInput.size = '1000';

        const productImage = document.createElement('img');
        productImage.className = 'product-img';
        productImage.alt = 'Изображение товара';

        const imageDelBtn = document.createElement('button');
        imageDelBtn.className = 'btn image-delete-btn'

        const imageBox = document.createElement('div');
        imageBox.className = 'imageBox';
        imageBox.style.display = 'none';

        imageBox.append(productImage, imageDelBtn);

        mainFormFieldset.append(firstFieldset, secFieldset, special, fileLabel, fileInput, imageBox);

        // Нижний блок с итоговой суммой и кнопкой добавления/изменения

        const btnRow = document.createElement('div');
        btnRow.className = 'btn-row row row__al-i-c';

        const infoText = document.createElement('p');
        infoText.className = 'info__text info__text_modal';
        infoText.textContent = 'Итоговая стоимость:';
                
        const currency = document.createElement('span');
        currency.className = 'currency';
        currency.textContent = '$ ';

        const currentProductCost = document.createElement('span');
        currentProductCost.className = 'total total__current-product';
        currentProductCost.textContent = '';

        infoText.append(currency, currentProductCost)

        const submitBtn = document.createElement('button');
        submitBtn.className = 'form__btn form__btn_add-product submit-btn';
        submitBtn.type = 'submit';
        submitBtn.setAttribute('form', 'product-form')
        submitBtn.id = 'product-add-form';
        submitBtn.textContent = 'Добавить товар';
        
        const changeBtn = document.createElement('button');
        changeBtn.className = 'form__btn form__btn_add-product change-btn';
        changeBtn.type = 'submit';
        changeBtn.setAttribute('form', 'product-form')
        changeBtn.id = 'product-add-form';
        changeBtn.textContent = 'Изменить товар';

        data ? btnRow.append(infoText, changeBtn) : btnRow.append(infoText, submitBtn);

        // Сборка формы

        modalForm.append(mainFormFieldset, btnRow);

        // Кнопки закрытия модалки

        const modalCloseBtn = document.createElement('button');
        modalCloseBtn.className = 'btn close-btn js_hide-overlay';
        modalCloseBtn.textContent = 'Закрыть окно';
        modalCloseBtn.insertAdjacentHTML('afterbegin', `
        <svg  width="20" height="20">
            <use href="#close"></use>
        </svg>
        `);

        // Окно ошибки

        const errorBox = document.createElement('div');
        errorBox.className = 'error-box';

        const errorImg = document.createElement('img');
        errorImg.src = 'assets/svg/error-lines.svg';
        errorImg.alt = 'Картинка ошибки';

        const errorText = document.createElement('p');
        errorText.className = 'error-box__text';
        errorText.textContent = 'Что-то пошло не так';

        const errorBoxCloseBtn = document.createElement('button');
        errorBoxCloseBtn.className = 'btn close-btn';
        errorBoxCloseBtn.textContent = 'Закрыть окно';
        errorBoxCloseBtn.insertAdjacentHTML('afterbegin', `
         <svg  width="20" height="20">
           <use href="#close"></use>
         </svg>
        `);

        errorBox.append(errorImg, errorText, errorBoxCloseBtn);

        // Матрешка модального окна
        modal.append(modalHeader, modalForm, modalCloseBtn, errorBox);

        overlay.append(modal);
        overlay.classList.add('overlay_active')
        document.body.append(overlay);

        // Получаем созданные элементы
        
        const modalElements = {
            discountCheckbox,
            discountInput,
            overlay,
            modalForm,
            errorBox,
            errorText,
            currentProductCost,
            productPrice,
            productCount,
            idNumber,
            fileInput,
        };

    if (data) {
        idNumber.textContent = data.id;
        modalTitle.textContent = 'Изменить товар';
        nameInput.value = data.title;
        categoryInput.value = data.category;
        unitsInput.value = data.units;
        descriptionInput.value = data.description;
        productCount.value = data.count;
        productPrice.value = data.price;
        discountInput.value = data.discount;
        if (data.image === 'image/notimage.jpg') {
            imageBox.style.display = 'none';
        } else {

            productImage.src = `https://pastoral-suave-minnow.glitch.me/${data.image}`;
            imageBox.style.display = 'block';
        }

        if (discountInput.value > 0) {
            discountInput.removeAttribute('disabled');
            discountCheckbox.setAttribute('checked', 'checked')
        }
        currentProductCost.textContent = productCost(modalElements);
    }

        // Закрытие модалки

        overlay.addEventListener('click', ({target}) => {
           if (target.closest('.js_hide-overlay') || target === overlay) {
               overlay.remove();
           }
        })

        // Регистрация изменений цены, кол-ва, скидки

        discountCheckbox.addEventListener('change', () => {
            if (discountCheckbox.checked === true) {
                discountInput.removeAttribute('disabled')
                discountInput.value = '0';
            } else {
                discountInput.setAttribute("disabled", "disabled");
                discountInput.value = '';
                productCost(modalElements);
            }
        });

        discountInput.addEventListener('change', () => {
            productCost(modalElements);
        });
         productCount.addEventListener('change', () => {
            productCost(modalElements);
        });
        productPrice.addEventListener('change', () => {
            productCost(modalElements);
        });

        // Добавление картинки товара

        fileInput.addEventListener('change', () => {
            const fileSize = fileInput.files[0].size;
            if (fileInput.files.length > 0) {
                const src = URL.createObjectURL(fileInput.files[0]);
                if (fileSize > 1000000) {
                    imgErrorText.style.display = 'block';
                    return
                }
                productImage.src = src;
                imageBox.style.display = 'block';
            }
        })

        // Удаление картинки

        imageDelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (data) {
                data.image = false;
                imageBox.style.display = 'none';
            } else {
                imageBox.style.display = 'none';
                fileInput.value = '';
            }
        })

        // Ограничения ввода инпутов

        const inputStringTypeArr = [nameInput, descriptionInput];
            inputStringTypeArr.forEach(elem => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/(^[\s-])|([^а-я\s-])/i, '');
            })
        });

        categoryInput.addEventListener('input', () => {
        categoryInput.value = categoryInput.value.replace(/(^[\s-])|([^а-яvr\s-])/i, '')
        });

        unitsInput.addEventListener('input', () => {
            unitsInput.value = unitsInput.value.replace(/[^а-я]/ig, '');
        });

        const inputNumberTypeArr = [discountInput, productCount, productPrice];
        inputNumberTypeArr.forEach(elem => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/\D/g,'');
            });
        });

        // Отправка формы

        submitBtn.addEventListener('click', e => {
            e.preventDefault();
            if (!descriptionInput.checkValidity()) {
                descriptionInput.style.border = '1px solid red';
                descriptionInput.value = descriptionInput.validationMessage

            } else {
                addItem(modalElements, elements)
            }
        });

        changeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            changeItem(modalElements, data);
            
            overlay.remove()
        });

        // Закрытие окна ошибки

        errorBox.addEventListener('click',e => {
            let target = e.target;
            if (target.closest('button')) {
                errorBox.classList.remove('active');
            }
        })
}
export default showModal;