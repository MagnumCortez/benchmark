# Benchmak
## _The simple javascript benchmark test_

Script to generate 100 products with [json-generator](https://json-generator.com/)

```json
{
  at: '{{date(new Date()).toISOString()}}',
  products: [
    '{{repeat(100,100)}}',
    {
      description: '{{lorem(4, "words")}}',
      name: '{{lorem(1, "words")}}',
      price: '{{floating(100, 2000, 2, "000.00")}}',
      tmpProperty: 'undefined',
      activePromoId: '{{random(integer(0, 1000), null)}}'
    }
  ]
}
```
## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd benchmark
npm i
```

## Benchmark

Running benchmark

```sh
npm rum benchmark
```