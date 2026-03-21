function printNumbers(n) {
    if (n <= 0) {
        return
    }
    console.log(n)
    printNumbers(n - 1)
}

printNumbers(5)

//In this example, the function printNumbers calls itself with a smaller value of n until it reaches 0. This is a common pattern in recursion, where a function calls itself with modified arguments to achieve a desired result.