// Object is a non-primitive datatype which holds key value pairs
// Object is a collection of data which holds key value pairs

let obj = {
    name: 'David',
    age: 30,
};
// or can also be defined as
// let obj = {
//     'name': 'David',
//     'age' : 30,
// }
console.log("----Creating Objects------")
console.log(obj);

// Access object properties
console.log("------Access Object -------")
// console.log(obj['name']);
// or 
console.log(obj.name);

// add new properties
console.log("----Add new properties-----")
obj.salary = 10000;
// another way to add new property
obj['city'] = 'Bangalore';
console.log(obj);

// delete an object property
console.log("----Deleting a property-----")
delete obj.city;

console.log(obj);

// Basic methods of an object: 
// In-built methods given by javascript
console.log("To get all the keys of an object-----")
console.log(Object.keys(obj));

console.log('To get all the values of an object---')
console.log(Object.values(obj));

console.log('To get the data in the objects in the form of list');
console.log(Object.entries(obj));

console.log('Creating nested objects');
let obj1 = {
    address: {
        city: 'Bangalore',
        state: 'Karnataka',
    },
};
console.log(obj1);
// city and state are nested properties
console.log("To access nested objects--")
console.log(obj1.address.city);


// Array of objects
let mobile = [
    {
        name: 'Iphone 17',
        brand: 'Apple',
        country: 'USA',
    },
    {
        name: 'Samsung galaxy',
        brand: 'Samsung',
        country: 'South Korea',
    },
    {
        name: 'Nord series',
        brand: 'One Plus',
        country: 'China',
    },
    {
        name: 'Iphone 16',
        brand: 'Apple',
        country: 'USA',
    },
]

// JS code which filters out only the apple branded objects
let result = []
for (let i = 0; i < mobile.length; i++) {
    if (mobile[i].brand.toLocaleLowerCase() == 'samsung'.toLocaleLowerCase()) {
        result.push(mobile[i]);
    }
}

console.log(result);







