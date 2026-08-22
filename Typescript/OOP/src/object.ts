const studentName = "Nahid Hasan";
const studentAge = 22;
const studentMail = "nahid@example.com";

const studentName2 = "Rayed Ahmed";
const studentAge2 = 21;
const studentMail2 = "rayed@example.com";

// const rafi = {
//     name : "Rafi",
//     age : 19,
//     email : "rafi@example.com"
// }

const createStudent = (name: string, age : number, email : string) => {
    const obj = [name, age, email]

    return obj
}

const rafi = createStudent("Rafi", 19, "rafi@example.com")

console.log(rafi)