import INITIAL_STATE from "./initialState";
import produce from "immer";
import { INCREMENT_ITEM_IN_CART, DECREMENT_ITEM_IN_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART, SEARCH_VEGETABLES } from "./actionTypes";

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

        case REMOVE_ITEM_FROM_CART:
            return produce(state, draft => {
                console.log(action.itemIndex)
                const item = draft.vegetableData[action.itemIndex];
                draft.cartStatus.itemsCount -= item.count;
                draft.cartStatus.itemsMRP -= item.count * item.MRP;
                draft.cartStatus.itemsAmount -= item.count * item.price;
                item.count = 0;
            });

        case CLEAR_CART:
            return {
                ...INITIAL_STATE
            }

        case SEARCH_VEGETABLES:
            return produce(state, draft => {
                draft.searchBarValue = action.payload;
            })

        default: 
            return state;    
    }
}

export default reducer;