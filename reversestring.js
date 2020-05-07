// Project: Reversing a string

// 1 - Creating a for loop

function reverseString(str) {
		let reversedString = "";
	for (let i = (str.length - 1); i >= 0 ; i--) {
		reversedString += str[i];
	}
	return reversedString;
}

reverseString("Hello");

// 2 - Turning the string into an array, splitting and reversing it, then turning it again into a string

function reverseString(str) {
	let splitString = str.split("");
	let reversedArray = splitString.reverse();
	let reversedString = reversedArray.join("");
	return reverseString;
}

reverseString("Hello");

// Simpler code:
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

// 3 - Reversing the string with a recursion

function reverseString(str) {
	if (str === "")
		return "";
	else
		return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
