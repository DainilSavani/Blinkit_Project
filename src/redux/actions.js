import axios from "axios";

// constants
import { API, CART_DETAILS } from "../constants/app.general";
import {
    VEGETABLE_ITEMS_FETCH, VEGETABLE_ITEMS_STATE_UPDATE,
    VEGETABLE_ITEMS_API_UPDATE_FAILURE, ITEMS_CART_UPDATE,
    CLEAR_CART_STATE_UPDATE
} from "./actionTypes";

export const fetchVegetableItems = () => {
    return dispatch => {
        return axios.get(API)
            .then(response => dispatch(vegetableItemsFetch(response.data)))
            .catch(() => dispatch(vegetableItemsApiUpdateFailure("unable to fetch vegetable data!!!")))
    }
}

export const vegetableItemsUpdate = (itemIndex, vegetableItem, result) => {
    return dispatch => {
        return axios.put(`${API}/${itemIndex}`, { ...vegetableItem, count: result })
            .then(() => dispatch(vegetableItemStateUpdate(itemIndex, result)))
            .catch(() => dispatch(vegetableItemsApiUpdateFailure("unable to update vegetable data in Api!!!")))
    }
}

export const vegetableItemsFetch = (result) => {
    return {
        type: VEGETABLE_ITEMS_FETCH,
        payload: result,
        cartDetails: calculateCartDetails(result)
    }
}

export const calculateCartDetails = (vegetableItems) => {
    const cartDetails = {...CART_DETAILS};
    vegetableItems.map(vegetableItem => {
        if (vegetableItem.count !== 0) {
            cartDetails.itemsCount += vegetableItem.count;
            cartDetails.itemsDiscountedPrice += vegetableItem.discountedPrice*vegetableItem.count;
            cartDetails.itemsOriginalPrice += vegetableItem.originalPrice*vegetableItem.count;
        }
    });
    return cartDetails;
}

export const vegetableItemStateUpdate = (itemIndex, result) => {
    return {
        type: VEGETABLE_ITEMS_STATE_UPDATE,
        payload: result,
        itemIndex: itemIndex
    }
}

export const vegetableItemsApiUpdateFailure = (failureMessage) => {
    return {
        type: VEGETABLE_ITEMS_API_UPDATE_FAILURE,
        payload: failureMessage
    }
}

export const itemsCartUpdate = (itemIndex, result, isIncrement) => {
    return {
        type: ITEMS_CART_UPDATE,
        payload: result,
        itemIndex: itemIndex,
        isIncrement: isIncrement
    }
}

export const clearCartStateUpdate = () => {
    return {
        type: CLEAR_CART_STATE_UPDATE
    }
}