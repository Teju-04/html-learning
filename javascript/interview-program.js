let arr = [1, 2, 3, 4, 5, 6];
let value = 7;
let dict = {};
// Output: [[0,5],[1,4],[2,3]]
let list = []

// for (let i = 0; i < arr.length; i++) {
//     initial = arr[i];
//     target = value - initial;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (target == arr[j]) {
//             list.push([i, j]);
//         }
//     }
// }

// Another way to get the same answer--- with 2 for loops and time complexity = n to the power 2

// for(let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] == value) {
//             list.push([i,j]);
//         }
//     }
// }

// In terms of function 
function some_function(arr,value) {
    for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == value) {
            list.push([i,j]);
        }
    }
}
    return list;
}

let result = some_function([1,2,3,4,5,6],9);
console.log(result);
