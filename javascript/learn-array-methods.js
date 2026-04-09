let arr = ['Bangalore','Mangalore','Dharwad','Udupi','Mandya','Shivamogga'];

// Push and pop methods ---------------
// push method adds the element at the extreme end of the string
console.log("-----------Push and Pop methods----------")
arr.push('Hassan');

console.log(arr);
// pop element returns the last element from the arr 
console.log(arr.pop());

// last element is removed from the main arr
console.log(arr);

console.log(arr.pop());

console.log(arr);

// Shift and unshift methods

// adds the hassan to the start of the array
// unshift method adds elements
console.log("--------unshift and shift--------")
arr.unshift("Hassan");

console.log(arr);

// removes the first element of the array
arr.shift();
console.log(arr);

// sort method
console.log("------sorting-----")
arr.sort()
console.log(arr)

//reverse method

arr.reverse();
console.log(arr);


