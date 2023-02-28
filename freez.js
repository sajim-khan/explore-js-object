const bottle = { color: 'blue', price: '435', isCleaned : true }
const keys = Object.keys(bottle) // [ 'color', 'price', 'isCleaned' ]
console.log(keys);
const values = Object.values(bottle)
console.log(values); // [ 'blue', '435', true ]

const pair = Object.entries(bottle);
console.log(pair);  // output: [ [ 'color', 'blue' ], [ 'price', '435' ], [ 'isCleaned', true ] ]

console.log(bottle);  // output: { color: 'blue', price: '435', isCleaned: true }
delete bottle.isCleaned
console.log(bottle); // output: { color: 'blue', price: '435' }

// add property


