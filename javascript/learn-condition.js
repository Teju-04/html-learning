// Conditional Statements

// If condition

let age = 3;

if (age > 18) {
    console.log('i can vote');
}

// If else condition
age = 34;
if (age > 18) {
    console.log("I can vote");
}
else {
    console.log("I cannot vote");
}

// if else if condition
let score = 10;
if (score < 100)
    console.log("You have scored less than 100 points");

else {
    if (score == 100)
        console.log("You have exactly scored 100 points.");
    else
        console.log("You have scored more than 100 points");
}

// switch conditional statement
let data = 6;
switch (data) {
    case 1: console.log('print 1');
        break;
    case 2: console.log('print 2');
        break;
    default: console.log('nothing');
}

// Example 2

let orderStatus = 'Ordered';

switch (orderStatus) {
    case 'Ordered': console.log('Item was ordered');
        break;
    case 'Dispatched': console.log('Item was dispatched and in transit');
        break;
    case 'Delivery': console.log('Item is out for delivery');
        break;
    default: console.log('Product not servicable.')
}

// When do u use switch condition? 
// It is used when there are more than 5 or 6 conditions

// Switch Example 3:

let amount = 5000;

// switch() {
//     case amount > 5000:
//         console.log('VIP or Premium constomer');
//         break;
//     case amount > 2000:
//         console.log('Give 20 percent discount');
//         break;
//     default: console.log('Shop more to get a discount');
// }
// The above code throws an error because switch needs a parameter




//**************** */
switch (true) {
    case amount > 5000:
        console.log('VIP or Premium constomer');
        break;
    case amount > 2000:
        console.log('Give 20 percent discount');
        break;
    default: console.log('Shop more to get a discount');
}
// To execute the switch statement, write a parameter value as boolean

//************************* */



// Even if the parameter amount is passed, the correct output is not executed 
// Default statement is executed even if the case conditions match
switch (amount) {
    case amount > 5000:
        console.log('VIP or Premium constomer');
        break;
    case amount > 2000:
        console.log('Give 20 percent discount');
        break;
    default: console.log('Shop more to get a discount');
}





