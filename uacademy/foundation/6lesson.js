// const array = [9, 1, 2, 3, 4, 5, 6, 7, 11, 13]


// let count = 0
// for (let i = 0; i < array.length; i++) {
//     let isPrime = true

//     if (array[i] < 2) isPrime = false

//     for (let j = 2; j < array[i]; j++) {
//         if (array[i] % j === 0) {
//             isPrime = false
//         }
//     }

//     if (isPrime) count++
// }

// console.log(count);


// const unsortedArr = [4,3,5,2,1]
// let lenght = unsortedArr.length * unsortedArr.length
// let index = 0
// while (lenght < 0) {
//     if (unsortedArr[index] > unsortedArr[index + 1]) {
//         index = index + 1
//         unsortedArr[index]
//     } else {
//         index = index - 1
//     }
//     lenght = lenght - 1
// }
// // for (let i = 0; i < unsortedArr.length; i++) {

// //     for (let j = 0; j < unsortedArr.length - i - 1; j++) {
// //         if (unsortedArr[j] > unsortedArr[j + 1]) {
// //             console.log('inner');
// //             const temp = unsortedArr[j]
// //             unsortedArr[j] = unsortedArr[j + 1]
// //             unsortedArr[j + 1] = temp
// //         }
// //     }
// // }

// console.log(index);

// const array = [1,,3,4,5,1,1,1,4,4,5]
// const unique0bj = {}
// for (let i = 0; i < array.length; i++) {
//     const currentEl = array [i]
//     unique0bj [currentEl] = currentEl
// }
// console.log(Object.values(unique0bj));



// let counter = 0
// let len = 0
// do {
//     counter++
//     len--
//     console.log(counter); // output: 1
// } while (len > 0)


// let len = 0
// let counter = 0
// while (len > 0) {
//     counter++
//     len--
//     console.log(counter); // output: none
// }




// #1
function calculate () {
    console.log(5 + 2); // 7
}

calculate()

// #2
function calculate2 () {
    let a = 45
    two()
    function two () {
        console.log(a);
    }
    return 5 + 2
}

console.log(calculate2()); // 7