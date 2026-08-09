function studentIntroduction(student) {

    // Write your code here

    if(typeof student !== "object" || student===null || !("name" in student) || !("age" in student) || !("course" in student)) return `Invalid`
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
} 