const obj1 = {
  name: "aley",
  age: 20,
};

const obj2 = Object.assign({}, obj1);
obj2.name = "sarah";

const obj3 = {};
for (let key in obj1) {
  obj3[key] = obj1[key];
}
obj3.name = "john";

console.log(obj1, obj2, obj3)

// OBJECTS WITH METHODS
obj1.sayHi = function () {
  return "object method";
};

user = {
  sayHi() {
    return "object method copied";
  },
};

console.log(user.sayHi())
