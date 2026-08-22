"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    email;
    age;
    marks;
    constructor(name, email, age, marks) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.marks = marks;
    }
}
const rafi = new Student("Rafi", "rafi@example.com", 19, 100);
const nahid = new Student("Nahid", "nahid@example.com", 21, 87);
console.log(rafi, nahid);
//# sourceMappingURL=class.js.map