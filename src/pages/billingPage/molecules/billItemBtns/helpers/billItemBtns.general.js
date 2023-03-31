import produce from "immer";
import { PropTypes } from 'prop-types';

// constants
import { updateDataInApi } from "../../../../../helpers/app.general";

const removeFromCart = ({ itemIndex, appSetState }) => {
    appSetState(produce(draft => {
        const vegetableItem = draft.vegetableItems[itemIndex];
        const count = vegetableItem.count;
        draft.cartDetails.itemsCount -= count;
        draft.cartDetails.itemsOriginalPrice -= vegetableItem.originalPrice * count;
        draft.cartDetails.itemsDiscountedPrice -= vegetableItem.discountedPrice * count;
    }))
}

const removeItem = ({ itemIndex, appSetState }) => {
    appSetState(produce(draft => {
        draft.vegetableItems[itemIndex].count = 0;
    }));
}

const removeItemClickHandler = (props) => {
    const { itemIndex, vegetableItem } = props;
    removeFromCart(props);
    removeItem(props);
    updateDataInApi(itemIndex, vegetableItem, 0);
}

removeItemClickHandler.propTypes = {
    itemIndex: PropTypes.number,
    appSetState: PropTypes.func
}
removeItemClickHandler.defaultProps = {
    itemIndex: -1,
    appSetState: () => {}
}

export default removeItemClickHandler;