// constants
import { CART_DETAILS, FILTER_TYPES } from '../pages/helper/constData';

const initialState = {
    vegetableItems: [],
    cartDetails: CART_DETAILS,
    searchBarValue: "",
    filterType: FILTER_TYPES[0].value
}

export default initialState;