"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    // Method overriding
    makeSound() {
        console.log("Dog says: Woof!");
    }
}
class Cat extends Animal {
    // Method overriding
    makeSound() {
        console.log("Cat says: Meow!");
    }
}
// Polymorphism
const animals = [
    new Dog(),
    new Cat()
];
animals.forEach((animal) => {
    animal.makeSound();
});
//# sourceMappingURL=methodOverriding.js.map