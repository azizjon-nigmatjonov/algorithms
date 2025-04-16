const map = new Map();
map.set(1, 2);
map.set(2, 1);
map.set(3, "value");
map.delete(2);
// map.clear();
console.log(map.get(1));
console.log(map.has(1));
console.log(map);

const arrayMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
for (let value of arrayMap.keys()) {
  console.log(value);
}

arrayMap.forEach((value, key, map) => {
  console.log("2", map);
});

console.log(arrayMap);
