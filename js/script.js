import {renderGoods} from './modules/renderGoods.js';
import {pageControls} from "./modules/pageControls.js";
import {loader} from "./modules/createVideo.js";

loader.show()
const init = () => {
    renderGoods()
    pageControls()
}
init();






