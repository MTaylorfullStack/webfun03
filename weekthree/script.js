// variables and data types

var greeting = 'Hello World';
var result = 10 * 10;
// console.log(result)
// console.log(greeting)
// console.log(greeting)


// console.log(array[2])

var carOne = {
    'make': 'Chevy',
    'model': 'Silverado',
    'year': 2016,
}

// boolean

var res = true;

// console.log(carOne['model'])

// conditionals

var flavor = 'vanilla'

if (flavor == 'chocolate') {
    console.log("chocolate was ordered");
}
else if (flavor == 'vanilla') {
    console.log("vanilla was ordered");
}
else if (flavor == 'strawberry') {
    console.log("straw was ordered");
} else {
    console.log("flavor doesn't exist");
}

// loops

for (var i=0; i<100; i++) {
    console.log(greeting + i);
}


var array = [3, 6, 'hello', 9];

for(var i=0; i<array.length; i++) {
    console.log(array[i]);
}

var start = 0
while (start<10) {
    console.log(start);
    start++;
}


// functions

function iceCream(flavor) {
    if (flavor == 'chocolate') {
        console.log("chocolate was ordered");
    }
    else if (flavor == 'vanilla') {
        console.log("vanilla was ordered");
    }
    else if (flavor == 'strawberry') {
        console.log("straw was ordered");
    } else {
        console.log("flavor doesn't exist");
    }
    return flavor
}

console.log(iceCream('vanilla'))
console.log(iceCream('chocolate'))
console.log(iceCream('vanilla'))
console.log(iceCream('strawberry'))
console.log(iceCream('nuts'))