//Total Price in Shopping Cart
const products = [
    { name: 'laptop', price: 43000 },
    { name: 'shirt', price: 500 },
    { name: 'watch', price: 3680 },
    { name: 'pone', price: 55000 },
];
let totalPrice = 0;
for (product of products) {
    totalPrice = totalPrice + product.price;
}
// console.log('Total Price in Shopping cart: ', totalPrice, 'TK');


//MegaSHop Total Price Count
const cart = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 4 },
    { name: 'watch', price: 3680, quantity: 7 },
    { name: 'pone', price: 55000, quantity: 1 },
];

let cartTotal = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log('You need to pay in total: ', cartTotal, 'BDT');