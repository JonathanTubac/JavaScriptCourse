//If we declare a variable outside a function, it means that we can use it every where in our code. This is called global scope. If we declare a variable inside a function, it means that we can only use it inside that function. This is called local scope.

//Global scope
let name2 = "John";

function printName1() {
    console.log(name2);
}

printName1(); // John

//Local scope

function printAge() {
    let age = 30;
    console.log(age);
}

printAge(); // 30
//console.log(age); // Uncaught ReferenceError: age is not defined

//you can have the same name variable in different scopes
let name1 = "John";

function printName() {
    let name1 = "Jane";
    console.log(name1);
}

printName(); // Jane
console.log(name1); // John