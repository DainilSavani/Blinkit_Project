class Model {
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

class View {
    constructor() {
        this.element;
        this.logo = document.getElementsByClassName("logo")[0];
        this.subheading = document.getElementsByClassName("subheading")[0];
        this.container = document.getElementsByClassName("bill_container")[0];
        this.cart_btn_text = document.getElementsByClassName("cart_btn_text")[0];
        this.proceed = document.getElementsByClassName("proceed_bar")[0];
        this.bill = document.getElementsByClassName("total")[0];
    }
    returnEleById(key, value) {
        return document.getElementById(key+value);
    }
    createBillElement(item, i) {
        this.element;
        if (item.weight >= 1) {
            this.element = `
            <div class="bill_item" id="bill_item_box${i}">
                <img src=${item.src} alt="error">
                <div class="bill_item_detail">
                    <div class="bill_item_name">
                        <p>${item.name}</p>
                        </div>
                        <div class="bill_item_weight">
                            <p>${item.weight} kg</p>
                        </div>
                        <div class="bill_item_price">
                            <p>₹${item.new_price}</p>
                            <s>₹${item.old_price}</s>
                        </div>
                    </div>
                    <div class="bill_item_btn">
                        <div class="bill_decrease_item" id="bill-btn${i}">-</div>
                        <div class="bill_item_value" id="bill=value${i}">${item.count}</div>
                        <div class="bill_increase_item" id="bill+btn${i}">+</div>
                    </div>
                </div>
            `;
        } else {
            this.element = `
            <div class="bill_item" id="bill_item_box${i}">
                <img src=${item.src} alt="error">
                <div class="bill_item_detail">
                    <div class="bill_item_name">
                        <p>${item.name}</p>
                        </div>
                        <div class="bill_item_weight">
                            <p>${item.weight * 1000} g</p>
                        </div>
                        <div class="bill_item_price">
                            <p>₹${item.new_price}</p>
                            <s>₹${item.old_price}</s>
                        </div>
                    </div>
                    <div class="bill_item_btn">
                    <div class="bill_decrease_item" id="bill-btn${i}">-</div>
                    <div class="bill_item_value" id="bill=value${i}">${item.count}</div>
                    <div class="bill_increase_item" id="bill+btn${i}">+</div>
                    </div>
                </div>
            `;
        }
        return this.element;
    }
    loadCartBtn() {
        let price2 = model.getStorage("price2");
        if (price2.it != 0 && price2.disc != 0) {
            this.cart_btn_text.innerHTML = `
                <p>${price2.it} items</p>
                <p>₹${price2.disc}</p>
            `;
        } else {
            cart_btn_text.innerHTML = "My Cart";
        }
    }
    load_items_count() {
        let price2 = model.getStorage("price2");
        this.subheading.innerHTML = `
            <h4>Delivery in 10 minutes</h4>
            <p>${price2.it} items</p>
        `;
    }
}

class Controller {
    constructor() {
        this.load_logo_link();
        view.load_items_count();
        this.load_items();
        view.loadCartBtn();
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
                    view.load_items_count();
                    view.loadCartBtn();
                    this.load_total();
                    this.load_proceed();
                });
                bill_increase_item.addEventListener("click", () => {
                    let price2 = getStorage("price2");
                    let items2 = getStorage("items2");
                    items2[i].count += 1;
                    price2.mrp += items2[i].old_price;
                    price2.it++;
                    price2.disc += items2[i].new_price;
                    bill_item_value.innerHTML = items2[i].count;
                    setStorage("price2", price2);
                    setStorage("items2", items2);
                    view.load_items_count();
                    view.loadCartBtn();
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
}
let model = new Model();
let view = new View();
let control = new Controller();