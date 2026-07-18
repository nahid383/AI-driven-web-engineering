if(true){
    console.log("print the output");
}

if(false){
    console.log("Don't print the output");
}

if(8>3){
    console.log("print the output");
}

const fare = 200;
const balance = 22336;

if(fare<=balance){
    console.log("I will ride in the motorbike.")
} else{
    console.log("It is not too far. I can walk this  short distance");
}

// Grade Calculator

let marks = 85;

if (marks < 0 || marks > 100) {
    console.log("Invalid marks! Please enter marks between 0 and 100.");
} else if (marks >= 80) {
    console.log("Grade: A+");
} else if (marks >= 70) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: A-");
} else if (marks >= 50) {
    console.log("Grade: B");
} else if (marks >= 40) {
    console.log("Grade: C");
} else if (marks >= 33) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

//ternary operator
let age = 18;

let status = (age >= 18) ? "Adult" : "Minor";

console.log(status);

//logical not operator
let hasTicket = false;

if (!hasTicket) {
    console.log("You cannot enter.");
}