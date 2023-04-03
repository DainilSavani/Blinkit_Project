const clearCartClickHandler = ({vegetableItems, vegetableItemsUpdate, clearCartStateUpdate}) => {
    vegetableItems.map((vegetableItem,itemIndex) => {
        if (vegetableItem.count)
            vegetableItemsUpdate(itemIndex, vegetableItem, 0);
    })
    clearCartStateUpdate();
}

export default clearCartClickHandler;