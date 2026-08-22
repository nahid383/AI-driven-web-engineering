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
const user1 = new User("Abul", 28, "abul@example.com");
user1.age = 45;
console.log(user1.age);
console.log(user1);
//# sourceMappingURL=getter-setter.js.map