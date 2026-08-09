/* Problem 1 : add grade to Each Student(Without changing the original)
    you have an array of student objects, each with a name and an array of grades. Write a function that adds a new property called "averageGrade" to each student object, which is the average of their grades. The function should return a new array of student objects with the added property, without modifying the original array.
*/

const addGrade = (students) => {

    console.log("student\n.....................................\n")
    console.log(students)
    console.log("\n.....................................\n")
    const modifiedStudents = students.map(student => {
        
        const newStudentwithgrade = {name : student.name, marks : student.marks}

        // return newStudentwithgrade

        if(student.marks >= 90){
            newStudentwithgrade.grade = "A+"
        } else if(student.marks >= 80){
            newStudentwithgrade.grade = "A"
        } else if(student.marks >= 70){
            newStudentwithgrade.grade = "B"
        } else if(student.marks >= 60){
            newStudentwithgrade.grade = "C"
        } else {
            newStudentwithgrade.grade = "F"
        }

        return newStudentwithgrade

    });

    console.log(modifiedStudents, "modifiedStudents")
    // return modifiedStudents
}

let students = [
    {name : "Nahid", marks : 87},
    {name : "Ratul", marks : 90},
    {name : "Rifat", marks : 85},
    {name : "Saleh", marks : 70},
    {name : "Sakib", marks : 55},
    {name : "Ankit", marks : 65}
]
addGrade(students)

/*
Problem 2 : Cart Summary

You have an array of cart items, each with a name, price, and quantity.
Write a function that returns a new cart summary without modifying
the original array.
*/

const cartSummary = (cart) => {

    console.log("cart\n.....................................\n")
    console.log(cart)
    console.log("\n.....................................\n")

    const modifiedCart = cart.map(item => {

        const newItem = {
            name: item.name,
            price: item.price,
            quantity: item.quantity
        }

        newItem.total = item.price * item.quantity

        return newItem
    })

    let grandTotal = 0

    modifiedCart.forEach(item => {
        grandTotal += item.total
    })

    console.log("Modified Cart:")
    console.log(modifiedCart)

    console.log("\nGrand Total:")
    console.log(grandTotal)

    return {
        items: modifiedCart,
        grandTotal: grandTotal
    }
}


let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 },
    { name: "Headphone", price: 3000, quantity: 2 }
]

cartSummary(cart)