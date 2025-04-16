const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic" },
    { name: "Zeros", value: 37 },
  ];
  
  const sortedData = items.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
  const sortedDataNumber = items.sort((a, b) => {
    return a.value - b.value
  });
//   console.log(sortedDataNumber)

const mySet = new Set()

mySet.add('a')
mySet.add('b')
console.log(mySet.has('a'))
mySet.delete('a')
console.log(mySet)
mySet.clear()
console.log(mySet)

mySet.add({
    a: 1,
    b: 2,
    c: 3
})

Object.values(mySet).forEach(el => {
    if (el.a > 2) {
        mySet.delete(el)
    }
    console.log(el)
})

console.log(mySet)


// const obj = {
//     name: 'joe',
//     surname: 'doe'
// }

// Object.values(obj).forEach(element => {
//     console.log(element)
// });