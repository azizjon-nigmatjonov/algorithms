
obj = {"name": "John", "age": 25, "city": "New York"}

array = ['born_place', 'university', 'car']
array2 = ['Boston', 'MIT', true]

for (let index in array) {
    if (!(array[index] in obj)) {
        obj[array[index]] = array[index]
    }
}

// console.log(obj);



car = {
    "make": "Toyota",
    "model": "Camry",
    "year": 2021,
    "color": "Silver",
    "mileage": 5000
}

list = ['make', 'model', 'year', 'color', 'mileage']
list2 = []

for (let value of list) {
    list2.push(car[value])
}
// console.log(list2);


const string = "Hello world"

console.log(string.indexOf('w')); // 6