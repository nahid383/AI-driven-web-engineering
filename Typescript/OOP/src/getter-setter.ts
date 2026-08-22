class User{
    private _name : string
    private _age : number
    private _mail : string

    constructor(name:string, age:number, email:string){
        this._name = name
        this._age = age
        this._mail = email
    }

    get age() {
        return this._age
    }

    set age(value:number){
        if(value<0 || value>100){
            throw new Error("Age is not valid")
        }

        this._age = value
    }

}


const user1 = new User("Abul", 28, "abul@example.com")
user1.age = 45

console.log(user1.age)
console.log(user1)