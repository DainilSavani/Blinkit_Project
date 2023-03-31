import produce from "immer";
import PropTypes from 'prop-types';

// helper functions
import { updateDataInApi } from "../../../helpers/app.general";

const decrementItem = ({ itemIndex, appSetState }) => {
    appSetState(produce(draft => {
        draft.vegetableItems[itemIndex].count -= 1;
    }));
}

const decrementCart = ({ itemIndex, appSetState }) => {
    appSetState(produce(draft => {
        const vegetableItem = draft.vegetableItems[itemIndex];
        draft.cartDetails.itemsCount -= 1;
        draft.cartDetails.itemsOriginalPrice -= vegetableItem.originalPrice;
        draft.cartDetails.itemsDiscountedPrice -= vegetableItem.discountedPrice;
    }))
}

const decrementClickHandler = (props) => {
    const { itemIndex, vegetableItem } = props;
    decrementCart(props);
    decrementItem(props);
    updateDataInApi(itemIndex, vegetableItem, vegetableItem.count-1);
}

decrementClickHandler.propTypes = {
    itemIndex: PropTypes.number,
    appSetState: PropTypes.func
}
decrementClickHandler.defaultProps = {
    itemIndex: -1,
    appSetState: () => { }
}

export default decrementClickHandler;