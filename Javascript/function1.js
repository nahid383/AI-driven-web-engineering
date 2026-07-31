//function declaration
function openLaptop(){
    console.log("Laptop power is on.");
    console.log("Laptop is rebooting.");
    console.log("Laptop is started.");
}

//call the function
openLaptop();

//parameter
console.log("...................................")
function sayHello(name){
    console.log("hello to ", name);
    console.log(name);
}

sayHello("Nahid");

function add(num1, num2){
    console.log(num1+num2);
}

add(12, 13);

//return

console.log("...................................")

function multiply(num){
    const square = num*num;
    return square;
}

const result = multiply(9);

console.log(result);

console.log("...................................")

//sum by functions

const numbers = [5, 10, 15, 20, 25, 30, 25];

function sumOfArray(array){
    console.log("Elements in array: ", array);
    let sum = 0;
    for(const num of array){
        sum = sum + num;
    }

    return sum;
}

const res = sumOfArray(numbers);

console.log(res);