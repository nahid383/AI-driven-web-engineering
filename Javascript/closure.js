//A closure is a function that "remembers" the variables from the environment where it was created, even after that environment is no longer active.

function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

let counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

//cofee shop cash counter example
function cashCounter(){
    let totalAmount = 0;

    return function(amount){
        totalAmount += amount;
        return totalAmount;
    }
}

let cofeeshopCounter = cashCounter();
let restaurantCounter = cashCounter();

console.log("Total amount of Cofee Sold : " + cofeeshopCounter(50));  // 50
console.log("Total amount of Cofee Sold : " + cofeeshopCounter(30));  // 80   
console.log("Total amount Sold in Restaurant : " + restaurantCounter(250));  // 20
console.log("Total amount of Cofee Sold : " + cofeeshopCounter(20));  // 100
console.log("Total amount of Cofee Sold : " + cofeeshopCounter(10));  // 110
console.log("Total amount Sold in Restaurant : " + restaurantCounter(270));  // 20
console.log("Total amount of Cofee Sold : " + cofeeshopCounter(40));  // 150