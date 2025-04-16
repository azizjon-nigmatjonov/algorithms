let log = console.log;

// Using array constructor syntax with elements:
const myArray = new Array(1, 2, 3);
log(myArray) // [1, 2, 3]


// log([1,2,3].toString())

// let array = new Array() // construc
// let array2  = [] // literal
// log(array)
// log(array2)

// let person = {
//     name: 'Javlon',
//     age: 23,
//     isClever: true,
//     knowledge: {
//         math: 'perfect',
//         russian: 'awful'
//     },
//     hobbies: ['books', 'computer']
// }
// delete person.name

// log(person)

// let user  = new Object(); // constructor syntax
// let car = {} // literal sytax
// log(user); // {}
// log(car); // {}


// parseInt vs parseFloat
// log(Number("3.1")); // 3.1
// log(parseInt("3.1")); // 3
// log(parseFloat("3.1")); // 3.1

// log(Number("")) // 0
// log(parseInt("")) // NaN
// log(parseFloat(undefined)) // NaN



// Type casting (Type conversion vs coercion)





// NaN
// log(Number(true)); // 1
// log(Number(false)); // false
// log(Number(undefined)); // NaN
// log(Number(null)); // 0
// log(Number("")) //
// log(Number("a")) // NaN


// let name = "Muhammadaziz"
// let age = 22
// let merried = false
// let hasCar
// let university = null

// log(isNaN(name)); // true
// log(isNaN(age)); // false
// log(isNaN(hasCar)); // true
// log(isNaN(university)); // false


// log(isNaN(0 / 0)); // true
// log(isNaN('a' * 'b')); // true

// console.log(NaN === NaN); // false