"strict"

function getPerputation (options, length) {
    const permutation = []
    if (length == 1) {
        return options.map(option => [option])
    }

    const partialPermutations = getPerputation(options, length - 1)

    for (const option of options) {
        for (const existingPermutation of partialPermutations) {
            permutation.push([option].concat(existingPermutation))
        }
    }
    
    return permutation
}
const digits = [1,2,3,4,5,6,7,8,9,0]
const resultLength = 4

console.log(getPerputation(digits, resultLength));