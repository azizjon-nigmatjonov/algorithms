// In JavaScript, there are two main categories of data types: primitive data types and reference data types.

// 1. Primitive Data Types:
// Primitive data types are basic values that are immutable (cannot be changed). There are six primitive data types in JavaScript:
// `number`: represents numeric values, including integers and floating-point numbers.
// `string`: represents a sequence of characters enclosed in quotes (either single or double quotes).
// `boolean`: represents a logical value of true or false.
// `null`: represents the intentional absence of any object value.
// `undefined`: represents a variable that has been declared but has not been assigned a value.
// `symbol`: represents a unique identifier that can be used as a key for object properties.

// 2. Reference Data Types:
// Reference data types are objects that can be mutable (can be changed). They are stored as a reference to a location in memory.
// There are three reference data types in JavaScript:

// `object`: represents a collection of key-value pairs (properties and methods).
// `array`: represents an ordered list of values, which can be of any data type.
// `function`: represents a reusable block of code that performs a specific task.

// In general, primitive data types are passed by value, whereas reference data types are passed by reference.
// This means that when you pass a primitive data type as an argument to a function, a copy of the value is passed,
// while when you pass a reference data type, a reference to the object in memory is passed.

// 1. number
// number can be both integer and float
// 2. string
// string is written in double on single quotos
// 3. boolean
// boolean represents true or fals value
// 4. null
// null represents the intentional absence of any object value.
// 5. undefined
// 6. symbol sybol is used to give key and value to an object, The main difference between using a string key and a symbol key is
// that symbol keys are guaranteed to be unique. This means that you can use them to create private properties on objects that are not
// accessible from outside the object. With a string key, there is always a risk of the key being accidentally overwritten or accessed
// from outside the object, especially if the key is a common string like "my word".
// here is example of string and symbol key
// string key
let a = "my word";
let obj = {};
obj[a] = a;
// symbol key
const mySymbol = Symbol("mySymbol");
const myObject = {};
myObject[mySymbol] = "Hello, world!";

// 2. reference data types
// 1. object
// 2. array
// 3. function
// here is usage of function data type in js
function doSomething(callback) {
  console.log("Doing something...");
  callback();
}

function myCallback() {
  console.log("Callback called!");
}

doSomething(myCallback);

let number = 1;
let array = [1, 2, 3];

function getDataTypes(primitive, reference) {
  console.log(primitive, reference);
}
getDataTypes(number, array);
