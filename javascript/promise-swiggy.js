// function OrderFood(callback) {
//     setTimeout(() => {
//         console.log("Ordering the food");
//         callback();
//     }, 6000); // 6 seconds
// }

// function PrepareFood(callback) {
//     setTimeout(() => {
//         console.log("Preparing the food");
//         callback();
//     }, 7000);
// }

// function FindDeliveryPartner(callback) {
//     setTimeout(() => {
//         console.log("Finding Delivery Partner");
//         callback();
//     }, 4000);
// }

// function OutDelivery(callback) {
//     setTimeout(() => {
//         console.log("Out for Delivery");
//         callback();
//     }, 4000);
// }

// function FoodDelivered() {
//     setTimeout(() => {
//         console.log("Food is delivered.");
//     }, 5000);
// }
// OrderFood(() => {
//     PrepareFood(() => {
//         FindDeliveryPartner(() => {
//             OutDelivery(() => {
//                 FoodDelivered();
//             });
//         });
//     });
// });

// Swiggy concept using callback functions

function OrderFood() {
    return new Promise((resolve, reject) => {
        let response = true;

        setTimeout(() => {
            if (response) {
                resolve("Food order is done");
            } else {
                reject("Food order is not done, internet is down on the server side");
            }
        }, 4000);
    });
}

function PrepareFood() {
    return new Promise((resolve, reject) => {
        let response = true;

        setTimeout(() => {
            if (response) {
                resolve("Preparing the food");
            } else {
                reject("Food is not prepared as the chef is not available");
            }
        }, 5000);
    });
}

function FindDeliveryPartner() {
    return new Promise((resolve, reject) => {
        let response = true;

        setTimeout(() => {
            if (response) {
                resolve("Delivery Partner found");
            } else {
                reject("Delivery Partner not found. Try again")
            }
        }, 4000);
    });
}

function OutDelivery() {
    return new Promise((resolve, reject) => {
        let response = true;

        setTimeout(() => {
            if (response) {
                resolve("Food is out for delivery. Please wait");
            } else {
                reject("Food is not out for delivery.It's getting packed.Please wait")
            }
        }, 7000);
    });
}

function FoodDelivered() {
    return new Promise((resolve, reject) => {
        let response = true;

        setTimeout(() => {
            if (response) {
                resolve("Your Food is sucessfully delivered");
            } else {
                reject("Your food is out for delivery. Stuck in traffic. Please wait");
            }
        }, 4000);
    });
}


// This is wrong
// OrderFood().then((message) => {
//     console.log(message);

//     PrepareFood().then((message) => {
//         console.log(message);
//     }).catch((error) => {
//         console.log(error);
//     })

// }).catch((error) => {
//     console.log(error);
// })


OrderFood().then((message) => {
    console.log('Message 1', message);
    return PrepareFood();
}).then((message) => {
    console.log('Message 2: ', message);
    return FindDeliveryPartner();
})
    .then((message) => {
        console.log("Message 3:", message);
        return OutDelivery();
    }).then((message) => {
        console.log("Message 4:", message);
        return FoodDelivered();
    }).then((message) => {
        console.log("Message 5:", message);
    })
    .catch((error) => {
        console.log('Error', error);
    })



// For 2 functions:
// Scenario 1: if the orderfood's response is true and preparefood's response is false:
//    result: food order is done message gets executed but for the preparefood
//    function throws an error

// Scenario 2: if the orderfood's response is false and preparefood's response is true,
//    result: throws an error on the first message, doesn't execute the prepare
//    food function
// Similarly, the result is the same,if both the function's response is false.