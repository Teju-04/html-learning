// To avoid callback hell, in asynchronous a new concept called Promise was introduced.


// Promises - is a javascript object that will either resolve or reject the operations(any 
// code execution)

// 1. Promise fulfilled -> resolve
// 2. Promise unfulfilled -> reject

// Examples with syntax to write a promise

let getChocolate = new Promise((resolve, reject) => {
    let isResponse = false;
    setTimeout(() => {
        if (isResponse) {
            resolve("Getting the chocolate");
        } else {
            reject("Failed with the promise");
        }
    }, 5000);
});

getChocolate
.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})

// How it gets executed: 
// 1. isResponse is set to true, it refers to the resolve block, then the .then block which 
//   prints the resolve message.
// 2. isResponse is set to false, it refers to the else block with the reject
//  message(error), thus it reaches the error catch block which prints the error message