// ==========================================
// Nested Objects, Optional Chaining & Object Looping
// ==========================================

// ==========================================
// 1. Nested Objects
// ==========================================

const student = {
  id: 101,
  name: "Nahid",
  department: "Software Engineering",

  address: {
    village: "Mahadevpur",
    district: "Naogaon",
    country: "Bangladesh",
  },

  marks: {
    math: 90,
    programming: 95,
    os: 88,
  },

  skills: {
    languages: ["C", "C++", "JavaScript"],
    web: {
      frontend: ["HTML", "CSS", "React"],
      backend: ["Node.js", "Express"],
    },
  },
};

console.log("===== Nested Objects =====");
console.log(student.name);
console.log(student.address.district);
console.log(student.marks.programming);
console.log(student.skills.web.frontend[0]);
console.log(student.skills.languages[2]);


// ==========================================
// 2. Optional Chaining (?.)
// ==========================================

console.log("\n===== Optional Chaining =====");

// Existing property
console.log(student.address.country);

// Non-existing property (Without Optional Chaining)
// console.log(student.contact.phone); // Error

// Using Optional Chaining
console.log(student.contact?.phone); // undefined

console.log(student.skills.web?.frontend);
console.log(student.skills.mobile?.android); // undefined

// Optional Chaining with Arrays
console.log(student.skills.web.frontend?.[1]); // CSS
console.log(student.skills.web.backend?.[5]); // undefined


// ==========================================
// 3. Object Looping
// ==========================================

console.log("\n===== for...in Loop =====");

for (let key in student) {
  console.log(key, ":", student[key]);
}


console.log("\n===== Object.keys() =====");

const keys = Object.keys(student);

for (let key of keys) {
  console.log(key, ":", student[key]);
}


console.log("\n===== Object.values() =====");

const values = Object.values(student);

for (let value of values) {
  console.log(value);
}


console.log("\n===== Object.entries() =====");

const entries = Object.entries(student);

for (let [key, value] of entries) {
  console.log(key, ":", value);
}


// ==========================================
// 4. Looping Through Nested Objects
// ==========================================

console.log("\n===== Address =====");

for (let key in student.address) {
  console.log(key, ":", student.address[key]);
}


console.log("\n===== Marks =====");

Object.entries(student.marks).forEach(([subject, mark]) => {
  console.log(subject, ":", mark);
});


console.log("\n===== Skills =====");

for (let key in student.skills) {
  console.log(key, ":", student.skills[key]);
}


// ==========================================
// 5. Nested Loop Example
// ==========================================

const classroom = {
  student1: {
    name: "Nahid",
    cgpa: 3.75,
  },
  student2: {
    name: "Ratul",
    cgpa: 3.60,
  },
  student3: {
    name: "Niloy",
    cgpa: 3.85,
  },
};

console.log("\n===== Nested Object Loop =====");

for (let id in classroom) {
  console.log("Student ID:", id);

  for (let info in classroom[id]) {
    console.log(info, ":", classroom[id][info]);
  }

  console.log("----------------------");
}


// ==========================================
// 6. Practical Example
// ==========================================

const company = {
  name: "TechSoft",

  employees: {
    manager: {
      name: "Alice",
      salary: 80000,
    },

    developer: {
      name: "Bob",
      salary: 60000,
    },

    designer: {
      name: "Charlie",
      salary: 55000,
    },
  },
};

console.log("\n===== Company Employees =====");

for (let role in company.employees) {
  console.log(
    role,
    "->",
    company.employees[role].name,
    "| Salary:",
    company.employees[role].salary
  );
}


// ==========================================
// 7. Summary
// ==========================================

console.log("\n===== Summary =====");

console.log("Object.keys():", Object.keys(student));
console.log("Object.values():", Object.values(student));
console.log("Object.entries():", Object.entries(student));

console.log("Optional Chaining:", student.contact?.email);

console.log("Nested Object Access:", student.skills.web.backend[1]);