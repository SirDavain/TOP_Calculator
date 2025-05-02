function test(input, text) {
	let text2 = "mate";
	input.push("there");
	input.concat(input[2], text);
	let result = text.concat(" ", text2);
	console.log("Input:", input);
	console.log("Result:", result);
}

let text = "hello";
let input = [];
input.push("hi");
test(input, text);
