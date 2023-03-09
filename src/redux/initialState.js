import vegetableData from '../data/vegetablesData.json';
import { CART_STATUS, FILTER_TYPES } from '../data/constData';

const initialState = {
    vegetableData: vegetableData,
    cartStatus: CART_STATUS,
    searchBarValue: "",
    filterType: FILTER_TYPES[0].value
}

export default initialState;