"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTicketPrice(age) {
    if (age < 5) {
        return 0;
    }
    else if (age >= 5 && age <= 12) {
        return 100;
    }
    else if (age >= 13 && age <= 59) {
        return 200;
    }
    else {
        return 120;
    }
}
console.log(getTicketPrice(3));
console.log(getTicketPrice(7));
console.log(getTicketPrice(22));
console.log(getTicketPrice(70));
//# sourceMappingURL=problem1.js.map