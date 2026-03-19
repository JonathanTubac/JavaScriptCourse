//We can define functions everywhere and use it everywhere, thanks to hoisting

console.log(sum(1, 2))

function sum(a, b) {
    return a + b
}

//Arrow functions cant be hoisted, this is an error

console.log(arrowSum(1, 2))

const arrowSum = (a, b) => {
    return a + b
}