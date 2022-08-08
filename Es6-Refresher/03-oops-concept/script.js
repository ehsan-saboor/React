// class and object

// class is a blueprint to create object

// create class
class customer {
    // constructor is property in which we declared variable
    constructor(n) {
        this.name = n;
    }

    // add new property
    age = 22;

    // method or function
    buy() {
        console.log(this.name)
    }
}

// create object
let customer1 = new customer("Ehsan")
console.log(customer1)
customer1.buy()

// extends class in another class
// now we extends the class(customer) in class(guestcustomer) 


class guestcustomer extends customer {
    helo() {
        console.log("Hi ahsan")
    }
}

let customer2 = new guestcustomer("Ehsan Ali khan comes from extends")
console.log(customer2)
customer2.buy() // this comes from customer1 in customer2
customer2.helo()


// in Es7 we can add property without (this) keyowrd, outside of constructor brakets
// constructor(n){
//     this.name = n;
// }

// add new property
// age = 22;


// in Es7 we can add arrow function without declartion
// buy = () => {
//     console.log(this.name)
// }