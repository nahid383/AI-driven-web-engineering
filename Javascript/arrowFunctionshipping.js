//problem 1 : Arrow function to calculate shipping cost based on weight and distance

const calculateShipping = (orderAmount, shippingFee = 60) =>{
    if(orderAmount >= 1000){
        return "Free Shipping";
    } else {
        return `Shipping cost is: ${shippingFee}`;
    }
}

console.log(calculateShipping(1500));
console.log(calculateShipping(500));
console.log(calculateShipping(800, 50));


//problem 2 : arrow function with multiple conditions
const calculateDiscount = (orderAmount, customerType) => {
    if(customerType === "premium"){
        return orderAmount * 0.2;
    } else if(customerType === "regular"){
        return orderAmount * 0.1;
    } else {
        return 0;
    }
};
console.log(calculateDiscount(1000, "premium"));
console.log(calculateDiscount(1000, "regular"));
console.log(calculateDiscount(1000, "guest"));  