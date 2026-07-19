//arrays can hold multiple values and data
const pleayes = ['Nahid', 'Saleh', 'Rayed', 'Ankit', 'Amin'];
const age = [20, 19, 18, 17, 16];

const totalPlayers = pleayes.length;
console.log("Total players are : " , totalPlayers);

console.log("2nd player is : ", pleayes[1]);
console.log("2nd players age is : ", age[1]);

age[1] = 22;
console.log("2nd players age is : ", age[1]);

console.log(pleayes);
pleayes.push('Zian', 'Shuvo');
console.log(pleayes.length);
console.log(pleayes);

console.log(age);
age.pop();
console.log(age);
age.shift();
console.log(age);