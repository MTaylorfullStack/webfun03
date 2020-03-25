// Ultimate Analysis - Create a function that takes an array and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the array.
// Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }

// declare a function accepting an arr
// var total = 0;
// var min = arr[0];
// var max = arr[0];
// for loop, start at i=1;
    // if arr[i] < min
        // min = arr[i]
    // if arr[i] > max
        // max = arr[i]
    // total += arr[i]
// return {   }


function ultimate_analysis(arr) {
    var total = arr[0];
    var min = arr[0];
    var max = arr[0];
    for(var i=1; i<arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
        total += arr[i]
    }
    return {total: total, min: min, max: max, length: arr.length, avg: total/arr.length}
}
console.log(ultimate_analysis([37,2,1,-9]))






var character = {
	"url": "https://anapioficeandfire.com/api/characters/583",
	"name": "Jon Snow",
	"gender": "Male",
	"culture": "Northmen",
	"born": "In 283 AC",
	"died": "",
	"titles": [
		"Lord Commander of the Night's Watch"
	],
	"aliases": [
		"Lord Snow",
		"Ned Stark's Bastard",
		"The Snow of Winterfell",
		"The Crow-Come-Over",
		"The 998th Lord Commander of the Night's Watch",
		"The Bastard of Winterfell",
		"The Black Bastard of the Wall",
		"Lord Crow"
	],
	"father": "",
	"mother": "",
	"spouse": "",
	"allegiances": [
		"https://anapioficeandfire.com/api/houses/362"
	],
	"books": [
		"https://anapioficeandfire.com/api/books/5"
	],
	"povBooks": [
		"https://anapioficeandfire.com/api/books/1",
		"https://anapioficeandfire.com/api/books/2",
		"https://anapioficeandfire.com/api/books/3",
		"https://anapioficeandfire.com/api/books/8"
	],
	"tvSeries": [
		"Season 1",
		"Season 2",
		"Season 3",
		"Season 4",
		"Season 5",
		"Season 6"
	],
	"playedBy": [
		"Kit Harington"
	]
}

console.log(character['aliases'][2]);