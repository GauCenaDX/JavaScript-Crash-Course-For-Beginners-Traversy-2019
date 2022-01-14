// alert('Hello World');

// console is an object and log is a method
console.log('Hello World');

console.error('This is an error');
console.warn('This is a warning');

// var, let, const
// . var has global scope -> should not use anymore
// . let & const have block-level scope
// . const value cannot be changed

// !RULE: Always use const unless u know u will change the value

// Data type: String, Numbers, Boolean, null, undefined, Symbol
const name = 'John';  //-- String, '' or ""
const age = 30;       //-- Numbers
const rating = 4.5;
const isCool = true;  //-- Boolean
const x = null;

const y = undefined;
let z;

// Check data type
console.log(typeof rating);

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);

// Template String
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

// Some string methods
const s = 'Hello World!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split('')); //-- Split by word

const s2 = 'technology, computer, it, code';
console.log(s2.split(', '));

// Arrays - variables that hold multiple values
const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits[3]);
fruits[5] = 'grapes';
console.log(fruits);
fruits.push('mangos'); //-- Add to the end
fruits.unshift('strawberries'); //-- Add to the beginning
fruits.pop();  //-- Pop the last element
console.log(fruits);
console.log(Array.isArray(fruits)) //-- Check if it is an array
console.log(fruits.indexOf('oranges'));

// OBJECTS
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '40 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// Pulling information from object into variables
const {firstName, lastName, address: {city}} = person;
console.log(city);

// Add property into object
person.email = 'john@fakemail.com';
console.log(person);

// Array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

// Convert data to JSON format
// -- Data will be readied to be sent to server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For loop
for (let i = 0; i < 5; i++) {
    console.log(`For loop number: ${i}`);
}

// While loop
let i = 0;
while (i < 5) {
    console.log(`While loop number: ${i}`);
    i++;
}

// Looping through array
for (let i = 0; i < todos.length; i ++) {
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.log(todo.text);
}

// High order array methods
// -- forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

// map will return an array
const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

// filter filter out and return only objects that satisfy the conditions
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);

const todoCompletedText = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompletedText);

// CONDITIONALS

// if
const x1 = 20;

// == doesn't check for type (10 and '10' are considered equal)
if (x1 === 10) {
    console.log('x1 is 10');
} else if (x1 > 10) {
    console.log('x1 is larger than 10');
} else {
    console.log('x1 is less than 10');
}

// Ternary operator
const color = x1 > 10 ? 'red' : 'blue';
console.log(color);

// switch statement
switch(color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is NOT red and NOT blue');
        break;
}

// FUNCTION

//function addNums(num1, num2) {
function addNums(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
}

addNums();
addNums(4,5);

function addNums2(num1, num2) {
    return num1 + num2;
}

console.log(addNums2(5, 5));

// Arrow function
const addNums3 = (num1 = 1, num2 = 2) => {
    return num1 + num2;
}

console.log(addNums3(5, 5));

todos.forEach((todo) => console.log(todo));

// OOP

// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    //this.dob = dob;
    this.dob = new Date(dob);

    //-- Create function
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`;
    // }
}

// Add functions to prototype
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate objects
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Jane', '6-3-1992');

console.log(person1);
console.log(person2.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// Class
class PersonClass {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getFullYear() {
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person3 = new PersonClass('Luffy', 'Monkey', '05-03-1992');

console.log(person3);
console.log(person3.getFullYear());
console.log(person3.getFullName());