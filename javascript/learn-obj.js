let target = {
    name : 'David',
    age : 20,
};
let source = {
    name : 'Johnson',
    city: 'Bangalore',
};
// target properties are assigned to the source properties
console.log(Object.assign(target,source));


let str1 = 'Bangalore';
let str2 = "Mangalore";

// concats two strings without space between them
console.log(str1.concat(str2));

// with space between them
console.log(str1.concat(" ",str2));

// without space between them
console.log(str1 + str2);


// template literals

console.log('Hello, I live in '+str1+'. Im moving to '+str2+'.');
// To avoid using + numerous number of times

// template literal
console.log(`template literal: I am in ${str1} moving to ${str2}`);

// let arr = [];
// console.log(arr.indexOf()); // output: -1

let arr = [1];
console.log(arr.indexOf(1)); // Output: 0

console.log(arr.indexOf(3)); // Output: -1
