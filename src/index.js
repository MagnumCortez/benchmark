import produtcData from "./database/products.js"
import Cart from "./entities/cart.js"

const cart = new Cart(produtcData)

console.log(cart)