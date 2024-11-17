let nbr1;
let nbr2;
let operator = "";
let input = [];
const display = document.getElementById("display");

window.onload = function () {
	clearScreen();
	console.log(input);
};

function lockButtons() {}

function setOperator(newOperator) {
	operator = newOperator;
	//highlight selected key
}

function logNumber(nbr) {
	input += nbr;
	console.log(input);
	if (operator) {

	}
	if (display.innerHTML.length > 7) return;
	if (display.innerHTML === "0") display.innerHTML = nbr.toString();
	else display.innerHTML += nbr.toString();
}

function clearScreen() {
	display.innerHTML = "0";
	input = [];
}

function deleteLast() {
	display.innerHTML = display.innerHTML - 10;
}

function operate(nbr1, nbr2, operator) {
	if (operater === "+") add(nbr1, nbr2);
	else if (operater === "-") subtract(nbr1, nbr2);
	else if (operater === "*") multiply(nbr1, nbr2);
	else if (operater === "/") divide(nbr1, nbr2);
}

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
