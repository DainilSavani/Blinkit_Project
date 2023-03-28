import produce from "immer";

const clearItem = (appSetState) => {
    appSetState(produce(draft => {
        draft.vegetableItems.map(vegetableItem => {
            vegetableItem.count = 0;
            return vegetableItem;
        })
    }))
}

const clearCart = (appSetState) => {
    appSetState(produce(draft => {
        draft.cartDetails.itemsCount = 0;
        draft.cartDetails.originalPrice = 0;
        draft.cartDetails.discountedPrice = 0;
    }))
}
const clearCartClickHandler = (props) => {
    clearItem(props);
    clearCart(props);
}

export default clearCartClickHandler;