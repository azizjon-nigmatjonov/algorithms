// widthout reputations

function getPermutations (options) {
    const permutation = []

    if (options.length === 1) {
        return [options]
    }
``
    const partuialPermutations = getPermutations(options.slice(1))
    const firstOption = options[0]

    for (let i = 0; i < partuialPermutations.length; i++) {
        const partuialPermutation = partuialPermutations[i]

        for (let j = 0; j <= partuialPermutation.length; j++) {
            const partuialPermutationFront = partuialPermutation.slice(0, j)
            const partuialPermutationAfter = partuialPermutation.slice(j)

            permutation.push(partuialPermutationFront.concat([firstOption], partuialPermutationAfter))
        }
    }

    return permutation
}

const todosListItms = [
    'walk the dog',
    'clean the house',
    'do homework',
    'order food'
]

console.log(getPermutations(todosListItms))