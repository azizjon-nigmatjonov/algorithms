

// const log = console.log
// const obj = {
//     name: 'Sodiq',
//     age: 21,
//     univer: 'TDIU'
// }

// if ('univer' in obj) { // true
//     obj.merried = false
// }

// log(obj); // { name: 'Sodiq', age: 21, univer: 'TDIU', merried: false }


// const str = "My namme"
// console.log(str.replace(/m/g, 'a'));
// console.log(str.endsWith('e', 7));

// const str2 = 'Hello, World!';
// const newStr = str2.replace(/o/g, 'X');
// console.log(newStr); // Output: HellX, WXXrld!

// const str = 'Hello, World!';
// const index = str.indexOf('o');
// console.log(str.lastIndexOf('o'));
// console.log(index); // 

// console.log(str.startsWith('e', 1));
// console.log(str.endsWith('o', 5));


// const arr = [4,3,1,2]

// const newArr = arr.map((i) => {
//     i += 1

//     return i
// })

// console.log(arr);
// console.log(newArr);

const globalVariable = 'Hello, world!';

function getGlobalVariable() {
  return this.globalVariable;
}

console.log(getGlobalVariable(), '1'); // Output: Hello, world!