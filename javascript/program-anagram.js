// Anagram program:
// Eg: 'god' is an anagram of 'dog'

let isAnagram = function(str1, str2) {
    list1 = str1.split('').sort().join('');
    list2 = str2.split('').sort().join('');
    // ['a','b'] == ['a','b'] returns false

    return list1 == list2;
   
}

console.log(isAnagram('abc','dog'));