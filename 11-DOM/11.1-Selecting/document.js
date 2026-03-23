//document object
//The document object is a global object that represents the HTML document that is currently loaded in the browser. It provides properties and methods for accessing and manipulating the content of the document.
//For example, you can use the document object to access elements in the document using methods like getElementById, getElementsByClassName, and querySelector.

const html = document
console.log(html) // [object HTMLDocument]
//Accessing elements
const heading = document.getElementById("heading")
console.log(heading) // <h1 id="heading">Hello, World!</h1>

//get elements by class name
const items = document.getElementsByClassName("item")
console.log(items) // HTMLCollection(3) [item, item, item]

//query selector - just the first it encounters
const firstItem = document.querySelector(".item")
console.log(firstItem) // <h2 class="item">Item 1</h2>

//query selector all - returns all elements that match the selector
const allItems = document.querySelectorAll(".item")
console.log(allItems) // NodeList(3) [h2.item, h2.item, h2.item]

//working with html collections and node lists
//HTML collections and node lists are array-like objects that are returned by methods like getElementsByClassName and querySelectorAll. They have a length property and can be accessed using index notation, but they do not have all the methods of an array.
//For example, you can use a for loop to iterate over an HTML collection or node list, but you cannot use array methods like forEach or map directly on them. However, you can convert them to an array using Array.from() or the spread operator.

//Iterating over an HTML collection
for (let i = 0; i < items.length; i++) {
  console.log(items[i]) // <h2 class="item">Item 1</h2>, <h2 class="item">Item 2</h2>, <h2 class="item">Item 3</h2>
}

//you have to convert it first into an array to use array methods
const itemsArray = Array.from(items)    
itemsArray.forEach(item => {
  console.log(item) // <h2 class="item">Item 1</h2>, <h2 class="item">Item 2</h2>, <h2 class="item">Item 3</h2>
})

//or using the spread operator
const itemsArray2 = [...items]
itemsArray2.forEach(item => {
  console.log(item) // <h2 class="item">Item 1</h2>, <h2 class="item">Item 2</h2>, <h2 class="item">Item 3</h2>
})

//static and live collections
//HTML collections are live, which means that they automatically update when the document changes. For example, if you add a new element with the class "item" to the document, it will automatically be included in the items collection.
//Node lists returned by querySelectorAll are static, which means that they do not update when the document changes. If you add a new element with the class "item" to the document after calling querySelectorAll, it will not be included in the allItems node list.
//Adding a new item to the document
const newItem = document.createElement("h2")
newItem.className = "item"
newItem.textContent = "Item 4"
document.body.appendChild(newItem)
console.log(items) // HTMLCollection(4) [item, item, item, item]
console.log(allItems) // NodeList(3) [h2.item, h2.item, h2.item]
