function test(arr) {
	console.log(arr);
	arr = arr.toString().split("").slice(0, 6).join("");
	console.log(arr);
}

let string = "hello";
let arr = [2.123456789];
test(arr);
