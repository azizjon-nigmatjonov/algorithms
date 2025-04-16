
const obj = JSON.parse('{"result":true, "count":42}');

console.log(JSON.parse('{"result":true, "count":42}'));
// expected output: 42

console.log(obj.result);
// expected output: true

console.log(JSON.stringify({ x: 5, y: 6 }));