//Functions can have a name, parameters and the body (content of function)

function printName (name) {
    console.log(name)
}

//we call a function like this
printName("Jonathan")

//we can pass multiple parameters and return a value

function sum(a, b) {
    return a + b
}

const add = sum(4, 56)
console.log(add)