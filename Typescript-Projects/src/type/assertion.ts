let value : unknown;


// value.toUpperCase()
// value.toFixed(2)

let myValue = value as string

const upp = myValue.toUpperCase()

let value2 : unknown
let myValue2 = value2 as number
const num = myValue2.toFixed(40)

let data : unknown

interface User{
    name : string;
    email : string;
}

const userData = data as User
console.log(userData.name)