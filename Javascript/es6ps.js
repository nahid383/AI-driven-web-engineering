//problem 1 : Fix the scope bug

let status = "Order Placed";

for(var i=1; i<=3; i++){
    let status = "Processsing Order " + i;
    console.log(status);
}

console.log("Final Status:", status);

//problem 2 : receipt generator(Template strings)

function receiptGenerator(name, amount, product){
    return `Hi, ${name}, your payment of ${amount} for the product ${product} has been received. Thank you for your purchase!`;
}

console.log(receiptGenerator("Nahid", 500, "Laptop"));