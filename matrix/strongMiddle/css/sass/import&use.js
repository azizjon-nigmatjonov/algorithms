// 3. @import
// in Sass, the @import directive is used to include the contents of one Sass file in another Sass file. This allows you to split your stylesheets into smaller files that are easier to manage and organize.

// Here's an example of how to use @import to include one Sass file in another:
// main.scss
// @import "variables";

// body {
//   font-family: $font-family;
//   font-size: $font-size;
// }

// It's important to note that the @import directive should be used sparingly (less), as it can increase the number of HTTP requests made 
// by your website. Instead, it's generally a good idea to use a tool like Webpack or Gulp to compile and concatenate your Sass files 
// into a single CSS file.

// 4. @use
// The @use directive in Sass is a newer and more powerful way to include the contents of one Sass file in another. It was introduced in 
// Sass 3.9 as a replacement for the older @import directive, which had some limitations and drawbacks.

// The @use directive provides better scoping and allows you to selectively import only the pieces of a module that you need. 
// Here's an example of how to use @use:
// variables.scss
// $font-family: 'Open Sans', sans-serif;
// $font-size: 16px;

// // main.scss
// @use 'variables' as vars;

// body {
//   font-family: vars.$font-family;
//   font-size: vars.$font-size;
// }

// You can also use the @use directive to selectively import only the pieces of a module that you need:
// colors.scss
// $bg-color: #f1f1f1;
// $fg-color: #333333;

// // main.scss
// @use 'colors' as *;

// body {
//   background-color: $bg-color;
// }

// In this example, the main.scss file uses the @use directive to import only the variables defined in colors.scss. 
// The as * syntax tells Sass to import all the variables from the module and make them available without an alias. 
// The $bg-color variable defined in colors.scss can then be used in main.scss without the need for a prefix.

// The @use directive also provides better scoping than the @import directive, as it creates a new namespace for the imported module. 
// This can help prevent naming conflicts and make your code more maintainable.