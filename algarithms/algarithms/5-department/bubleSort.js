function sort(arr) {
    const resultArray = [...arr]

    for (let outer = 0; outer < resultArray.length; outer++) {
        let outerEl = resultArray[outer]

        for (let inner = outer + 1; inner < resultArray.length; inner++) {
            let innerEl = resultArray[inner]

            if (outerEl > innerEl) {
                resultArray[outer] = innerEl;
                resultArray[inner] = outerEl;

                outerEl = resultArray[outer]
                innerEl = resultArray[inner]
            }
        }
    }    

    return resultArray
}

const sortedArray = sort([0, 2, 1, -10, 100, 55, -2]);
console.log(sortedArray);



// const arr = [1,2]
// const arr1 = [2,7]

// function twoSum (l1, l2) {
//     for (let i = 0; i < l1.length; i++) {
//         for (let j = 0; j < l2.length; j++) {
//             if (i < l1.length) {
//                 twoSum(l1, l2)
//             } else {
//                 return [l1[i] + l2[j]]
//             }
//         }
//     }
// }

// console.log(twoSum(arr, arr1))