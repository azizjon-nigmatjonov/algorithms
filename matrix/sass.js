// @mixin list-style {
//     margin: 0;
//     padding: 0
// }

// ul {
//     @include list-style;
//     padding-right: 10px;
// }

// @use 'mixins.sass' // for mixins, functions and variables
// @import '_style.sass'


// FUNCSTIONS
//   @function pow($base, $exponent) {
//     $result: 1;
//     @for $_ from 1 through $exponent {
//       $result: $result * $base;
//     }
//     @return $result;
//   }
  
//   .sidebar {
//     float: left;
//     margin-left: pow(4, 3) * 1px;
//   }