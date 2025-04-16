function createPhoneNumber(numbers){
    let res = ''
    arr = numbers.map(String)
    res += `(${arr[0]+arr[1]+arr[2]}) `
    res += `${arr[3] + arr[4] + arr[5]}-`
    res += arr[6] + arr[7] + arr[8] + arr[9]
    return res
  }
  
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])