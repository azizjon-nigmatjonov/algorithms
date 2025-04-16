

// const mySymbol = Symbol("SymbolName")
// const mySecondSymbol = Symbol("SymbolName")
// console.log(mySymbol === mySecondSymbol); // false


// const obj = {}
// const mySymbol = Symbol('myPrivateProperty');
// obj[mySymbol] = 'secret value';

// console.log('obj', obj);


// const obj = {};
// const mySymbol2 = Symbol('myPrivateProperty');
// obj[mySymbol2] = 'secret value';

// console.log(obj[mySymbol2]); // 'secret value'

// for (let prop in obj) {
//   console.log(prop); // nothing is logged
// }

// console.log(Object.keys(obj)); // []



// BigInt()

// const a = 12345678901234567890n;
// const b = 123;
// console.log(a + b); // TypeError: Cannot mix BigInt and other types, use explicit conversions



// const a = 12345678901234567890n;
// const b = 123;

// console.log(a + BigInt(b)); // 12345678901234568013n
// // n suffix to a numeric literal tells the interpreter to treat it as a BigInt value, rather than a Number value.


// console.log(parseInt('3.1')) // 3
// console.log(parseFloat('3.1')); // 3.1





// console.log(parseInt('Muhammadaziz')); // NaN
// console.log(parseInt('32dsa')); // 32
// console.log(parseFloat('32.4abs')); // 32.3


// parseInt('123')      // returns 123
// parseInt('12.34')    // returns 12
// console.log(parseInt(undefined) );    // returns 255 (base 16)
// parseInt('11', 2)    // returns 3 (binary)




console.log(0 / 0); // NaN
console.log('a' * 'b'); // NaN

