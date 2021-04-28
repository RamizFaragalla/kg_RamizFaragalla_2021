"use strict";
main();

function main() {
	let arr = process.argv.slice(2);
	console.log(solve(arr).join(","));
}

function solve(arr) {
	let result = [];
	// go through each element in the array
	arr.forEach(elem => {
		let str = "";
		// go through each character of the current element
		for (let i in elem) {
			// convert character to integer
			let num = parseInt(elem[i]);
			str += convert(num);
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