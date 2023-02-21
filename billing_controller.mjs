import {Model} from './billing_model.mjs';
import {View} from './billing_view.mjs';

class Controller {
    constructor() {
        this.load_logo_link();
        view.load_items_count(model.getStorage("price2"));
        this.clear_cart_event();
        this.load_items();
        view.loadCartBtn(model.getStorage("price2"), view);
        this.add_event();
        this.load_total();
        this.load_proceed();
    }
    load_logo_link() {
        view.logo.addEventListener("click", () => {
            location.href = "./homepage.html";
        });
    }
    load_items() {
        for (let i = 0; i < model.items2.length; i++) {
            let items2 = model.getStorage("items2");
            if (items2[i].count > 0) {
                view.container.innerHTML += view.createBillElement(items2[i], i);
                model.prod_count++;
            }
        }
    }
    add_event() {
        for (let i = 0; i < model.items2.length; i++) {
            let items2 = model.getStorage("items2");
            if (items2[i].count > 0) {
                const bill_item_box = view.returnEleById("bill_item_box", i);
                const bill_decrease_item = view.returnEleById("bill-btn", i);
                const bill_item_value = view.returnEleById("bill=value", i);
                const bill_increase_item = view.returnEleById("bill+btn", i);
                const dlt_btn = view.returnEleById("dlt_btn", i);
                bill_decrease_item.addEventListener("click", () => {
                    let price2 = model.getStorage("price2");
                    let items2 = model.getStorage("items2");
                    items2[i].count -= 1;
                    price2.mrp -= items2[i].old_price;
                    price2.it--;
                    price2.disc -= items2[i].new_price;
                    if (items2[i].count === 0) {
                        bill_item_box.remove();
                    } else {
                        bill_item_value.innerHTML = items2[i].count;
                    }
                    model.setStorage("price2", price2);
                    model.setStorage("items2", items2); 
                    if (price2.it == 0) {
                        location.href = "./homepage.html";
                    }
                    view.load_items_count(price2);
                    view.loadCartBtn(price2, view);
                    this.load_total();
                    this.load_proceed();
                });
                bill_increase_item.addEventListener("click", () => {
                    let price2 = model.getStorage("price2");
                    let items2 = model.getStorage("items2");
                    items2[i].count += 1;
                    price2.mrp += items2[i].old_price;
                    price2.it++;
                    price2.disc += items2[i].new_price;
                    bill_item_value.innerHTML = items2[i].count;
                    model.setStorage("price2", price2);
                    model.setStorage("items2", items2);
                    view.load_items_count(price2);
                    view.loadCartBtn(price2, view);
                    this.load_total();
                    this.load_proceed();
                });
                dlt_btn.addEventListener("click", () => {
                    let price2 = model.getStorage("price2");
                    let items2 = model.getStorage("items2");
                    price2.mrp -= items2[i].old_price*items2[i].count;
                    price2.it -= items2[i].count;
                    price2.disc -= items2[i].new_price*items2[i].count;
                    items2[i].count = 0;
                    bill_item_box.remove();
                    model.setStorage("price2", price2);
                    model.setStorage("items2", items2); 
                    if (price2.it == 0) {
                        location.href = "./homepage.html";
                    }
                    view.load_items_count(price2);
                    view.loadCartBtn(price2, view);
                    this.load_total();
                    this.load_proceed();
                });
            }
        }
    }
    load_total() {
        let p2 = model.getStorage("price2");
        view.bill.innerHTML = `
                <div class="mrp">
                    <p>MRP</p>
                    <p>₹${p2.mrp}</p>
                </div>
                <div class="product_discount">
                    <p>Product discount</p>
                    <p>-₹${p2.mrp - p2.disc}</p>
                </div>
                <div class="delivery_charge">
                    <p>Delivery charge</p>
                    <div class="charge">
                        <s>₹20</s>
                        <p>FREE</p>
                    </div>
                </div>
                <div class="grand_total">
                    <p>Grand total</p>
                    <p>₹${p2.disc}</p>
                </div>
        `;
    }
    load_proceed() {
        let p2 = model.getStorage("price2");
        view.proceed.innerHTML = `
            <div class="proceed_items">
                <p>${p2.it}</p>
                <p>items</p>
                <p>:</p>
                <p>₹${p2.disc}</p>
                <s>₹${p2.mrp}</s>
            </div>
            <div class="proceed_btn">
                <p>Proceed</p>
            </div>
        `;
    }
    clear_cart_event() {
        const clear = view.returnEleById("clearCart", "");
        clear.addEventListener("click", () => {
            let price2 = model.getStorage("price2");
            let items2 = model.getStorage("items2");
            for (let key in price2) {
                price2[key] = 0;
            }
            for (let i=0; i<items2.length; i++) {
                items2[i].count = 0;
            }
            model.setStorage("price2", price2);
            model.setStorage("items2", items2);
            location.href = "./homepage.html";
        })
    }
}

let model = new Model();
let view = new View();
let control;
setTimeout(() => {
    control = new Controller();
}, 10);