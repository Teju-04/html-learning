// Functions :
// It is used to perform a specific task.
// Syntax:
// 1. Function Definition
// function function_name {
//     body of the function;
// }

// 2. Calling the function
// function_name();


function achieve() {
    console.log('I need to be like Elon Musk.');
}

achieve();

// Sum of 2 numbers
// Function with parameters 

function sum(num1, num2) {
    console.log(num1 + num2);
}

sum(10,20);

// Function with return statement
function addition(num1,num2) {
    return num1 + num2
}

// console.log(addition(12,23));

// or

// function declaration
result = addition(34,45);
console.log(typeof result);
console.log('I have a sum of ',result);


// Function expression
// Earlier function type:(function declaration)
// function goal() {
//     body of the function ;
// }

// A different approach to write a function using function expression
// Function Expression:
let goal = function () {
    console.log('I have a goal');
}

goal();

// Function Expression with parameters or arguments:
let multiply = function (num1,num2) {
    console.log(num1*num2);
}

multiply(12,2);

let multi = function (num1,num2) {
    return num1*num2;
}

let res = multi(12,4);
// console.log(typeof res); output : number
console.log(res);

// Interview Question: Write a function using function declaration and function expression.




