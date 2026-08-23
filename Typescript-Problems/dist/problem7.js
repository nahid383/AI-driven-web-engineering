"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" },
    { name: "Sannai T9 TWS", price: 1550, category: "earbuds" }
];
function findProducts(products, category) {
    // write your code here
    return products.filter(product => product.category == category);
}
console.log(findProducts(products, "phone"));
// returns the iPhone 15 and Galaxy S24 objects
console.log(findProducts(products, "laptop"));
// returns the two laptop products
console.log(findProducts(products, "earbuds"));
//# sourceMappingURL=problem7.js.map