function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

var items2 = getStorage("items2");
var price2 = getStorage("price2");
var items = localStorage.getItem("items");
var price = localStorage.getItem("price");
if (JSON.stringify(items2) != items) {
    items2 = JSON.parse(items);
    price2 = JSON.parse(price);
    setStorage("price2", price2);
    setStorage("items2", items2);
}

const logo = document.getElementsByClassName("logo")[0];
logo.addEventListener("click", () => {
    location.href = "./homepage.html";
});

function createBillElement(item, i) {
    var element;
    if (item.weight >= 1) {
        element = `
        <div class="bill_item" id="bill_item_box${i}">
            <img src=${item.src} alt="error">
            <div class="bill_item_detail">
                <div class="bill_item_name">
                    <p>${item.name}</p>
                    </div>
                    <div class="bill_item_weight">
                        <p>${item.weight * item.count} kg</p>
                    </div>
                    <div class="bill_item_price">
                        <p>₹${item.new_price * item.count}</p>
                        <s>₹${item.old_price * item.count}</s>
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
        element = `
        <div class="bill_item" id="bill_item_box${i}">
            <img src=${item.src} alt="error">
            <div class="bill_item_detail">
                <div class="bill_item_name">
                    <p>${item.name}</p>
                    </div>
                    <div class="bill_item_weight">
                        <p>${item.weight * 1000 * item.count} g</p>
                    </div>
                    <div class="bill_item_price">
                        <p>₹${item.new_price * item.count}</p>
                        <s>₹${item.old_price * item.count}</s>
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
    return element;
}

const container = document.getElementsByClassName("bill_container")[0];
const cart_btn_text = document.getElementsByClassName("cart_btn_text")[0];
let prod_count = 0;

function loadCartBtn() {
    let price2 = getStorage("price2");
    if (price2.it != 0 && price2.disc != 0) {
        cart_btn_text.innerHTML = `
            <p>${price2.it} items</p>
            <p>₹${price2.disc}</p>
        `;
    } else {
        cart_btn_text.innerHTML = "My Cart";
    }
}
function load_items_count() {
    let price2 = getStorage("price2");
    let subheading = document.getElementsByClassName("subheading")[0];
    subheading.innerHTML = `
        <h4>Delivery in 10 minutes</h4>
        <p>${price2.it} items</p>
    `;
}
function load_items() {
    for (let i = 0; i < items2.length; i++) {
        let items2 = getStorage("items2");
        if (items2[i].count > 0) {
            container.innerHTML += createBillElement(items2[i], i);
            prod_count++;
        }
    }
}

function add_event() {
    for (let i = 0; i < items2.length; i++) {
        let items2 = getStorage("items2");
        if (items2[i].count > 0) {
            const bill_item_box = document.getElementById(`bill_item_box${i}`);
            const bill_decrease_item = document.getElementById(`bill-btn${i}`);
            const bill_item_value = document.getElementById(`bill=value${i}`);
            const bill_increase_item = document.getElementById(`bill+btn${i}`);
            bill_decrease_item.addEventListener("click", () => {
                let price2 = getStorage("price2");
                let items2 = getStorage("items2");
                items2[i].count -= 1;
                price2.mrp -= items2[i].old_price;
                price2.it--;
                price2.disc -= items2[i].new_price;
                if (items2[i].count === 0) {
                    bill_item_box.remove();
                } else {
                    bill_item_value.innerHTML = items2[i].count;
                }
                setStorage("price2", price2);
                setStorage("items2", items2);
                load_items_count();
                loadCartBtn();
                load_total();
                load_proceed();
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
                loadCartBtn();
                load_total();
                load_proceed();
            });
        }
    }
}
function load_total() {
    let p2 = getStorage("price2");
    const bill = document.getElementsByClassName("total")[0];
    bill.innerHTML = `
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
function load_proceed() {
    let p2 = getStorage("price2");
    const proceed = document.getElementsByClassName("proceed_bar")[0];
    proceed.innerHTML = `
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


(function () {
    load_items_count();
    load_items();
    loadCartBtn();
    add_event();
    load_total();
    load_proceed();
})();