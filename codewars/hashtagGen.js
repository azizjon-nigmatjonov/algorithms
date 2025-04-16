function hashtegGen (str) {
    if (!str.trim().length || str.trim() == '#') return false
    const array = str.trim().split(' ')
    const result = []
    for (let i of array) {
        result.push(i.charAt(0).toUpperCase() + i.slice(1))
    }
    const finalRes = result.join('').toString()
    if (finalRes.length >= 140) return false
    return '#'+finalRes
}

console.log(hashtegGen('Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));

// str.charAt(0).toUpperCase()