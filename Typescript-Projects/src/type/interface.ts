// interface Employee {
//     id: number;
//     name: string;
//     age: number;
//     position: string;
//     salary: number;
// }

// const employees: Employee[] = [
//     {
//         id: 1,
//         name: "Nahid Hasan",
//         age: 22,
//         position: "Software Engineer",
//         salary: 50000
//     },
//     {
//         id: 2,
//         name: "Rahim Ahmed",
//         age: 25,
//         position: "Frontend Developer",
//         salary: 45000
//     },
//     {
//         id: 3,
//         name: "Karim Khan",
//         age: 28,
//         position: "Backend Developer",
//         salary: 60000
//     },
//     {
//         id: 4,
//         name: "Sadia Islam",
//         age: 24,
//         position: "UI/UX Designer",
//         salary: 40000
//     },
//     {
//         id: 5,
//         name: "Tanvir Hossain",
//         age: 27,
//         position: "Project Manager",
//         salary: 70000
//     }
// ];

// ==========================================
// 1. Basic Interface
// ==========================================

interface Person {
    name: string;
    age: number;
}


// ==========================================
// 2. Interface Extending Another Interface
// ==========================================

interface Employee extends Person {
    readonly id: number;
    salary: number;
    position?: string; // Optional property
}


// ==========================================
// 3. Interface for Address
// ==========================================

interface Address {
    city: string;
    country: string;
}


// ==========================================
// 4. Interface with Nested Object
// ==========================================

interface EmployeeDetails extends Employee {
    address: Address;
    skills: string[];
}


// ==========================================
// 5. Interface with Method
// ==========================================

interface EmployeeService {
    calculateBonus(salary: number): number;
    getEmployeeName(): string;
}


// ==========================================
// 6. Class Implementing Interfaces
// ==========================================

class Manager implements EmployeeDetails, EmployeeService {

    readonly id: number;
    name: string;
    age: number;
    salary: number;
    position?: string;

    address: Address;
    skills: string[];

    constructor(
        id: number,
        name: string,
        age: number,
        salary: number,
        address: Address,
        skills: string[],
        position?: string
    ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.address = address;
        this.skills = skills;

        if (position !== undefined) {
            this.position = position;
        }
    }

    calculateBonus(salary: number): number {
        return salary * 0.10;
    }

    getEmployeeName(): string {
        return this.name;
    }
}


// ==========================================
// 7. Creating an Object
// ==========================================

const manager = new Manager(
    101,
    "Nahid Hasan",
    22,
    60000,
    {
        city: "Sylhet",
        country: "Bangladesh"
    },
    [
        "TypeScript",
        "JavaScript",
        "React",
        "Node.js"
    ],
    "Software Engineer"
);


// ==========================================
// 8. Using the Object
// ==========================================

console.log("Employee ID:", manager.id);
console.log("Name:", manager.getEmployeeName());
console.log("Age:", manager.age);
console.log("Salary:", manager.salary);
console.log("Position:", manager.position);

console.log("City:", manager.address.city);
console.log("Country:", manager.address.country);

console.log("Skills:", manager.skills);

console.log(
    "Bonus:",
    manager.calculateBonus(manager.salary)
);


// ==========================================
// 9. Function Interface
// ==========================================

interface AddFunction {
    (a: number, b: number): number;
}

const add: AddFunction = (a, b) => {
    return a + b;
};

console.log("Addition:", add(10, 20));


// ==========================================
// 10. Generic Interface
// ==========================================

interface Box<T> {
    value: T;
}

const numberBox: Box<number> = {
    value: 100
};

const stringBox: Box<string> = {
    value: "Hello TypeScript"
};

console.log(numberBox.value);
console.log(stringBox.value);


// ==========================================
// 11. Index Signature
// ==========================================

interface EmployeeSalary {
    [employeeName: string]: number;
}

const salaries: EmployeeSalary = {
    Nahid: 60000,
    Rahim: 50000,
    Karim: 55000
};

console.log("Nahid's salary:", salaries["Nahid"]);