
// const names = ["string", 5, {}, "Muhammad", "Yusuf", "Javohir", 1]
// const numbers = ["number", 1, undefined, 2, 3, 4, 5, null, {}]
// const objects = ["object", 
// {
//     doors: 4,
//     type: "sedan"
// }, {
//     doors: 2,
//     type: "hechback"
// }, null, 2,3, undefined]
// const characters = "abcdefghijklmnopqrstuvwxyz"

// const result = {}


// for (let index = 0; index < names.length; index++) {
//     const key = names[0]
//     const currentElement = names[index]
//     if (index === 0) result[key] = []

//     if (typeof currentElement === key) result[key].push(currentElement)  
// }

// for (let i = 0; i < numbers.length; i++) {
//     const key = numbers[0]
//     const currentElement = numbers[i]
//     if (i === 0) result[key] = []

//     if (typeof currentElement === key) result[key].push(currentElement)
// }

// for (let i = 0; i < objects.length; i++) {
//     const key = objects[0]
//     const currentElement = objects[i]
//     if (i === 0) result[key] = []

//     if (typeof currentElement === key) result[key].push(currentElement)
// }

// console.log(result);




const array = ["42", "45.9", "abc"]
let integer = 0
let float = 0
let string = ""

for (let index = 0; index < array.length; index++) {
    const current = Number(array[index])

    if (isNaN(current)) {
        string = array[index]
    }

    if (!isNaN(current) && current.length > 2) {
        float = array[index]
    }

    if (!isNaN(current) && current.length < 3) {
        integer = array[index]
    }
  
}
console.log(integer, float, string);