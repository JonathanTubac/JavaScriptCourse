//we use an object when we need that one thing have attributes
let person = {
    name: "Jhon",
    age: 13,
    phone: 2314521,
    sayHi: function(){
        console.log("HI! I'm Jhon")
    },
    pets: {
        dog: "Max",
        cat: "Mily"
    }
}

console.log(person)
//we use .attribute to call that value
console.log(person.name)
console.log(person.pets.dog)
person.sayHi()