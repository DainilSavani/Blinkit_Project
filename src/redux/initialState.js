import VEGETABLE_ITEMS from '../data/vegetableData.json';
import { CART_STATUS } from '../data/constData';

const initialState = {
    vegetableData: VEGETABLE_ITEMS,
    cartStatus: CART_STATUS,
    searchBarValue: "",
}

export default initialState;