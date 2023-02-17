 export class Model {
    constructor(data) {
        this.items = data;
        this.price = {
            mrp: 0,
            it: 0,
            disc: 0,
            total: 0
        }
        this.no_of_items = data.length;
    }
    validate() {
        var items2 = localStorage.getItem("items2");
        var price2 = localStorage.getItem("price2");
        if (items2!=null && items2!=undefined && JSON.stringify(this.items)!=items2) {
            this.items = JSON.parse(items2);
            this.price = JSON.parse(price2);
        } 
        this.setStorage("items", this.items);
        this.setStorage("price", this.price);
        localStorage.removeItem("price2");
        localStorage.removeItem("items2");
    }
    setStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    getStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}