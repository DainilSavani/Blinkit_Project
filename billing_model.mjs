export class Model {
    constructor() {
        this.items2;
        this.price2;
        this.prod_count = 0;
        this.validate();
    }
    validate() {
        var items = localStorage.getItem("items");
        var price = localStorage.getItem("price");
        if (JSON.stringify(this.items2) != items) {
            this.items2 = JSON.parse(items);
            this.price2 = JSON.parse(price);
            this.setStorage("price2", this.price2);
            this.setStorage("items2", this.items2);
        }
    }
    setStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    getStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}