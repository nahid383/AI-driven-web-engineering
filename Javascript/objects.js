const earbuds ={
    color: "black-orange",
    types: "Bluetooth",
    price: 1250,
    brand: "Sannai",
    model: "T9 TWS",
    start: function(){
        console.log("Earbuds connected");
    }
}

console.log(earbuds);

earbuds.start();

const student = {
    name: "Nahid Hasan",
    dept: "SWE",
    level: "2/2",
    campus: "SUST"
}

const keys = Object.keys(student);
console.log(keys);

const values = Object.values(student);
console.log(values);

delete student.campus;
const values1 = Object.values(student);
// console.log(values);
console.log(values1);

