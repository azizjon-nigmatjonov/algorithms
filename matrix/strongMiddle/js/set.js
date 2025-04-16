let setA = new Set([1, 2, 3]);
let setB = new Set([2, 3, 4]);
let union = new Set([...setA, ...setB]);
let intersection = new Set([...setA].filter((x) => setB.has(x)));
let difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log(union); // Output: Set {1, 2, 3, 4}
console.log(intersection); // Output: Set {2, 3}
console.log(difference); // Output: Set {1}

// Storing unique objects:
let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };
let obj3 = { name: "Alice" };
let mySet = new Set([obj1, obj2, obj3]);
console.log(mySet.size); // Output: 2

// Checking if a value exists
let mySet2 = new Set([1, 2, 3]);
console.log(mySet2.has(2)); // Output: true
console.log(mySet2.has(4)); // Output: false

// Removing duplicates from an array
let arr = [1, 2, 2, 3, 3, 3];
let unique = [...new Set(arr)];
console.log(unique); // Output: [1, 2, 3]

function uniqueFn(arr) {
  /* your code */
  return [...new Set(arr)];
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
console.log(uniqueFn(values));

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join();
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let clearedArray = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
];

console.log("clean", aclean(clearedArray));

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(nums[i], i);
  }
}
console.log("twoSum", twoSum([2, 7, 7, 8], 14));
