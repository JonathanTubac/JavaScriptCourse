//Short circuiting
//Logical operators can be used to short circuit an expression. This means that if the first operand is sufficient to determine the result of the expression, the second operand will not be evaluated.
//For example, in the expression A && B, if A is false, then the entire expression will be false regardless of the value of B. Therefore, B will not be evaluated.
//Similarly, in the expression A || B, if A is true, then the entire expression will be true regardless of the value of B. Therefore, B will not be evaluated.

const a = false
const b = true

function greet(name) {
    console.log(`Hello, ${name}!`)
}

console.log(a && greet("Alice")) // false, because a is false, so greet is not called
console.log(a || greet("Bob")) // true, because a is false, so greet is evaluated and is true

//nullish coalescing operator (??)
//The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand.
const name = null
const defaultName = "Guest"

console.log(name ?? defaultName) // "Guest", because name is null, so defaultName is returned

const age = undefined
const defaultAge = 18

console.log(age ?? defaultAge) // 18, because age is undefined, so defaultAge is returned

//optional chaining operator (?.)
//The optional chaining operator (?.) allows you to access properties of an object without having to check if the object is null or undefined. If the object is null or undefined, the expression will short circuit and return undefined instead of throwing an error.
const user = {
    name: "Alice",
    address: {
        city: "New York"
    }
}

console.log(user.address?.city) // "New York", because user.address is not null or undefined
console.log(user.contact?.email) // undefined, because user.contact is undefined, so the expression short circuits and returns undefined
