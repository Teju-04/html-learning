// Important Topic: 
// Frequently asked in interviews:

// function outer() {
//     let value = 0;

//     function inner() {
//         value ++;
//         console.log("My value is ",value); // Output: 1
//     }
//     inner();
// }

// outer(); // Output: 1 for all 3 cases
// outer();
// outer();


function outer() {
    let value = 0;

    function inner() {
        value++;
        console.log("My value is ", value); // Output: 1
    }
    return inner;
}

let out = outer();
out(); // Output: 1
out(); // Output: 2
out(); // Output: 3

// Closure is the process or a method of retaining the outer variable value
// even after outer function is closed


function teaShop() {
    let bill = 0; //Private Variable

    return function addBill(price) {
        bill += price;
        console.log('Total bill: Rs ' + bill);
    };
}


const myBill = teaShop();
myBill(10); // Bill value: 0 + 10
myBill(20); // Bill value: 10 + 20
myBill(30); // Bill value: 30 + 30

// outer bill variable is retained


