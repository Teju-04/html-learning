function isPrime(number) {
    if (number == 1) {
        console.log('It is neither a prime nor composite number');
        return false;
    }
    if (number < 1) {
        console.log('Please enter a valid number');
        return false;
    }
    for (let i = 2; i < number / 2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(31));
