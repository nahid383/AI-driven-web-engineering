let numbers = [20, 35, 50, 75, 100];


let maxNumber = Math.max(...numbers);


console.log(maxNumber);

let newNumbers = [130, 160, 190, 200];

let allNumbers = [...numbers, ...newNumbers];

console.log(allNumbers);

numbers.push(123, 124, 125);
console.log(allNumbers);


let numbers1 = numbers;
numbers1.push(200, 300, 400);
console.log(numbers1);
