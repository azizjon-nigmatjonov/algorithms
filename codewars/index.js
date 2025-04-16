function cleanArray (a, b) {
    for (let el1 = 0; el1 < a.length; el1++) {
        return el1
    }
}

// console.log(cleanArray([1,2,2,4], [2]))


function countStrChar (string) {
    const count = {}

    string.split('').forEach(char => {
        if (count[char] = count[char]) {
            count[char] = count[char] + 1 
        } else {
            count[char] = 1
        }
    })

    return count
}

console.log(countStrChar('abaabbbbc'))