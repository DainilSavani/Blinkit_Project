import React, { Component, ReactDOM } from 'react';
import data from './items.json';
import HeaderTemplate from './homePage/templates/HeaderTemplate';
import MainContent from './homePage/templates/MainContent';
import ServiceTempplate from './homePage/templates/ServiceTemplate';
import Foot from './homePage/UI/organisms/Foot';
import { ValueProvider } from './homePage/Context';

export class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: data,
            cart: {
                count: 0,
                mrp: 0,
                total: 0
            },
            search: "",
            type: "all"
        }
    }
    addItem = (i) => {
        this.setState(prevState => ({
            items: [
                ...prevState.items.slice(0, i),
                Object.assign({}, prevState.items[i], {count: prevState.items[i].count+1}),
                ...prevState.items.slice(i+1)
            ],
            cart: {
                count: prevState.cart.count+1,
                mrp: prevState.cart.mrp + prevState.items[i].old_price,
                total: prevState.cart.total + prevState.items[i].new_price
            }
        }));
    }
    decreaseItem = (i) => {
        this.setState(prevState => ({
            items: [
                ...prevState.items.slice(0, i),
                Object.assign({}, prevState.items[i], {count: prevState.items[i].count-1}),
                ...prevState.items.slice(i+1)
            ],
            cart: {
                count: prevState.cart.count-1,
                mrp: prevState.cart.mrp - prevState.items[i].old_price,
                total: prevState.cart.total - prevState.items[i].new_price
            }
        }));
    }
    searchItem = (value) => {
        this.setState({
            search: value
        }, () => {
            console.log(this.state.search);
        });
    }
    sortType = (value) => {
        this.setState({
            type: value
        }, () => {
            console.log(this.state.type);
        })
    }
    render() {
        return (
            <>
                <ValueProvider value={
                    {
                        items: this.state.items,
                        cart: this.state.cart,
                        addItem: this.addItem,
                        decreaseItem: this.decreaseItem,
                        search: this.state.search,
                        searchItem: this.searchItem,
                        type: this.state.type,
                        sortType: this.sortType
                    }
                }>
                    <HeaderTemplate />
                    <MainContent />
                </ValueProvider>
                <ServiceTempplate />
                <Foot />
            </>
        )
    }
}

export default HomePage
