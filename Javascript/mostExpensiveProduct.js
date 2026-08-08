// ```javascript
const mostExpensiveProduct = (products) => {
    const keys = Object.keys(products[0]);
    const values = Object.values(products[0]);
    const entries = Object.entries(products[0]);

    let highestPrice = 0;
    let mostExpensive = null;

    for (let product of products) {
        if (product.price > highestPrice) {
            highestPrice = product.price;
            mostExpensive = product;
        }
    }

    if (mostExpensive) {
        return `The most expensive product is ${mostExpensive.name} which costs $${mostExpensive.price} and belongs to the ${mostExpensive.category} category.`;
    } else {
        return "No products found.";
    }

    // console.log(product);
    // return `The most expensive product is ${product.name} which costs $${product.price} and belongs to the ${product.category} category.`;
    // console.log(keys);
    // console.log(values);

    // for(let key of keys){
    //     console.log(`Key: ${key}, Value: ${product[key]}`)
    // }
}

// console.log("Entries:", entries);

const products = [
    { name: "Laptop", price: 15000, category: "Electronics" },
    { name: "Smartphone", price: 800, category: "Electronics" },
    { name: "Luxury Watch", price: 5000, category: "Accessories" },
    { name: "Gaming Console", price: 400, category: "Entertainment" },
    { name: "High-End Headphones", price: 1200, category: "Audio" }
];

console.log(mostExpensiveProduct(products));

