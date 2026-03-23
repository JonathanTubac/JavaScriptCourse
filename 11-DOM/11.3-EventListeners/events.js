const button =  document.querySelector("button")
const input = document.querySelector("input")
const select = document.querySelector("select")
const form = document.querySelector("form")
document.addEventListener("click", event => {
    console.log(event.target)
})

function printClick() {
    console.log("Clicked!")
}

button.addEventListener("click", printClick)

button.addEventListener("click", event => {
    console.log(event)
})

//focus event on input field
input.addEventListener("focus", event => {
    console.log("Input field focused!")
})

//input event on input field

input.addEventListener("input", event => {
    console.log(event.target.value)
})

//change event on select field
select.addEventListener("change", event => {
    console.log(event.target.value)
})

//prevent default behavior of a form submission
form.addEventListener("submit", event => {
    event.preventDefault()
    console.log("Form submitted!")
})
