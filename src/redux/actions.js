// constants
import { VEGETABLE_ITEMS_LOADED, VEGETABLE_ITEMS_FAILURE,
    INCREMENT_ITEM_HANDLER, INCREMENT_CART_HANDLER, 
    DECREMENT_ITEM_HANDLER, DECREMENT_CART_HANDLER,
    REMOVE_ITEM_HANDLER, REMOVE_FROM_CART_HANDLER,
    CLEAR_ITEM_HANDLER, CLEAR_CART_HANDLER,
    SEARCH_VEGETABLES_HANDLER
} from "./actionTypes";

export const fetchVegetableItems = function fetchVegetableItems() {
    return dispatch => {
        return fetch('http://localhost:5000/VEGETABLE_ITEMS')
        .then(response => response.json())
        .then(VEGETABLE_ITEMS => dispatch({type: VEGETABLE_ITEMS_LOADED, payload: VEGETABLE_ITEMS}))
        .catch(err => dispatch({type: VEGETABLE_ITEMS_FAILURE, payload: "Unable to fetch data"}))
    }
}

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

export const removeItemHandler = function removeItemHandler(itemIndex) {
    return {
        type: REMOVE_ITEM_HANDLER,
        itemIndex: itemIndex
    }
}

export const removeFromCartHandler = function removeFromCartHandler(itemIndex) {
    return {
        type: REMOVE_FROM_CART_HANDLER,
        itemIndex: itemIndex
    }
}

export const  clearItemHandler = function clearItemHandler() {
    return {
        type: CLEAR_ITEM_HANDLER
    }
}

export const  clearCartHandler = function clearCartHandler() {
    return {
        type: CLEAR_CART_HANDLER
    }
}

export const searchVegetableHandler = function searchVegetableHandler(searchValue) {
    return {
        type: SEARCH_VEGETABLES_HANDLER,
        payload: searchValue
    }
}