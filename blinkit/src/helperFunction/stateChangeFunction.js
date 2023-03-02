import VEGETABLE_ITEMS from '../data/vegetableData.json';
import { CART_STATUS } from '../data/constData';

export const searchVegetable = function searchVegetable(value){
    this.setState({searchBarValue : value});
}

export const changeInputLocation = function changeInputLocation(location){
    this.setState({location: location});
};

export const addItemsToCartHandler = function addItemsToCartHandler(itemIndex){
    this.setState(prevState => ({
        vegetableItems: [
            ...prevState.vegetableItems.slice(0, itemIndex),
            { ...prevState.vegetableItems[itemIndex], count: prevState.vegetableItems[itemIndex].count + 1} , 
            ...prevState.vegetableItems.slice(itemIndex + 1)
        ],
        cartStatus: {
            itemsCount: prevState.cartStatus.itemsCount + 1,
            itemsMRP: prevState.cartStatus.itemsMRP + prevState.vegetableItems[itemIndex].MRP,
            itemsAmount: prevState.cartStatus.itemsAmount + prevState.vegetableItems[itemIndex].price
        }
    }));
}

export const decreaseItemsFromCartHandler = function decreaseItemsFromCartHandler(itemIndex){
    this.setState(prevState => ({
        vegetableItems: [
            ...prevState.vegetableItems.slice(0, itemIndex),
            Object.assign({}, prevState.vegetableItems[itemIndex], { count: prevState.vegetableItems[itemIndex].count - 1 }),
            ...prevState.vegetableItems.slice(itemIndex + 1)
        ],
        cartStatus: {
            itemsCount: prevState.cartStatus.itemsCount - 1,
            itemsMRP: prevState.cartStatus.itemsMRP - prevState.vegetableItems[itemIndex].MRP,
            itemsAmount: prevState.cartStatus.itemsAmount - prevState.vegetableItems[itemIndex].price
        }
    }));
}

export const removeItemFromCartHandler = function removeItemFromCartHandler(itemIndex){
    const prevItemCount = this.state.vegetableItems[itemIndex].count;
    this.setState(prevState => ({
        vegetableItems: [
            ...this.state.vegetableItems.slice(0, itemIndex),
            Object.assign({}, this.state.vegetableItems[itemIndex], { count: 0}),
            ...this.state.vegetableItems.slice(itemIndex + 1)
        ],
        cartStatus: {
            itemsCount: prevState.cartStatus.itemsCount - prevItemCount,
            itemsMRP: prevState.cartStatus.itemsMRP - prevState.vegetableItems[itemIndex].MRP*prevItemCount,
            itemsAmount: prevState.cartStatus.itemsAmount - prevState.vegetableItems[itemIndex].price*prevItemCount
        }
    }));
}

export const clearCartHandler = function clearCartHandler(itemIndex) {
    this.setState({
        vegetableItems: [...VEGETABLE_ITEMS],
        cartStatus: {...CART_STATUS}
    })
}