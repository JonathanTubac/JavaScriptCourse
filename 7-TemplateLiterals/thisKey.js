console.log(this)
// In the global scope, 'this' refers to the global object (window in browsers, global in Node.js)

const person = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet()
// In this case, 'this' refers to the 'person' object, so it will print "Hello, my name is Alice"