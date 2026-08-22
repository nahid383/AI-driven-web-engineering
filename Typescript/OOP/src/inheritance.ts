class User {
    private _name: string
    private _age: number
    protected _mail: string

    constructor(name: string, age: number, email: string) {
        this._name = name
        this._age = age
        this._mail = email
    }

    get age() {
        return this._age
    }

    set age(value: number) {
        if (value < 0 || value > 100) {
            throw new Error("Age is not valid")
        }

        this._age = value
    }
}

class Student extends User {
    private _fee: number

    constructor(name: string, age: number, email: string, fee: number) {
        super(name, age, email)

        this._fee = fee
    }
}

const student = new Student(
    "Nahid",
    20,
    "nahid@example.com",
    500
)

console.log(student)
console.log(student.age)

student.age = 21
console.log(student.age)