function one(callback) {
    setTimeout( () => {
        console.log('function one');
        callback();
    },5000);
}

function two() {
    setTimeout( () => {
        console.log("function two")
    },1000);
}

one(two);
