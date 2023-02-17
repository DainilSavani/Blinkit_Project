export class View {
    constructor() {
        this.element, this.iframe, this.logo, this.cart_btn_text;
        this.subheading = document.getElementsByClassName("subheading")[0];
        this.container = document.getElementsByClassName("bill_container")[0];
        this.proceed = document.getElementsByClassName("proceed_bar")[0];
        this.bill = document.getElementsByClassName("total")[0];
        this.iframe = document.getElementsByTagName("iframe")[0];
        setTimeout(() => {
            this.logo = this.iframe.contentDocument.getElementsByClassName("logo")[0];
            this.cart_btn_text = this.iframe.contentDocument.getElementsByClassName("cart_btn_text")[0];
        }, 10);
    }
    returnEleById(key, value) {
        return document.getElementById(key + value);
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
    loadCartBtn(price2, view) {
        if (price2.it != 0 && price2.disc != 0) {
            view.cart_btn_text.innerHTML = `
                <p>${price2.it} items</p>
                <p>₹${price2.disc}</p>
            `;
        } else {
            this.cart_btn_text.innerHTML = "My Cart";
        }
    }
    load_items_count(price2) {
        this.subheading.innerHTML = `
            <h4>Delivery in 10 minutes</h4>
            <p>${price2.it} items</p>
        `;
    }
}