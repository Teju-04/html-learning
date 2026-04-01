// Difference between var,let and const:
// On the basis of :
// 1. declaration 
// 2. initialization
// 3. scope of the variables


var name = "David";
var name = "Johnson";
// name variable is overridden with the name 'johnson'
console.log("My name is ",name);


// var: 
// 1. It can be re-declared. (i.e we can write the same declaration again. from above eg: var name)
// 2. It can be re-initialized (i.e we can write a different initialization eg: 'johnson')


let city = 'Bangalore';
// let keyword cannot be redeclared. If done so, throws an syntax error
// let city = 'Hubli';


// let keyword can be re-initialized.
city = 'Hubli';
console.log("I reside in",city);


const state = 'Karnataka';
// const cannot be re-declared. If done so, throws a syntax error
// let state = 'Maharashtra';

// const cannot be re-initialized. If done so, throws an type error
// state = 'Maharashtra'
console.log(state)


// Scope of Variables
// let score = 79;
// {
//     console.log('Rohit sharma scored',score);

// }


// {
//     let score = 79;
//     console.log('Rohit sharma scored',score);
    
// }



// {
//     let score = 79;
//     console.log('Rohit sharma scored',score);

// }
// // The below statement throws an error, as the score is defined inside a block
// // let keyword is a block scope
// console.log("Rohit sharma --- scored",score);



// {
//     var score = 79;
//     console.log('Rohit sharma scored',score);

// }
// // score value can be accessed even if it's in a block
// // Therefore it is a function scope
// console.log("Rohit sharma --- scored",score);




{
    const score = 79;
    console.log('Rohit sharma scored',score);

}
// const is also a block scope. It is defined within a block and therefore cannot be accessed.
// The below line throws a ReferenceError.
// console.log("Rohit sharma --- scored",score);