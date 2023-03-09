import { INCREMENT_ITEM_IN_CART, DECREMENT_ITEM_IN_CART, SEARCH_VEGETABLES, FILTER_CHANGE } from "./actionTypes";

export const incrementItemInCartHandler = function incrementItemInCartHandler(itemIndex) {
    return {
        type: INCREMENT_ITEM_IN_CART,
        payload: 1,
        itemIndex: itemIndex
    }
}

export const decrementItemInCartHandler = function decrementItemInCartHandler(itemIndex) {
    return {
        type: DECREMENT_ITEM_IN_CART,
        payload: 1,
        itemIndex: itemIndex
    }
}

export const searchVegetable = function searchVegetable(searchValue) {
    return {
        type: SEARCH_VEGETABLES,
        payload: searchValue
    }
}

export const filterHandler = function filterHandler(filterType) {
    return {
        type: FILTER_CHANGE,
        payload: filterType
    }
}
