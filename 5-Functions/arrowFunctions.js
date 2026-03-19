function sum(a, b) {
    return a + b
}

//converting sum() into an arrow function

const sumArrow = (a, b) => {
    return a + b
}

console.log(sum(1, 2))
console.log(sumArrow(2, 3))

//if we only have one parameter, we can remove the ()

const printName = name => {
    console.log(name)
}

//We can write the function in a single line if we dont have a long logic code

const add = (a, b) => a + b

console.log(add(1, 2))