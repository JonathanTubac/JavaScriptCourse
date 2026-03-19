//We can convert data types into another one
const a = "1"
console.log(typeof a)

const numberA = parseInt(a)
console.log(typeof numberA)

let decimal = "1.2"

console.log(parseInt(decimal))
console.log(parseFloat(decimal))

const num = 1.32
const stringNum = num.toString()

console.log(typeof stringNum)

const b = 3

console.log(a + b)//prints 13, not 4
console.log(parseInt(a) + b)//prints 4