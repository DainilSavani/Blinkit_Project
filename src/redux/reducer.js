const CART_DETAILS = {
    itemsCount: 14,
    itemsOriginalPrice: 415,
    itemsDiscountedPrice: 341
}

const INITIAL_STATE = {
    cartDetails: CART_DETAILS,
    userLocation: 'Bangalore'
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default reducer;