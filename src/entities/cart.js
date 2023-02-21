import { v4 as uuid } from 'uuid'
import Product from "./product.js"


export default class Cart {
    constructor({ at, products }) {
        this.id = uuid()
        this.at = at
        this.products = this.removeUndefinedProps(products)
        this.total = this.getCartPrice()
    }

    removeUndefinedProps(products) {
        const productEntities = products
            .filter(product => !!Reflect.ownKeys(product).length) // Não pegar objetos vazio
            .map(product => new Product(product))

        return JSON.parse(JSON.stringify(productEntities)) // Remove propriedade com undefined (Péssima pratica)
    }

    getCartPrice() {
        return this.products
            .map(product => product.price)
            .reduce((prev, next) => prev + next, 0)
    }
}