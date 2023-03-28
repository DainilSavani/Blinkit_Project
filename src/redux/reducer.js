import produce from "immer";

// costants
import INITIAL_STATE from "./initialState";
import { VEGETABLE_ITEMS_LOADED, VEGETABLE_ITEMS_FAILURE,
    INCREMENT_ITEM_HANDLER, INCREMENT_CART_HANDLER, 
    DECREMENT_ITEM_HANDLER, DECREMENT_CART_HANDLER,
    REMOVE_ITEM_HANDLER, REMOVE_FROM_CART_HANDLER,
    CLEAR_ITEM_HANDLER, CLEAR_CART_HANDLER,
    SEARCH_VEGETABLES_HANDLER } from "./actionTypes";

    const reducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case VEGETABLE_ITEMS_LOADED:
                return produce(state, draft => {
                    draft.vegetableItems = action.payload;
                })
            case VEGETABLE_ITEMS_FAILURE:
                return produce(state, draft => {
                    draft.vegetableItems = [];
                })
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
            case REMOVE_ITEM_HANDLER:
                return produce(state, draft => {
                    draft.vegetableItems[action.itemIndex].count = 0;
                })
            case REMOVE_FROM_CART_HANDLER:
                return produce(state, draft => {
                    const vegetableItem = draft.vegetableItems[action.itemIndex];
                    draft.cartDetails.itemsCount -= vegetableItem.count;
                    draft.cartDetails.itemsOriginalPrice -= vegetableItem.originalPrice;
                    draft.cartDetails.itemsDiscountedPrice -= vegetableItem.discountedPrice;
                })
            case CLEAR_ITEM_HANDLER:
                return produce(state, draft => {
                    draft.vegetableItems.map(vegetableItem => vegetableItem.count = 0);
                })
            case CLEAR_CART_HANDLER:
                return produce(state, draft => {
                    draft.cartDetails.itemsCount = 0;
                    draft.cartDetails.itemsOriginalPrice = 0;
                    draft.cartDetails.itemsDiscountedPrice = 0;
                })
            case SEARCH_VEGETABLES_HANDLER:
                return produce(state, draft => {
                    draft.searchBarValue = action.payload;
                })
            default: return state;
        }
    }

export default reducer;