import axios from "axios";

// constants
import { API, CART_DETAILS } from "../constants/app.general";

const calculateCartDetails = (vegetableItems) => {
    const cartDetails = {...CART_DETAILS};
    vegetableItems.map((vegetableItem, itemIndex) => {
        if (vegetableItem.count !== 0) {
            cartDetails.itemsCount += vegetableItem.count;
            cartDetails.itemsDiscountedPrice += vegetableItem.discountedPrice*vegetableItem.count;
            cartDetails.itemsOriginalPrice += vegetableItem.originalPrice*vegetableItem.count;
        }
    });
    return cartDetails;
}

export const stateSetter = (setState, vegetableItems) => {
    setState(prevState => (
        {...prevState, vegetableItems: vegetableItems, cartDetails: calculateCartDetails(vegetableItems)}
        )
    )
}

export const dataFetchError = () => (
    alert('something went wrong while fetching product data!!!')
);

export const dataUpdateError = () => (
    alert('something went wrong while updating product data!!!')
);

export const updateDataInApi = (itemIndex, vegetableItem, result) => {
    axios.put(`${API}/${itemIndex}`, {...vegetableItem, count: result})
        .catch(dataUpdateError);
}

export const resetDataInApi = (vegetableItems) => {
    vegetableItems.map((vegetableItem, itemIndex) => {
        if (vegetableItem.count !== 0) {
            updateDataInApi(itemIndex, vegetableItem, 0);
        }
    }); 
}