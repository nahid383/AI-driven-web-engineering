// ==========================================
// JavaScript Array Power Methods
// map(), forEach(), filter(), find()
// ==========================================

// Sample Array
const students = [
  { id: 1, name: "Nahid", marks: 85 },
  { id: 2, name: "Ratul", marks: 45 },
  { id: 3, name: "Niloy", marks: 92 },
  { id: 4, name: "Rahi", marks: 68 },
  { id: 5, name: "Rayhan", marks: 38 }
];

console.log("Original Array:");
console.log(students);

// ===================================================
// 1. forEach()
// Executes a function for each element.
// Does NOT return a new array.
// ===================================================

console.log("\n===== forEach() =====");

students.forEach((student, index) => {
  console.log(
    `${index + 1}. ${student.name} scored ${student.marks}`
  );
});

// Example: Sum all marks
let totalMarks = 0;

students.forEach(student => {
  totalMarks += student.marks;
});

console.log("Total Marks:", totalMarks);

// ===================================================
// 2. map()
// Creates and returns a NEW array.
// Original array remains unchanged.
// ===================================================

console.log("\n===== map() =====");

// Create array of names
const names = students.map(student => student.name);

console.log("Student Names:");
console.log(names);

// Increase marks by 5
const updatedMarks = students.map(student => {
  return {
    ...student,
    marks: student.marks + 5
  };
});

console.log("\nUpdated Marks:");
console.log(updatedMarks);

console.log("\nOriginal Array Still Same:");
console.log(students);

// ===================================================
// 3. filter()
// Returns a NEW array containing elements
// that satisfy the condition.
// ===================================================

console.log("\n===== filter() =====");

// Passed students
const passedStudents = students.filter(student => student.marks >= 50);

console.log("Passed Students:");
console.log(passedStudents);

// Students scoring above 80
const toppers = students.filter(student => student.marks > 80);

console.log("\nToppers:");
console.log(toppers);

// ===================================================
// 4. find()
// Returns FIRST matching element.
// If nothing matches -> undefined
// ===================================================

console.log("\n===== find() =====");

// Find student named Niloy
const student = students.find(student => student.name === "Niloy");

console.log(student);

// Find first student with marks below 40
const failedStudent = students.find(student => student.marks < 40);

console.log(failedStudent);

// Find non-existing student
const unknown = students.find(student => student.name === "Sabbir");

console.log(unknown);

// ===================================================
// Comparison
// ===================================================

console.log("\n===== Comparison =====");

const numbers = [2, 4, 6, 8, 10];

console.log("Original:", numbers);

// map
const doubled = numbers.map(num => num * 2);
console.log("map:", doubled);

// forEach
console.log("forEach:");
numbers.forEach(num => console.log(num * 2));

// filter
const greaterThanFive = numbers.filter(num => num > 5);
console.log("filter:", greaterThanFive);

// find
const firstGreaterThanFive = numbers.find(num => num > 5);
console.log("find:", firstGreaterThanFive);

// ===================================================
// Interview Example
// ===================================================

const products = [
  { name: "Laptop", price: 70000 },
  { name: "Phone", price: 30000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 }
];

console.log("\n===== Interview Example =====");

// map
const productNames = products.map(product => product.name);
console.log("Names:", productNames);

// filter
const expensiveProducts = products.filter(
  product => product.price > 10000
);
console.log("Expensive Products:", expensiveProducts);

// find
const mouse = products.find(product => product.name === "Mouse");
console.log("Mouse:", mouse);

// forEach
console.log("Product List:");
products.forEach(product =>
  console.log(`${product.name} - ${product.price}`)
);

// ===================================================
// Summary
// ===================================================

/*
Method      Returns New Array?   Returns Single Value?   Purpose
--------------------------------------------------------------------
forEach()        ❌ No                 ❌ No             Loop through array
map()            ✅ Yes                ❌ No             Transform array
filter()         ✅ Yes                ❌ No             Keep matching items
find()           ❌ No                 ✅ Yes            First matching item

Remember:

forEach() -> Just loop
map()     -> Modify every element
filter()  -> Select matching elements
find()    -> Get first matching element
*/