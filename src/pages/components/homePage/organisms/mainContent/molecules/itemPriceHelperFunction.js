export const addToCartHandler = function addToCartHandler(itemIndex){
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

export const removeFromCartHandler = function removeFromCartHandler(itemIndex){
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