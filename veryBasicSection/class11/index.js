// learning about alert, prompt and confirm
// alert, prompt and confirm are methods of the window object

let userName;
userName = window.prompt("What's your name?");
window.alert("Hello, sir " + userName + ".");

// tiny challenge 3: ask for two numbers and return an alert of its sum

let num1 = window.prompt("Type a number");
let num2 = window.prompt("Type another number");
const result = window.alert(`The sum of the two numbers is: ${Number(num1) + Number(num2)}`);