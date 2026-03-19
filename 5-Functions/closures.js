/*A function can return another function, and that function 
will have context of the values passed to the main function*/

function outer(x) {
    function inner (y) {
        return x + y
    }

    return inner
}

const newFunc = outer(4)
console.log(newFunc(2))

function createGreeter(msg) {
    function greeting(name) {
        return msg + " " + name
    }

    return greeting
}

const greet = createGreeter("Hi!")
console.log(greet("Jonathan"))