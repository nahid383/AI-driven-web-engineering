let name = "Nahid";
let age = 25;
let price = 500;
let location = "Akhalia, Sylhett";

let message = `My name is ${name}, I am ${age} years old. I live in ${location}.`;
console.log(message);


//template for admission student

function admissionConfirmationMessage(name, amount){
    let message = `Hello, ${name}. Your payment is Successful. Your Paid amount is ${amount}. Thank you for your admission.`;

    return message;
}

console.log(admissionConfirmationMessage("Nahid", 500));
console.log(admissionConfirmationMessage("Rafiq", 1000));
console.log(admissionConfirmationMessage("Rasel", 1500));
console.log(admissionConfirmationMessage("Rana", 2000));
console.log(admissionConfirmationMessage("Rayed", 2500));