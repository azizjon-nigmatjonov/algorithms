function GetCountBalloon (str) {
  let obj = { b: 0, a: 0, l: 0, n: 0 }

  for (let value of str) {
      if (value in obj) {
          obj[value] += 1
      }
  }
  
  return Math.min(...Object.values(obj))
} 

console.log(GetCountBalloon("nlaebolko"));


