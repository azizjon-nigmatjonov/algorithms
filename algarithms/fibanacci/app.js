// function fibanacci(n) {
//     const numbers = [1, 1]
//     for (let i = 2; i < n + 1; i++) {
//         numbers.push(numbers[i - 2] + numbers[i - 1])
//     }
//     // console.log(numbers)
//     return numbers[n]
// }

// console.log(fibanacci(5))


function fib(n) {
    let numbers = [1, 1]
    for (let i = 2; i < n + 1; i++) {
        numbers.push(numbers[i - 2] + numbers[i - 1])
    } 
    return numbers
}

console.log(fib(8))


createPhoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(createPhoneNumber.map(String))