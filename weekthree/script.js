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

// if (flavor == 'chocolate') {
//     console.log("chocolate was ordered");
// }
// else if (flavor == 'vanilla') {
//     console.log("vanilla was ordered");
// }
// else if (flavor == 'strawberry') {
//     console.log("straw was ordered");
// } else {
//     console.log("flavor doesn't exist");
// }

// loops

// for (var i=0; i<100; i++) {
//     console.log(greeting + i);
// }


var array = [3, 6, 'hello', 9];

// for(var i=0; i<array.length; i++) {
//     console.log(array[i]);
// }

// var start = 0
// while (start<10) {
//     console.log(start);
//     start++;
// }


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

// console.log(iceCream('vanilla'))
// console.log(iceCream('chocolate'))
// console.log(iceCream('vanilla'))
// console.log(iceCream('strawberry'))
// console.log(iceCream('nuts'))



var numArr = [2,6,8,4,1,10,92]

// find the sum of the second value in the array and the length of the array

// console.log(numArr.length + numArr[1]);

// console.log(studentList)
// studentList.push('Jose')
// studentList.push('Charlie')
// console.log(studentList)
// studentList.pop();
// console.log(studentList)

// studentList.shift();
// console.log(studentList)
// studentList.unshift('Ed')
// console.log(studentList)

var studentList = ['Ed', 'Michael', "Raj", 'Tom', 'Jose'];


// loop through student array
// print all student names

    // loop through names
    // print every letter

for(var i=0; i<studentList.length; i++) {
    console.log(studentList[i]);
    for(var j=0; j<studentList[i].length; j++) {
        console.log(studentList[i][j])
    }
}


// Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

// write a function, array as a parameter
    // for loop; loop through array
        // if arr[i] < 0
            // arr[i] = 0
    // return array

function resetNegatives(values) {
    for(var i=0; i<values.length; i++) {
        if(values[i] < 0) {
            values[i] = 0;
        }
    }
    return values
}

console.log(resetNegatives([2,6,-9,0,-3,-4,-1,5,7,8,-2,-3]));






