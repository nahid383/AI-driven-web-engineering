// Abstract Class
abstract class Animal {
    // Abstract method
    abstract makeSound(): void

    // Normal method
    sleep(): void {
        console.log("Animal is sleeping")
    }
}

// Interface
interface Pet {
    name: string
    play(): void
}

// Dog inherits from abstract class
// and implements interface
class Dog extends Animal implements Pet {
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    // Implementing abstract method
    makeSound(): void {
        console.log("Dog says: Woof!")
    }

    // Implementing interface method
    play(): void {
        console.log(`${this.name} is playing`)
    }
}

// Create object
const dog = new Dog("Tommy")

dog.makeSound()
dog.sleep()
dog.play()