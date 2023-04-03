import PropTypes from 'prop-types';

const decrementClickHandler = ({itemIndex, vegetableItem, vegetableItemsUpdate, itemsCartUpdate}) => {
    vegetableItemsUpdate(itemIndex, vegetableItem, vegetableItem.count-1);
    itemsCartUpdate(itemIndex, 1, false);
}

decrementClickHandler.propTypes = {
    itemIndex: PropTypes.number,
    vegetableItem: PropTypes.object,
    vegetableItemsUpdate: PropTypes.func,
    itemsCartUpdate: PropTypes.func
}
decrementClickHandler.defaultProps = {
    itemIndex: -1,
    vegetableItem: {},
    vegetableItemsUpdate: () => {},
    itemsCartUpdate: () => {}
}

export default decrementClickHandler;