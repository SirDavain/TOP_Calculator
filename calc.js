let input = [];
let currentNbr = "";
const display = document.getElementById("display");

window.onload = function () {
	clearScreen();
	console.log(input);
};

function checkPrevious(value) {
	if (input.length === 0) return;
	if (isOperator(input[input.length - 1])) {
		console.log("changing operator, ", value);
		input.pop();
	} else return;
}

function handleOperator(value) {
	checkPrevious(value);
}

function isOperator(value) {
	const operators = ["+", "-", "*", "/", "%"];
	if (operators.includes(value)) return true;
	return false;
}
// Current Issues:
//- Input as well as result can be too long for display -> round it / set a max/min int to display
function addInput(value) {
	console.log("Complete Length:", input.length + currentNbr.length);
	if (input.length + currentNbr.length > 8) return;
	if (isOperator(value) && input.length === 0 && currentNbr === "") return;
	if (/\d|\./.test(value)) currentNbr += value;
	else {
		if (currentNbr !== "") {
			console.log("current number is:", currentNbr);
			input.push(currentNbr);
			currentNbr = "";
		}
		input.push(value);
	}
	refreshDisplay();
}

/* function addInput(value) {
	if (isOperator(value)) handleOperator(value);
	else if (value >= 0 && value <= 9) value.toString();
	if (input.length > 0 && typeof input[input.length - 1] === "string") {
		//use concat() to add new value to the input
		input.concat(value);
	}
	input.push(value);
	if (input.length > 8) input.pop();
	refreshDisplay();
	console.log(input);
} */

function refreshDisplay() {
	// if (isOperator(input[input.length - 1])) return;
	let i = 0;
	let content = "";
	while (input.length > i) {
		content += input[i];
		i++;
	}
	if (currentNbr != "") content += currentNbr;
	display.textContent = content;
	console.log("Input:", input);
	console.log("Current number:", currentNbr);
}

/* function refreshDisplay() {
	if (isOperator(input[input.length - 1])) return;
	display.textContent = input.join("");
	console.log(input);
} */

function clearScreen() {
	display.innerHTML = "0";
	input = [];
	console.log(input);
}

function deleteLast() {
	console.log(display.textContent);
	let tmpCurrentNbr = "";
	if (currentNbr !== "") {
		console.log("Length:", currentNbr.length);
		if (currentNbr.length > 1) {
			tmpCurrentNbr = currentNbr.substring(0, currentNbr.length - 1);
		} else {
			tmpCurrentNbr = "0";
		}
		currentNbr = tmpCurrentNbr;
		refreshDisplay();
	} else if (input.length > 0) {
		input.pop();
		refreshDisplay();
	}
}

function getArithmeticOperation() {
	let operator = input[1];
	console.log("Operator:", operator);
	console.log("All:", input);

	const num1 = Number(input[0]);
	const num2 = Number(input[2]);

	if (operator === "+") result = add(num1, num2);
	else if (operator === "-") result = subtract(num1, num2);
	else if (operator === "*") result = multiply(num1, num2);
	else if (operator === "%") result = modulo(num1, num2);
	else if (operator === "/") {
		if (num2 === 0) {
			display.innerHTML = "Dummy!";
			input = [];
			return;
		}
		result = divide(num1, num2);
	} else throw new Error("Parameter is not an operator:", input[1]);
	input.shift();
	input.shift();
	input.shift();
	console.log("Input:", input);
	console.log("Result:", result);
	input.unshift(result);
}

function calculate() {
	if (currentNbr !== "") {
		input.push(currentNbr);
		currentNbr = "";
	}
	while (input.length > 1) {
		getArithmeticOperation();
		console.log(input);
	}
	refreshDisplay();
}

/* function calculate() {
	let operator = input[1];

	if (operator === "+") result = add(input[0], input[2]);
	else if (operator === "-") result = subtract(input[0], input[2]);
	else if (operator === "*") result = multiply(input[0], input[2]);
	else if (operator === "%") result = modulo(input[0], input[2]);
	else if (operator === "/") {
		if (input[2] === 0) {
			display.innerHTML = "Dummy!";
			input = [];
			return;
		}
		result = divide(input[0], input[2]);
	}
	display.innerHTML = result;
	input = [result];
	if (input.toString().length > 6)
		input = input.toString().split("").slice(0, 6);
	refreshDisplay();
} */

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

function modulo(a, b) {
	return a % b;
}
