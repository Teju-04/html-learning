// String methods
let city = "Bangalore";

// To find the length of a string
console.log(city.length);

// To find the character using the index
console.log(city.charAt(0))

// repeats the string one time 
console.log(city.repeat(1));
// repeats the string 2 times -- with no space between them
console.log(city.repeat(2));

// To convert the string to lower case string
console.log(city.toLocaleLowerCase());

// To convert the string to upper case string
console.log(city.toLocaleUpperCase());


// Slicing 
console.log(city);
console.log(city.slice(3, 6));
// starting index is 3 (included)
// ending index is excluded 

// Array
let arr = ['Bangalore', 'Mangalore', 'Dharwad'];
console.log(typeof arr);// Object
console.log(arr.length);
console.log(arr[0].slice(3, 6)); // output: gal

console.log('Printing array elements');
console.log("---------------------------")
for (let i = 0; i < arr.length; i++) {
    console.log('I have the value', arr[i]);
}

// include method
let str = "Bangalore is my hometown";
console.log(str.includes("my"));

console.log(str.includes('mdfdi'));

// indexOf method

let sentence = 'Bangalore is my hometown';
console.log(sentence.indexOf('my')); // output: 13

console.log(sentence.indexOf('myjsdf')); // output: -1

// Split method
let payment = "Pay on time";
console.log(payment.split("")); // output: list of each character 
// e.g: ['p','a',....]

console.log(payment.split(' '));
//output: ['pay','on','time']

console.log(payment.slice('  '));
// output: pay on time

// join method

console.log(payment.split("").join(""));

// replace method
let ipl = "We have daily match";
console.log(ipl.replace('match', 'cricket'));
// old : 1st parameter
// new : 2nd parameter


ipl = 'we have daily match match match';
console.log(ipl.replace('match', 'cricket'));
// only replaces the first occurence of the old element

console.log(ipl.replaceAll("match", 'cricket'));
// Replaces all the occurences of the old element

// trim method
// Removes white spaces at trailing ends or the beginning
let town = 'Bangalore       ';
console.log(town.length);
console.log(town.trim().length);

// Js Program to find the count of a letter in a string

let data = "I am attending an interview";
data = data.toLocaleLowerCase();
split_data = data.split("");
let count = 0;
for (let i = 0; i < split_data.length; i++) {
    if (split_data[i] == 'e') {
        count += 1;
    }
}
console.log('The number of count of e in the data string: ', count);


// JS program to find the largest word in the input

let sen = "I am not attending any interviews";
list_sen = sen.split(" ");

let max_string = "";
// let max_len = 0;
for (let i = 0; i < list_sen.length; i++) {
    // if(max_len <= list_sen[i].length) {
    //     max_len = list_sen[i].length;
    //     max_string = list_sen[i];
    // }
    if (list_sen[i].length > max_string.length) {
        max_string = list_sen[i];
    }
}
console.log('The longest string is : ', max_string);

// Conditions: if there are more than 1 longest elements in the string, 
// do we display the last longest element or the first occurance of the longest element.



