// 1. function
// In Sass, a function is a block of code that takes one or more input values, performs some operation on those values, 
// and returns a single output value. Functions in Sass can be used to perform calculations, manipulate strings, and create reusable pieces of code.

// Here's an example of a simple Sass function that calculates the total width of an element based on its width and padding:

// @function total-width($width, $padding) {
//     @return $width + ($padding * 2);
//   }
  
//   .container {
//     width: 300px;
//     padding: 20px;
//     total-width: total-width(300px, 20px);
//   }

// Sass functions can also be used to manipulate strings, perform conditional logic, and create reusable pieces of code. 
// They are a powerful tool for creating more modular and maintainable Sass code.

// Here some examples of using functions

// 1. Perform calculations: 

// $base-font-size: 16px;

// @function rem($pixels) {
//   @return $pixels / $base-font-size * 1rem;
// }

// h1 {
//   font-size: rem(32px); // Outputs 2rem
//   line-height: calc(rem(40px) / rem(32px)); // Outputs 1.25
// }

// 2. Manipulate strings: 

// $my-string: "Hello, world!";

// .my-element::before {
//   content: str-slice($my-string, 1, 5); // Outputs "Hello"
// }


// 3. Create reusable code:

// @function gradient-background($start-color, $end-color) {
//     @return linear-gradient(to bottom, $start-color, $end-color);
//  }
  
//   .my-element {
//     background: gradient-background(#f00, #00f);
//   }
  
//   .my-other-element {
//     background: gradient-background(#00f, #0f0);
//   }