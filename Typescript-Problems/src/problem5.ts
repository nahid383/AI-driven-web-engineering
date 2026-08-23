type Student = {
    name : string;
    marks : number[];
}

type studentStatus = {
    name : string;
    average : number;
    result : string;
}
function getStudentResult(student : Student) : studentStatus {
    const total = student.marks.reduce((sum, mark) => sum+mark, 0);

    const average = student.marks.length === 0  ? 0 : total/student.marks.length;

    let result = "";
    if(average>=40){
        result = "Passed";
    } else{
        result = "Failed";
    }
    
    return {
        name : student.name, average : average, result : result
    };
}

console.log(getStudentResult({name: "Rafi", marks : [80, 75, 90, 85]}));
console.log(getStudentResult({name : "Nahid", marks : [12, 50, 40, 30, 55]}));