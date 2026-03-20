const age = 18

if (age >= 18) {
    console.log('You are an adult.')
} else {
    console.log('You are a minor.')
}

//Guard clauses can be used to handle multiple conditions more cleanly
function checkAge(age) {
    if (age < 0) {
        console.log('Invalid age.')
        return
    }
    if (age >= 18) {
        console.log('You are an adult.')
    } else {
        console.log('You are a minor.')
    }
}