const header = document.querySelector("#main-header")

header.textContent = 'Welcome!'

const paragraphs = document.querySelectorAll("p")

paragraphs.forEach(item => {
    item.style.color = "blue"
})

paragraphs[paragraphs.length - 1].style.display = "none"

const inputs = document.querySelectorAll("input.required")

inputs.forEach(i => {
    i.style.border = "5px solid red"
})


