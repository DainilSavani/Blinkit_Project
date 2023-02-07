import PropTypes from 'prop-types';

const decrementClickHandler = ({itemIndex, decrementItemHandler, decrementCartHandler}) => {
    decrementItemHandler(itemIndex);
    decrementCartHandler(itemIndex);
}

decrementClickHandler.propTypes = {
    itemIndex: PropTypes.number,
    decrementItemHandler: PropTypes.func,
    decrementCartHandler: PropTypes.func
}
decrementClickHandler.defaultProps = {
    itemIndex: -1,
    decrementItemHandler: () => {},
    decrementCartHandler: () => {}
}

export default decrementClickHandler;