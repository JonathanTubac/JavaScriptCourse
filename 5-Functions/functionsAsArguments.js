function printName(name) {
    console.log("Hello " + name)
}

//When we pass a functions as arguments and parameters we call it callback
function callFunction(x) {
    console.log("Befroe")
    x("Jhon")
    console.log("After")
}

//we just have to pass the reference, we dont have to call the function with ()
callFunction(printName)

function printGreeting(firstNmae, lastName, callback) {
    const fullName = firstNmae + " " + lastName
    console.log(callback(fullName))
}

printGreeting("Jonathan", "Tubac", printName)