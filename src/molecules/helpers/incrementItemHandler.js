import PropTypes from 'prop-types';

const incrementClickHandler = ({itemIndex, vegetableItem, vegetableItemsUpdate, itemsCartUpdate}) => {
    vegetableItemsUpdate(itemIndex, vegetableItem, vegetableItem.count+1);
    itemsCartUpdate(itemIndex, 1, true);
}

incrementClickHandler.propTypes = {
    itemIndex: PropTypes.number,
    vegetableItem: PropTypes.object,
    vegetableItemsUpdate: PropTypes.func,
    itemsCartUpdate: PropTypes.func
}
incrementClickHandler.defaultProps = {
    itemIndex: -1,
    vegetableItem: {},
    vegetableItemsUpdate: () => {},
    itemsCartUpdate: () => {}
}

export default incrementClickHandler;