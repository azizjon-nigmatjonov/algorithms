

variables = 9;
console.log(variables);
// this willn't throw an error

function getVariableFn() {
  "use strict";
  string = "aaaa";
  console.log(string);
  // this will throw an error, becasue in modern
}
getVariableFn();

// use strict must be at the top of file, if we use "use strict" not at top, js file ignores "use strict"


