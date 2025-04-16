
const log = console.log
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isPrime (num) {
//     if (num <= 1) return
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// function getPrimes (list) {
//     let result = []
//     for (let num of list) {
//         if (isPrime(num)) {
//             result.push(num)
//         }
//     }
//     return result
// }

// console.log(getPrimes(numbers));

// "use strict"


// const person = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     },
//     greetArrow: () => {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
  
//   person.greet();       // Output: Hello, my name is John and I am 30 years old.
//   person.greetArrow();  // Output: Hello, my name is undefined and I am undefined years old.



// const date = new Date()
// const year = date.getFullYear()
// const month = String(date.getMonth()).padStart(2, '0')
// const day = String(date.getDay()).padStart(2, '0')

// const fullYear = `${year}-${month}-${day}`
// log(date) // 2023-04-01




log(Math.round(2.4)) // 2
log(Math.round(2.5)) // 3


log(Math.random()) // 0 - 1
let randomNumber = Math.round(Math.random() * 4)
log(randomNumber) // 0 - 4