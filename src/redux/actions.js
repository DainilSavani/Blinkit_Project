import { INCREMENT_ITEM_IN_CART, DECREMENT_ITEM_IN_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART, SEARCH_VEGETABLES } from "./actionTypes";

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

export const removeItemFromCartHandler = function removeItemFromCartHandler(itemIndex) {
    return {
        type: REMOVE_ITEM_FROM_CART,
        itemIndex: itemIndex
    }
}

export const clearCartHandler = function clearCartHandler() {
    return {
        type: CLEAR_CART
    }
}

export const searchVegetable = function searchVegetable(searchValue) {
    return {
        type: SEARCH_VEGETABLES,
        payload: searchValue
    }
}