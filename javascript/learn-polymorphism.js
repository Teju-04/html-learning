// Polymorphism : method overriding, method overloading


class College {
    constructor(name) {
        this.name = name;
    }

    famousFor() {
        console.log(`${this.name} is famous for placements`);
    }
}

class KIT extends College {
    famousFor() {
        console.log(`${this.name} is famous for `)
    }
}

class AIT extends College {
    famousFor() {
        console.for(`${this.name} is famous for Sanskriti`)
    }
}



class Product {
    constructor(name) {
        this.name = name;
    }

    buyProduct() {
        console.log("Logic to buy a project")
    }
}

class Mobile extends Product {
    buyProduct() {
        console.log("Logic to buy a mobile.")
    }
}

// Types of ways to create a function
// function definition
// function abc() {

// }
// // function expression
// let abc = function() {

// }

// // arrow function / fat-arrow function

// const sum = () => {

// }

const sum = (a, b) => {
    return a + b;
};

console.log('The result is ', sum(4, 4));

// Interview Question: Write a arrow function 

// Synchronous and Asynchronous Programming:


