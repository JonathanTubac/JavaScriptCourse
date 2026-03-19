const result = parseInt("hello") //it gives us NaN (not a number)

console.log(result)
console.log(typeof result)

const a = parseInt("Helloooo")
const b = 5

console.log(isNaN(a)) //true (a is not a number)
console.log(isNaN(b)) //false (b is a number)