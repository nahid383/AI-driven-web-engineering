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