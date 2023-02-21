import Benchmark from "benchmark"

import CartRemovePropsOld from "./cart-remove-prop-old.js"
import CartRemovePropsNew from "./cart-remove-prop-new.js"
import CartRemovePropsObjectNew from "./cart-remove-prop-object-new.js"

const suite = new Benchmark.Suite

//  BENCHMARK
// Cart#removePropsMapReduce x 747,596 ops/sec ±0.70% (93 runs sampled)
// Cart#removePropsFor x 1,822,427 ops/sec ±1.00% (96 runs sampled)
// Cart#removePropsForNewObject x 1,999,158 ops/sec ±1.04% (93 runs sampled)
// Fastest is Cart#removePropsForNewObject

const productMock = {
    products: [
        {
            id: 'a2ea3s4df34efdaf',
            undefined1: undefined,
            undefined2: undefined,
            isNull: null,
            number: 123,
            string: 'something',
            float: 15.562,
            empty: '',
            zero: 0
        },
        {},
    ]
}

suite
.add('Cart#removePropsMapReduce', function() {
    new CartRemovePropsOld(productMock)
})
.add('Cart#removePropsFor', function() {
    new CartRemovePropsNew(productMock)
})
.add('Cart#removePropsForNewObject', function() {
    new CartRemovePropsObjectNew(productMock)
})
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
    console.log('-------------------------------------------------')
})
.run({ async: true })