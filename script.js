// Example JavaScript for a simple shopping cart
let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    alert(`${item} added to cart! Total: $${calculateTotal()}`);
}

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
}