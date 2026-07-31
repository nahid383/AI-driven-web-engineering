const university = {
    name: "Shahjalal University of Science and Technology",
    shortName: "SUST",
    location: "Sylhet",

    department: {
        name: "Software Engineering",
        building: "Academic Building C",
        chairman: "Dr. ABC"
    },

    student: {
        name: "Nahid Hasan",
        id: "2023-1-60-001",
        level: "2/2",
        cgpa: 3.75
    }
};

console.log(university);

// Access nested object properties
console.log(university.department.name);      // Software Engineering
console.log(university.department.chairman);  // Dr. ABC
console.log(university.student.name);         // Nahid Hasan
console.log(university.student.cgpa);         // 3.75