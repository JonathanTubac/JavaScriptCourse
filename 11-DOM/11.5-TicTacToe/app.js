const jona = document.querySelector("h3")
console.log(jona.textContent)

let buttons = document.querySelectorAll("button")
console.log(buttons[0].textContent.length)

buttons.forEach(item => {

    if (item.textContent.length == 0) {
        item.addEventListener("click", () => {
            item.textContent = "X"
            console.log("X added to button " + item.getAttribute("id"))
            console.log(item.textContent.length)
        })
    } else {
        item.addEventListener("click", () => {
            console.log("Already clicked")
        })
    }

})