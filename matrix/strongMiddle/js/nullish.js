// In JavaScript, the nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side 
// operand is null or undefined, and otherwise returns its left-hand side operand.

// Here's an example of how to use the nullish coalescing operator in JavaScript:

const foo = null ?? 'default value';
console.log(foo); // 'default value'

const bar = undefined ?? 'default value';
console.log(bar); // 'default value'

const baz = 0 ?? 'default value';
console.log(baz); // 0

const qux = '' ?? 'default value';
console.log(qux); // ''

// In this example, we're using the nullish coalescing operator to set default values for variables. When the left-hand side 
// operand is null or undefined, the operator returns the right-hand side operand, which is the default value.

// It's important to note that the nullish coalescing operator only checks for null or undefined values, not other falsy values like 0 
// or empty strings. If you want to check for all falsy values, you can use the OR (||) operator instead.