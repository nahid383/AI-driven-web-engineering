const responseExtractor = (obj)=>{
    const {user: {name: userName, age=69}} = obj
    // console.log(userName, age)
    return {userName, age}
}

console.log(responseExtractor({user: {name: "John", age: 30}}))
console.log(responseExtractor({user: {name: "Alice"}}))

//variable swapping using array destructuring

let a = 40;
let b = 50;

[a, b] = [b, a]
console.log("Before swapping: a =", 50, ", b =", 40)
console.log("After swapping: a =", a, ", b =", b)

let nums = [2, 4, 6, 7, 8, 9, 10]
let [first, second, ...rest] = nums
console.log("First:", first)
console.log("Second:", second)
console.log("Rest of the numbers:", rest)