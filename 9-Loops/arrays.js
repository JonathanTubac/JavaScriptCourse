//foreach //mapfilter //reduce

const numbers = [1, 2, 3, 4, 5];
// Using forEach to print each number
numbers.forEach(function(number) {
    console.log(number);
});

// Using map to create a new array with each number squared
const squaredNumbers = numbers.map((number) => {
    return number * number;
});
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// Using filter to create a new array with only even numbers
const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

// Using reduce to calculate the sum of all numbers
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15

//find and findIndex

// Using find to get the first number greater than 3    
const firstGreaterThanThree = numbers.find((number) => {
    return number > 3;
});
console.log(firstGreaterThanThree); // 4

// Using findIndex to get the index of the first number greater than 3
const indexGreaterThanThree = numbers.findIndex((number) => {
    return number > 3;
});
console.log(indexGreaterThanThree); // 3

//some and every

// Using some to check if there is at least one number greater than 4
const hasGreaterThanFour = numbers.some((number) => {
    return number > 4;
});
console.log(hasGreaterThanFour); // true

// Using every to check if all numbers are greater than 0
const allGreaterThanZero = numbers.every((number) => {
    return number > 0;
}); 
console.log(allGreaterThanZero); // true



