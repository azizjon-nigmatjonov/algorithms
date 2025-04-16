// In JavaScript, an array is a data structure that allows you to store multiple values in a single variable. Arrays can be created using square brackets [] and can 
// contain any type of data, including other arrays.

let array = [1,2,3,4]
array.splice(3, 0, 5)
console.log(array);
console.log('fill', array.fill(1));
console.log(array);
console.log('every', array.every((i) => i > 5));
console.log('find index', array.findIndex((i) => i > 4));
console.log('reduce', array.reduce((a, b) => a + b, 0));

// [3, 4, 5, 6].at(1); // 4
// [3, 4, 5, 6].pop(); // [3, 4, 5]
// [3, 4, 5, 6].push(7); // [3, 4, 5, 6, 7]
// [3, 4, 5, 6].fill(1); // [1, 1, 1, 1]
// [3, 4, 5, 6].join("-"); // '3-4-5-6'
// [3, 4, 5, 6].shift(); // [4, 5, 6]
// [3, 4, 5, 6].reverse(); // [6, 5, 4, 3]
// [3, 4, 5, 6].unshift (1); // [1, 3, 4, 5, 6]
// [3, 4, 5, 6].includes(5); // true
// [3, 4, 5, 6].map((num) => num + 6); 11 [9, 10, 11, 12]
// [3, 4, 5, 6].find( (num) =› num > 4); // 5
// [3, 4, 5, 6].filter ((num) => num > 4); // [5, 6]
// [3, 4, 5, 6]. every ((num) => num > 5); // false
// [3, 4, 5, 6]. findIndex ((num) => num > 4); // 2
// [3, 4, 5, 6]. reduce( (acc, num) => acc + num, 0); // 18

