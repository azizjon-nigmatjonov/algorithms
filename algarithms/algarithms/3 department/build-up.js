let counter = 0
function fibanac(n, memo) {
    counter = counter + 1
    let result;
    if (memo[n]) {
        return memo[n]
    }
    if (n === 0 || n === 1) {
        return 1
    } else {
        result = fibanac(n - 1, memo) + fibanac(n - 2, memo)
    }
    memo[n] = result
    return result
}

const memo = {}
fibanac(5, memo)
console.log(counter);
console.log(memo);
counter = 0

fibanac(6, memo)
console.log(counter);
counter = 0


fibanac(20, memo)
console.log(counter);
counter = 0


fibanac(30, memo)
console.log(counter);
counter = 0