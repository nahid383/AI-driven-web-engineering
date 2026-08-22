class Animal {
    makeSound(): void {
        console.log("Animal makes a sound")
    }
}

class Dog extends Animal {
    // Method overriding
    makeSound(): void {
        console.log("Dog says: Woof!")
    }
}

class Cat extends Animal {
    // Method overriding
    makeSound(): void {
        console.log("Cat says: Meow!")
    }
}

// Polymorphism
const animals: Animal[] = [
    new Dog(),
    new Cat()
]

animals.forEach((animal: Animal) => {
    animal.makeSound()
})