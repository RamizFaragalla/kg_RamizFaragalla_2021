"use strict";
main();

function main() {
	let arr = process.argv.slice(2);

	try {
		console.log(solve(arr).join(","));
	}

	catch(err) {
		console.log(err.message);
	}
}

// time complexity: O(n*m), where n is the length of the integer array and
// m is the length of an element in the array
// note: I'm assuming that the input integer might be negative
// valid input: 1, 2, -43
// invalid input: a, 1-1, -1-4
function solve(arr) {
	let result = [];

	// if no input is received
	if (arr.length === 0) throw new Error("no input received");
	// go through each element in the array
	arr.forEach(elem => {
		let str = "";
		// go through each character of the current element
		for (let i in elem) {
			// if a negative sign is found at the beginning of the element
			if (elem[i] === '-' && i == 0)
				str += "Negative";

			// if a non integer character is found
			else if (isNaN(parseInt(elem[i])))
				throw new Error("invalid input");

			// valid integer
			else {
				// convert character to integer
				let num = parseInt(elem[i]);
				str += convert(num);
			}
		}

		result.push(str);
	});

	return result;
}

// convert integer to its phonetic equivalent
function convert(num) {
	let phonetic = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
	return phonetic[num];
}