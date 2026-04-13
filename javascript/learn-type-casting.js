// Type conversion

// Two types:
// 1. Implicit
// 2. Explicit


console.log("5" + 1);
// Type conversion of 1 is implicitly done

console.log(5 + 3 + 'allfsj' + 5 + 1);
// the first two are integers and therefore added then it encounters a string, thus the 
// remaining values are type casted into strings

console.log("5" - 1);
// In case of subtraction, the string is converted into integer/number
// Thus we get the output as 4


console.log('5' * 2);
// string to number

console.log(1 + true);
// boolean is converted to number

console.log('1' + true);
//output: 1true


if ('hello') {
    console.log('true statemnt');
} else {
    console.log('false statement');
}

// Output: true statement
// A non empty string is considered true


if ('') {
    console.log('true statemnt');
} else {
    console.log('false statement');
}

// Output: false statement
// empty string is considered as false



//Explicit Conversion

// String , Boolean, Number

console.log(String(true));
console.log(typeof String(true));

// Strings are printed in white in the terminal
console.log(String(true));
console.log(String(123));
console.log(Number('123'));
console.log(Boolean("")); // Output: false
console.log(Boolean('123')); //Output: true


let data = "Eello Web";
let vow = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

// Write a JS program to count number of vowels
data = data.toLocaleLowerCase().split('');
for (let i = 0; i < data.length; i++) {
    if (vow.includes(data[i])) {
        count += 1
    }
}
console.log(count)


// Remove the duplicates from the below array

let arr = [1, 2, 2, 3, 3, 5, 4, 4, 6, 7, 8, 8, 8];
let newArr = []
for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);
let uniq = []

for (let i = 0; i < arr.length; i++) {
    if (uniq.indexOf(arr[i]) == -1) {
        uniq.push(arr[i]);
    }
}

console.log(uniq);

// To find the largest element in the array
arr = [100, 200, 350, 120, 140];
let max_ele = 0;
for (let i = 0; i < arr.length; i++) {
    if (max_ele < arr[i]) {
        max_ele = arr[i];
    }
}

console.log(max_ele);

// Write a JS Program to find the frequency of each letters
// Example: Bangalore, count number of b's and a's and n's and so on

let word = 'Bangalore'.toLocaleLowerCase();
let dict = {};

for (let i = 0; i < word.length; i++) {
    if (!Object.keys(dict).includes(word[i])) {
        dict[word[i]] = 1;
    } else {
        dict[word[i]] += 1;
    }
    // OR
    // dict.word[i] = dict.word[i] ? dict.word[i] + 1 : 1;
}

console.log(dict);


let findFreq = function (word) {
    word = word.toLocaleLowerCase();
    let count = {};
    for (let char of word) {
        // count[word[char]] = count[word[char]] ? count[word[char]] + 1 : 1;  
        // if char is not in count, then count[char] will be undefined,
        // thus we can use the logical OR operator to return 0 in that case and add 1 to it
        count[char] = (count[char] || 0) + 1;
        // count[char] = count.get(char, 0) + 1; // if count[char] is undefined, it will return 0
    }
    return count;
}

console.log(findFreq('Bangalore'));

