"use strict";
/*
1. Variable
2. array
3. function
*/
const destination = 'Naogaon';
const cycles = 2;
const districts = ['Naogaon', 'Rajshahi', 'Sylhet', 'Dhaka'];
console.log(destination);
console.log(cycles);
console.log(districts);
function buyBook(title, price, discount) {
    if (discount === undefined) {
        discount = 0;
    }
    return `The book ${title} costs ${price - discount}`;
}
console.log(buyBook('CP', 240, 190));
