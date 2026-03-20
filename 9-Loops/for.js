//for loops are used to repeat a block of code a certain number of times
//syntax: for(initialization; condition; increment/decrement) { //code to be executed }

//Example: print numbers from 1 to 5
for(let i = 1; i <= 5; i++) {
    console.log(i)
}

//Example: print even numbers from 1 to 10
for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}

//Example: iterate through an array
const fruits = ['apple', 'banana', 'orange']
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

//nested for loops
//Example: print a multiplication table from 1 to 5
for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}

//You can use if statements inside for loops to control the flow of the loop and execute code conditionally.
for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}

//For of loop is used to iterate over iterable objects like arrays, strings, etc.
const colors = ['red', 'green', 'blue']
for(const color of colors) {
    console.log(color)
}