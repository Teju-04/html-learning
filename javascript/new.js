// Inheritance

class Parent {
    constructor(name){
        this.name = name;
    }

    parentMethod() {
        console.log(`my name is ${this.name}`);
    }
}

class Child extends Parent {

}

let child = new Child('David');
child.parentMethod();


// Parent class
class IPLTicket {
    constructor(name){
      this.name = name;
  }

  enterStadium() {
    console.log(this.name + " entered IPL stadium.")
  }

  watchMatch() {
    console.log(this.name + " is watching the match")
  }
}

// Child Class 
class VIPTicket extends IPLTicket {
    betterView() {
        console.log(this.name + "has better seating near boundary ")
    }
}

// Premium Ticket
class PremiumTicket extends IPLTicket {
    betterView() {
        console.log(this.name + " has VIP seating");
    }

    loungeAccess() {
        console.log(this.name + " is enjoying lounge access");
    }

    meetPlayers() {
        console.log(this.name + " meets players after the match")
    }
}

const vip = new VIPTicket('Diya');
vip.enterStadium();
vip.watchMatch();
vip.betterView();

console.log(" -----------");

const premium = new PremiumTicket('Rahul');
premium.enterStadium();
premium.watchMatch();
premium.betterView();
premium.loungeAccess();
premium.meetPlayers();

//Parent Ticket 

class Normal {
    constructor(name) {
        this.name = name;
    }

    watchMatch() {
        console.log(this.name + " is watching match from normal stand.");
    }
}

// Child Class(override)
class Inherited extends Normal{
    // (overridden with new method)
    watchMatch() {
        console.log(this.name + ' is watching at a premium stand.');
    }
}



