import Benchmark from "benchmark"

import CartIdOld from "./cart-id-old.js"
import CartIdNew from "./cart-id-new.js"

const suite = new Benchmark.Suite

//  BENCHMARK
// Cart#cartIdUuid x 6,775,323 ops/sec ±0.77% (93 runs sampled)
// Cart#cartIdCrypto x 7,028,540 ops/sec ±0.68% (96 runs sampled)
// Fastest is Cart#cartIdCrypto

suite
    .add('Cart#cartIdUuid', function() { new CartIdOld() })
    .add('Cart#cartIdCrypto', function() { new CartIdNew() })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function() {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`)
        console.log('-------------------------------------------------')
    })
    .run()