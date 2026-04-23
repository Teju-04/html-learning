// Interview Questions: 
// 1. Difference between map, reduce and filter methods
// 2. Write Promise code based on scenario like the swiggy scenario or bookMyShow scenario

let mobile = [
    {
        name: 'iphone',
        brand: 'Apple',
        country: 'US'
    },
    {
        name: 'Galaxy',
        brand: 'Samsung',
        country: 'Korea'
    },
    {
        name: 'Poco',
        brand: 'MI',
        country: 'China'
    },
    {
        name: 'iphone',
        brand: 'Apple',
        country: 'US'
    }
];

// filter method
let filteredData = mobile.filter((value) => value.brand == 'Apple');

console.log(filteredData);
// Returns array of objects with the brand name Apple

let filteredData2 = mobile.filter((value) => value.brand != 'Apple');

console.log(filteredData2);
// Returns an array of object with the brand name not equal to Apple

// Map method:

let mappedData = mobile.map((value) => console.log('value data',value));

// console.log(mappedData);

// Reduce method

let scores = [72,65,92,35,92,90];

let finalScores =  scores.reduce((acc,value) => acc + value,0);
// first parameter is the accumulator 
// second parameter is the each value
// initially accumulator is assigned as 0
// In the first iteration, 
//    acc = 0 ; acc = acc + value
// Second argument holds the inital value of the accumulator

console.log("The total score is ",finalScores);

let finalScores2 =  scores.reduce((acc,value) => acc + value,100);

console.log("The total score ",finalScores2);


mobile = [
    {
        name: 'iphone',
        brand: 'Apple',
        price: 10000,
        country: 'US'
    },
    {
        name: 'Galaxy',
        brand: 'Samsung',
        price: 3000,
        country: 'Korea'
    },
    {
        name: 'Poco',
        brand: 'MI',
        price: 30000,
        country: 'China'
    },
    {
        name: 'iphone',
        brand: 'Apple',
        price: 40000,
        country: 'US'
    }
];

let totalValue = mobile.reduce((acc,value) => acc + value.price,0);
console.log("The total price of mobiles is ",totalValue);

let totalValue2 = mobile.filter((value) => value.brand == 'Apple')
.reduce((acc,value) => acc + value.price,0);

console.log(totalValue2); // Calculates only the price values of the brand Apple

// Another method
let iphonePrice = mobile.reduce((acc,value)=> {
    if(value.brand == "Apple"){
        return acc + value.price;
    }

    return acc;
},0);
console.log(iphonePrice);


let transaction = [
    {
        status: 'FAILED',
        product: "Phone",
        value: 2000
    },
    {
        status: 'SUCCESS',
        product: "Charger",
        value: 300
    },
    {
        status: 'FAILED',
        product: "SmartWatch",
        value: 5000
    },
    {
        status: 'SUCCESS',
        product: "Phone",
        value: 2000
    },
    {
        status: 'FAILED',
        product: "Shoes",
        value: 5000
    },
    {
        status: 'SUCCESS',
        product: "Phone",
        value: 2000
    }
];

let totalFailedValue = transaction.reduce((acc,val)=> {
    if(val.status == 'FAILED'){
        return acc + val.value;
    }
    return acc;
},0);


let totalFailedValue2 = transaction
                .filter((val)=> val.status == 'FAILED')
                .reduce((acc,val) => acc + val.value,0);

console.log(totalFailedValue2);

// New Concept: JSON - Javascript Object Notation
