// ==========================================
// NULL vs UNDEFINED
// ==========================================

// undefined -> Variable declared but not assigned a value
let a;
console.log("a:", a); // undefined
console.log(typeof a); // "undefined"

// null -> Intentionally empty value
let b = null;
console.log("b:", b); // null
console.log(typeof b); // "object" (JavaScript historical bug)

// Comparison
console.log(a == b);   // true (loose equality)
console.log(a === b);  // false (strict equality)

// Function without return
function test() {}
console.log(test()); // undefined

// Missing object property
const person = {
  name: "Nahid"
};

console.log(person.age); // undefined

// Intentionally clearing a value
person.name = null;
console.log(person.name); // null

// ==========================================
// TRUTHY & FALSY VALUES
// ==========================================

// Falsy Values (Only 8 in JavaScript)
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false (BigInt zero)
console.log(Boolean(""));         // false (Empty string)
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Everything else is Truthy
console.log(Boolean(true));       // true
console.log(Boolean(1));          // true
console.log(Boolean(-10));        // true
console.log(Boolean(100n));       // true
console.log(Boolean("Hello"));    // true
console.log(Boolean("0"));        // true
console.log(Boolean("false"));    // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true
console.log(Boolean(function(){})); // true

// ==========================================
// if Statement Examples
// ==========================================

let username = "";

if (username) {
    console.log("Username exists");
} else {
    console.log("Username is empty");
}
// Output: Username is empty

let marks = 80;

if (marks) {
    console.log("Marks available");
}
// Output: Marks available

let value = null;

if (!value) {
    console.log("Value is falsy");
}
// Output: Value is falsy

// ==========================================
// Logical Operators
// ==========================================

// OR (||)
// Returns first truthy value
console.log("" || "Default");       // Default
console.log(0 || 100);              // 100
console.log("Hello" || "World");    // Hello

// AND (&&)
// Returns first falsy value
console.log(10 && 20);              // 20
console.log(0 && 20);               // 0
console.log("Hi" && "JS");          // JS

// Nullish Coalescing (??)
// Only checks for null or undefined
console.log(null ?? "Guest");       // Guest
console.log(undefined ?? "Guest");  // Guest
console.log("" ?? "Guest");         // ""
console.log(0 ?? 100);              // 0

// ==========================================
// Practical Examples
// ==========================================

// Using ||
let city = "";
console.log(city || "Unknown City"); // Unknown City

// Using ??
let score = 0;
console.log(score ?? 100); // 0
console.log(score || 100); // 100

// ==========================================
// Summary
// ==========================================

/*
undefined
-----------
- Variable declared but not assigned
- Missing function return
- Missing object property
- typeof => "undefined"

null
-----
- Intentional empty value
- typeof => "object"

Falsy Values
-------------
false
0
-0
0n
""
null
undefined
NaN

Truthy Values
--------------
true
Any non-zero number
Non-empty string
[]
{}
function(){}
*/

// End of file