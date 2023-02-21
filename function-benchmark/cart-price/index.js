import Benchmark from "benchmark"

import CartPriceOld from "./cart-price-old.js"
import CartPriceNew from "./cart-price-new.js"

import products from "../../src/database/products.js";

const suite = new Benchmark.Suite

//  BENCHMARK
// Cart#priceMapReduce x 935,232 ops/sec ±1.59% (88 runs sampled)
// Cart#priceFor x 3,296,995 ops/sec ±0.54% (98 runs sampled)
// Fastest is Cart#priceFor

suite
.add('Cart#priceMapReduce', function() { new CartPriceOld(products) })
.add('Cart#priceFor', function() { new CartPriceNew(products) })
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
    console.log('-------------------------------------------------')
})
.run()