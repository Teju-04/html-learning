// Swiggy example

// Order the food

// Prepare food

// finding delivery partner

// Out of delivery

// Food is delivered

function OrderFood(callback){
    setTimeout(() => {
        console.log("Ordering the food");
        callback();
    },6000); // 6 seconds
}

function PrepareFood(callback) {
    setTimeout(() => {
        console.log("Preparing the food");
        callback();
    },7000);
}

function FindDeliveryPartner(callback) {
    setTimeout(() => {
        console.log("Finding Delivery Partner");
        callback();
    },4000);
}

function OutDelivery(callback) {
    setTimeout(() => {
        console.log("Out for Delivery");
        callback();
    },4000);
}

function FoodDelivered() {
    setTimeout(() => {
        console.log("Food is delivered.");
    },5000);
}

// OrderFood(); 
// PrepareFood();
// FindDeliveryPartner();
// OutDelivery();
// FoodDelivered();
// The whole execution gets finished in 7 seconds
// Execution is not in order without callback specified

OrderFood( () => {
    PrepareFood(() => {
        FindDeliveryPartner(() => {
            OutDelivery(() => {
                FoodDelivered();
            });
        });
    });
});

// Total Time for execution for the above code is 26 seconds(all the timeouts combined)
// What it does is it executes the functions asynchronous functions sequentially after one
// process is done

// Huge Advantage of an callback function.





