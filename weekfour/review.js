var x = 10;

var greeting = "Hello";

// var numArr = [2, 4, 6, 8, 10, 12];

var exDict = {
    'descriptor': 'value',
    attribute: [2, 4, 6, 8, 10, 12],
    car: {
        make: 'honda',
        model: 'accord'
    }
};





// reassign values


// numArr[3] = 9;
// console.log(numArr)
// reassigning object value
// console.log(exDict)
console.log(exDict['attribute'])

for(var i=0; i<exDict['attribute'].length; i++) {       // looping through array stored in object key
    console.log(exDict['attribute'][i])
}



// add values

exDict['attribute'].push(14);

console.log(exDict)

exDict['newKey'] = "This is my new value";

console.log(exDict)
