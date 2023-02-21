import Product from "../../src/entities/product.js";

export default class Cart {
    constructor({ products }) {
        this.products = this.removeUndefinedProps(products)
    }

    // Deleting a undefined prop
    removeUndefinedProps(products) {
        const result = [];
        for (const product of products) {
            const keys = Reflect.ownKeys(product)
            if (!keys.length) continue;

            // Reflect.deleteProperty VS delete // Equal Performance
            keys.forEach(key => product[key] ?? delete product[key]) // Remove undefined property
            // keys.forEach(key => product[key] ?? Reflect.deleteProperty(product, key)) // Remove undefined property
            result.push(new Product(product))
        }

        return result
    }
}