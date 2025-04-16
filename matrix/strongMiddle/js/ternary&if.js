// in js there are ? and if statements to check conditions
// the main differences between if and ternary are
// first one is that ternary returns the value, while if statement exicutes a block of code based on a condition.
// second one is the syntax of usege in this to statements

// Here some examples of ternary and if statements in js

const x = 10;
const y = x > 5 ? 'x is greater than 5' : 'x is less than or equal to 5';
console.log(y); // 'x is greater than 5'


const b = 10;
if (b > 5) {
  console.log('b is greater than 5');
} else {
  console.log('b is less than or equal to 5');
}