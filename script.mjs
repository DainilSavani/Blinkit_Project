function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

var items = getStorage("items");
var price = getStorage("price");
var items2 = localStorage.getItem("items2");
var price2 = localStorage.getItem("price2");
var no_of_items = items.length;

(function () { 
    if (items2!=null && items2!=undefined && JSON.stringify(items)!=items2) {
        items = JSON.parse(items2);
        price = JSON.parse(price2);
    }
    setStorage("items", items);
    setStorage("price", price)
    localStorage.removeItem("price2");
    localStorage.removeItem("items2");
})();

const price_box = document.getElementsByClassName("price");
var add_btn = new Array(no_of_items);
var add_item_btn = new Array(no_of_items);
var add_item_value = new Array(no_of_items);
var add_decrease_item = new Array(no_of_items);
var add_increase_item = new Array(no_of_items);
const cart_btn_text = document.getElementsByClassName("cart_btn_text")[0];

function loadCartBtn() {
    let price = getStorage("price");
    if (price.it!=0 && price.disc!=0) {
        cart_btn_text.innerHTML = `
            <p>${price.it} items</p>
            <p>₹${price.disc}</p>
        `;
    } else {
        cart_btn_text.innerHTML = "My Cart";
    }
}

function load_add_btn(j) {
    price_box[j].innerHTML += `
        <div class="add_btn" id="id_add_item_btn${j}">
            <button>ADD</button>
        </div>
    `;
    add_btn[j] = document.getElementById(`id_add_item_btn${j}`);
}

function load_item_btn(j) {
    let ele = `<div class="add_item_btn" id="id_add_item_btn${j}"></div>`;
    price_box[j].innerHTML += ele;
    let temp = document.getElementById(`id_add_item_btn${j}`);
    temp.innerHTML += `
            <div class="add_decrease_item" id="id_add_decrease_item${j}">-</div>
            <div class="item_value" id="id_add_value_item${j}"></div>
            <div class="add_increase_item" id="id_add_increase_item${j}">+</div>
        `;
    add_decrease_item[j] = document.getElementById(`id_add_decrease_item${j}`);
    add_item_value[j] = document.getElementById(`id_add_value_item${j}`);
    add_increase_item[j] = document.getElementById(`id_add_increase_item${j}`);
    add_item_btn[j] = temp;
}
function setActionOnAdd(j) {
    add_btn[j].addEventListener("click", () => {
        add_btn[j].remove();
        load_item_btn(j);
        let price = getStorage("price");
        let it = getStorage("items");
        it[j].count++;
        price.mrp += it[j].old_price;
        price.it++;
        price.disc += it[j].new_price;
        setStorage("price", price);
        setStorage("items", it);
        loadCartBtn();
        setActionOnItem(j);
    });
}
function setActionOnItem(j) {
    loadCartBtn();
    let it = getStorage("items");
    add_item_value[j].innerHTML = it[j].count;
    add_decrease_item[j].addEventListener("click", () => {
        let price = getStorage("price");
        let items = getStorage("items");
        items[j].count -= 1;
        price.mrp = items[j].old_price;
        price.it--;
        price.disc -= items[j].new_price;
        if (items[j].count === 0) {
            add_item_btn[j].remove();
            load_add_btn(j);
            setActionOnAdd(j);
        } else {
            add_item_value[j].innerHTML = items[j].count;
        }
        setStorage("price", price);
        setStorage("items", items);
        loadCartBtn();
    });
    add_increase_item[j].addEventListener("click", () => {
        let price = getStorage("price");
        let items = getStorage("items");
        items[j].count += 1;
        price.mrp += items[j].old_price;
        price.it++;
        price.disc += items[j].new_price;
        add_item_value[j].innerHTML = items[j].count;
        setStorage("price", price);
        setStorage("items", items);
        loadCartBtn();
    });
}

(function() {
    for (let i = 0; i < no_of_items; i++) {
        if (items[i].count === 0) {
            load_add_btn(i);
        } else {
            load_item_btn(i);
        }
    }
    for (let i = 0; i < no_of_items; i++) {
        if (items[i].count == 0) {
            setActionOnAdd(i);
        }
    }
    for (let i = 0; i < no_of_items; i++) {
        if (items[i].count > 0) {
            setActionOnItem(i);
        }
    }
    const cart_btn_id = document.getElementById('cart_btn_id');
    cart_btn_id.addEventListener("click", () => {
        let it = JSON.parse(localStorage.getItem("items"));
        var flag = false;
        for (let i = 0; i < items.length; i++) {
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
})();