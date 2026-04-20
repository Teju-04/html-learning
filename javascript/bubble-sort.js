let array = [-3, -20, 20, 7, 1, -19, -1];

// Write a JS program to sort an array using bubble sort method
function bubbleSort(arr) {
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
        if (arr[j + 1] < arr[j]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
  return arr;
}

console.log(bubbleSort(array));


// Another way to write BubbleSort
// do {
// for(let i = 0;i < array.length; i++) {
//     if (array[i] > array[i+1] ){
//         let temp = array[i];
//         array[i] = array[i+1];
//         array[i+1] = temp;
//         interChange = true;
//     }
// }
// } while(interChange);

// console.log(array);

