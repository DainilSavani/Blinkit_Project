import produce from "immer";

// costants
import INITIAL_STATE from "./initialState";
import { CART_DETAILS } from "../constants/app.general";

// actions
import {
    VEGETABLE_ITEMS_FETCH, VEGETABLE_ITEMS_STATE_UPDATE,
    VEGETABLE_ITEMS_API_UPDATE_FAILURE, ITEMS_CART_UPDATE,
    CLEAR_CART_STATE_UPDATE
} from "./actionTypes";

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VEGETABLE_ITEMS_FETCH:
            return produce(state, draft => {
                draft.vegetableItems = action.payload;
                draft.cartDetails = action.cartDetails
            })
        case VEGETABLE_ITEMS_STATE_UPDATE:
            return produce(state, draft => {
                draft.vegetableItems[action.itemIndex].count = action.payload
            })
        case VEGETABLE_ITEMS_API_UPDATE_FAILURE:
            return alert(action.payload);
        case ITEMS_CART_UPDATE:
            return produce(state, draft => {
                const vegetableItem = draft.vegetableItems[action.itemIndex];
                if (action.isIncrement) {
                    draft.cartDetails.itemsCount += action.payload;
                    draft.cartDetails.itemsOriginalPrice += action.payload * vegetableItem.originalPrice;
                    draft.cartDetails.itemsDiscountedPrice += action.payload * vegetableItem.discountedPrice;
                } else {
                    draft.cartDetails.itemsCount -= action.payload;
                    draft.cartDetails.itemsOriginalPrice -= action.payload * vegetableItem.originalPrice;
                    draft.cartDetails.itemsDiscountedPrice -= action.payload * vegetableItem.discountedPrice;
                }
            })
        case CLEAR_CART_STATE_UPDATE:
            return produce(state, draft => {
                draft.cartDetails = CART_DETAILS;
            })
        default:
            return state;
    }
}

export default reducer;