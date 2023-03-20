import produce from "immer";

export const incrementItemHandler = function incrementItemHandler(itemIndex, setState){
    setState(produce(draft => {
        draft.vegetableItems[itemIndex].count += 1;
    }));
}

export const decrementItemHandler = function decrementItemHandler(itemIndex, setState){
    setState(produce(draft => {
        draft.vegetableItems[itemIndex].count -= 1;
    }));
}

export const removeItemHandler = function removeItemHandler(itemIndex, setState){
    const prevItemCount = this.state.vegetableItems[itemIndex].count;
    setState(produce(draft => {
        draft.vegetableItems[itemIndex].count = 0;
    }));
}

export const incrementCartHandler = function incrementCartHandler(vegetableItem, setState) {
    setState(produce(draft => {
        draft.cartDetails.itemsCount += 1;
        draft.cartDetails.itemsOriginalPrice += vegetableItem.originalPrice;
        draft.cartDetails.itemsDiscountedPrice += vegetableItem.discountedPrice;
    }))
}

export const decrementCartHandler = function decrementCartHandler(vegetableItem, setState) {
    setState(produce(draft => {
        draft.cartDetails.itemsCount -= 1;
        draft.cartDetails.itemsOriginalPrice -= vegetableItem.originalPrice;
        draft.cartDetails.itemsDiscountedPrice -= vegetableItem.discountedPrice;
    }))
}

export const removeFromCartHandler = function removeFromCartHandler(vegetableItem, setState) {
    setState(produce(draft => {
        draft.cartDetails.itemsCount -= vegetableItem.count;
        draft.cartDetails.itemsOriginalPrice -= vegetableItem.originalPrice * vegetableItem.count;
        draft.cartDetails.itemsDiscountedPrice -= vegetableItem.discountedPrice * vegetableItem.count;
    }))
}