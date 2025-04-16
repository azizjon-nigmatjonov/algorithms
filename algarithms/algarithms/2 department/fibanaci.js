// recurcive function
function fib(n) {
    if (n == 0 || n == 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}

// console.log(fib(5));

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

fibanac(5, {})
console.log(counter);
counter = 0

fibanac(6, {})
console.log(counter);
counter = 0


fibanac(20, {})
console.log(counter);
counter = 0


fibanac(30, {})
console.log(counter);
counter = 0