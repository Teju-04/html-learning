function isPrime(number) {
    if(number == 1){
        console.log('It is neither a prime nor composite number');
        return undefined;
    }
    if(number < 1) {
        console.log('Please enter a valid number');
        return undefined;
    }
    for(let i = 2;i < number/2;i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(31));
