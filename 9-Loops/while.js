//while loops are used to repeat a block of code as long as a specified condition is true
//syntax: while(condition) { //code to be executed }
let i = 1
while(i <= 5) {
    console.log(i)
    i++
}

//We can use do while loop, which is similar to while loop but it will execute the code block at least once, even if the condition is false
let j = 1
do {
    console.log(j)
    j++
} while(j <= 5)