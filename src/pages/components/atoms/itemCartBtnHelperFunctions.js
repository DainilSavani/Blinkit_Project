export const incrementItemInCartHandler = function incrementItemInCartHandler({setVegetableItems, setCartStatus, vegetableItems, itemIndex}){
    const newVegetableItems = [...vegetableItems];
    newVegetableItems[itemIndex].count += 1;
    setCartStatus(cartStatus => ({
        itemsCount: cartStatus.itemsCount + 1,
        itemsMRP: cartStatus.itemsMRP + vegetableItems[itemIndex].MRP,
        itemsAmount: cartStatus.itemsAmount + vegetableItems[itemIndex].price
    }))
    setVegetableItems(vegetableItems => newVegetableItems);
}

export const decrementItemInCartHandler = function decrementItemInCartHandler({setVegetableItems, setCartStatus, vegetableItems, itemIndex}){
    const newVegetableItems = [...vegetableItems];
    newVegetableItems[itemIndex].count -= 1;
    setCartStatus(cartStatus => ({
        itemsCount: cartStatus.itemsCount - 1,
        itemsMRP: cartStatus.itemsMRP - vegetableItems[itemIndex].MRP,
        itemsAmount: cartStatus.itemsAmount - vegetableItems[itemIndex].price
    }))
    setVegetableItems(vegetableItems => newVegetableItems);
}