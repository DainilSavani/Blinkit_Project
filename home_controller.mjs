import {Model} from './home_model.mjs';
import {View} from './home_view.mjs';

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
            view.loadCartBtn(price);
            this.setActionOnItem(j);
        });
    }
    setActionOnItem(j) {
        view.loadCartBtn(model.getStorage("price"));
        let it = model.getStorage("items");
        view.add_item_value[j].innerHTML = it[j].count;
        view.add_decrease_item[j].addEventListener("click", () => {
            let price = model.getStorage("price");
            let items = model.getStorage("items");
            items[j].count -= 1;
            price.mrp -= items[j].old_price;
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
            view.loadCartBtn(price);
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
            view.loadCartBtn(price);
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
let view = new View(model.no_of_items);
let control = new Controller();