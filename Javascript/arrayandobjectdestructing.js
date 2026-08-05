const numbers = [10, 20, 30, 40];

const [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30

const person = {
  name: "Nahid",
  age: 22,
  city: "Sylhet"
};

const { name, age, city } = person;

console.log(name); // Nahid
console.log(age);  // 22
console.log(city); // Sylhet