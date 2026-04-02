// Operators:
// Arithmetic Operators:
// - Addition (+)
// - Subtraction (-)
// - Multiplication (*)
// - Division (/)
// - Modulus (%)
// - Exponentiation (**)
// - Increment (++)
// - Decrement (--)

console.log(5 + 3); // Output: 8
console.log(5 - 3); // Output: 2
console.log(5 * 3); // Output: 15
console.log(5 / 3); // Output: 1.6666666666666667
console.log(5 % 3); // Output: 2
console.log(5 ** 3); // Output: 125 (5 to the power of 3)

let value = 10;
value++; // Incrementing value by 1
console.log(value); // Output: 11

value--; // Decrementing value by 1
console.log(value); // Output: 10

console.log(++value); // Output: 11 (pre-increment: increments before returning the value)
console.log(value); // Output: 11

console.log(value++); // Output: 11 (post-increment: returns the value before incrementing)
console.log(value); // Output: 12

// Assignment Operators:
// - Assignment (=)
// - Addition Assignment (+=)
// - Subtraction Assignment (-=)
// - Multiplication Assignment (*=)
// - Division Assignment (/=)
// - Modulus Assignment (%=)
// - Exponentiation Assignment (**=)

let num = 5;
num += 3; // Equivalent to num = num + 3
console.log(num); // Output: 8

num -= 2; // Equivalent to num = num - 2
console.log(num); // Output: 6

num *= 4; // Equivalent to num = num * 4
console.log(num); // Output: 24

num /= 6; // Equivalent to num = num / 6
console.log(num); // Output: 4

num %= 3; // Equivalent to num = num % 3
console.log(num); // Output: 1

num **= 2; // Equivalent to num = num ** 2
console.log(num); // Output: 1 (1 to the power of 2 is still 1)

// Comparison Operators:
// - Equal to (==)
// - Not equal to (!=)
// - Strict equal to (===)
// - Strict not equal to (!==)
// - Greater than (>)
// - Less than (<)
// - Greater than or equal to (>=)
// - Less than or equal to (<=)

console.log(5 == "5"); // Output: true (loose equality, type coercion occurs)
console.log(5 === "5"); // Output: false (strict equality, no type coercion)
console.log(5 != "5"); // Output: false (loose inequality, type coercion occurs)
console.log(5 !== "5"); // Output: true (strict inequality, no type coercion)
console.log(5 > 3); // Output: true
console.log(5 < 3); // Output: false
console.log(5 >= 5); // Output: true
console.log(5 <= 4); // Output: false

let value1 = 1234;
let value2 = "1234";

console.log(value1 == value2); // Output: true (loose equality, type coercion occurs)
console.log(value1 === value2); // Output: false (strict equality, no type coercion)
// Important Interview Question: Difference between == and === in JavaScript.
// The == operator checks for equality of values, allowing for type coercion.
// The === operator checks for both value and type equality, without allowing
// for type coercion.

// Logical Operators:
// - Logical AND (&&)
// - Logical OR (||)
// - Logical NOT (!)

console.log(true && false); // Output: false
console.log(true || false); // Output: true
console.log(!true); // Output: false
console.log(!false); // Output: true

let a = 5;
let b = 10;

console.log(a > 3 && b < 15); // Output: true (both conditions are true)
console.log(a > 3 || b < 5); // Output: true (at least one condition is true)
console.log(!(a > 3)); // Output: false (negation of true is false)
