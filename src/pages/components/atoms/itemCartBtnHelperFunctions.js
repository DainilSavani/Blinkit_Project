export const incrementItemInCartHandler = function incrementItemInCartHandler({setVegetableItems, setCartStatus, vegetableItems, itemIndex}){
    const newVegetableItems = [...vegetableItems];
    newVegetableItems[itemIndex].count += 1;
    setCartStatus(cartStatus => ({
        itemsCount: cartStatus.itemsCount + 1,
        itemsMRP: cartStatus.itemsMRP + vegetableItems[itemIndex].MRP,
        itemsAmount: cartStatus.itemsAmount + vegetableItems[itemIndex].price
    }))
    setVegetableItems(newVegetableItems);
}

export const decrementItemInCartHandler = function decrementItemInCartHandler({setVegetableItems, setCartStatus, vegetableItems, itemIndex}){

    const newVegetableItems = [...vegetableItems];
    newVegetableItems[itemIndex].count -= 1;
    setCartStatus(cartStatus => ({
        itemsCount: cartStatus.itemsCount - 1,
        itemsMRP: cartStatus.itemsMRP - vegetableItems[itemIndex].MRP,
        itemsAmount: cartStatus.itemsAmount - vegetableItems[itemIndex].price
    }))
    setVegetableItems(newVegetableItems);
}

export const removeItemFromCartHandler = function removeItemFromCartHandler({setVegetableItems, setCartStatus, vegetableItems, itemIndex}){
    const count = vegetableItems[itemIndex].count;
    const newVegetableItems = [...vegetableItems];
    newVegetableItems[itemIndex].count = 0;
    setCartStatus(cartStatus => ({
        itemsCount: cartStatus.itemsCount - count,
        itemsMRP: cartStatus.itemsMRP - count * vegetableItems[itemIndex].MRP,
        itemsAmount: cartStatus.itemsAmount - count * vegetableItems[itemIndex].price
    }));
    setVegetableItems(vegetableItems => newVegetableItems);
}