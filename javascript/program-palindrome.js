let isPalindrome = function(str1) {
    
    reverse1 = str1.split('').reverse().join('');

    return str1 == reverse1;
}

console.log(isPalindrome('popcorn'));

console.log("---without using reverse method-----");

let isPalindrome1 = function(str1) {
    let reversed = ""
    
    for(let i = str1.length - 1; i >= 0; i--) {
        reversed += str1[i];
    }

    return reversed == str1;
}

console.log(isPalindrome1('dad'));