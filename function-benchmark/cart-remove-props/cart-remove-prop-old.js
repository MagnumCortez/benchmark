import Product from "../../src/entities/product.js";

export default class Cart {
    constructor({ products }) {
        this.products = this.removeUndefinedProps(products)
    }

    removeUndefinedProps(products) {
        const productEntities = products
            .filter(product => !!Reflect.ownKeys(product).length) // Não pegar objetos vazio
            .map(product => new Product(product))

        return JSON.parse(JSON.stringify(productEntities)) // Remove propriedade com undefined (Péssima pratica)
    }
}