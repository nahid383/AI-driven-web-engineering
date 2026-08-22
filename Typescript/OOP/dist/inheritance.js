"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _name;
    _age;
    _mail;
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._mail = email;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0 || value > 100) {
            throw new Error("Age is not valid");
        }
        this._age = value;
    }
}
class Student extends User {
    _fee;
    constructor(name, age, email, fee) {
        super(name, age, email);
        this._fee = fee;
    }
}
const student = new Student("Nahid", 20, "nahid@example.com", 500);
console.log(student);
console.log(student.age);
student.age = 21;
console.log(student.age);
//# sourceMappingURL=inheritance.js.map