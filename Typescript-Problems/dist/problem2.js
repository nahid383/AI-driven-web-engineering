"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSignalStatus(strength) {
    if (strength >= 0 && strength <= 20) {
        return `Weak`;
    }
    else if (strength >= 21 && strength <= 50) {
        return `Fair`;
    }
    else if (strength >= 52 && strength <= 80) {
        return `Good`;
    }
    else {
        return `Excellent`;
    }
}
console.log(getSignalStatus(10));
// "Weak"
console.log(getSignalStatus(35));
// "Fair"
console.log(getSignalStatus(65));
// "Good"
console.log(getSignalStatus(95));
// "Excellent"
// boundary values to double-check:
console.log(getSignalStatus(20));
console.log(getSignalStatus(21));
console.log(getSignalStatus(80));
console.log(getSignalStatus(81));
//# sourceMappingURL=problem2.js.map