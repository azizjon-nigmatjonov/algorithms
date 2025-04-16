const [a, b, c, ...rest] = [10, 20, 30, 40, 50, 60]

console.log(a, b, c)
console.log(rest)

let user = {
  name: "John",
  age: 30,
};
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }

  console.log(clone)


  let user2 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
let clone2 = Object.assign({}, user2);
  
console.log(clone2) // true, same object