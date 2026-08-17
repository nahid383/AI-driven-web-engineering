"use strict";
function calculateTax(amount, taxRate) {
    if (typeof amount === 'string') {
        amount = parseFloat(amount);
    }
    return amount * taxRate;
}
const myTax = calculateTax(100, 0.15);
const myTax2 = calculateTax('200', .17);
console.log(myTax2);
console.log(myTax);
