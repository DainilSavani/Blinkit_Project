import { INCREMENT_ITEM_HANDLER, INCREMENT_CART_HANDLER, DECREMENT_ITEM_HANDLER, DECREMENT_CART_HANDLER, 
        SEARCH_VEGETABLES_HANDLER, FILTER_HANDLER } from "./actionTypes";

export const incrementItemHandler = function incrementItemHandler(itemIndex) {
    return {
        type: INCREMENT_ITEM_HANDLER,
        payload: 1,
        itemIndex: itemIndex
    }
}

export const incrementCartHandler = function incrementCartHandler(itemIndex) {
    return {
        type: INCREMENT_CART_HANDLER,
        payload: 1,
        itemIndex: itemIndex
    }
}

export const decrementItemHandler = function decrementItemHandler(itemIndex) {
    return {
        type: DECREMENT_ITEM_HANDLER,
        payload: 1,
        itemIndex: itemIndex
    }
}

export const decrementCartHandler = function decrementCartHandler(itemIndex) {
    return {
        type: DECREMENT_CART_HANDLER,
        payload: 1,
        itemIndex: itemIndex
    }
}

export const searchVegetableHandler = function searchVegetableHandler(searchValue) {
    return {
        type: SEARCH_VEGETABLES_HANDLER,
        payload: searchValue
    }
}

export const filterHandler = function filterHandler(filterType) {
    return {
        type: FILTER_HANDLER,
        payload: filterType
    }
}
