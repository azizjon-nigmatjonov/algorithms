// In Sass, the @extend directive is used to create inheritance relationships between CSS selectors. 
// It allows you to reuse the styles from one selector in another selector, while also adding or overriding some of the styles.

// Here's an example of how to use the @extend directive in Sass:

//  .btn {
//     padding: 10px 20px;
//     background-color: #007bff;
//     color: #fff;
//     border-radius: 5px;
//   }
  
//   .btn-primary {
//     @extend .btn;
//     background-color: #dc3545;
//   }

// In this example, we have defined a .btn selector with some styles, and then created a .btn-primary selector that extends the styles from 
// the .btn selector using the @extend directive. The .btn-primary selector also overrides the background-color property to create a new style.

// When the Sass is compiled into CSS, the .btn-primary selector will have all of the styles from the .btn selector, 
// as well as the new background-color style. This allows you to reuse styles and create consistent design patterns throughout your code.

// It's important to note that the @extend directive can generate complex CSS output and may cause specificity issues in your code. 
// You should use it sparingly and avoid extending complex or deeply nested selectors. In general, 
// it's better to use mixins or functions to reuse styles in Sass.