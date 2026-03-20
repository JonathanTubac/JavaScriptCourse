//we can store different values in one variable
const names = ["Kyle", "Marta"]

//Arrays start with index 0, you can call that data like this.
console.log(names[0])

const numbers = [1, 3, 4, 5, 6, 7, 8, 7]
console.log(numbers[0] + numbers[2]) //5, 1 + 4

//Add data to an array
console.log(names)
names.push("Roland")
console.log(names)

//Arrays can have different data types
const dt = ["Hello", 2, true, 2.3, null, undefined]

//you can have an array into an array
const dobleArray = [[2, 3, 4], [2, 3, 4]]
console.log(dobleArray[0][0]) // 2
console.log(dobleArray[1])

const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

console.log(grid[2][0]) // 7

//we can retrieve the lenght of an array

console.log(names.length) // 3 items in the names array