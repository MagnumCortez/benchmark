import Product from "../../src/entities/product.js";

export default class Cart {
    constructor({ products }) {
        this.products = this.removeUndefinedProps(products)
    }

    // Creating a new object
    removeUndefinedProps(products) {
        const result = []
        for (const product of products) {
            const keys = Reflect.ownKeys(product)
            let newObject = {}

            keys.forEach(key => {
                if (!keys[key]) return;

                newObject[key] = keys[key]
            })

            return result.push(new Product(product))
        }

        return result
    }
}