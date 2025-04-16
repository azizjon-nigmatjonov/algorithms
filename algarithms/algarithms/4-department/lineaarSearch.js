function findIndexOfNumber (arr, element, comperatorFn) {
    let index = 0;
    for (const item of arr) {
        if (typeof element === 'object' && element !== null && comperatorFn(item, element)) {
            return index
        }
        if (item === element) {
            return index;
        }
        index++
    }
}

const arr = [1,5,10,20,40,50,33,55]
const objects = [{name: 'alex', age: 32}, {name: 'diana', age: 41}]

console.log(findIndexOfNumber(objects, {name: 'diana', age: 41}, function(el, it) {
    return el.name === it.name && el.age == it.age
}))


console.log(sorted)