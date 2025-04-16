function setArrays (arr1, arr2) {
    const array = []

    for (let el1 of arr1) {
        for (let el2 of arr2) {
            array.push([el1, el2])
        }
    }

    return array
}
const colors = ['ivory', 'black']
const sizes = ['m','l','xl','2xl']
console.log(setArrays(colors, sizes))