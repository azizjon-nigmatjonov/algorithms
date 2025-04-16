function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
let user = new User("Jack");
  
console.log(user.name); // Jack
console.log(user.isAdmin); // false

function UserName (name, age) {
    this.name = name;
    this.age = age;
}

console.log(new UserName('a', 12))