// =======================================================
// PASS BY VALUE vs PASS BY REFERENCE (Pass by Sharing)
// =======================================================

// -------------------------------------------------------
// 1. PASS BY VALUE (Primitive Types)
// Primitive Types:
// Number, String, Boolean, null, undefined, Symbol, BigInt
// -------------------------------------------------------

function changeNumber(num) {
    console.log("Inside before change:", num);

    num = 100; // Changes only the local copy

    console.log("Inside after change:", num);
}

let number = 50;

console.log("Before function call:", number);

changeNumber(number);

console.log("After function call:", number);

console.log("\n============================\n");

// -------------------------------------------------------
// 2. PASS BY SHARING (Objects)
// JavaScript copies the reference, not the object.
// -------------------------------------------------------

function changeStudent(student) {
    console.log("Before:", student);

    student.name = "Rahim"; // Modifies original object

    console.log("After:", student);
}

let student1 = {
    name: "Nahid",
    age: 21
};

console.log("Before function:", student1);

changeStudent(student1);

console.log("After function:", student1);

console.log("\n============================\n");

// -------------------------------------------------------
// 3. Reassigning an Object
// Reassigning does NOT affect the original object.
// -------------------------------------------------------

function replaceStudent(student) {
    student = {
        name: "Karim",
        age: 25
    };

    console.log("Inside function:", student);
}

console.log("Before function:", student1);

replaceStudent(student1);

console.log("After function:", student1);

console.log("\n============================\n");

// -------------------------------------------------------
// 4. Arrays
// Arrays are also objects.
// -------------------------------------------------------

function addItem(arr) {
    arr.push(4);
}

let numbers = [1, 2, 3];

console.log("Before:", numbers);

addItem(numbers);

console.log("After:", numbers);

console.log("\n============================\n");

// -------------------------------------------------------
// 5. Primitive Assignment
// -------------------------------------------------------

let a = 10;
let b = a;

b = 20;

console.log("a =", a);
console.log("b =", b);

console.log("\n============================\n");

// -------------------------------------------------------
// 6. Object Assignment
// Both variables point to the same object.
// -------------------------------------------------------

let obj1 = {
    city: "Sylhet"
};

let obj2 = obj1;

obj2.city = "Dhaka";

console.log("obj1 =", obj1);
console.log("obj2 =", obj2);

console.log("\n============================\n");

// -------------------------------------------------------
// 7. Copying an Object
// Spread operator creates a shallow copy.
// -------------------------------------------------------

let person = {
    name: "Nahid",
    age: 21
};

let copyPerson = { ...person };

copyPerson.age = 30;

console.log("Original:", person);
console.log("Copy:", copyPerson);

console.log("\n============================\n");

// -------------------------------------------------------
// 8. Copying an Array
// -------------------------------------------------------

let arr1 = [10, 20, 30];

let arr2 = [...arr1];

arr2.push(40);

console.log("Original Array:", arr1);
console.log("Copied Array:", arr2);

console.log("\n============================\n");

// =======================================================
// SUMMARY
// =======================================================

console.log("SUMMARY");
console.log("------------------------------------------");
console.log("Primitive Types:");
console.log("- Passed by VALUE");
console.log("- Function receives a COPY");
console.log("- Original value is NOT changed");

console.log();

console.log("Objects & Arrays:");
console.log("- JavaScript passes a COPY of the REFERENCE");
console.log("- Modifying properties/elements changes the original");
console.log("- Reassigning the parameter does NOT change the original");

console.log();

console.log("Remember:");
console.log("Primitive  -> Pass by Value");
console.log("Object/Array -> Pass by Sharing (commonly called Pass by Reference)");