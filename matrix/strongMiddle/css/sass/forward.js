// The @forward rule in Sass must be used at the beginning of a Sass file, before any other CSS or Sass rules. 
// This is because the @forward rule is used to re-export Sass members (such as variables, mixins, or functions) from one module to another, 
// and these members need to be available to any other Sass modules that import them.

// If you receive the error message "error @forward rules must be written before any other rules" when using the @forward rule in Sass, 
// it means that you have written the @forward rule after other CSS or Sass rules in your file. To fix this error, 
// you need to move the @forward rule to the beginning of your file, before any other rules.

// Here's an example of how to use the @forward rule correctly in Sass

// _module.scss

// $color: #f00;

// @mixin my-mixin {
//   color: $color;
// }

// @function my-function($value) {
//   @return $value * 2;
// }

// // main.scss

// @forward "module" with (
//   $color,
//   my-mixin,
//   my-function
// );

// .my-element {
//   @include my-mixin;
//   background-color: $color;
//   font-size: my-function(16);
// }
// 

// In this example, the @forward rule is used at the beginning of the main.scss file, before any other Sass or CSS rules. 
// This allows the members from the _module.scss file to be re-exported and used in the main.scss file. If you follow this syntax, 
// you should be able to use the @forward rule in Sass without encountering any errors.