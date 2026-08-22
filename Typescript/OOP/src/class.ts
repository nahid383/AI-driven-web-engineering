class Student {
    name : string;
    email : string;
    age : number;
    marks : number

    constructor(name:string, email:string, age:number, marks:number){
        this.name = name;
        this.email = email;
        this.age=age;
        this.marks = marks;
    }
}

const rafi = new Student("Rafi", "rafi@example.com", 19, 100)
const nahid = new Student("Nahid", "nahid@example.com", 21, 87)


console.log(rafi, nahid)