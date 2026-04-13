// this keyword is used to refer the object related data 
// and functions, it is used to access the properties and methods of an object

let obj = {
    name: 'David',
    sayhello: function(){
        // console.log(`Hello to ${name}`); // output is: name is not defined, ReferenceError
        console.log(`Hello to ${this.name}`);
    }
}

obj.sayhello();
