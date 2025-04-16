function findElement(sortedArr, element) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    console.log("calculating");
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (element == sortedArr[middleIndex]) {
      return sortedArr[middleIndex];
    }

    if (sortedArr[middleIndex] < element) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
}

const arr = [1, 5, 10, 20, 40, 50, 55];
console.log(findElement(arr, 40))

// let str = "abc";
// function solution(str, ending) {
//   return str.substring(str.length - ending.length) === ending
// }

// console.log(solution("absaassba", "a"));
