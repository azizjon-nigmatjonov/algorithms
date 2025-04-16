

// const nestedArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

// // nested for loop
// for (let i = 0; i < nestedArray.length; i++) {
//     console.log(i); // index of 3 inner arrays: 0 , 1 , 2 

//     for (let j = 0; j < nestedArray[i].length; j++) {
//         console.log(nestedArray[i][j]); 
//         // values of all three inner arrays: 1, 2, 3, 4, 5, 6, 7, 8, 9
//     }
// }



// const Cars = [ ["Spark", "Gentra", "Cobalt", "Lasetti"], ["BMW", "Mersedes", "Range Rower", "Lexus"], ["BYD", "Tesla", "Zeekr"] ]

// console.log(Cars[0][2]); // Cobalt
// console.log(Cars[1][1]); // BMW
// console.log(Cars[2][1]); // Tesla

// const NewArray = []
// for (let i = 0; i < Cars.length; i++) {
//     for (let j = 0; j < Cars[i].length; j++) {
//         const currentCar = Cars[i][j]
//         NewArray.push(currentCar)
//     }
// }
// console.log(NewArray);



// const nestedArray = [ [ [], [] ], [ [], [] ], [ [], [] ] ]
// 1 A
// 2 B
// 3 C



// var myJob = "Programmer"

// function greet () {
//     var myJob = "Teacher"
//     console.log(myJob);
// }

// if (true) {
//     let myName = "Muhammad"
//     var myJob = "Programmer" // opens global variable
// }
// greet()
// console.log(myName);
// console.log(myJob);

// const sameArray = [1,1,2,4,5,5,5,6,7,8, 5, 7]
// let obj = {}
// let result = []
// for (let i = 0; i < sameArray.length; i++) {
//     obj[sameArray[i]] = sameArray[i]
// }

// console.log(Object.values(obj));


// const unsortedArr = [64, 34, 25, 12, 22, 11, 90];
// let obj = {}
// for (let i = 0; i < unsortedArr.length; i++) {
//    for (let j = 0; j < unsortedArr.length - i - 1; j++) {
//     if (unsortedArr[j] > unsortedArr[j + 1]) {
//         const current = unsortedArr[j]
//         unsortedArr[j] = unsortedArr[j + 1]
//         unsortedArr[j + 1] = current
//     }
//    }
// }

// console.log(unsortedArr);


// const nums = [1,1,2,3,4,4,5]
// const result = []
// for (let i = 0; i < nums.length; i++) {
//     let insertedIndex = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== nums[i + 1]) {
//         result[insertedIndex] = nums[i]
//         insertedIndex++;
//       }
//     }
// }

// console.log(nums);