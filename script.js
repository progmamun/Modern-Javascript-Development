// Importing module
// import './shoppingCart';
import { addToCart, totalPrice as price, tq } from './shoppingCart';
addToCart('bread', 5);
console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

import add from './shoppingCart';
add('pizza', 2);
