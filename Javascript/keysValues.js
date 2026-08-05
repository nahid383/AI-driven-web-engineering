// =========================
// JavaScript Object Methods
// =========================

const person = {
  name: "Nahid",
  age: 22,
  city: "Sylhet"
};

console.log("Original Object:");
console.log(person);

// =========================
// Object.keys()
// =========================
console.log("\n1. Object.keys()");
console.log(Object.keys(person));
// Output: ["name", "age", "city"]


// =========================
// Object.values()
// =========================
console.log("\n2. Object.values()");
console.log(Object.values(person));
// Output: ["Nahid", 22, "Sylhet"]


// =========================
// Object.entries()
// =========================
console.log("\n3. Object.entries()");
console.log(Object.entries(person));
// Output: [["name","Nahid"],["age",22],["city","Sylhet"]]

console.log("\nUsing entries() with for...of");
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}


// =========================
// delete
// =========================
console.log("\n4. delete");

const person1 = {
    name: "Nahid",
    age: 22,
    city: "Sylhet"
};

delete person1.city;

console.log(person1);
// Output: { name: 'Nahid', age: 22 }


// =========================
// Object.seal()
// =========================
console.log("\n5. Object.seal()");

const person2 = {
    name: "Nahid",
    age: 22
};

Object.seal(person2);

person2.age = 23;        // ✅ Allowed
person2.city = "Dhaka";  // ❌ Not added
delete person2.name;     // ❌ Not deleted

console.log(person2);
// Output: { name: 'Nahid', age: 23 }


// =========================
// Object.freeze()
// =========================
console.log("\n6. Object.freeze()");

const person3 = {
    name: "Nahid",
    age: 22
};

Object.freeze(person3);

person3.age = 25;        // ❌ Ignored
person3.city = "Dhaka";  // ❌ Ignored
delete person3.name;     // ❌ Ignored

console.log(person3);
// Output: { name: 'Nahid', age: 22 }


// =========================
// Summary
// =========================
console.log(`
=========================
SUMMARY
=========================
Object.keys()    -> Returns all keys.
Object.values()  -> Returns all values.
Object.entries() -> Returns key-value pairs.
delete           -> Removes a property.
Object.seal()    -> Can't add/delete, can modify.
Object.freeze()  -> Can't add/delete/modify.
`);