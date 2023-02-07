import PropTypes from 'prop-types';

const incrementClickHandler = ({itemIndex, incrementItemHandler, incrementCartHandler}) => {
    incrementItemHandler(itemIndex);
    incrementCartHandler(itemIndex);
}

incrementClickHandler.propTypes = {
    itemIndex: PropTypes.number,
    incrementItemHandler: PropTypes.func,
    incrementCartHandler: PropTypes.func
}
incrementClickHandler.defaultProps = {
    itemIndex: -1,
    incrementItemHandler: () => {},
    incrementCartHandler: () => {}
}

export default incrementClickHandler;