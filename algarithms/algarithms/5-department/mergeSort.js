function sort(arr) {
    if (arr.length < 2) {
        return arr
    }

    if (arr.length == 2) {
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr
    }

    const middle = Math.floor(arr.length / 2)
    const leftArray = arr.slice(0, middle)
    const rightArray = arr.slice(middle)

    const leftSortedArr = sort(leftArray)
    const rightSortedArr = sort(rightArray)

    const mergedArr = []
    let leftArrIndex = 0
    let rightArrIndex = 0
    while (leftArrIndex < leftSortedArr.length || rightArrIndex < rightSortedArr.length) {
        if (leftArrIndex >= leftArray.length || leftSortedArr[leftArrIndex] > rightSortedArr[rightArrIndex]) {
            mergedArr.push(rightSortedArr[rightArrIndex])
            rightArrIndex++
        } else {
            mergedArr.push(leftSortedArr[leftArrIndex])
            leftArrIndex++
        }
    }

    return mergedArr
}

const sortedArray = sort([0, 1, -1, 2, 4, 3, 6, -2]);
console.log(sortedArray)
