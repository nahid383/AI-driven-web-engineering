//problem 1 : flexible calculator

function calculatorTotal(discount, ...prices){
    console.log("discount is:", discount);
    console.log("prices are:", prices);

    let total = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    console.log("Total price is:", total);
    let discountAmount = total * (discount / 100);
    let discountedTotal = total - discountAmount;
    console.log("Discounted total is:", discountedTotal);
}

calculatorTotal(10, 100, 200, 300, 400, 500);
calculatorTotal(20, 1000, 2000, 3000);

//problem 2 : merge two arrays and duplicate them

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

let mergedArray = [...arr1, ...arr2];
console.log("Merged Array:", mergedArray);

let uniqueArray = [...new Set(mergedArray)];
console.log("Unique Array:", uniqueArray);