// For Intergers, we can use the `Number` type in JavaScript.
// The `Number` type can represent both integers and floating-point numbers.

// There are two types of datatypes in JavaScript:
// 1. Primitive Datatypes
// 2. Non-Primitive Datatypes

// Primitive Datatypes:
// 1. Number: Represents both integers and floating-point numbers. Example: 42, 3.14
// 2. String: Represents a sequence of characters. Example: "Hello, World!"
// 3. Boolean: Represents a logical entity that can have two values: true or false.
// 4. Null: Represents the intentional absence of any object value.
// 5. Undefined: Represents a variable that has been declared but has not been assigned a value.
// 6. BigInt: Represents integers with arbitrary precision, allowing for very large numbers.
//   It is not commonly used in everyday programming but can be useful
//   for certain applications that require handling large integers.

// Non-Primitive Datatypes:
// 1. Object: Represents a collection of properties and methods. Example: { name: "Alice", age: 30 }
// 2. Array: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
// 3. Function: Represents a reusable block of code that performs a specific task. Example: function greet() { console.log("Hello!"); }
// 4. Symbol: Represents a unique identifier, often used for object properties.

let value = 12345;
console.log(value);

let name = "David";
console.log(name);

let isOkay = true;
console.log(isOkay);

let value2;
console.log(value2); // This will print 'undefined' since value2 has been declared
// but not initialized.

console.log(typeof 12345); // Output: "number"
console.log(typeof "David"); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof value2); // Output: "undefined"
console.log(typeof 1234n); // Output: "bigint"

console.log(typeof null); // Output: "object" (this is a known quirk in JavaScript)
// Null is an object type, but it's empty and represents the absence of any value.
//  The typeof operator returns "object" for null, which is a historical bug in JavaScript.

console.log(typeof undefined); // Output: "undefined"

// Non-Primitive DataTypes:
// 1. Object

let obj = {
  name: "David",
  age: 30,
  city: "Bangalore",
};

console.log(typeof obj); // Output: "object"

// 2. Array
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // Output: "object" (arrays are a type of object in JavaScript)

// 3. Function
function greet() {
  console.log("Hello!");
}
console.log(typeof greet); // Output: "function"

// 4. Symbol
let sym = Symbol("unique");
console.log(typeof sym); // Output: "symbol"
console.log(sym); // Output: Symbol(unique)

// Objects and arrays are mutable, meaning their contents can be changed after they are created.
obj.name = "Johnson";
console.log(obj); // Output: { name: 'Johnson', age: 30, city: 'Bangalore' }

arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

// Functions can also be assigned to variables and passed around as first-class citizens in JavaScript.
let greetFunction = greet;
greetFunction(); // Output: "Hello!"

// Symbols are unique and immutable, often used for object property keys to avoid name collisions.
let sym2 = Symbol("unique");
console.log(sym === sym2); // Output: false (each symbol is unique)
