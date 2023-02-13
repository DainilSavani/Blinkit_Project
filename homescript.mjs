var items = [
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
]
var price = {
    mrp: 0,
    it: 0,
    disc: 0,
    total: 0
}
var items2 = localStorage.getItem("items2");
var price2 = localStorage.getItem("price2");
if (items2!=null && items2!=undefined && JSON.stringify(items)!=items2) {
    items = JSON.parse(items2);
    price = JSON.parse(price2);
} else {
    items2 = items;
    price2 = price;
}

function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function createProduct(discount, img, sourced, name, weight, oldPrice, newPrice, flag) {
    var element;
    if (flag) {
        element = `
            <div class="item">
                <div class="discount">
                    <p>${discount}</p>
                </div>
                <div class="img">
                    <img src=${img} alt="error">
                </div>
                <div class="time">
                    <img width="12" height="12" loading="lazy" 
                    src="https://cdn.grofers.com/assets/ui/fresh_icon.png">
                    <p>${sourced}</p>
                </div>
                <div class="name">
                    <p>${name}</p>
                </div>
                <div class="weight">
                    <p>${weight} kg</p>
                </div>
                <div class="price">
                    <div class="value">
                        <p>₹${newPrice}</p>
                        <s>₹${oldPrice}</s>
                    </div>
                </div>
            </div>
        `;
    } else {
        element = `
            <div class="item">
                <div class="discount">
                    <p>${discount}</p>
                </div>
                <div class="img">
                    <img src=${img} alt="error">
                </div>
                <div class="time">
                    <img width="12" height="12" loading="lazy" 
                    src="https://cdn.grofers.com/assets/ui/fresh_icon.png">
                    <p>${sourced}</p>
                </div>
                <div class="name">
                    <p>${name}</p>
                </div>
                <div class="weight">
                    <p>${weight*1000} g</p>
                </div>
                <div class="price">
                    <div class="value">
                        <p>₹${newPrice}</p>
                        <s>₹${oldPrice}</s>
                    </div>
                </div>
            </div>
        `;
    }
    return element;
}
var product_container = document.getElementsByClassName("container")[0];
for (let i=0; i<items.length; i++) {
    product_container.innerHTML += createProduct(items[i].discount, items[i].src, items[i].sourced, items[i].name, items[i].weight, items[i].old_price, items[i].new_price, items[i].weight>=1);
}

setStorage("items", items);
setStorage("price", price);
