"use strict";
// class Student {
//     name : string;
//     email : string;
//     age : number;
//     marks : number
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(name:string, email:string, age:number, marks:number){
//         this.name = name;
//         this.email = email;
//         this.age=age;
//         this.marks = marks;
//     }
//     getInfo() {
//         const info = `Name : ${this.name}\nEmail : ${this.email}\nAge : ${this.age}\nMarks : ${this.marks}`
//         return info
//     }
// }
// const rafi = new Student("Rafi", "rafi@example.com", 19, 100)
// const nahid = new Student("Nahid", "nahid@example.com", 21, 87)
// console.log(rafi.getInfo())
class TeaShop {
    name;
    location;
    teaPrice;
    availableTea;
    constructor(name, location, teaPrice, availableTea) {
        this.name = name;
        this.location = location;
        this.teaPrice = teaPrice;
        this.availableTea = availableTea;
    }
    // Method 1: Sell tea
    sellTea(quantity) {
        if (quantity <= this.availableTea) {
            this.availableTea -= quantity;
            console.log(`${quantity} cups of tea sold.`);
        }
        else {
            console.log("Not enough tea available.");
        }
    }
    // Method 2: Add tea
    addTea(quantity) {
        this.availableTea += quantity;
        console.log(`${quantity} cups of tea added.`);
    }
    // Method 3: Calculate total price
    calculatePrice(quantity) {
        return quantity * this.teaPrice;
    }
    // Method 4: Show shop information
    showInfo() {
        console.log(`Shop: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Tea Price: ${this.teaPrice}`);
        console.log(`Available Tea: ${this.availableTea}`);
    }
}
const shop = new TeaShop("Nahid Tea Shop", "Sylhet", 20, 100);
shop.showInfo();
shop.sellTea(5);
console.log("Total price:", shop.calculatePrice(3));
shop.addTea(20);
//# sourceMappingURL=method.js.map