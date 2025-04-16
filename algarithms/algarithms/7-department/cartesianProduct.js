function setArrays (arr1, arr2) {
    const array = []

    for (let el1 of arr1) {
        if (!Array.isArray(el1)) {
            el1 = [el1]
        }
        for (let el2 of arr2) {
            array.push([...el1, el2])
        }
    }

    return array
}

function cartisan(...sets) {
    let tempProduct = sets[0]

    for (let i = 1; i < sets.length; i++) {
        tempProduct = setArrays(tempProduct, sets[i])
    }

    return tempProduct
}

const colors = ['ivory', 'black']
const sizes = ['m','l','xl','2xl']
const styles = ['round neck', 'v neck']
console.log(cartisan(colors,sizes,styles))