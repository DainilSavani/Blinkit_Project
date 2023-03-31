import produce from "immer";

// helper function
import { resetDataInApi } from "./app.general";

const clearItem = (appSetState) => {
    appSetState(produce(draft => {
        resetDataInApi(draft.vegetableItems);
        draft.vegetableItems.map(vegetableItem => {
            vegetableItem.count = 0;
        });
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
    clearItem(props)
    clearCart(props);
}

export default clearCartClickHandler;