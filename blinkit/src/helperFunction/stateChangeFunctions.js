const searchVegetable = function searchVegetable(value){
    this.setState({searchBarValue : value});
}

const changeInputLocation = function changeInputLocation(location){
    this.setState({location: location});
};

const filterHandler = function filterHandler(value){
    this.setState({filterType: value});
}

const addToCartHandler = function addToCartHandler(itemIndex){
    this.setState(prevState => ({
        vegetableData: [
            ...prevState.vegetableData.slice(0, itemIndex),
            Object.assign({}, prevState.vegetableData[itemIndex], { count: prevState.vegetableData[itemIndex].count + 1 }),
            ...prevState.vegetableData.slice(itemIndex + 1)
        ],
        cartStatus: {
            itemsCount: prevState.cartStatus.itemsCount + 1,
            itemsMRP: prevState.cartStatus.itemsMRP + prevState.vegetableData[itemIndex].MRP,
            itemsAmount: prevState.cartStatus.itemsAmount + prevState.vegetableData[itemIndex].price
        }
    }));
}

const removeFromCartHandler = function removeFromCartHandler(itemIndex){
    this.setState(prevState => ({
        vegetableData: [
            ...prevState.vegetableData.slice(0, itemIndex),
            Object.assign({}, prevState.vegetableData[itemIndex], { count: prevState.vegetableData[itemIndex].count - 1 }),
            ...prevState.vegetableData.slice(itemIndex + 1)
        ],
        cartStatus: {
            itemsCount: prevState.cartStatus.itemsCount - 1,
            itemsMRP: prevState.cartStatus.itemsMRP - prevState.vegetableData[itemIndex].MRP,
            itemsAmount: prevState.cartStatus.itemsAmount - prevState.vegetableData[itemIndex].price
        }
    }));
}

export {searchVegetable, changeInputLocation, filterHandler, addToCartHandler, removeFromCartHandler};