import produce from "immer";

export const clearItemHandler = function clearItemHandler(setState) {
    setState(produce(draft => {
        draft.vegetableItems.map(vegetableItem => {
            vegetableItem.count = 0;
            return vegetableItem;
        })
    }))
}

export const clearCartHandler = function clearCartHandler(setState) {
    setState(produce(draft => {
        draft.cartDetails.itemsCount = 0;
        draft.cartDetails.originalPrice = 0;
        draft.cartDetails.discountedPrice = 0;
    }))
}