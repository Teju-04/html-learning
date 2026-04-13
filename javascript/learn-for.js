// for .. in loop 

let obj = {
    name: 'David',
    age: 20,
    salary: 10000,
};

// for..in loop is used to iterate over the properties of an object
// specifically for the objects, it is not used for arrays

for(let key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
}

// for of loop is used to iterate over the values of an iterable object like arrays, 
// strings, maps, sets etc

let score = [65,75,80,82,90];

for (let s of score) {
    if(s >= 75) {
        console.log("It's a distinction.",s);
    }
}

// Interview Question: Difference between for..in and for..of loop

// for..in loop is used to iterate over the properties of an object, 
// it returns the keys of the object
// for..of loop is used to iterate over the values of an iterable object
// like arrays, strings, maps, sets etc, it returns the values of the iterable object


