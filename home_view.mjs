export class View {
    constructor(no_of_items) {
        this.element;
        this.product_container = document.getElementsByClassName("container")[0];
        this.price_box = document.getElementsByClassName("price");
        this.add_btn = new Array();
        this.add_item_btn = new Array(no_of_items);
        this.add_item_value = new Array(no_of_items);
        this.add_decrease_item = new Array(no_of_items);
        this.add_increase_item = new Array(no_of_items);
        this.iframe = document.getElementsByTagName("iframe")[0];
        this.cart_btn_id = this.iframe.contentDocument.getElementById("cart_btn_id");
        this.cart_btn_text = this.iframe.contentDocument.getElementsByClassName("cart_btn_text")[0];
        this.searchBar = this.iframe.contentDocument.getElementById("searchBar");
        this.sort = document.getElementById("sortby");
    }
    getItem(j) {
        return document.getElementById(`item${j}`);
    }
    loadItems(item, flag, j) {
        if (flag) {
            this.element = `
                <div class="item" id="item${j}">
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
                <div class="item" id="item${j}">
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
    loadCartBtn(price) {
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