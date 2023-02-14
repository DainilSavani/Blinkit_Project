class Model {
    constructor() {
        this.items = [
            {
                "name": "New Potato",
                "src": "/images/vegetables/potato.avif",
                "discount": "18% OFF",
                "sourced": "Sourced at 5 AM",
                "count" : 0,
                "weight": 1,
                "new_price": 15,
                "old_price": 17
            },
            {
                "name": "Onion",
                "src": "/images/vegetables/onion.avif",
                "discount": "21% OFF",
                "sourced": "Sourced at 5 AM",
                "count" : 0,
                "weight": 1,
                "new_price": 32,
                "old_price": 41
            },
            {
                "name": "Local Carrot",
                "src": "/images/vegetables/carrot.avif",
                "discount": "10% OFF",
                "sourced": "Sourced at 5 AM",
                "count" : 0,
                "weight": 0.5,
                "new_price": 17,
                "old_price": 19
            },
            {
                "name": "Green Chilli",
                "src": "/images/vegetables/chilli.avif",
                "discount": "16% OFF",
                "sourced": "Sourced at 5 AM",
                "count" : 0,
                "weight": 0.1,
                "new_price": 10,
                "old_price": 12
            },
            {
                "name": "Hybrid Tomato",
                "src": "/images/vegetables/hybrid_tomato.avif",
                "discount": "23% OFF",
                "sourced": "Sourced at 5 AM",
                "count" : 0,
                "weight": 0.5,
                "new_price": 15,
                "old_price": 19
            },
            {
                "name": "Cauliflower",
                "src": "/images/vegetables/cauliflower.avif",
                "discount": "17% OFF",
                "sourced": "Sourced at 5 AM",
                "count" : 0,
                "weight": 0.5,
                "new_price": 23,
                "old_price": 28
            },
            {
                "name": "Desi Tomato",
                "src": "/images/vegetables/desi_tomato.avif",
                "discount": "16% OFF",
                "sourced": "Sourced at 5 AM",
                "count" : 0,
                "weight": 0.5,
                "new_price": 20,
                "old_price": 24
            },
            {
                "name": "Ginger",
                "src": "/images/vegetables/ginger.avif",
                "discount": "21% OFF",
                "sourced": "Sourced at 5 AM",
                "count" : 0,
                "weight": 0.25,
                "new_price": 37,
                "old_price": 47
            },
            {
                "name": "Sweet Potato",
                "src": "/images/vegetables/sweet_potato.avif",
                "discount": "12% OFF",
                "sourced": "Sourced at 5 AM",
                "count" : 0,
                "weight": 0.6,
                "new_price": 55,
                "old_price": 60
            },
            {
                "name": "Bitter Gourd",
                "src": "/images/vegetables/bitter_gourd.avif",
                "discount": "14% OFF",
                "sourced": "Sourced at 5 AM",
                "count" : 0,
                "weight": 0.25,
                "new_price": 29,
                "old_price": 34
            }
        ];
        this.price = {
            mrp: 0,
            it: 0,
            disc: 0,
            total: 0
        }
        this.no_of_items = this.items.length;
        this.validate();
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
class View {
    constructor() {
        this.element;
        this.product_container = document.getElementsByClassName("container")[0];
        this.price_box = document.getElementsByClassName("price");
        this.add_btn = new Array();
        this.add_item_btn = new Array(model.no_of_items);
        this.add_item_value = new Array(model.no_of_items);
        this.add_decrease_item = new Array(model.no_of_items);
        this.add_increase_item = new Array(model.no_of_items);
        this.cart_btn_id = document.getElementById("cart_btn_id");
        this.cart_btn_text = document.getElementsByClassName("cart_btn_text")[0];
    }
    loadItems(item, flag) {
        if (flag) {
            this.element = `
                <div class="item">
                    <div class="discount">
                        <p>${item.discount}</p>
                    </div>
                    <div class="img">
                        <img src=${item.src} alt="error">
                    </div>
                    <div class="time">
                        <img width="12" height="12" loading="lazy" 
                        src="https://cdn.grofers.com/assets/ui/fresh_icon.png">
                        <p>${item.sourced}</p>
                    </div>
                    <div class="name">
                        <p>${item.name}</p>
                    </div>
                    <div class="weight">
                        <p>${item.weight} kg</p>
                    </div>
                    <div class="price">
                        <div class="value">
                            <p>₹${item.new_price}</p>
                            <s>₹${item.old_price}</s>
                        </div>
                    </div>
                </div>
            `;
        } else {
            this.element = `
                <div class="item">
                    <div class="discount">
                        <p>${item.discount}</p>
                    </div>
                    <div class="img">
                        <img src=${item.src} alt="error">
                    </div>
                    <div class="time">
                        <img width="12" height="12" loading="lazy" 
                        src="https://cdn.grofers.com/assets/ui/fresh_icon.png">
                        <p>${item.sourced}</p>
                    </div>
                    <div class="name">
                        <p>${item.name}</p>
                    </div>
                    <div class="weight">
                        <p>${item.weight*1000} g</p>
                    </div>
                    <div class="price">
                        <div class="value">
                            <p>₹${item.new_price}</p>
                            <s>₹${item.old_price}</s>
                        </div>
                    </div>
                </div>
            `;
        }
        return this.element;
    }
    loadCartBtn() {
        let price = model.getStorage("price");
        if (price.it!=0 && price.disc!=0) {
            this.cart_btn_text.innerHTML = `
                <p>${price.it} items</p>
                <p>₹${price.disc}</p>
            `;
        } else {
            this.cart_btn_text.innerHTML = "My Cart";
        }
    }
    load_add_btn(j) {
        this.price_box[j].innerHTML += `
            <div class="add_btn" id="id_add_item_btn${j}">
                <button>ADD</button>
            </div>
        `;
        this.add_btn[j] = document.getElementById(`id_add_item_btn${j}`);
    }
    load_item_btn(j) {
        let ele = `<div class="add_item_btn" id="id_add_item_btn${j}"></div>`;
        this.price_box[j].innerHTML += ele;
        let temp = document.getElementById(`id_add_item_btn${j}`);
        temp.innerHTML += `
                <div class="add_decrease_item" id="id_add_decrease_item${j}">-</div>
                <div class="item_value" id="id_add_value_item${j}"></div>
                <div class="add_increase_item" id="id_add_increase_item${j}">+</div>
            `;
        this.add_decrease_item[j] = document.getElementById(`id_add_decrease_item${j}`);
        this.add_item_value[j] = document.getElementById(`id_add_value_item${j}`);
        this.add_increase_item[j] = document.getElementById(`id_add_increase_item${j}`);
        this.add_item_btn[j] = temp;
    }
}
class Controller {
    constructor() {
        this.loadProduct();
        model.setStorage("items", model.items);
        model.setStorage("price", model.price);
        this.load_add_or_item_btn();
        this.setAction();
        this.cartBtnAction();
    }
    loadProduct() {
        for (let i=0; i<model.items.length; i++) {
            view.product_container.innerHTML += view.loadItems(model.items[i], model.items[i].weight>=1);
        }
    }
    load_add_or_item_btn() {
        for (let i = 0; i < model.no_of_items; i++) {
            if (model.items[i].count === 0) {
                view.load_add_btn(i);
            } else {
                view.load_item_btn(i);
            }
        }
    }
    setAction() {
        for (let i = 0; i < model.no_of_items; i++) {
            if (model.items[i].count == 0) {
                this.setActionOnAdd(i);
            } else if (model.items[i].count > 0) {
                this.setActionOnItem(i);
            }
        }
    }
    setActionOnAdd(j) {
        view.add_btn[j].addEventListener("click", () => {
            view.add_btn[j].remove();
            view.load_item_btn(j);
            let price = model.getStorage("price");
            let it = model.getStorage("items");
            it[j].count++;
            price.mrp += it[j].old_price;
            price.it++;
            price.disc += it[j].new_price;
            model.setStorage("price", price);
            model.setStorage("items", it);
            view.loadCartBtn();
            this.setActionOnItem(j);
        });
    }
    setActionOnItem(j) {
        view.loadCartBtn();
        let it = model.getStorage("items");
        view.add_item_value[j].innerHTML = it[j].count;
        view.add_decrease_item[j].addEventListener("click", () => {
            let price = model.getStorage("price");
            let items = model.getStorage("items");
            items[j].count -= 1;
            price.mrp = items[j].old_price;
            price.it--;
            price.disc -= items[j].new_price;
            if (items[j].count === 0) {
                view.add_item_btn[j].remove();
                view.load_add_btn(j);
                this.setActionOnAdd(j);
            } else {
                view.add_item_value[j].innerHTML = items[j].count;
            }
            model.setStorage("price", price);
            model.setStorage("items", items);
            view.loadCartBtn();
        });
        view.add_increase_item[j].addEventListener("click", () => {
            let price = model.getStorage("price");
            let items = model.getStorage("items");
            items[j].count += 1;
            price.mrp += items[j].old_price;
            price.it++;
            price.disc += items[j].new_price;
            view.add_item_value[j].innerHTML = items[j].count;
            model.setStorage("price", price);
            model.setStorage("items", items);
            view.loadCartBtn();
        });
    }
    cartBtnAction() {
        view.cart_btn_id.addEventListener("click", () => {
            let it = JSON.parse(localStorage.getItem("items"));
            var flag = false;
            for (let i = 0; i < model.items.length; i++) {
                if (it[i].count > 0) {
                    flag = true;
                    break;
                }
            }
            if (flag) {
                location.href = "./billing.html";
            } else {
                alert("Please add items for billing!!!");
            }
        });
    }
}
let model = new Model();
let view = new View();
let control = new Controller();