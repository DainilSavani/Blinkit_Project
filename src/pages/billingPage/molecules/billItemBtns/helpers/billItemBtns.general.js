import PropTypes from 'prop-types';

const removeItemClickHandler = ({itemIndex, vegetableItem, vegetableItemsUpdate, itemsCartUpdate}) => {
    itemsCartUpdate(itemIndex, vegetableItem.count, false);
    vegetableItemsUpdate(itemIndex, vegetableItem, 0);
}

removeItemClickHandler.propTypes = {
    itemIndex: PropTypes.number,
    vegetableItem: PropTypes.object,
    vegetableItemsUpdate: PropTypes.func,
    itemsCartUpdate: PropTypes.func
}

removeItemClickHandler.defaultProps = {
    itemIndex: -1,
    vegetableItem: {},
    vegetableItemsUpdate: () => {},
    itemsCartUpdate: () => {}
}

export default removeItemClickHandler;