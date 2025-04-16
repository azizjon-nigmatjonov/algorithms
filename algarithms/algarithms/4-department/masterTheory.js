function findElement(sortedArr, element, offset) {
    let startIndex = 0;
    let endIndex = sortedArr.length - 1;
  
    while (startIndex <= endIndex) {
      const middleIndex = Math.floor((endIndex - startIndex) / 2);
  
      if (element == sortedArr[middleIndex]) {
        return middleIndex + offset;
      }
  
      if (sortedArr[middleIndex] < element) {
        startIndex = middleIndex + 1;
        offset = offset + middleIndex + 1;
      } else {
        endIndex = middleIndex - 1;
      }
      return findElement(
        sortedArr.slice(startIndex, endIndex + 1),
        element,
        offset
      );
    }
  }
  
  const arr = [1, 5, 10, 20, 40, 50, 55];
  console.log(findElement(arr, 40, 0));
  