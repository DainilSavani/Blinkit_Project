import produce from "immer";
import PropTypes from 'prop-types';

const incrementItem = ({ itemIndex, appSetState }) => {
    appSetState(produce(draft => {
        draft.vegetableItems[itemIndex].count += 1;
    }));
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
    incrementItem(props);
    incrementCart(props);
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