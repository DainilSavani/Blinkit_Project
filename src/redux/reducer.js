import INITIAL_STATE from "./initialState";
import produce from "immer";
import { INCREMENT_ITEM_IN_CART, DECREMENT_ITEM_IN_CART, SEARCH_VEGETABLES, FILTER_CHANGE } from "./actionTypes";

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INCREMENT_ITEM_IN_CART:
            return produce(state, draft => {
                const item = draft.vegetableData[action.itemIndex];
                item.count += action.payload;
                draft.cartStatus.itemsCount += action.payload;
                draft.cartStatus.itemsMRP += action.payload * item.MRP;
                draft.cartStatus.itemsAmount += action.payload * item.price;
            });
        case DECREMENT_ITEM_IN_CART:
            return produce(state, draft => {
                const item = draft.vegetableData[action.itemIndex];
                item.count -= action.payload;
                draft.cartStatus.itemsCount -= action.payload;
                draft.cartStatus.itemsMRP -= action.payload * item.MRP;
                draft.cartStatus.itemsAmount -= action.payload * item.price;
            });
        case SEARCH_VEGETABLES:
            return produce(state, draft => {
                draft.searchBarValue = action.payload;
            })
        case FILTER_CHANGE:
            return produce(state, draft => {
                draft.filterType = action.payload;
            })
        default: return state;    
    }
}

export default reducer;