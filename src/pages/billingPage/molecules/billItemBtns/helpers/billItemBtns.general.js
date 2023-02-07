import PropTypes from 'prop-types';

const removeItemClickHandler = (itemIndex, removeItemHandler, removeFromCartHandler) => {
    removeFromCartHandler(itemIndex);
    removeItemHandler(itemIndex);
}

removeItemClickHandler.propTypes = {
    itemIndex: PropTypes.number,
    removeItemHandler: PropTypes.func,
    removeFromCartHandler: PropTypes.func
}

removeItemClickHandler.defaultProps = {
    itemIndex: -1,
    removeItemHandler: () => {},
    removeFromCartHandler: () => {}
}

export default removeItemClickHandler;