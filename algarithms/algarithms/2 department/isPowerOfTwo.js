// function isPowerOfTwo (num) {
//     if (num < 1) {
//         return false
//     }
//     let dividedNumber = num
//     while (dividedNumber !== 1) {
//         if (dividedNumber % 2 !== 0) {
//             return false
//         }
//         dividedNumber = dividedNumber / 2
//     }
//     return true
// }

function isPowerOfTwo (number) {
    if (number < 1) {
        return false
    }

    return (number & (number - 1)) === 0
}


console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(20))

// var magic = 1
// var magic = 2
// console.log(magic)

// console.log(magic === 0 ?? 'sss')