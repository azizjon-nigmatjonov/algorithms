// In JavaScript, both the while loop and the for loop are used for repetitive tasks, but they have some differences in terms of syntax and usage.

// The while loop is a control flow statement that executes a block of code while a specified condition is true. Its syntax is:

// while (condition) {
//     // code to execute while condition is true
//   }

// In this syntax, condition is the condition to check, and the code inside the curly braces is the code to execute while the condition is true.
// The loop continues to execute as long as the condition is true.

// Here's an example of how to use the while loop in JavaScript:

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// In this example, we're using the while loop to print the numbers 0 to 4 to the console.

// On the other hand, the for loop is a control flow statement that repeats a block of code a specified number of times. Its syntax is:

for (initialization; condition; expression) {
  // code to execute for each iteration
}

// In this syntax, initialization is an expression that initializes the loop variable, condition is the condition to check for each iteration,
// and expression is an expression that is evaluated at the end of each iteration. The code inside the curly braces is the code to execute
// for each iteration.

// Here's an example of how to use the for loop in JavaScript:

// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }

// In this example, we're using the for loop to print the numbers 0 to 4 to the console.

// In summary, the while loop is used when you don't know how many times you need to repeat a task, while the for loop is used when you
// know the number of times you need to repeat a task. The choice between them depends on the specific use case and personal preference.

// for loop in and of, foor loop in is used to loop over object while of is used to loop over array
// here example of usage both in and of
const person = {
  name: "John",
  age: 30,
  gender: "male",
};

for (let property in person) {
  console.log(`${property}: ${person[property]}`);
}

const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}
