

// let users = [
//     {
//         name: "Muhammad",
//         age: 21
//     },
//     {
//         name: "Muhammad",
//         age: 22
//     }
// ]
// let youngUser = {}
// let olderUser = {}

// for (let value of users) {
//     switch (value.age) {
//         case 21:
//             youngUser = value
//             break
//         case 22:
//             olderUser = value
//             break
//         default:
//             break
//     }
// }

// // console.log(youngUser); // { name: 'Muhammad', age: 21 }
// // console.log(olderUser); // { name: 'Muhammad', age: 22 }



// let person = {
//     name: "Rustam",
//     sayHi: function () {
//         console.log('Hi ' + this.name); // Hi Rustam 
//     },
//     greeting: function () {
//         this.sayHi()
//     }
// }
// // person.greeting()




// // const myMap = new Map()

// // // Adding key-value pairs to the Map
// // myMap.set("name", "Komiljon")
// // myMap.set("age", 22)
// // myMap.set({ user: "User name" }, { age: 32 })
// // myMap.set("city", "London");

// // // Retrieving values from the Map
// // console.log(myMap.get("name")); // Output: "John"
// // console.log(myMap.get("age")); // Output: 30

// // // Checking if a key exists in the Map
// // console.log(myMap.has("city")); // Output: true

// // // Deleting a key-value pair from the Map
// // myMap.delete("age");

// // // Getting the size of the Map
// // console.log(myMap.size); // Output: 3



// // // Iterating over the key-value pairs in the Map
// // myMap.forEach(function(value, key) {
// //   console.log(key + " = " + value);
// // });
// // // Output:
// // // "name = John"
// // // "city = London"

// // Creating a new Set
// const mySet = new Set();

// // Adding values to the Set
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(2); // Duplicate value, not added to the Set

// // Checking if a value exists in the Set
// console.log(mySet.has(2)); // Output: true
// console.log(mySet.has(4)); // Output: false

// // Getting the size of the Set
// console.log(mySet.entries()); // Output: 3

// // Deleting a value from the Set
// mySet.delete(1);

// // Iterating over the values in the Set
// mySet.forEach(function(value) {
//   console.log(value);
// });
// // Output:
// // 2
// // 3



const unorderedNumber = [5,4,2,1,3,6,7]

function getUnOrdered () {
    let len = unorderedNumber.length
    while (len > 0) {
        for (let i = 0; i < unorderedNumber.length; i++) {
            if (unorderedNumber[i] > unorderedNumber[i + 1]) {
                const prev = unorderedNumber[i]
                unorderedNumber[i] = unorderedNumber[i + 1]
                unorderedNumber[i + 1] = prev
            }
        }
        len--
    }
    return unorderedNumber
}

console.log(unorderedNumber);
console.log(getUnOrdered());