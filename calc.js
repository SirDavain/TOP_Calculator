let input = [];
const display = document.getElementById("display");

window.onload = function () {
	clearScreen();
	console.log(input);
};

function checkPrevious(value) {
	if (isOperator(input[input.length - 1])) {
		console.log("is an operator");
		return;
	}
	input.pop;
}

function isOperator(value) {
	const operators = ["+", "-", "*", "/", "%"];
	if (operators.includes(value)) return true;
	return false;
}

function addInput(value) {
	if (isOperator(value)) checkPrevious(value);
	input.push(value);
	refreshDisplay();
	console.log(input);
}

function refreshDisplay() {
	display.textContent = input.join("");
}

function lockButtons() {}

function clearScreen() {
	display.innerHTML = "0";
	input = [];
}

function deleteLast() {
	console.log(display.textContent);
	if (input.length > 0) {
		input.pop();
		refreshDisplay();
	}
	if (input.length === 0) display.textContent = "0";
	console.log(display.textContent);
}

function calculate() {
	let result = eval(input.join(""));
	input = [result];
	if (input.toString().length > 6)
		input = input.toString().split("").slice(0, 6);
	refreshDisplay();
	// let operater = input.find
	/*
	if (operater === "+") result = add(nbr1, nbr2);
	else if (operater === "-") result = subtract(nbr1, nbr2);
	else if (operater === "*") result = multiply(nbr1, nbr2);
	else if (operater === "/") result = divide(nbr1, nbr2);
	display.innerHTML = result; */
}

//Arithmetic functions:

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}
