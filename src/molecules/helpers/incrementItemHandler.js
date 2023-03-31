import produce from "immer";
import PropTypes from 'prop-types';

// helper functions
import { updateDataInApi } from "../../helpers/app.general";

const incrementItem = ({ itemIndex, appSetState }) => {
    appSetState(produce(draft => {
        draft.vegetableItems[itemIndex].count += 1;
    }))
}

const incrementCart = ({ itemIndex, appSetState }) => {
    appSetState(produce(draft => {
        const vegetableItem = draft.vegetableItems[itemIndex];
        draft.cartDetails.itemsCount += 1;
        draft.cartDetails.itemsOriginalPrice += vegetableItem.originalPrice;
        draft.cartDetails.itemsDiscountedPrice += vegetableItem.discountedPrice;
    }))
}

const incrementClickHandler = (props) => {
    const { itemIndex, vegetableItem } = props;
    incrementItem(props);
    incrementCart(props);
    updateDataInApi(itemIndex, vegetableItem, vegetableItem.count+1);
}

incrementClickHandler.propTypes = {
    itemIndex: PropTypes.number,
    appSetState: PropTypes.func
}
incrementClickHandler.defaultProps = {
    itemIndex: -1,
    appSetState: () => {}
}

export default incrementClickHandler;