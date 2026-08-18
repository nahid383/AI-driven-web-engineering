/*
1. Variable
2. array
3. function
*/

const destination: string = 'Naogaon'
const cycles:number = 2
const districts:string[] = ['Naogaon', 'Rajshahi', 'Sylhet', 'Dhaka']



console.log(destination)
console.log(cycles)
console.log(districts)

function buyBook(title:string, price:number, discount:number):string{
    if(discount===undefined){
        discount=0
    }

    return `The book ${title} costs ${price - discount}`
}

console.log(buyBook('CP', 240, 190))