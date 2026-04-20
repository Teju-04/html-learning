// Encapsulation

class Action {
    // for private members, start it with #
    #balance = 0; // balance is a private variable 
    // if a private variable is declared without assigning a value, then the balance is 
    // undefined

    constructor(name) {
        this.name = name
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount; // this.#balance = this.#balance + 1
            this.#viewBalance();
        } else {
            console.log("Cannot add 0 or negative money");
        }
    }

    withdraw(amount) {
        if (amount < this.#balance) {
            this.#balance -= amount;
            this.#viewBalance();
        } else {
            console.log("Insufficient funds")
        }

    }

    #viewBalance() {
        console.log("Account Balance is ", this.#balance);

    }
}

const bank = new Action('Axis');
// the action class was supposed to be declared with a name argument but doesn't throw an error
// Is it because it is not used anywhere?

bank.deposit(8000);
bank.withdraw(30);

// bank.#viewBalance();
// bank.#balance;
// The above line throws an error as it is a private field and cannot be accessed directly 
// But can be accessed using setter or getter methods

// 4 Pillars:
// 1. Abstraction -- Describe it using private methods
// 2. Encapsulation -- Describe it using private fields within the class
// 3. Inheritance -- Inheriting parent class fields 
// 4. Polymorphism -- method overriding and method overloading







