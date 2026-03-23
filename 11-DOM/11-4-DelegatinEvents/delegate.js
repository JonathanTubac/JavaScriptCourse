//delegate events
const outer = document.querySelector('.outer');
const middle = document.querySelector('.middle');
const inner = document.querySelector('.inner');
const button = document.querySelector('button');

outer.addEventListener('click', event => {
    console.log('Outer clicked!');
    console.log('Event target:', event.target);
});

middle.addEventListener('click', event => {
    console.log('Middle clicked!');
    console.log('Event target:', event.target);
});

inner.addEventListener('click', event => {
    console.log('Inner clicked!');
    console.log('Event target:', event.target);
});

button.addEventListener('click', event => {
    console.log('Button clicked!');
    console.log('Event target:', event.target);
    event.stopPropagation(); // Stop the event from bubbling up to outer and middle
});

