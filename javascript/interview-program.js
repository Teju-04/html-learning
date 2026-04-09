let arr = [1, 2, 3, 4, 5, 6];
let value = 7;
let dict = {};
// Output: [[0,5],[1,4],[2,3]]
let list = []

for (let i = 0; i < arr.length; i++) {
    initial = arr[i];
    target = value - initial;
    for (let j = i + 1; j < arr.length; j++) {
        if (target == arr[j]) {
            list.push([i, j]);
        }
    }
}

console.log(list);