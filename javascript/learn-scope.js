// Learning Concept : Lexical Scoping
// Advanced version

// Global Scope
// Local Scope
// Nested Scope
// Block Scope

let ad = 'Five Star ad'; // global scope

function Ramesh() {
    let one = 'Ramesh is on the set'; // local scope
    console.log(ad);
    console.log(one);

    function suresh() {
        let two = 'Suresh is on the set'; // nested scope

        console.log(ad); // Global variable is accessible in the nested function suresh
        console.log(one); // Local variable of the parent function Ramesh 
        //is accessible in the nested function suresh
        console.log(two); // Local variable of the nested function suresh
        if (true) {
            let final = 'Ad is done'; // block scope
            console.log(final); // block scope variable is accessible inside the block
        }
    }

    suresh();
    // console.log(two); // ReferenceError: two is not defined, 
    // two is a local variable of the function suresh and it is not accessible in the function Ramesh


}

console.log(ad);
// console.log(one); // ReferenceError: one is not defined
// one is a local variable and it is not accessible outside the function Ramesh, 
// it is only accessible inside the function Ramesh.
Ramesh();

// Output: Five Star ad
// Ramesh is on the set

// In the above code, we have a global variable 'ad' and a
//  local variable 'one' inside the function Ramesh. 
// The function Ramesh can access the global variable 'ad' and the local variable 'one'.


// Next topic//

console.log("------------------");

let rohitStrategy = "Play aggressive";

function viratPlan() {
    let viratStrategy = "Anchor innings";

    function dhoniFinish() {
        let dhoniStrategy = "Finish the game";

        console.log(rohitStrategy);
        console.log(viratStrategy);
        console.log(dhoniStrategy);
    }
    dhoniFinish();

    console.log(rohitStrategy);
    console.log(viratStrategy);
    // console.log(dhoniStrategy); // ReferenceError: dhoniStrategy is not defined,
}

viratPlan();

console.log(rohitStrategy);
// console.log(viratStrategy); // ReferenceError: viratStrategy is not defined,
// console.log(dhoniStrategy); // ReferenceError: dhoniStrategy is not defined,