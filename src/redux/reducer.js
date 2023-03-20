import INITIAL_STATE from "./initialState";
import produce from "immer";
import {
    INCREMENT_ITEM_HANDLER, INCREMENT_CART_HANDLER, DECREMENT_ITEM_HANDLER, DECREMENT_CART_HANDLER,
    SEARCH_VEGETABLES_HANDLER, FILTER_HANDLER
} from "./actionTypes";

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT_ITEM_HANDLER:
            return produce(state, draft => {
                draft.vegetableItems[action.itemIndex].count += action.payload;
            });
        case INCREMENT_CART_HANDLER:
            return produce(state, draft => {
                const vegetableItem = draft.vegetableItems[action.itemIndex];
                draft.cartDetails.itemsCount += action.payload;
                draft.cartDetails.itemsOriginalPrice += vegetableItem.originalPrice;
                draft.cartDetails.itemsDiscountedPrice += vegetableItem.discountedPrice;
            })
        case DECREMENT_ITEM_HANDLER:
            return produce(state, draft => {
                draft.vegetableItems[action.itemIndex].count -= action.payload;
            });
        case DECREMENT_CART_HANDLER:
            return produce(state, draft => {
                const vegetableItem = draft.vegetableItems[action.itemIndex];
                draft.cartDetails.itemsCount -= action.payload;
                draft.cartDetails.itemsOriginalPrice -= vegetableItem.originalPrice;
                draft.cartDetails.itemsDiscountedPrice -= vegetableItem.discountedPrice;
            })
        case SEARCH_VEGETABLES_HANDLER:
            return produce(state, draft => {
                draft.searchBarValue = action.payload;
            })
        case FILTER_HANDLER:
            return produce(state, draft => {
                draft.filterType = action.payload;
            })
        default: return state;
    }
}

export default reducer;